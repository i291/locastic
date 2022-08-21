import React, { useState, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';
import NameDateForm from './nameDateForm';
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RezultatList } from './rezultatlist';
import EditRezultat from './editRezultat';
function App() {

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={NameDateForm} />
            <Route path="/list"><RezultatList></RezultatList></Route>
            <Route path="/edit/:id" component={EditRezultat} />
          </Switch>
        </div>
      </Router>
    </div >)
}
export default App

