import * as React from "react"
import styles from "../QMSRequestPage/QmsDashboard.module.scss"

import { Web, IWeb } from "@pnp/sp/presets/all"
import "@pnp/sp/sputilities"

import "@pnp/sp/lists"
import "@pnp/sp/items"
import "@pnp/polyfill-ie11"

import "@pnp/sp/webs"
import "@pnp/sp/files"
import { getSp } from "../../../../../helpers/PnPConfig";
import { SPFI } from "@pnp/sp";
import Approvers from "./Approvers"
import {
  INavLinkGroup,
  INavStyles,
  Nav,
  Separator,
} from "office-ui-fabric-react"
import Department from "./Department"
import Project from "./Project"
import UserDetails from "./UserDetails"
import ExistingFlow from "./ExistingFlow"
import UserDepartment from "./UserDepartment"
const sp:SPFI=getSp()


const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Manage Approvers",
        url: "",
        key: "1",
        target: "_blank",
        title: "",
      },
      {
        name: "Manage Flow",
        url: "",
        key: "2",
        target: "",
        title: "",
      },
      {
        name: "Departments",
        url: "",
        key: "3",
        title: "",
      },
      {
        name: "User Properties",
        url: "",
        key: "4",
        target: "_blank",
        title: "",
      },
      {
        name: "Department User",
        url: "",
        key: "5",
        target: "_blank",
        title: "",
      },
    ],
  },
]
const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 500,

    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
    verticalAlign: "baseline",
  },
  // these link styles override the default truncation behavior
  link: {
    whiteSpace: "normal",
    lineHeight: "inherit",
  },
}

export default class QMSConfigure extends React.Component<{}, any> {
  constructor(props) {
    super(props)
    this.state = {
      nav: true,
      SelectedKey: "0",
      Approversconfig: false,
    }
  }

  public async componentDidMount() {}

  render() {
    const AssignApproverConfig = () => {
      this.setState({
        Approversconfig: true,
        nav: false,
        SelectedKey: "1",
      })
    }
    const AssignFlowConfig = () => {
      this.setState({
        Flowconfig: true,
        nav: false,
        SelectedKey: "2",
      })
    }
    const AssignDeptConfig = () => {
      this.setState({
        Deptconfig: true,
        nav: false,
        SelectedKey: "3",
      })
    }
    const AssignUserConfig = () => {
      this.setState({
        Userconfig: true,
        nav: false,
        SelectedKey: "4",
      })
    }

    const DepartmentUserConfig = () => {
      this.setState({
        DMconfig: true,
        nav: false,
        SelectedKey: "5",
      })
    }

    const onclicked = (ev, value) => {
      switch (value.key) {
        case "1":
          this.setState({
            SelectedKey: value.key,
            Approversconfig: true,
            Flowconfig: false,
            Deptconfig: false,
            Userconfig: false,
            DMconfig: false,
          })
          break
        case "2":
          this.setState({
            SelectedKey: value.key,
            Approversconfig: false,
            Flowconfig: true,
            Deptconfig: false,
            Userconfig: false,
            DMconfig: false,
          })
          break
        case "3":
          this.setState({
            Approversconfig: false,
            Flowconfig: false,
            Deptconfig: true,
            Userconfig: false,
            DMconfig: false,
            SelectedKey: value.key,
          })
          break
        case "4":
          this.setState({
            Approversconfig: false,
            Flowconfig: false,
            Deptconfig: false,
            Userconfig: true,
            DMconfig: false,
            SelectedKey: value.key,
          })
          break
        case "5":
          this.setState({
            Approversconfig: false,
            Flowconfig: false,
            Deptconfig: false,
            Userconfig: false,
            DMconfig: true,
            SelectedKey: value.key,
          })
          break
        default:
          this.setState({})
      }
    }

    return (
      <div>
        {this.state.nav == true ? (
          <div>
            <div className={styles.gridx} onClick={AssignApproverConfig}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/4341/4341824.png'
                width='100'
                height='100'
                alt='Manage Approvers'
              />
              <div>Manage Approvers</div>
            </div>
            <div className={styles.gridx} onClick={AssignFlowConfig}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/4149/4149680.png'
                width='100'
                height='100'
                alt='Manage Flow'
              />
              <div>Manage Flow</div>
            </div>
            <div className={styles.gridx} onClick={AssignDeptConfig}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/1642/1642256.png'
                width='100'
                height='100'
                alt='Department and sections'
              />
              <div>Departments</div>
            </div>
            <div className={styles.gridx} onClick={AssignUserConfig}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/1835/1835942.png'
                width='100'
                height='100'
                alt='User Properties'
              />
              <div>User Properties</div>
            </div>
            <div className={styles.gridx} onClick={DepartmentUserConfig}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/2139/2139551.png'
                width='100'
                height='100'
                alt='Department Admins'
              />
              <div>Admin Users</div>
            </div>
          </div>
        ) : (
          <>
            <table>
              <tr>
                <td
                  style={{
                    paddingTop: "10px",

                    verticalAlign: "baseline",
                  }}
                >
                  <Nav
                    onLinkClick={onclicked}
                    selectedKey={this.state.SelectedKey}
                    ariaLabel='Nav example with wrapped link text'
                    styles={navStyles}
                    groups={navLinkGroups}
                  />
                </td>
                <td
                  style={{
                    paddingTop: "0px",
                    paddingLeft: "15px",
                    verticalAlign: "baseline",
                  }}
                >
                  {this.state.Approversconfig == true ? <Approvers /> : <></>}
                  {this.state.Flowconfig == true ? <ExistingFlow /> : <></>}
                  {this.state.Deptconfig == true ? <Department /> : <></>}
                  {this.state.Userconfig == true ? <UserDetails /> : <></>}
                  {this.state.DMconfig == true ? <UserDepartment /> : <></>}
                </td>
                {this.state.Deptconfig == true ? (
                  <td
                    style={{ verticalAlign: "baseline", paddingLeft: "20px" }}
                  >
                    <Project />
                  </td>
                ) : (
                  <div></div>
                )}
              </tr>
            </table>
          </>
        )}
      </div>
    )
  }
}
