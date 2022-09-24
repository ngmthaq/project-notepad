import { v4 as uuid } from "uuid";

import {
  DatabaseTable,
  DATABASE_TABLE_COLUMN_NAME,
} from "./tables/database.table";

const initDatabase = () => {
  new DatabaseTable().createTable();

  let db = new DatabaseTable().getVersion() || {
    [DATABASE_TABLE_COLUMN_NAME.version]: 0,
  };

  if (db.version < 1) {
    new DatabaseTable().save({
      [DATABASE_TABLE_COLUMN_NAME.uuid]: uuid(),
      [DATABASE_TABLE_COLUMN_NAME.version]: 1,
      [DATABASE_TABLE_COLUMN_NAME.createdAt]: Date.now(),
    });
  }
};

export default initDatabase;
