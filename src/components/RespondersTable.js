import React, { Component } from 'react';
import table from 'semantic-ui-react';
import './style-home.css';

const RespondersTable = () => {
  return (
    <div>
      <h3>All Current Members</h3>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location(City)</th>
            <th>Category</th>
            <th>Services</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">James</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Engineer</td>
          </tr>
          <tr>
            <td data-label="Name">Jill</td>
            <td data-label="Age">26</td>
            <td data-label="Job">Engineer</td>
          </tr>
          <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RespondersTable;
