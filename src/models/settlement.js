import { bookshelf } from '../db';

const TABLE_NAME = 'settlements';

/**
 * Settlement model.
 */
class Settlement extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }

  /**
   * Get uuid.
   */
  get uuid() {
    return true;
  }
}

export default Settlement;
