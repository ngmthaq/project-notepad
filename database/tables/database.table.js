import BaseTable from "./base.table";

class DatabaseTable extends BaseTable {
  constructor() {
    super(DATABASE_TABLE_NAME, DATABASE_TABLE_COLUMN_CONFIG);
  }

  // Other sql query
  getVersion() {
    return this.order(DATABASE_TABLE_COLUMN_NAME.id, "desc").limit(1).first();
  }
}

const DATABASE_TABLE_NAME = "database_version";

const DATABASE_TABLE_COLUMN_NAME = {
  id: "id",
  uuid: "uuid",
  version: "version",
  createdAt: "created_at",
  updatedAt: "updated_at",
};

const DATABASE_TABLE_COLUMN_CONFIG = {
  [DATABASE_TABLE_COLUMN_NAME.id]:
    "INT UNSIGNED AUTO_INCREMENT DEFAULT 1 NOT NULL",
  [DATABASE_TABLE_COLUMN_NAME.uuid]: "VARCHAR(255) PRIMARY KEY NOT NULL",
  [DATABASE_TABLE_COLUMN_NAME.version]: "INT UNSIGNED UNIQUE NOT NULL",
  [DATABASE_TABLE_COLUMN_NAME.createdAt]: "BIGINT DEFAULT 0 NOT NULL",
  [DATABASE_TABLE_COLUMN_NAME.updatedAt]: "BIGINT DEFAULT 0 NOT NULL",
};

export { DatabaseTable, DATABASE_TABLE_NAME, DATABASE_TABLE_COLUMN_NAME };
