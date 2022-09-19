import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  contentProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
}) => {
  if (!Array.isArray(items)) {
    return (
      <ul className="list-group">
        {Object.keys(items).map((item) => (
          <li
            key={items[item][valueProperty]}
            className={
              "list-group-item" +
              (items[item] === selectedItem ? " active" : "")
            }
            onClick={() => onItemSelect(items[item])}
            role="button"
          >
            {items[item][contentProperty]}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          role="button"
          className={
            "list-group-item" + (items[item] === selectedItem ? " active" : "")
          }
          onClick={() => onItemSelect(items[item])}
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupList.defaultProps = { valueProperty: "_id", contentProperty: "name" };

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
};
export default GroupList;
