import React from 'react';
import './App.css';
import Buttons from'./Buttons.js';

function App() {
  return (
    <div className="App">
      <table className="table table-dark">
        <thead className="thead-dark" style={{textAlign: "center"}}>
          <tr>
            <th colspan="6">
              <h3><br/>Pressure Deviation</h3>
            </th>
          </tr>
          <tr style={{textAlign: "center"}}>
            <th scope="col" style={{textAlign: "center"}}>Temp</th>
            <th scope="col" style={{textAlign: "center"}}>1</th>
            <th scope="col" style={{textAlign: "center"}}>11</th>
            <th scope="col" style={{textAlign: "center"}}>21</th>
            <th scope="col" style={{textAlign: "center"}}>31</th>
            <th scope="col" style={{textAlign: "center"}}>41</th>
            <th scope="col" style={{textAlign: "center"}}>GIF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0F</th>
            <td><Buttons link1='./screenshotsNodes_zeroDeg/NYU Anamoly Data_ZeroDeg_Nodes_Leak1_2D_velo_deviation.png' link2='./screenshotsNodes_zeroDeg/NYU Anamoly Data_ZeroDeg_Nodes_Leak1_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_zeroDeg/NYU Anamoly Data_ZeroDeg_Nodes_Leak11_2D_velo_deviation.png' link2='./screenshotsNodes_zeroDeg/NYU Anamoly Data_ZeroDeg_Nodes_Leak11_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_zeroDeg/NYU Anamoly Data_ZeroDeg_Nodes_Leak21_2D_velo_deviation.png' link2='./screenshotsNodes_zeroDeg/NYU Anamoly Data_ZeroDeg_Nodes_Leak21_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_zeroDeg/NYU Anamoly Data_ZeroDeg_Nodes_Leak31_2D_velo_deviation.png' link2='./screenshotsNodes_zeroDeg/NYU Anamoly Data_ZeroDeg_Nodes_Leak31_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_zeroDeg/NYU Anamoly Data_ZeroDeg_Nodes_Leak41_2D_velo_deviation.png' link2='./screenshotsNodes_zeroDeg/NYU Anamoly Data_ZeroDeg_Nodes_Leak41_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_zeroDeg/nodes0_2D.gif' link2='./screenshotsNodes_zeroDeg/nodes0_3D.gif'/></td>

          </tr>
          <tr>
            <th scope="row">16F</th>
            <td><Buttons link1='./screenshotsNodes_16Deg/NYU Anamoly Data_16_Nodes_Leak1_2D_velo_deviation.png' link2='./screenshotsNodes_16Deg/NYU Anamoly Data_16_Nodes_Leak1_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_16Deg/NYU Anamoly Data_16Deg_Nodes_Leak11_2D_velo_deviation.png' link2='./screenshotsNodes_16Deg/NYU Anamoly Data_16Deg_Nodes_Leak11_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_16Deg/NYU Anamoly Data_16Deg_Nodes_Leak21_2D_velo_deviation.png' link2='./screenshotsNodes_16Deg/NYU Anamoly Data_16Deg_Nodes_Leak21_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_16Deg/NYU Anamoly Data_16Deg_Nodes_Leak31_2D_velo_deviation.png' link2='./screenshotsNodes_16Deg/NYU Anamoly Data_16Deg_Nodes_Leak31_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_16Deg/NYU Anamoly Data_16Deg_Nodes_Leak41_2D_velo_deviation.png' link2='./screenshotsNodes_16Deg/NYU Anamoly Data_16Deg_Nodes_Leak41_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_16Deg/nodes16_2D.gif' link2='./screenshotsNodes_16Deg/nodes16_3D.gif'/></td>

          </tr>
          <tr>
            <th scope="row">32F</th>
            <td><Buttons link1='./screenshotsNodes_32Deg/NYU Anamoly Data_32_Nodes_Leak1_2D_velo_deviation.png' link2='./screenshotsNodes_32Deg/NYU Anamoly Data_32_Nodes_Leak1_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_32Deg/NYU Anamoly Data_32Deg_Nodes_Leak11_2D_velo_deviation.png' link2='./screenshotsNodes_32Deg/NYU Anamoly Data_32Deg_Nodes_Leak11_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_32Deg/NYU Anamoly Data_32Deg_Nodes_Leak21_2D_velo_deviation.png' link2='./screenshotsNodes_32Deg/NYU Anamoly Data_32Deg_Nodes_Leak21_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_32Deg/NYU Anamoly Data_32Deg_Nodes_Leak31_2D_velo_deviation.png' link2='./screenshotsNodes_32Deg/NYU Anamoly Data_32Deg_Nodes_Leak31_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_32Deg/NYU Anamoly Data_32Deg_Nodes_Leak41_2D_velo_deviation.png' link2='./screenshotsNodes_32Deg/NYU Anamoly Data_32Deg_Nodes_Leak41_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_32Deg/nodes32_2D.gif' link2='./screenshotsNodes_32Deg/nodes32_3D.gif'/></td>
          </tr>
          <tr>
            <th scope="row">48F</th>
            <td><Buttons link1='./screenshotsNodes_48Deg/NYU Anamoly Data_48_Nodes_Leak1_2D_velo_deviation.png' link2='./screenshotsNodes_48Deg/NYU Anamoly Data_48_Nodes_Leak1_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_48Deg/NYU Anamoly Data_48Deg_Nodes_Leak11_2D_velo_deviation.png' link2='./screenshotsNodes_48Deg/NYU Anamoly Data_48Deg_Nodes_Leak11_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_48Deg/NYU Anamoly Data_48Deg_Nodes_Leak21_2D_velo_deviation.png' link2='./screenshotsNodes_48Deg/NYU Anamoly Data_48Deg_Nodes_Leak21_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_48Deg/NYU Anamoly Data_48Deg_Nodes_Leak31_2D_velo_deviation.png' link2='./screenshotsNodes_48Deg/NYU Anamoly Data_48Deg_Nodes_Leak31_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_48Deg/NYU Anamoly Data_48Deg_Nodes_Leak41_2D_velo_deviation.png' link2='./screenshotsNodes_48Deg/NYU Anamoly Data_48Deg_Nodes_Leak41_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_48Deg/nodes48_2D.gif' link2='./screenshotsNodes_48Deg/nodes48_3D.gif'/></td>
          </tr>
          <tr>
            <th scope="row">64F</th>
            <td><Buttons link1='./screenshotsNodes_64Deg/NYU Anamoly Data_64Deg_Nodes_Leak1_2D_velo_deviation.png' link2='./screenshotsNodes_64Deg/NYU Anamoly Data_64Deg_Nodes_Leak1_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_64Deg/NYU Anamoly Data_64Deg_Nodes_Leak11_2D_velo_deviation.png' link2='./screenshotsNodes_64Deg/NYU Anamoly Data_64Deg_Nodes_Leak11_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_64Deg/NYU Anamoly Data_64Deg_Nodes_Leak21_2D_velo_deviation.png' link2='./screenshotsNodes_64Deg/NYU Anamoly Data_64Deg_Nodes_Leak21_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_64Deg/NYU Anamoly Data_64Deg_Nodes_Leak31_2D_velo_deviation.png' link2='./screenshotsNodes_64Deg/NYU Anamoly Data_64Deg_Nodes_Leak31_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_64Deg/NYU Anamoly Data_64Deg_Nodes_Leak41_2D_velo_deviation.png' link2='./screenshotsNodes_64Deg/NYU Anamoly Data_64Deg_Nodes_Leak41_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsNodes_64Deg/nodes64_2D.gif' link2='./screenshotsNodes_64Deg/nodes64_3D.gif'/></td>
          </tr>
        </tbody>
      </table>

      <table className="table table-dark">
        <thead className="thead-dark" style={{textAlign: "center"}}>
          <tr>
            <th colspan="6">
              <h3><br/>Flow Velocity Deviation</h3>
            </th>
          </tr>
          <tr style={{textAlign: "center"}}>
            <th scope="col" style={{textAlign: "center"}}>Temp</th>
            <th scope="col" style={{textAlign: "center"}}>1</th>
            <th scope="col" style={{textAlign: "center"}}>11</th>
            <th scope="col" style={{textAlign: "center"}}>21</th>
            <th scope="col" style={{textAlign: "center"}}>31</th>
            <th scope="col" style={{textAlign: "center"}}>41</th>
            <th scope="col" style={{textAlign: "center"}}>GIF</th>
          </tr>
      </thead>
        <tbody>
          <tr>
            <th scope="row">0F</th>
            <td><Buttons link1='./screenshotsPipe_zeroDeg/NYU Anamoly Data_ZeroDeg_Pipes_Leak1_2D_velo_deviation.png' link2='./screenshotsPipe_zeroDeg/NYU Anamoly Data_ZeroDeg_Pipes_Leak1_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_zeroDeg/NYU Anamoly Data_ZeroDeg_Pipes_Leak11_2D_velo_deviation.png' link2='./screenshotsPipe_zeroDeg/NYU Anamoly Data_ZeroDeg_Pipes_Leak11_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_zeroDeg/NYU Anamoly Data_ZeroDeg_Pipes_Leak21_2D_velo_deviation.png' link2='./screenshotsPipe_zeroDeg/NYU Anamoly Data_ZeroDeg_Pipes_Leak21_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_zeroDeg/NYU Anamoly Data_ZeroDeg_Pipes_Leak31_2D_velo_deviation.png' link2='./screenshotsPipe_zeroDeg/NYU Anamoly Data_ZeroDeg_Pipes_Leak31_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_zeroDeg/NYU Anamoly Data_ZeroDeg_Pipes_Leak41_2D_velo_deviation.png' link2='./screenshotsPipe_zeroDeg/NYU Anamoly Data_ZeroDeg_Pipes_Leak41_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_zeroDeg/pipes0_2D.gif' link2='./screenshotsPipe_zeroDeg/pipes0_3D.gif'/></td>
          </tr>
          <tr>
            <th scope="row">16F</th>
            <td><Buttons link1='./screenshotsPipe_16Deg/NYU Anamoly Data_16Deg_Pipes_Leak1_2D_velo_deviation.png' link2='./screenshotsPipe_16Deg/NYU Anamoly Data_16Deg_Pipes_Leak1_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_16Deg/NYU Anamoly Data_16Deg_Pipes_Leak11_2D_velo_deviation.png' link2='./screenshotsPipe_16Deg/NYU Anamoly Data_16Deg_Pipes_Leak11_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_16Deg/NYU Anamoly Data_16Deg_Pipes_Leak21_2D_velo_deviation.png' link2='./screenshotsPipe_16Deg/NYU Anamoly Data_16Deg_Pipes_Leak21_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_16Deg/NYU Anamoly Data_16Deg_Pipes_Leak31_2D_velo_deviation.png' link2='./screenshotsPipe_16Deg/NYU Anamoly Data_16Deg_Pipes_Leak31_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_16Deg/NYU Anamoly Data_16Deg_Pipes_Leak41_2D_velo_deviation.png' link2='./screenshotsPipe_16Deg/NYU Anamoly Data_16Deg_Pipes_Leak41_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_16Deg/pipes16_2D.gif' link2='./screenshotsPipe_16Deg/pipes16_3D.gif'/></td>
          </tr>
          <tr>
            <th scope="row">32F</th>
            <td><Buttons link1='./screenshotsPipe_32Deg/NYU Anamoly Data_32Deg_Pipes_Leak1_2D_velo_deviation.png' link2='./screenshotsPipe_32Deg/NYU Anamoly Data_32Deg_Pipes_Leak1_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_32Deg/NYU Anamoly Data_32Deg_Pipes_Leak11_2D_velo_deviation.png' link2='./screenshotsPipe_32Deg/NYU Anamoly Data_32Deg_Pipes_Leak11_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_32Deg/NYU Anamoly Data_32Deg_Pipes_Leak21_2D_velo_deviation.png' link2='./screenshotsPipe_32Deg/NYU Anamoly Data_32Deg_Pipes_Leak21_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_32Deg/NYU Anamoly Data_32Deg_Pipes_Leak31_2D_velo_deviation.png' link2='./screenshotsPipe_32Deg/NYU Anamoly Data_32Deg_Pipes_Leak31_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_32Deg/NYU Anamoly Data_32Deg_Pipes_Leak41_2D_velo_deviation.png' link2='./screenshotsPipe_32Deg/NYU Anamoly Data_32Deg_Pipes_Leak41_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_32Deg/pipes32_2D.gif' link2='./screenshotsPipe_32Deg/pipes32_3D.gif'/></td>
          </tr>
          <tr>
            <th scope="row">48F</th>
            <td><Buttons link1='./screenshotsPipe_48Deg/NYU Anamoly Data_48Deg_Pipes_Leak1_2D_velo_deviation.png' link2='./screenshotsPipe_48Deg/NYU Anamoly Data_48Deg_Pipes_Leak1_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_48Deg/NYU Anamoly Data_48Deg_Pipes_Leak11_2D_velo_deviation.png' link2='./screenshotsPipe_48Deg/NYU Anamoly Data_48Deg_Pipes_Leak11_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_48Deg/NYU Anamoly Data_48Deg_Pipes_Leak21_2D_velo_deviation.png' link2='./screenshotsPipe_48Deg/NYU Anamoly Data_48Deg_Pipes_Leak21_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_48Deg/NYU Anamoly Data_48Deg_Pipes_Leak31_2D_velo_deviation.png' link2='./screenshotsPipe_48Deg/NYU Anamoly Data_48Deg_Pipes_Leak31_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_48Deg/NYU Anamoly Data_48Deg_Pipes_Leak41_2D_velo_deviation.png' link2='./screenshotsPipe_48Deg/NYU Anamoly Data_48Deg_Pipes_Leak41_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_48Deg/pipes48_2D.gif' link2='./screenshotsPipe_48Deg/pipes48_3D.gif'/></td>
          </tr>
          <tr>
            <th scope="row">64F</th>
            <td><Buttons link1='./screenshotsPipe_64Deg/NYU Anamoly Data_64Deg_Pipes_Leak1_2D_velo_deviation.png' link2='./screenshotsPipe_64Deg/NYU Anamoly Data_64Deg_Pipes_Leak1_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_64Deg/NYU Anamoly Data_64Deg_Pipes_Leak11_2D_velo_deviation.png' link2='./screenshotsPipe_64Deg/NYU Anamoly Data_64Deg_Pipes_Leak11_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_64Deg/NYU Anamoly Data_64Deg_Pipes_Leak21_2D_velo_deviation.png' link2='./screenshotsPipe_64Deg/NYU Anamoly Data_64Deg_Pipes_Leak21_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_64Deg/NYU Anamoly Data_64Deg_Pipes_Leak31_2D_velo_deviation.png' link2='./screenshotsPipe_64Deg/NYU Anamoly Data_64Deg_Pipes_Leak31_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_64Deg/NYU Anamoly Data_64Deg_Pipes_Leak41_2D_velo_deviation.png' link2='./screenshotsPipe_64Deg/NYU Anamoly Data_64Deg_Pipes_Leak41_3D_velo_deviation.png'/></td>
            <td><Buttons link1='./screenshotsPipe_64Deg/pipes64_2D.gif' link2='./screenshotsPipe_64Deg/pipes64_3D.gif'/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
