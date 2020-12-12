import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  options: any;
  constructor() {}

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: (idx) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }

  summaryMetrics = [
    { displayName: 'Net Worth', displayValue: '$645,592' },
    { displayName: 'Liquid Assets', displayValue: '$154,236' },
    { displayName: 'Non-Liquid Assets', displayValue: '$275,487' },
    { displayName: 'Debit', displayValue: '$227,478' },
    { displayName: 'FIRE Percent', displayValue: '13.5%' },
  ];

  bankOfAmericaAccounts = [
    {
      active: true,
      accountName: 'Joint Checking',
      accountType: 'Checking',
      institution: 'Bank of America',
      liquidityType: 'Liquid',
      taxAdvantaged: false,
      taxAdvantageType: null,
      currentValue: 15735.93,
    },
    {
      active: true,
      accountName: 'Joint Savings',
      accountType: 'Savings',
      institution: 'Bank of America',
      liquidityType: 'Liquid',
      taxAdvantaged: false,
      taxAdvantageType: null,
      currentValue: 35566.09,
    },
    {
      active: true,
      accountName: 'HELOC',
      accountType: 'Debt',
      institution: 'Bank of America',
      liquidityType: 'Liquid',
      taxAdvantaged: false,
      taxAdvantageType: null,
      currentValue: -19986.45,
    },
  ];

  vanguardAccounts = [
    {
      active: true,
      accountName: 'Brokerage',
      accountType: 'Investment',
      institution: 'Vanguard',
      liquidityType: 'Liquid',
      taxAdvantaged: false,
      taxAdvantageType: null,
      currentValue: 66857.2,
    },
  ];
  merrillAccounts = [
    {
      active: true,
      accountName: 'Brokerage',
      accountType: 'Investment',
      institution: 'Merrill Edge',
      liquidityType: 'Liquid',
      taxAdvantaged: false,
      taxAdvantageType: null,
      currentValue: 36577.11,
    },
  ];
  etradeAccounts = [
    {
      active: true,
      accountName: "Alisa's Brokerage",
      accountType: 'Investment',
      institution: 'eTrade',
      liquidityType: 'Liquid',
      taxAdvantaged: false,
      taxAdvantageType: null,
      currentValue: 0.0,
    },
  ];
  chaseAccounts = [
    {
      active: true,
      accountName: 'Mortgage',
      accountType: 'Debt',
      institution: 'Chase',
      liquidityType: 'Non-Liquid',
      taxAdvantaged: false,
      taxAdvantageType: null,
      currentValue: -226486.93,
    },
  ];
  fidelityAccounts = [
    {
      active: true,
      accountName: 'Infineon 401k',
      accountType: 'Retirement',
      institution: 'Fidelity',
      liquidityType: 'Non-Liquid',
      taxAdvantaged: true,
      taxAdvantageType: 'Traditional',
      currentValue: 123452.96,
    },
    {
      active: true,
      accountName: 'INFICON 401k',
      accountType: 'Retirement',
      institution: 'Fidelity',
      liquidityType: 'Non-Liquid',
      taxAdvantaged: true,
      taxAdvantageType: 'Traditional',
      currentValue: 2632.73,
    },
  ];
  tdAmeritradeAccounts = [
    {
      active: true,
      accountName: 'Brokerage',
      accountType: 'Investment',
      institution: 'TD Ameritrade',
      liquidityType: 'Liquid',
      taxAdvantaged: false,
      taxAdvantageType: null,
      currentValue: 600,
    },
    {
      active: true,
      accountName: 'Trad. IRA',
      accountType: 'Investment',
      institution: 'TD Ameritrade',
      liquidityType: 'Non-Liquid',
      taxAdvantaged: true,
      taxAdvantageType: 'Trad IRA',
      currentValue: 70796.61,
    },
    {
      active: true,
      accountName: 'Roth IRA',
      accountType: 'Investment',
      institution: 'TD Ameritrade',
      liquidityType: 'Non-Liquid',
      taxAdvantaged: true,
      taxAdvantageType: 'Roth IRA',
      currentValue: 41621.32,
    },
  ];
}
