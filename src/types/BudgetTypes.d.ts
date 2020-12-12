declare namespace BudgetTypes {
  interface Account {
    Active: boolean;
    AccountName: string;
    AccountType: 'Checking' | 'Savings' | 'Investment' | 'Debt';
    Institution: string;
    LiquidityType: 'Liquid' | 'Non-Liquid';
    TaxAdvantaged: boolean;
    TaxAdvantageType: 'Traditional' | 'Roth' | 'HSA' | null;
    CurrentValue: number;
    History: Record[];
  }

  interface Record {
    Date: Date;
    Value: number;
    Note: string;
  }

  interface Institution {
    Name: string;
    Id?: string;
    Avatar: string;
    Url: string;
    Active: boolean;
    Type: string;
  }

  interface Income {
    name: string;
    source: string;
    owner: string;
    frequency: 'Weekly' | 'Bi-Weekly' | 'Monthly' | 'Annually';
    amount: number;
  }

  interface Expense {
    name: string;
    source: string;
    owner: string;
    frequency: 'Weekly' | 'Bi-Weekly' | 'Monthly' | 'Annually';
    amount: number;
  }

  interface FireGoal {
    amount: number;
    targetDate: Date;
  }

  interface InstitutionDetailDocument extends Institution {
    Accounts: Account[];
  }
}
