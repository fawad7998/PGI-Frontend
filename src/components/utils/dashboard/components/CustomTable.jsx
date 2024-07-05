import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#0064B4",
                opacity: 1,
                border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color:
                theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
    },
}));

const CustomTable = ({
    headers,
    data,
    tableClassName,
    thClassName,
    tdClassName,
    showCheckbox,
    showSwitchButton,
    total,
    totals,
    switchId,
    checkedState,
    switchState,
    handleCheckboxChange,
    handleSwitchChange,
}) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className={`min-w-full bg-white ${tableClassName}`}>
                <thead className="rounded-md">
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className={`py-4 px-4 border-b border-gray text-left ${thClassName} ${header.className}`}
                            >
                                {showCheckbox && index === 0 && (
                                    <input
                                        type="checkbox"
                                        className="mr-20px"
                                        onChange={() => handleCheckboxChange("all")}
                                    />
                                )}
                                <div className="flex">
                                    <div className="flex items-center text-nowrap sm:text-12px md:text-16px">
                                        {header.text}
                                        {header.icon && <span className="mr-2">{header.icon}</span>}
                                    </div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.entries(row).map(([key, cell], cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`py-4 px-4 border-b border-gray ${tdClassName}`}
                                >
                                    {showCheckbox && cellIndex === 0 && (
                                        <input
                                            type="checkbox"
                                            className="mr-20px"
                                            checked={!!checkedState[rowIndex]}
                                            onChange={() => handleCheckboxChange(rowIndex)}
                                        />
                                    )}
                                    {showSwitchButton && cellIndex === 0 && (
                                        <FormControlLabel
                                            control={
                                                <IOSSwitch
                                                    checked={switchState[rowIndex] || false}
                                                    onChange={() => handleSwitchChange(rowIndex)}
                                                    inputProps={{
                                                        "aria-label": ` ${switchId} controlled`,
                                                    }}
                                                />
                                            }
                                            label=""
                                        />
                                    )}
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                    {total && (
                        <tr>
                            {headers.map((header, index) => (
                                <td
                                    key={index}
                                    className={`py-4 px-4 border-b border-gray ${tdClassName}`}
                                >
                                    {totals && totals[index] !== undefined ? totals[index] : ""}
                                </td>
                            ))}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

CustomTable.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.element,
            className: PropTypes.string,
        })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    tableClassName: PropTypes.string,
    thClassName: PropTypes.string,
    tdClassName: PropTypes.string,
    showCheckbox: PropTypes.bool,
    showSwitchButton: PropTypes.bool,
    total: PropTypes.bool,
    totals: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
    switchId: PropTypes.string,
    checkedState: PropTypes.object.isRequired,
    switchState: PropTypes.object.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    handleSwitchChange: PropTypes.func.isRequired,
};

CustomTable.defaultProps = {
    headers: [],
    data: [],
    tableClassName: "",
    thClassName: "",
    tdClassName: "",
    showCheckbox: false,
    showSwitchButton: false,
    total: false,
    totals: [],
    switchId: "defaultSwitch",
};

export default CustomTable;
