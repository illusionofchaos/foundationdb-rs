initSidebarItems({"fn":[["boot","Initialize the FoundationDB Client API, this can only be called once per process."],["default_config_path","Returns the default Fdb cluster configuration file path"]],"mod":[["api","Configuration of foundationDB API and Network"],["directory","Directory provides a tool for managing related subspaces."],["future","Most functions in the FoundationDB API are asynchronous, meaning that they may return to the caller before actually delivering their Fdbresult."],["options","Generated configuration types for use with the various `set_option` functions"],["tuple","Implementation of the official tuple layer typecodes"]],"struct":[["Database","Represents a FoundationDB database"],["FdbError","The Standard Error type of FoundationDB"],["KeySelector","A `KeySelector` identifies a particular key in the database."],["RangeOption","`RangeOption` represents a query parameters for range scan query."],["TransactOption","A set of options that controls the behavior of `Database::transact`."],["Transaction","In FoundationDB, a transaction is a mutable snapshot of a database."],["TransactionCancelled","A cancelled transaction"],["TransactionCommitError","A failed to commit transaction."],["TransactionCommitted","A committed transaction."]],"trait":[["DatabaseTransact",""],["TransactError","A trait that must be implemented to use `Database::transact` this application error types."]],"type":[["FdbResult","Alias for `Result<..., FdbError>`"],["TransactionResult","The result of `Transaction::Commit`"]]});