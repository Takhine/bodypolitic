import React from "react";
import logo from "../../static/images/logo.png";
import { Row, Col, Table } from "antd";

const communityColumn = [
  {
    title: "",
    width: 150,
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Supporter Rate",
    width: 150,
    dataIndex: "supporter",
    key: "supporter",
  },
  {
    title: "Basic Rate",
    width: 150,
    dataIndex: "basic_rate",
    key: "basic_rate",
  },
  {
    title: "Low Income Rate",
    width: 150,
    dataIndex: "low_income",
    key: "low_income",
  },
];

const communityData = [
  {
    key: 1,
    title: "Initial",
    supporter: "75",
    basic_rate: "60",
    low_income: "60",
  },
  {
    key: 2,
    title: "Follow up",
    supporter: "65",
    basic_rate: "50",
    low_income: "35",
  },
];

const singleTable = [
  {
    title: "",
    width: 150,
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Supporter Rate",
    width: 150,
    dataIndex: "supporter",
    key: "supporter",
  },
  {
    title: "Basic Rate",
    width: 150,
    dataIndex: "basic_rate",
    key: "basic_rate",
  },
];

const singleData = [
  {
    key: 1,
    title: "Initial",
    supporter: "170",
    basic_rate: "140",
  },
  {
    key: 2,
    title: "Follow up",
    supporter: "130",
    basic_rate: "100",
  },
];
export default function () {
  return (
    <div className="pricing-banner">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Bodypolitic Logo" />
      </div>
      <div className="tables-container section-heading">
        <h2 className="table-header">Treatment Options</h2>
        <Row gutter={8}>
          <Col xs={24} md={12} lg={14}>
            <h2 className="table-subheader">Community Room Treatments</h2>
            <Table
              columns={communityColumn}
              dataSource={communityData}
              pagination={false}
              bordered={true}
              size="middle"
              rowClassName="table-row"
              className="table"
            />
          </Col>
          <Col xs={24} md={12} lg={10}>
            <h2 className="table-subheader">Single Room (semi-private)</h2>

            <Table
              columns={singleTable}
              dataSource={singleData}
              pagination={false}
              bordered={true}
              size="middle"
              rowClassName="table-row"
              className="table"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
