import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tax-record')
export class TaxRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column('jsonb', { name: 'content', nullable: true })
  // content: object;
  @Column({ name: 'content', nullable: true })
  content: string;

  @Column({ name: 'merchant_address', nullable: true })
  merchantAddress: string;

  @Column({ name: 'payer_address', nullable: true })
  payerAddress: string;

  @Column({ name: 'pay_amount', nullable: true })
  payAmount: string;

  @Column({ name: 'pay_token', nullable: true })
  payToken: string;

  @Column({ name: 'transaction_hash', nullable: true })
  transactionHash: string;

  @Column({ name: 'amount_out', nullable: true })
  amountOut: string;

  @Column({ name: 'fee', nullable: true })
  fee: string;

  @Column({ name: 'fee_amount', nullable: true })
  fee_amount: string;

  @Column({ name: 'deadline', nullable: true })
  deadline: string;

  @Column({ name: 'token_symbol', nullable: true })
  tokenSymbol: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: '  excgange_rate', nullable: true })
  excgangeRate: string;

  @Column({ name: 'create_at', nullable: true })
  createAt: string;

  @Column({ name: 'receive_type', nullable: true })
  receiveType: string;
}
