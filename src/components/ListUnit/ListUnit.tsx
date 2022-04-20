import React from "react";
import { IListUnitProps } from '../../interfaces/IListUnitProps';

const ListUnit: React.FC<IListUnitProps> = ({ unit, unitFull, unitRatio, unitAlt} ) => {
  return (
    <>
      <div className="list--unit-padd"></div>
      <div className="list--unit-desc">
        <div className="unit--info">
          <div className="unit--desc-i"></div>
          <div className="unit--desc-t">
            <p>
              <span className="ng-binding">Продается {unitFull}:</span>
              <span className="unit--infoInn">1 {unit} = {unitRatio} {unitAlt} </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListUnit;