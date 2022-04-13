import React, {useState, useEffect} from "react";
import {Dropdown} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { getRecruitersPerArea, topRecruiters } from "../store/reports";

const Reports = () => {
  const dispatch = useDispatch();

  const [areaValue, setAreaValue] = useState("");

  console.log(areaValue)

  useEffect(() => {
    dispatch(
      getRecruitersPerArea(areaValue)
    )
  }, [areaValue])

  useEffect(() => {
    topRecruiters()
  },[])
  
  return (
  <div className="min-vh-100">
    <div>Sección Reportes</div>

    <Dropdown>
      <Dropdown.Toggle  variant="success" id="dropdown-basic">
        Seleccionar Área
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setAreaValue("Administración")}>Administración</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Comercial")}>Comercial</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Producción")}>Producción</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Oficios")}>Oficios</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Tecnología")}>Tecnología</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Logística")}>Logística</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Gastronomía")}>Gastronomía</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Recursos Humanos")}>Recursos Humanos</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Salud")}>Salud</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Ingenierías")}>Ingenierías</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Atención al Cliente")}>Atención al Cliente</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Marketing")}>Marketing</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Construcción")}>Construcción</Dropdown.Item>
        <Dropdown.Item onClick={() => setAreaValue("Comercio Exterior")}>Comercio Exterior</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  )
};

export default Reports;
