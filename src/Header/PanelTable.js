import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./paneltable.css";
import { config } from "../config/config";

function PanelTable() {
  const port = config.port2;
  console.log(port, "-------------");

  const [appNameList, setAppNameList] = useState({
    App_Name: "",
  });

  const [envoirnmentList, setEnvoirnmentList] = useState({
    App_Environment: "",
  });

  const [priorityList, setPriorityList] = useState({
    Priority: "",
  });

  const [statusList, setStatusList] = useState({
    Status: "",
  });

  const [testerNameList, setTesterNameList] = useState({
    Tester_Name: "",
  });

  const { App_Name } = appNameList;
  const addAppNameUrl = port + "/AddApp_Name";
  const getAppNameUrl = port + "/getApp_Name";

  const { App_Environment } = envoirnmentList;
  const addEnvoirnmentUrl = port + "/AddApp_Environment";

  const { Priority } = priorityList;
  const addPriorityUrl = port + "/AddPriority";

  const { Status } = statusList;
  const addStatusUrl = port + "/Addstatus";

  const { Tester_Name } = testerNameList;
  const addTesterNameUrl = port + "/AddTester_Name";

  function onInputChenge(e) {
    //if name = {} then set appNameList
    if (e.target.name === "App_Name") {
      setAppNameList({
        ...appNameList,
        [e.target.name]: e.target.value,
      });
    }

    if (e.target.name === "App_Environment") {
      setEnvoirnmentList({
        ...envoirnmentList,
        [e.target.name]: e.target.value,
      });
    }

    if (e.target.name === "Priority") {
      setPriorityList({
        ...priorityList,
        [e.target.name]: e.target.value,
      });
    }

    if (e.target.name === "Status") {
      setStatusList({
        ...statusList,
        [e.target.name]: e.target.value,
      });
    }

    if (e.target.name === "Tester_Name") {
      setTesterNameList({
        ...testerNameList,
        [e.target.name]: e.target.value,
      });
    }
  }

  function onSubmitEvent(e) {
    // if value == appName then appName API will hit
    if (e.target.value === "App_Name") {
      alert("App name will added");
      console.log("App-Name_list ", appNameList);

      axios
        .post(addAppNameUrl, appNameList)
        .then((response) => {
          console.log("Appname Added Successfully");
        })
        .catch((error) => {
          console.log("Something is wrong to add Appname");
        });
    }

    // add envoirnment
    if (e.target.value === "App_Environment") {
      alert("EnvoitrnmentList Will added");
      console.log("Envoirnmnet_list ", envoirnmentList);

      axios
        .post(addEnvoirnmentUrl, envoirnmentList)
        .then((response) => {
          console.log("Envoirnment Added Successfully");
        })
        .catch((error) => {
          console.log("Something is wrong to add Appname");
        });
    }

    if (e.target.value === "Priority") {
      alert("Priority List Will added");
      console.log("Priority List", priorityList);

      axios
        .post(addPriorityUrl, priorityList)
        .then((response) => {
          console.log("Envoirnment Added Successfully");
        })
        .catch((error) => {
          console.log("Something is wrong to add Appname");
        });
    }

    if (e.target.value === "Status") {
      alert("Status List Will added");
      console.log("Status List", statusList);

      axios
        .post(addStatusUrl, statusList)
        .then((response) => {
          console.log("Envoirnment Added Successfully");
        })
        .catch((error) => {
          console.log("Something is wrong to add Appname");
        });
    }

    if (e.target.value === "Tester_Name") {
      alert("Tester Name List Will added");
      console.log("Status List", testerNameList);

      axios
        .post(addTesterNameUrl, testerNameList)
        .then((response) => {
          console.log("Envoirnment Added Successfully");
        })
        .catch((error) => {
          console.log("Something is wrong to add Appname");
        });
    }
  }

  // get App Name
  async function getAppname() {
    await axios
      .get(getAppNameUrl)
      .then((response) => {
        console.log("====================================");
        console.log(response);
        console.log("====================================");
      })
      .catch((error) => {
        console.log("====================================");
        console.log("Error is comming");
        console.log("====================================");
      });
  }


  useEffect(() => {
    getAppname();
  },[])
  return (
    <div className="panelTable-container">
      <Table>
        <thead></thead>
        <tbody>
          <tr>
            <td>App Name</td>
            <td>
              <select className="left-select" name="" id="">
                <option value="">Select App</option>
                <option value="">GLUV Native</option>
                <option value="">FX Native</option>
                <option value="">FM Native</option>
                <option value="">Retail</option>
                <option value="">Headless</option>
              </select>
            </td>
            <td>
              <form>
                <input
                  type="text"
                  placeholder=""
                  name="App_Name"
                  value={App_Name}
                  onChange={(e) => onInputChenge(e)}
                />
                <Button
                  variant="success"
                  size="sm"
                  value="App_Name"
                  onClick={(e) => onSubmitEvent(e)}
                >
                  Add
                </Button>
                <Button variant="danger" size="sm" value="">
                  Delete
                </Button>
              </form>
            </td>
          </tr>
          <tr>
            <td>App Environment</td>
            <td>
              <select className="left-select" name="" id="">
                <option value="">Select Environment</option>
                <option value="">Dev</option>
                <option value="">QA</option>
                <option value="">Stage</option>
                <option value="">Production</option>
                <option value="">Demo</option>
              </select>
            </td>
            <td>
              <form>
                <input
                  type="text"
                  placeholder=""
                  required
                  name="App_Environment"
                  value={App_Environment}
                  onChange={(e) => onInputChenge(e)}
                />
                <Button
                  variant="success"
                  size="sm"
                  value="App_Environment"
                  onClick={(e) => onSubmitEvent(e)}
                >
                  Add
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </form>
            </td>
          </tr>
          <tr>
            <td>Priority</td>
            <td>
              <select className="left-select" name="" id="">
                <option value="">Select Priority</option>
                <option value="">Low</option>
                <option value="">Medium</option>
                <option value="">High</option>
                <option value="">Urgent</option>
              </select>
            </td>
            <td>
              <form>
                <input
                  type="text"
                  placeholder=""
                  required
                  name="Priority"
                  value={Priority}
                  onChange={(e) => onInputChenge(e)}
                />
                <Button
                  variant="success"
                  size="sm"
                  value="Priority"
                  onClick={(e) => onSubmitEvent(e)}
                >
                  Add
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </form>
            </td>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              <select className="left-select" name="" id="">
                <option value="">Select Status</option>
                <option value="">To-do</option>
                <option value="">In-Progress</option>
                <option value="">Pass</option>
                <option value="">Failed</option>
              </select>
            </td>
            <td>
              <form>
                <input
                  type="text"
                  placeholder=""
                  required
                  name="Status"
                  value={Status}
                  onChange={(e) => onInputChenge(e)}
                />
                <Button
                  variant="success"
                  size="sm"
                  value="Status"
                  onClick={(e) => onSubmitEvent(e)}
                >
                  Add
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </form>
            </td>
          </tr>
          <tr>
            <td>Tester Name</td>
            <td>
              <select className="left-select" name="" id="">
                <option value="">Select Tester Name</option>
                <option value="">Amit k</option>
                <option value="">Sidhdhant P</option>
                <option value="">Vinod B</option>
                <option value="">Pooja H</option>
              </select>
            </td>
            <td>
              <form>
                <input
                  type="text"
                  placeholder=""
                  required
                  name="Tester_Name"
                  value={Tester_Name}
                  onChange={(e) => onInputChenge(e)}
                />
                <Button
                  variant="success"
                  size="sm"
                  value="Tester_Name"
                  onClick={(e) => onSubmitEvent(e)}
                >
                  Add
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </form>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PanelTable;
