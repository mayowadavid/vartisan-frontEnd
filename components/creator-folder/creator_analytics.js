import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
  } from "recharts";
import Sidebar from './sidebar'
import VartisanHeader from './vartisanHeader'
import VartisanMobileHeader from './vartisanMobileHeader'
import { format, parseISO, subDays } from "date-fns";
import MobileSideBar from "./mobileSidebar";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";

const Creator_analytics = () => {
  const  {sideMenu} = useContext(MainContext);

const data = [];
for (let num = 30; num >= 0; num--) {
    data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
    });
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="tooltip">
          <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
          <p>${payload[0].value.toFixed(2)} CAD</p>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      { sideMenu == true && <MobileSideBar />}
      <div className="dashboard_wrapper">
        <Sidebar />
        <div className="admin_content">
            <VartisanHeader />
            <VartisanMobileHeader />
            <div className="analytic_wrapper">
            <div className="analytic_board_wrap">
                        <p>Analytics</p>
                        <div className="wallet_showcase">
                            <div className="wallet_wrapper">
                                <div className="analytic_card">
                                    <p>Active Project</p>
                                    <p>5</p>
                                    <p>View</p>
                                </div>
                                <div className="analytic_card">
                                    <p>Completed Order</p>
                                    <p>25</p>
                                    <p>View</p>
                                </div>
                                <div className="analytic_card">
                                    <p>New Requests</p>
                                    <p>4</p>
                                    <p>View</p>
                                </div>
                                <div className="analytic_card">
                                    <p>Earned in October</p>
                                    <p>$144.99</p>
                                    <p>View</p>
                                </div>
                                <div className="analytic_card">
                                    <p>Wallet amount</p>
                                    <p>$124.99</p>
                                    <p>View</p>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="analytic_board">
              <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={data}>
                  <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#555BFF" stopOpacity={0.4} />
                      <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                  </linearGradient>
                  </defs>

                  <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

                  <XAxis
                  dataKey="date"
                  stroke="rgba(128, 129, 148, 0.5)"
                  tickLine={false}
                  tickFormatter={(str) => {
                      const date = parseISO(str);
                      if (date.getDate() % 7 === 0) {
                      return format(date, "MMM, d");
                      }
                      return "";
                  }}
                  />

                  <YAxis
                  datakey="value"
                  stroke="rgba(128, 129, 148, 0.5)"
                  tickLine={false}
                  tickCount={8}
                  tickFormatter={(number) => `$${number.toFixed(2)}`}
                  />

                  <Tooltip content={<CustomTooltip />} />

                  <CartesianGrid opacity={0.1} vertical={false} />
              </AreaChart>
              </ResponsiveContainer>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Creator_analytics