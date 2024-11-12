const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TransactionsModule = buildModule("TransactionsModule", (m) => {
  const token = m.contract("Transactions");

  return { token };
});

module.exports = TransactionsModule;