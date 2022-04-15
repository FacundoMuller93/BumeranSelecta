import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getRecruitersPerArea, topRecruiters } from "../store/reports";
import "../assets/styles/Reports.scss";

const Reports = () => {
  const dispatch = useDispatch();

  const [areaValue, setAreaValue] = useState("");

  console.log(areaValue);

  useEffect(() => {
    dispatch(getRecruitersPerArea(areaValue));
  }, [areaValue]);

  useEffect(() => {
    topRecruiters();
  }, []);

  return (
    <div className={`container`}>
      <div className="row d-flex align-items-center">
        <div className="col-12 justify-content-center text-center col-lg-1 d-flex justify-content-lg-end">
          <div className="pt-5 mb-5 fs-4 title">Reportes</div>
        </div>

        <div className="col-12 pb-5 text-end col-lg-11 ps-lg-0 pb-lg-0">
          <Dropdown>
            <Dropdown.Toggle
              className={`w-lg-25 mb-3 px-5  px-md-4  px-lg-5 pb-lg-1 mt-lg-2 mb-lg-3 buttonDeleteRecruiter`}
              id="dropdown-basic"
            >
              Seleccionar Área
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-25">
              <Dropdown.Item onClick={() => setAreaValue("Administración")}>
                Administración
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Comercial")}>
                Comercial
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Producción")}>
                Producción
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Oficios")}>
                Oficios
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Tecnología")}>
                Tecnología
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Logística")}>
                Logística
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Gastronomía")}>
                Gastronomía
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Recursos Humanos")}>
                Recursos Humanos
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Salud")}>
                Salud
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Ingenierías")}>
                Ingenierías
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setAreaValue("Atención al Cliente")}
              >
                Atención al Cliente
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Marketing")}>
                Marketing
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Construcción")}>
                Construcción
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAreaValue("Comercio Exterior")}>
                Comercio Exterior
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Reports;
