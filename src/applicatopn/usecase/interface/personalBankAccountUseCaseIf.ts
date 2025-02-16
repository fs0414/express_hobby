import type { PersonalBankAccount } from "@prisma/client";

export interface PersonalBankAccountUseCaseInterface {
    create(
        account_number: string,
        user_id: number
    ): Promise<PersonalBankAccount>

    addPayrollToUser(
        user_id: number,
        amount: number,
        adminUserId: number
    ): Promise<PersonalBankAccount>
}