import { Pool } from "pg";
import pool from "../config/database";
import { Contact } from "../models/contactModel";

export class ContactRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getAllContacts(): Promise<Contact[]> {
    const { rows } = await this.pool.query("SELECT * FROM contactos");
    return rows;
  }

  async addContact(name: string, email: string, age: string, image: string): Promise<Contact> {
    const queryText =
      "INSERT INTO contactos(name, email, age, image) VALUES($1, $2, $3, $4) RETURNING *";
    const { rows } = await this.pool.query(queryText, [name, email, age, image]);
    return rows[0];
  }

  async updateContact(name: string, email: string, age:string, image: string): Promise<Contact> {
    const queryText =
      "UPDATE contactos SET name = $1, email = $2, age = $3, image = $4 WHERE RETURNING *";
    const { rows } = await this.pool.query(queryText, [name, email, age, image]);

    if (rows.length === 0) {
      throw new Error(`Contato com ID não encontrado`);
    }

    return rows[0];
  }

  async deleteContact(id: number): Promise<void> {
    const queryText = "DELETE FROM contactos WHERE id = $1";
    const { rowCount } = await this.pool.query(queryText, [id]);

    if (rowCount === 0) {
      throw new Error(`Contato com ID ${id} não encontrado`);
    }
  }
}
