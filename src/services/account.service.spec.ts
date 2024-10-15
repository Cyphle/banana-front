
import { responseToAccount, responseToAccountSummaries } from "./account.service";

describe('Account service', () => {
  test('should map response to account summaries', () => {
    const response = [{
      summary: {
        id: 1,
        name: 'My Account',
        type: 'PERSONAL',
        startingBalance: 100.0,
        currentBalance: 100.0,
        projectedBalance: 100.0
      },
      budgets: [],
      transactions: []
    }];

    const accountSummaries = responseToAccountSummaries(response);

    expect(accountSummaries).toEqual([{
      id: 1,
      name: 'My Account',
      type: 'PERSONAL',
      startingBalance: 100.0,
      currentBalance: 100.0,
      projectedBalance: 100.0
    }]);
  });

  it('should map response to account', () => {
    const response = {
      summary: {
        id: 1,
        name: 'My Account',
        type: 'PERSONAL',
        startingBalance: 100.0,
        currentBalance: 100.0,
      },
      budgets: [
        {
          id: 1,
          initialAmount: 100.0,
          actualAmount: 100.0,
          name: 'My Budget',
          startDate: '2021-01-01',
          endDate: '2021-01-31',
          frequency: 'WEEKLY'
        }
      ],
      transactions: [
        {
          id: 1,
          executedAt: '2021-01-01',
          appliedAt: '2021-01-01',
          type: 'BUDGET',
          description: 'My Transaction',
          amount: 100.0,
          startDate: '2021-01-01',
          endDate: '2021-01-31',
          budgetId: 1
        },
        {
          id: 2,
          executedAt: '2021-01-02',
          appliedAt: '2021-01-02',
          type: 'EXPENSE',
          description: 'My Transaction',
          amount: 100.0,
          startDate: '2021-01-01',
          endDate: '2021-01-31',
        }
      ]
    };

    const account = responseToAccount(response);

    expect(account).toEqual({
      summary: {
        id: 1,
        name: 'My Account',
        type: 'PERSONAL',
        startingBalance: 100.0,
        currentBalance: 100.0,
      },
      budgets: [
        {
          id: 1,
          initialAmount: 100.0,
          actualAmount: 100.0,
          name: 'My Budget',
          startDate: '2021-01-01',
          endDate: '2021-01-31',
          frequency: 'WEEKLY'
        }
      ],
      transactions: [
        {
          id: 1,
          executedAt: '2021-01-01',
          appliedAt: '2021-01-01',
          type: 'BUDGET',
          description: 'My Transaction',
          amount: 100.0,
          startDate: '2021-01-01',
          endDate: '2021-01-31',
          budgetId: 1
        },
        {
          id: 2,
          executedAt: '2021-01-02',
          appliedAt: '2021-01-02',
          type: 'EXPENSE',
          description: 'My Transaction',
          amount: 100.0,
          startDate: '2021-01-01',
          endDate: '2021-01-31',
        }
      ]
    });
  });
});
