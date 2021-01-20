import React from "react";

class DashboardComponent extends React.Component {
  render() {
    console.log(this.props.dashboardData);
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone Number</th>
          </tr>
          {this.props.dashboardData.length !== 0
            ? this.props.dashboardData.map((singleData) => (
                <tr>
                  <td>{singleData.id}</td>
                  <td>{singleData.name}</td>
                  <td>{singleData.age}</td>
                  <td>{singleData.email}</td>
                  <td>{singleData.gender}</td>
                  <td>{singleData.phoneNo}</td>
                </tr>
              ))
            : ""}
        </table>
      </div>
    );
  }
}

export default DashboardComponent;
