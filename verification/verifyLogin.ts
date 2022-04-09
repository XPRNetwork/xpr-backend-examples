const { JsonRpc, Api, JsSignatureProvider, Serialize } = require('@proton/js');
const { Crypto } = require('@peculiar/webcrypto');
const { generateAuthParser } = require('@proton/wrap-constants');
const { recoverPersonalSignature } = require('eth-sig-util');

const rpc = new JsonRpc(['https://proton.greymass.com']);
const api = new Api({
  rpc,
  crypto: new Crypto(),
  recoverPersonalSignature,
  signatureProvider: new JsSignatureProvider([
    'PVT_K1_2uRJiRffJUz4McQMXndqri6UV14uy6gMW8QKMEiLjDpFjEvVH1',
  ]),
});

const mockFrontend = async () => {
  const ACCOUNT_NAME = 'testacc44';
  const ACCOUNT_PERMISSION = 'active';
  const CONTRACT = 'proton.wrap';
  const ACTION = 'generateauth';

  const result = await api.transact(
    {
      actions: [
        {
          account: CONTRACT,
          name: ACTION,
          data: {
            time: new Date().toISOString().slice(0, -1),
            protonAccount: ACCOUNT_NAME,
          },
          authorization: [
            {
              actor: ACCOUNT_NAME,
              permission: ACCOUNT_PERMISSION,
            },
          ],
        },
      ],
    },
    {
      broadcast: false,
      useLastIrreversible: true,
      expireSeconds: 30,
    }
  );

  const resolvedTransaction = {
    ...Serialize.createBaseResolvedTransaction(),
    ...result.transactionHeader,
  };

  return {
    signer: {
      actor: ACCOUNT_NAME,
      permission: ACCOUNT_PERMISSION,
    },
    transaction: resolvedTransaction,
    signatures: result.signatures,
  };
};

const backend = async () => {
  const rawData = await mockFrontend();

  // Can throw error
  const data = generateAuthParser.parse(rawData);

  const isVerified = await api.checkIfKeysMatchTransaction({
    actor: data.signer.actor,
    permission: data.signer.permission,
    transaction: data.transaction,
    signatures: data.signatures,
  });

  // Action of interest
  const action = data.transaction.actions[0].data['trx']
    ? (
        await api.deserializeActions(
          data.transaction.actions[0].data['trx'].actions
        )
      )[0]
    : data.transaction.actions[0];

  console.log('action:', {
    signer: data.signer,
    isVerified: isVerified,
    ...action,
  });
};

backend();