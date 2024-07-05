import React, { useState } from "react";
import axios from "axios";

const PayRuleForm = () => {
  const [payRate, setPayRate] = useState("");
  const [payCode, setPayCode] = useState("");
  const [conditions, setConditions] = useState({
    shiftHours: { fromHour: "", tillHour: "" },
    hoursOfDay: { startTime: "", endTime: "" },
    ageRange: { minAge: "", maxAge: "" },
    daysOfWeek: [],
  });
  const [appliesTo, setAppliesTo] = useState([
    { positionId: "", clientId: "", locationId: "", eventId: "" },
  ]);

  const handleConditionChange = (e, conditionType, field) => {
    setConditions({
      ...conditions,
      [conditionType]: {
        ...conditions[conditionType],
        [field]: e.target.value,
      },
    });
  };

  const handleAppliesToChange = (e, index, field) => {
    const newAppliesTo = [...appliesTo];
    newAppliesTo[index][field] = e.target.value;
    setAppliesTo(newAppliesTo);
  };

  const addAppliesTo = () => {
    setAppliesTo([
      ...appliesTo,
      { positionId: "", clientId: "", locationId: "", eventId: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      payRate: parseFloat(payRate),
      payCode,
      conditions,
      appliesTo: appliesTo.map((item) => ({
        positionId: item.positionId ? parseInt(item.positionId) : null,
        clientId: item.clientId ? parseInt(item.clientId) : null,
        locationId: item.locationId ? parseInt(item.locationId) : null,
        eventId: item.eventId ? parseInt(item.eventId) : null,
      })),
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/payRules",
        data
      );
      console.log("Pay rule created:", response.data);
    } catch (error) {
      console.error("Error creating pay rule:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Pay Rate:</label>
        <input
          type="number"
          value={payRate}
          onChange={(e) => setPayRate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Pay Code:</label>
        <input
          type="text"
          value={payCode}
          onChange={(e) => setPayCode(e.target.value)}
          required
        />
      </div>

      <h3>Conditions</h3>
      <div>
        <label>Shift Hours From:</label>
        <input
          type="time"
          value={conditions.shiftHours.fromHour}
          onChange={(e) => handleConditionChange(e, "shiftHours", "fromHour")}
        />
        <label>To:</label>
        <input
          type="time"
          value={conditions.shiftHours.tillHour}
          onChange={(e) => handleConditionChange(e, "shiftHours", "tillHour")}
        />
      </div>
      <div>
        <label>Hours of the Day Start:</label>
        <input
          type="time"
          value={conditions.hoursOfDay.startTime}
          onChange={(e) => handleConditionChange(e, "hoursOfDay", "startTime")}
        />
        <label>End:</label>
        <input
          type="time"
          value={conditions.hoursOfDay.endTime}
          onChange={(e) => handleConditionChange(e, "hoursOfDay", "endTime")}
        />
      </div>
      <div>
        <label>Age Range Min:</label>
        <input
          type="number"
          value={conditions.ageRange.minAge}
          onChange={(e) => handleConditionChange(e, "ageRange", "minAge")}
        />
        <label>Max:</label>
        <input
          type="number"
          value={conditions.ageRange.maxAge}
          onChange={(e) => handleConditionChange(e, "ageRange", "maxAge")}
        />
      </div>
      <div>
        <label>Days of Week:</label>
        <input
          type="text"
          value={conditions.daysOfWeek}
          onChange={(e) => handleConditionChange(e, "daysOfWeek", "days")}
          placeholder="M, T, W, T, F"
        />
      </div>

      <h3>Applies To</h3>
      {appliesTo.map((item, index) => (
        <div key={index}>
          <label>Position ID:</label>
          <input
            type="number"
            value={item.positionId}
            onChange={(e) => handleAppliesToChange(e, index, "positionId")}
          />
          <label>Client ID:</label>
          <input
            type="number"
            value={item.clientId}
            onChange={(e) => handleAppliesToChange(e, index, "clientId")}
          />
          <label>Location ID:</label>
          <input
            type="number"
            value={item.locationId}
            onChange={(e) => handleAppliesToChange(e, index, "locationId")}
          />
          <label>Event ID:</label>
          <input
            type="number"
            value={item.eventId}
            onChange={(e) => handleAppliesToChange(e, index, "eventId")}
          />
        </div>
      ))}
      <button type="button" onClick={addAppliesTo}>
        Add Applies To
      </button>

      <button type="submit">Create Pay Rule</button>
    </form>
  );
};

export default PayRuleForm;
