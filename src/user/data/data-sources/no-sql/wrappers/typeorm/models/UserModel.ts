import { User } from "@/user/domain/entities/user";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class UserModel implements User {

    @PrimaryColumn()
    readonly cpf: string;

    @Column()
    name: string;

    @Column({ 
        type:"simple-array", 
        array:true 
    })
    skills: string[];
    
}

export { UserModel };