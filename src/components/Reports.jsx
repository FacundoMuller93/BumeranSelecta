import React from "react";
import {Dropdown} from 'react-bootstrap';

const Reports = () => {
  return (
  <div>
    <div>Sección Reportes</div>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Seleccionar Área
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Administración</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Comercial</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Producción</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Oficios</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tecnología</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Logística</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Gastronomía</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Recursos Humanos</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  )
};

export default Reports;
