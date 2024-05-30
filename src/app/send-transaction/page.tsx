'use client';

import { Box } from '@mui/material';
import CustomButton from '../_noPages/components/CustomButton';
import { ApiNetworkProvider } from '@multiversx/sdk-network-providers';
import {
  Transaction,
  INonce,
  Account,
  TransactionPayload,
  Address,
  TransactionVersion,
} from '@multiversx/sdk-core';

import { ConnectionContext } from '../_noPages/contexts/ConnectionProvider';
import { useContext } from 'react';

const Page = () => {
  const { signTransaction } = useContext(ConnectionContext);
  const apiNetworkProvider = new ApiNetworkProvider(
    'https://testnet-api.multiversx.com'
  );

  const sendTransactionHandler = async () => {
    const getNetworkConfig = await apiNetworkProvider.getNetworkConfig();

    const minGasPrice = getNetworkConfig.MinGasPrice;
    const chainId = getNetworkConfig.ChainID;

    const address = new Address(
      'erd1hv3dx3cy0hatfjx9vv4uwfng66tp2hec0tr86fd6g2gnqygh0pksth35y6'
    );

    const account = new Account(address);

    const accountOnNetwork = await apiNetworkProvider.getAccount(
      account.address
    );
    account.update(accountOnNetwork);

    const balance = account.balance.toString();

    const chainID = 'D'; // Identificador de la red, por ejemplo, '1' para Mainnet
    const nonce = 0; // Ajusta este valor según el nonce de la cuenta
    const value = BigInt(1000000000000000000); // Cantidad a transferir
    const gasLimit = 7000000; // Ajusta el límite de gas a lo necesario
    const gasPrice = 1000000000; // Precio del gas
    const sender = new Address(
      'erd1hv3dx3cy0hatfjx9vv4uwfng66tp2hec0tr86fd6g2gnqygh0pksth35y6'
    ); // Dirección de envío
    const receiver = new Address(
      'erd1pdv0h3ddqyzlraek02y5rhmjnwwapjyhqm983kfcdfzmr6axqhdsfg4akx'
    ); // Dirección de recepción
    const payload = new TransactionPayload(''); // Datos adicionales (vacío en este caso)
    const version = new TransactionVersion(1); // Versión de la transacción
    const options = 0; // Opciones especiales si es necesario

    // Crea la transacción con los datos definidos
    const transactionReadyToSign = new Transaction({
      chainID,
      nonce,
      value,
      gasLimit,
      gasPrice,
      sender,
      receiver,
      data: payload,
      version,
      options,
    });

    const transationToSign = new Transaction(transactionReadyToSign);

    console.log(signTransaction);
    const transactionSigned = signTransaction(transationToSign);

    console.log(transactionSigned);
    const txHash = await apiNetworkProvider.sendTransaction(transactionSigned);
    console.log('TX hash:', txHash);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        marginTop: '100px',
        justifyContent: 'center',
      }}
    >
      <CustomButton onClickHandler={sendTransactionHandler}>
        Send transaction
      </CustomButton>
    </Box>
  );
};

export default Page;
