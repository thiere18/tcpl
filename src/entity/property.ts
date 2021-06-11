import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  lastname: string;
    
  @Column({ nullable : true })
  description: string;
    
  @Column()
  surface: number;

  @Column()
  rooms: number
    
  @Column()
  bedrooms: number;
    
  @Column()
  floor: number;
    
  @Column()
  price: number;
    
  @Column()
  city: string;
    
  @Column()
  address: string;
    
  @Column()
  postal_code: string;
    
  @Column({default: false})
  sold: boolean;
    
  @CreateDateColumn()
  createdAt: Date
    
  @UpdateDateColumn()
  updatedAt: Date



  
}