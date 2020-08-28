// Users dummy data
export const userList = [
  {
    id: 1,
    name: "Nabeel Zubair",
    title: "Mr",
    address: {
      line1: "Random Street # 1",
      line2: "Random Building # 1",
      city: "City # 1",
      state: "State # 1",
      zipcode: "12345",
    },
    phone: "+92 345 2345678",
    email: "userone@test.com",
  },
  {
    id: 2,
    name: "Muaaz Tausif",
    title: "Mr",
    address: {
      line1: "Random Street # 2",
      line2: "Random Building # 2",
      city: "City # 2",
      state: "State # 2",
      zipcode: "54321",
    },
    phone: "+92 300 1234567",
    email: "usertwo@test.com",
  },
  {
    id: 3,
    name: "Bilal-ur-Rehman",
    title: "Mr",
    address: {
      line1: "Random Street # 3",
      line2: "Random Building # 3",
      city: "City # 3",
      state: "State # 3",
      zipcode: "31524",
    },
    phone: "+92 300 3456789",
    email: "userthree@test.com",
  },
  {
    id: 4,
    name: {
      namePrefix: "Dutchess",
      firstName: "Kate",
      middleName: "Chatherine",
      lastName: "Middleton",
      nameSuffix: "of Cambridge",
    },
    title: "Mrs",
    address: {
      line1: "Random Street # 4",
      line2: "Random Building # 4",
      city: "City # 4",
      state: "State # 4",
      zipcode: "15243",
    },
    phone: "+92 300 9182736",
    email: "userfour@test.com",
  },
];

// License dummy data
export const licenseList = [
  {
    id: 10,
    type: "License Type # 1",
    name: "MyLicenseOne",
    address: {
      line1: "Random Street # 10",
      line2: "Random Building # 10",
      city: "City # 10",
      state: "State # 10",
      zipcode: "35142",
    },
  },
  {
    id: 20,
    type: "License Type # 2",
    name: "MyLicenseTwo",
    address: {
      line1: "Random Street # 20",
      line2: "Random Building # 20",
      city: "City # 20",
      state: "State # 20",
      zipcode: "98765",
    },
  },
  {
    id: 30,
    type: "License Type # 3",
    name: "MyLicenseThree",
    address: {
      line1: "Random Street # 30",
      line2: "Random Building # 30",
      city: "City # 30",
      state: "State # 30",
      zipcode: "56789",
    },
  },
  {
    id: 40,
    type: "License Type # 4",
    name: {
      namePrefix: "License #",
      firstName: "Sample First Name",
      middleName: "Sample Middle Name",
      lastName: "Sample Last Name",
      nameSuffix: "Registered",
    },
    address: {
      line1: "Random Street # 40",
      line2: "Random Building # 40",
      city: "City # 40",
      state: "State # 40",
      zipcode: "79586",
    },
  },
];

// Dummy coded values
export const codedValuesList = [
  { label: "Random label # 1", value: 15 },
  { label: "Random label # 2", value: 25 },
  { label: "Random label # 3", value: 35 },
  { label: "Random label # 4", value: 45 },
];

// Case dummy data
export const caseList = [
  {
    id: 100,
    caseNumber: "1001",
    assignedUser: userList[0],
    dateOpened: "2020-07-18 18:20",
    dateClosed: null,
    caseType: codedValuesList[0],
    status: "Open",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: userList[3],
    respondant: licenseList[0],
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 200,
    caseNumber: "2001",
    assignedUser: userList[1],
    dateOpened: "2019-06-17 12:10",
    dateClosed: "2020-05-16",
    caseType: codedValuesList[1],
    status: "Closed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: userList[2],
    respondant: licenseList[1],
    additionalData: {
      priority: "Medium",
      tag: "Evidence",
    },
  },
  {
    id: 300,
    caseNumber: "3001",
    assignedUser: userList[2],
    dateOpened: "2018-05-16 01:01",
    dateClosed: "2019-04-15",
    caseType: codedValuesList[2],
    status: "Closed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: userList[1],
    respondant: licenseList[2],
    additionalData: null,
  },
  {
    id: 400,
    caseNumber: "4001",
    assignedUser: userList[3],
    dateOpened: "2019-04-16 08:25",
    dateClosed: null,
    caseType: codedValuesList[3],
    status: "Open",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: userList[3],
    respondant: licenseList[3],
    additionalData: {
      expectedDuration: "1 year, 21 days",
      tag: "Picture",
    },
  },
];

//Case List Dummy Data Latest
export const caseListData = [
  {
    id: 1,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Open",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 2,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Closed",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 3,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Open",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 110,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Open",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 4,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Open",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 5,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Open",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 6,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Under Review",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 1030,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Closed",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 7,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Open",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 1001,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Open",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 8,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Open",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 1002,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Open",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 9,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Closed",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 10,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Under Review",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
  {
    id: 11,
    caseNumber: "1001",
    assignedUser: null,
    dateOpened: "2020-07-18",
    dateClosed: "",
    caseType: ["Diversion", "Tampering", "Theft"],
    status: "Closed",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at magna tempor egestas et sed metus. Donec vel fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel erat ut turpis consectetur pulvinar. In hac habitasse platea dictumst.",
    complainant: null,
    respondant: "",
    investigator: "Bilal",
    additionalData: {
      expectedDuration: "9 days",
      priority: "High",
      numberOfInvestigators: 2,
      tag: "Important",
    },
  },
];

export const barChartData = [
  { name: "Stat 1", value: 440 },
  { name: "Stat 2", value: 320 },
  { name: "Stat 3", value: 500 },
];

export const histogramData = [
  { name: "Jan", value: 3 },
  { name: "Feb", value: 5 },
  { name: "Mar", value: 4 },
  { name: "Apr", value: 6 },
  { name: "May", value: 2 },
  { name: "Jun", value: 4 },
  { name: "Jul", value: 5 },
  { name: "Aug", value: 2 },
  { name: "Sep", value: 3 },
  { name: "Oct", value: 4 },
  { name: "Nov", value: 3 },
  { name: "Dec", value: 4 },
];

export const totalCases: number = caseList.length;

export const Assignees = [
  "Nancy OLeary",
  "David Johnson",
  "Angelique Locknane",
  "Jeff Steyer",
];

export const CaseTypes = ["Diversion", "Tampering", "Theft", "Loss"];
export const CaseStatus = [
  "Assigned",
  "Investigation Started",
  "Ready for Review",
  "Criminal Hold",
  "Closed",
  "Referral",
];
