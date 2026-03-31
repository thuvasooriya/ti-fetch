# SLLSFV1 Data sheet

**Product:** MCF8329A-Q1

**Document ID:** MCF8329A-Q1

**Source:** [TI Document Viewer](https://www.ti.com/document-viewer/MCF8329A-Q1/datasheet)

---

Data Sheet

# MCF8329A-Q1 Automotive Sensorless Field Oriented Control (FOC) Three-phase BLDC Gate Driver


# 1  Features

-   AEC-Q100 qualified for automotive applications
    -   Temperature Grade-1 : –40°C ≤ TA ≤ 125°C
-   Three-phase BLDC gate driver with integrated sensorless motor control algorithm
    -   Code-free Field Oriented Control (FOC)
    -   Speed, current, power or voltage control modes
    -   Forward and reverse windmilling support
    -   Analog, PWM, freq. or I<sup>2</sup>C based control input
    -   External MCU watchdog monitoring
    -   5-point configurable reference profile support
    -   Anti-voltage surge and active braking to prevent DC bus overvoltage
    -   Flux weakening for high speed operation
    -   Maximum torque per ampere (MTPA) for higher efficiency
-   65V Three phase half-bridge gate driver
    -   Drives 3 high-side and 3 low-side N-Channel MOSFETs, 4.5 to 60V operating voltage
    -   Supports 100% PWM duty cycle
    -   Bootstrap based gate driver architecture
    -   1A/2A peak source/sink current
-   Integrated current sense amplifier
    -   Adjustable gain (5, 10, 20, 40V/V)
-   Low power sleep mode
    -   5µA (maximum) at V<sub>PVDD</sub> = 24V, T<sub>A</sub> = 25°C
-   Speed loop accuracy: < 3% with internal clock
-   Configurable EEPROM
-   Support up to 75kHz PWM switching frequency
-   LDO: 3.3V ± 3%, 50mA
-   Independent driver shutdown path (DRVOFF)
-   Spread spectrum for EMI mitigation
-   Suite of integrated protection features
    -   Undervoltage protection on all supply rails
    -   Loss of phase (no motor) detection
    -   Short-circuit protection (VDS) for all 6 FETs
    -   Motor lock detection
    -   Thermal shutdown (TSD)
    -   Fault indication on nFAULT pin
    -   Optional fault diagnostics over I<sup>2</sup>C interface


# 2  Applications

-   [Fuel and oil pumps](https://www.ti.com/solution/automotive-pump)
-   [Automotive thermal management](https://www.ti.com/applications/automotive/body-lighting/thermal-management/overview.html)
    -   [Coolant and water pumps](https://www.ti.com/solution/automotive-pump?variantid=34629&subsystemid=29278)
    -   [HVAC blowers](https://www.ti.com/solution/automotive-hvac-control-module?variantid=18203)
    -   [Engine and battery cooling fans](https://www.ti.com/solution/engine-fan)
-   [Automotive body motors](https://www.ti.com/applications/automotive/body-lighting/body-motors/overview.html)
    -   [Sunroof modules,](https://www.ti.com/solution/roof-motor-module) [Wiper modules](https://www.ti.com/solution/wiper-module)
    -   [Zonal modules](https://www.ti.com/solution/zone-control-module)


# 3  Description

The MCF8329A-Q1 provides a single-chip, code-free sensorless FOC solution for driving 12V or 24V automotive brushless-DC motors (BLDC) or Permanent Magnet Synchronous motors (PMSM) up to 1.8kHz (electrical speed). The MCF8329A-Q1 provide three half-bridge gate drivers, each capable of driving high-side and low-side N-channel power MOSFETs. The device generates the appropriate gate drive voltages and drives the high-side MOSFETs using a bootstrap circuit. A trickle charge pump is included to support 100% duty cycle. The gate drive architecture supports peak gate drive currents up to 1A source and 2A sink. The MCF8329A-Q1 can operate from a single power supply and supports a wide input supply range of 4.5 to 60V.

The algorithm configuration can be stored in non-volatile EEPROM, which allows the device to operate stand-alone once it has been configured. There are a large number of protection features integrated into the MCF8329A-Q1, intended to protect the device, motor, and system against fault events.

MCF8329A-Q1 is available in a 32-pin, 0.5mm pin pitch, 6x4mm, wettable flank WQFN package (RRY).

**Device Information[<sup>(1)</sup>](#DEVINFONOTE_li:1;67:58)**


| PART NUMBER | PACKAGE | BODY SIZE (NOM) |
| --- | --- | --- |
| MCF8329A1IQRRYRQ1 | WQFN (32) | 6.00mm × 4.00mm |


(1)  For all available packages, see the orderable addendum at the end of the data sheet.

Documentation for reference:

-   Refer [MCF8329A-Q1 EVM](https://www.ti.com/tool/MCF8329RRYEVM)
-   Refer [MCF8329A-Q1 GUI (Motor Studio)](https://www.ti.com/tool/MOTORSTUDIO)

![MCF8329A-Q1 Simplified Schematic](https://www.ti.com/ods/images/SLLSFV1/GUID-20240302-SS0I-F4LB-XVD5-XSM3VVK6ZKMQ-low.svg) 

**Simplified Schematic**


# 4  Pin Configuration and Functions

![MCF8329A-Q1 MCF8329A-Q132-Pin WQFN With Exposed Thermal PadTop View](https://www.ti.com/ods/images/SLLSFV1/GUID-20240302-SS0I-KWRW-KSBL-HJNJWQFGKF1K-low.svg) 

**Figure 4-1 MCF8329A-Q132-Pin WQFN With Exposed Thermal PadTop View**

**Table 4-1 Pin Functions**


| NAME | MCF8329A-Q1 | MCF8329A-Q1 | TYPE <sup>(1)</sup> | DESCRIPTION |
| --- | --- | --- | --- | --- |
| AGND | 23 | 23 | GND | Device analog ground |
| AVDD | 24 | 24 | PWR | 3.3V regulator output. Connect a X7R, 1μF or 2.2μF, 10V ceramic capacitor between the AVDD and AGND pins. This regulator can source up to 50mA for external circuits. AVDD capacitor should have an effective capacitance between 0.5μF and 2.8μF after operating voltage (AVDD) and temperature derating. |
| BSTA | 7 | 7 | O | Bootstrap output pin. Connect a X7R, 1µF, 25V ceramic capacitor between BSTA and SHA. |
| BSTB | 11 | 11 | O | Bootstrap output pin. Connect a X7R, 1µF, 25V ceramic capacitor between BSTB and SHB. |
| BSTC | 15 | 15 | O | Bootstrap output pin. Connect a X7R, 1µF, 25V ceramic capacitor between BSTC and SHC. |
| CPH | 5 | 5 | PWR | Charge pump switching node. Connect a X7R, PVDD-rated ceramic capacitor between the CPH and CPL pins. TI recommends a capacitor voltage rating at least twice the normal operating voltage of the pin. |
| CPL | 4 | 4 | PWR | Charge pump switching node. Connect a X7R, PVDD-rated ceramic capacitor between the CPH and CPL pins. TI recommends a capacitor voltage rating at least twice the normal operating voltage of the pin. |
| DGND | 1 | 1 | GND | Device digital ground |
| DIR | 29 | 29 | I | Direction of motor spinning; When low, phase driving sequence is OUT A → OUT B → OUT C When high, phase driving sequence is OUT A → OUT C → OUT B Connect to GND if not used |
| DRVOFF | 22 | 22 | I | Independent driver shutdown path. Pulling DRVOFF high turns off all external MOSFETs by putting the gate drivers into the pull-down state. This signal bypasses and overrides the digital and control core. |
| DVDD | 32 | 32 | PWR | 1.5V internal regulator output. Connect a X7R, 1 or 2.2µF,10V ceramic capacitor between the DVDD and DGND pins. DVDD capacitor should have an effective capacitance between 0.5μF and 2.8μF after operating voltage (DVDD) and temperature derating. |
| EXT_CLK | 30 | 30 | I | External clock reference input in external clock reference mode. |
| FG | 26 | 26 | O | Motor speed indicator output. Open-drain output requires an external pull-up resistor to 1.8 to 5V. External pull up resistor needs to be connected even if the pin functionality is not used. |
| GHA | 9 | 9 | O | High-side gate driver output. Connect to the gate of the high-side power MOSFET |
| GHB | 13 | 13 | O | High-side gate driver output. Connect to the gate of the high-side power MOSFET |
| GHC | 17 | 17 | O | High-side gate driver output. Connect to the gate of the high-side power MOSFET |
| GLA | 10 | 10 | O | Low-side gate driver output. Connect to the gate of the low-side power MOSFET |
| GLB | 14 | 14 | O | Low-side gate driver output. Connect to the gate of the low-side power MOSFET |
| GLC | 18 | 18 | O | Low-side gate driver output. Connect to the gate of the low-side power MOSFET |
| GND | 2 | 2 | GND | Device power ground |
| GVDD | 6 | 6 | PWR | Gate driver power supply output. Connect a X7R, 30V rated ceramic ≥ 10µF local capacitance between the GVDD and GND pins. TI recommends a capacitor value of >10x C<sub>BSTx </sub>and voltage rating at least twice the normal operating voltage of the pin. |
| LSS | 19 | 19 | PWR | Low side source pin, connect all sources of the external low-side MOSFETs here. This pin is the sink path for the low-side gate driver, and serves as an input to monitor the low-side MOSFET VDS voltage and VSEN_OCP voltage. |
| nFAULT | 31 | 31 | O | Fault indicator. This pin is pulled logic-low with fault condition. Open-drain output requires an external pull-up resistor to 1.8V to 5 V. External pull up resistor needs to be connected even if the pin functionality is not used. |
| PVDD | 3 | 3 | PWR | Gate driver power supply input. Connect to the bridge power supply. Connect a X7R, 0.1µF, >2x PVDD-rated ceramic and >10µF local capacitance between the PVDD and GND pins. TI recommends a capacitor voltage rating at least twice the normal operating voltage of the pin. |
| SCL | 28 | 28 | I | I<sup>2</sup>C clock input |
| SDA | 27 | 27 | I/O | I<sup>2</sup>C data line |
| SHA | 8 | 8 | I/O | High-side source pin. Connect to the high-side power MOSFET source. This pin is an input for the VDS monitor and the output for the high-side gate driver sink. |
| SHB | 12 | 12 | I/O | High-side source pin. Connect to the high-side power MOSFET source. This pin is an input for the VDS monitor and the output for the high-side gate driver sink. |
| SHC | 16 | 16 | I/O | High-side source pin. Connect to the high-side power MOSFET source. This pin is an input for the VDS monitor and the output for the high-side gate driver sink. |
| SN | 21 | 21 | I | Current sense amplifier input. Connect to the low-side of the current shunt resistor. |
| SP | 20 | 20 | I | Low-side current shunt amplifier input. Connect to the low-side power MOSFET source and high-side of the current shunt resistor. |
| SPEED/WAKE | 25 | 25 | I | Multifunction input. Device sleep/wake input. Device speed input; supports analog, PWM or frequency based reference (speed or current or power or voltage) input. |
| Thermal pad | - | - | PWR | Must be connected to ground |


(1)  I = input, O = output, GND = ground pin, PWR = power, NC = no connect


# 5  Specifications


## 5.1  Absolute Maximum Ratings

over operating temperature range (unless otherwise noted)[<sup>(1)</sup>](#MD_ABSMAX_FOOTER1_SF1_SF1_li:1;229:62)

|  |  | MIN | MAX | UNIT |
| --- | --- | --- | --- | --- |
| Power supply pin voltage | PVDD | -0.3 | 65 | V |
| Bootstrap pin voltage | BSTx | -0.3 | 80 | V |
| Bootstrap pin voltage | BSTx with respect to SHx   | -0.3 | 20 | V |
| Bootstrap pin voltage | BSTx with respect to GHx   | -0.3 | 20 | V |
| Charge pump pin voltage | CPL, CPH | -0.3 | V<sub>GVDD</sub> | V |
| Voltage difference between ground pins | GND, DGND,  AGND | -0.3 | 0.3 | V |
| Gate driver regulator pin voltage | GVDD | -0.3 | 20 | V |
| Digital regulator pin voltage | DVDD | -0.3 | 1.7 | V |
| Analog regulator pin voltage | AVDD | -0.3 | 4 | V |
| Logic pin voltage | DRVOFF,  DIR, EXT_CLK, SCL, SDA, SPEED/WAKE | -0.3 | 6 | V |
| Open drain pin output voltage | nFAULT, FG | -0.3 | 6 | V |
| High-side gate drive pin voltage | GHx | -8 | 80 | V |
| Transient 500-ns high-side gate drive pin voltage | GHx | -10 | 80 | V |
| High-side gate drive pin voltage | GHx with respect to SHx | -0.3 | 20 | V |
| High-side source pin voltage | SHx | -8 | 70 | V |
| Transient 500-ns high-side source pin voltage  | SHx | -10 | 72 | V |
| Low-side gate drive pin voltage | GLx with respect to LSS | -0.3 | 20 | V |
| Transient 500-ns low-side gate drive pin voltage <sup>(2)</sup> | GLx with respect to LSS | -1 | 20 | V |
| Low-side gate drive pin voltage | GLx with respect to GVDD |  | 0.3 | V |
| Transient 500-ns low-side gate drive pin voltage | GLx with respect to GVDD |  | 1 | V |
| Low-side source sense pin voltage | LSS | -1 | 1 | V |
| Transient 500-ns low-side source sense pin voltage | LSS | -10 | 8 | V |
| Gate drive current | GHx, GLx | Internally Limited | Internally Limited | A |
| Shunt amplifier input pin voltage | SN, SP | -1 | 1 | V |
| Transient 500-ns shunt amplifier input pin voltage | SN, SP | -10 | 8 | V |
| Ambient temperature, T<sub>A</sub> | Ambient temperature, T<sub>A</sub> | –40 | 125 | °C |
| Junction temperature, T<sub>J</sub> | Junction temperature, T<sub>J</sub> | –40 | 150 | °C |
| Storage temperature, T<sub>stg</sub> | Storage temperature, T<sub>stg</sub> | –65 | 150 | °C |


(1)  Operation outside the Absolute Maximum Ratings may cause permanent device damage. Absolute Maximum Ratings do not imply functional operation of the device at these or any other conditions beyond those listed under Recommended Operating Conditions. If used outside the Recommended Operating Conditions but within the Absolute Maximum Ratings, the device may not be fully functional, and this may affect device reliability, functionality, performance, and shorten the device lifetime

(2)  Supports upto 5A for 500 nS when GLx-LSS is negative


## 5.2  ESD Ratings Auto


|  |  |  |  | VALUE | UNIT |
| --- | --- | --- | --- | --- | --- |
| V<sub>(ESD)</sub> | Electrostatic discharge | Human body model (HBM), per AEC Q100-002 <sup>(1)</sup> HBM ESD Classification Level 2 | Human body model (HBM), per AEC Q100-002 <sup>(1)</sup> HBM ESD Classification Level 2 | ±2000 | V |
| Charged device model (CDM), per AEC Q100-011 CDM ESD Classification Level C4B | Corner pins | ±750 |  |  | V |
| Other pins | ±750 |  |  |  | V |


(1)  AEC Q100-002 indicates that HBM stressing shall be in accordance with the ANSI/ESDA/JEDEC JS-001 specification.


## 5.3  Recommended Operating Conditions

over operating temperature range (unless otherwise noted)

|  |  |  | MIN | NOM | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| V<sub>PVDD</sub> | Power supply voltage | PVDD | 4.5 |  | 60 | V |
| V<sub>PVDD_RAMP</sub> | Power supply voltage ramp rate at power up | PVDD |  |  | 30 | V/us |
| V<sub>BST</sub> | Bootstrap pin voltage with respect to SHx | SPEED/WAKE = High, Outputs are switching  | 4 |  | 20 | V |
| I<sub>AVDD</sub> <sup>(1)</sup> | Regulator external load current | AVDD |  |  | 50 | mA |
| I<sub>TRICKLE</sub> | Trickle charge pump external load current | BSTx |  |  | 2 | µA |
| V<sub>IN</sub> | Logic input voltage | DRVOFF,  DIR, EXT_CLK, SCL, SDA, SPEED/WAKE | 0 |  | 5.5 | V |
| f<sub>PWM</sub> | PWM frequency |  | 0 |  | 75 | kHz |
| V<sub>OD</sub> | Open drain pullup voltage | FG, nFAULT |  |  | 5.5 | V |
| I<sub>OD</sub> | Open drain output current | nFAULT |  |  | -10 | mA |
| I<sub>GS</sub> <sup>(1)</sup> | Total average gate-drive current (Low Side and High Side Combined) | I<sub>GHx</sub>, I<sub>GLx</sub> |  |  | 30 | mA |
| V<sub>SHSL</sub> | Slew Rate on SHx pins |  |  |  | 4 | V/ns |
| C<sub>BOOT</sub> | Capacitor between BSTx and SHx |  |  |  | 4.7 <sup>(2)</sup> | µF |
| C<sub>GVDD</sub> | Capacitor between GVDD and GND |  |  |  | 130 | µF |
| T<sub>A</sub> | Operating ambient temperature | Operating ambient temperature | –40 |  | 125 | °C |
| T<sub>J</sub> | Operating junction temperature | Operating junction temperature | –40 |  | 150 | °C |


(1)  Power dissipation and thermal limits must be observed

(2)  Current flowing through boot diode (DBOOT) needs to be limited for C<sub>BSTx</sub> > 4.7µF.


## 5.4  Thermal Information


| 32 pins | THERMAL METRIC <sup>(1)</sup> | MCF8329A-Q1 | UNIT |
| --- | --- | --- | --- |
| R<sub>θJA </sub> | Junction-to-ambient thermal resistance | 31.3 | °C/W |
| R<sub>θJC(top)</sub> | Junction-to-case (top) thermal resistance | 19.7 | °C/W |
| R<sub>θJB</sub> | Junction-to-board thermal resistance | 10.7 | °C/W |
| Ψ<sub>JT</sub> | Junction-to-top characterization parameter | 0.6 | °C/W |
| Ψ<sub>JB</sub> | Junction-to-board characterization parameter | 10.7 | °C/W |
| R<sub>θJC(bot)</sub> | Junction-to-case (bottom) thermal resistance | 3.7 | °C/W |


(1)  For more information about traditional and new thermal metrics, see the [Semiconductor and IC Package Thermal Metrics](http://www.ti.com/lit/SPRA953) application report.


## 5.5  Electrical Characteristics

4.5 V ≤ V<sub>PVDD</sub> ≤ 60 V, –40°C ≤ T<sub>J</sub> ≤ 150°C (unless otherwise noted). Typical limits apply for T<sub>A</sub> = 25°C, V<sub>PVDD</sub> = 12 V

| PARAMETER | PARAMETER | TEST CONDITIONS | MIN | TYP | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| POWER SUPPLIES (PVDD, GVDD, AVDD, DVDD) | POWER SUPPLIES (PVDD, GVDD, AVDD, DVDD) | POWER SUPPLIES (PVDD, GVDD, AVDD, DVDD) | POWER SUPPLIES (PVDD, GVDD, AVDD, DVDD) | POWER SUPPLIES (PVDD, GVDD, AVDD, DVDD) | POWER SUPPLIES (PVDD, GVDD, AVDD, DVDD) | POWER SUPPLIES (PVDD, GVDD, AVDD, DVDD) |
| I<sub>PVDDQ</sub> | PVDD sleep mode current | V<sub>PVDD </sub>= 12V, V<sub>SPEED/WAKE</sub> = 0, T<sub>A</sub> = 25 °C |  | 3 | 5 | µA |
| V<sub>SPEED/WAKE</sub> = 0, T<sub>A</sub> = 125 °C |  | 3.5 | 6 | µA |  |  |
| I<sub>PVDDS</sub> | PVDD standby mode current | V<sub>PVDD</sub> = 12 V,  V<sub>SPEED/WAKE </sub>< V<sub>EN_SB</sub>, DRVOFF = LOW, T<sub>A</sub> = 25 °C |  | 25 | 28 | mA |
| V<sub>SPEED/WAKE </sub>< V<sub>EN_SB</sub><sub>, </sub>DRVOFF = LOW |  | 25 | 28 | mA |  |  |
| I<sub>PVDD</sub> | PVDD active mode current | V<sub>PVDD</sub> = 12 V, V<sub>SPEED/WAKE</sub> > V<sub>EX_SL</sub>, PWM_FREQ_OUT = 0011b (25 kHz), T<sub>J</sub> = 25 °C, No FETs and motor connected |  | 28 | 30 | mA |
| V<sub>PVDD</sub> = 12 V, V<sub>SPEED/WAKE</sub> > V<sub>EX_SL</sub>, PWM_FREQ_OUT = 0011b (25 kHz), T<sub>J</sub> = 25 °C, No FETs and motor connected |  | 28 | 30 | mA |  |  |
| IL<sub>BSx</sub> | Bootstrap pin leakage current | V<sub>BSTx</sub> = V<sub>SHx </sub>= 60V, V<sub>GVDD</sub> = 0V, V<sub>SPEED/WAKE</sub> = LOW | 5 | 10 | 16 | µA |
| IL<sub>BS_TRAN</sub> | Bootstrap pin active mode transient leakage current  | GLx = GHx = Switching at 20kHz, No FETs connected | 60 | 115 | 300 | µA |
| V<sub>GVDD_RT</sub> | GVDD Gate driver regulator voltage (Room Temperature) | V<sub>PVDD </sub>≥ 40 V, I<sub>GS </sub> = 10 mA, T<sub>J</sub>= 25°C | 11.8 | 13 | 15 | V |
| 22 V ≤V<sub>PVDD </sub>≤ 40 V, I<sub>GS </sub> = 30 mA, T<sub>J</sub>= 25°C | 11.8 | 13 | 15 | V |  |  |
| 8 V ≤V<sub>PVDD </sub>≤ 22 V, I<sub>GS </sub> = 30 mA, T<sub>J</sub>= 25°C | 11.8 | 13 | 15 | V |  |  |
| 6.75 V ≤V<sub>PVDD </sub>≤ 8 V, I<sub>GS </sub> = 10 mA, T<sub>J</sub>= 25°C | 11.8 | 13 | 14.5 | V |  |  |
| 4.5 V ≤V<sub>PVDD </sub>≤ 6.75 V, I<sub>GS </sub> = 10 mA, T<sub>J</sub>= 25°C | 2*V<sub>PVDD</sub> - 1 |  | 13.5 | V |  |  |
| V<sub>GVDD</sub> | GVDD Gate driver regulator voltage  | V<sub>PVDD </sub>≥ 40 V, I<sub>GS </sub> = 10 mA | 11.5 |  | 15.5 | V |
| 22 V ≤V<sub>PVDD </sub>≤ 40 V, I<sub>GS </sub> = 30 mA | 11.5 |  | 15.5 | V |  |  |
| 8 V ≤V<sub>PVDD </sub>≤ 22 V; I<sub>GS </sub> = 30 mA | 11.5 |  | 15.5 | V |  |  |
| 6.75 V ≤V<sub>PVDD </sub>≤ 8 V, I<sub>GS </sub> = 10 mA | 11.5 |  | 14.5 | V |  |  |
| 4.5 V ≤V<sub>PVDD </sub>≤ 6.75 V, I<sub>GS </sub> = 10 mA | 2*V<sub>PVDD</sub> - 1.4 |  | 13.5 | V |  |  |
| V<sub>AVDD_RT</sub> | AVDD Analog regulator voltage (Room Temperature) | V<sub>PVDD </sub>≥ 6 V, 0 mA ≤ I<sub>AVDD</sub> ≤ 50 mA, T<sub>J</sub>= 25°C | 3.2 | 3.3 | 3.34 | V |
| 4.5  ≤ V<sub>PVDD </sub>< 6 V, 0 mA ≤ I<sub>AVDD</sub> ≤ 50 mA, T<sub>J</sub>= 25°C | 3.13 | 3.3 | 3.46 | V |  |  |
| V<sub>AVDD</sub> | AVDD Analog regulator voltage, | V<sub>PVDD</sub> ≥ 6 V, 0 mA ≤ I<sub>AVDD</sub> ≤ 50 mA | 3.2 | 3.3 | 3.4 | V |
| 4.5  ≤ V<sub>PVDD </sub>< 6 V, 0 mA ≤ I<sub>AVDD</sub> ≤ 50 mA | 3.125 | 3.3 | 3.5 | V |  |  |
| V<sub>DVDD</sub> | Digital regulator voltage |  | 1.4 | 1.55 | 1.65 | V |
| GATE DRIVERS (GHx, GLx, SHx, SLx) | GATE DRIVERS (GHx, GLx, SHx, SLx) | GATE DRIVERS (GHx, GLx, SHx, SLx) | GATE DRIVERS (GHx, GLx, SHx, SLx) | GATE DRIVERS (GHx, GLx, SHx, SLx) | GATE DRIVERS (GHx, GLx, SHx, SLx) | GATE DRIVERS (GHx, GLx, SHx, SLx) |
| V<sub>GSHx_LO</sub> | High-side gate drive low level voltage | I<sub>GHx</sub> = -100 mA; V<sub>GVDD </sub>= 12V; No FETs connected | 0.05 | 0.11 | 0.24 | V |
| V<sub>GSHx_HI</sub> | High-side gate drive high level voltage (V<sub>BSTx </sub>- V<sub>GHx</sub>) | I<sub>GHx</sub> = 100 mA; V<sub>GVDD </sub>= 12V; No FETs connected | 0.28 | 0.44 | 0.82 | V |
| V<sub>GSLx_LO</sub> | Low-side gate drive low level voltage | I<sub>GLx</sub> = -100 mA; V<sub>GVDD </sub>= 12V; No FETs connected | 0.05 | 0.11 | 0.27 | V |
| V<sub>GSLx_HI</sub> | Low-side gate drive high level voltage (V<sub>GVDD </sub>- V<sub>GLx</sub>) | I<sub>GLx</sub> = 100 mA; V<sub>GVDD </sub>= 12V; No FETs connected | 0.28 | 0.44 | 0.82 | V |
| R<sub>DS(ON)_PU_HS</sub> | High-side pullup switch resistance | I<sub>GHx</sub> = 100 mA; V<sub>GVDD</sub>= 12V | 2.7 | 4.5 | 8.4 | Ω |
| R<sub>DS(ON)_PD_HS</sub> | High-side pulldown switch resistance | I<sub>GHx</sub> = 100 mA; V<sub>GVDD </sub>= 12V | 0.5 | 1.1 | 2.4 | Ω |
| R<sub>DS(ON)_PU_LS</sub> | Low-side pullup switch resistance | I<sub>GLx</sub> = 100 mA; V<sub>GVDD </sub>= 12V | 2.7 | 4.5 | 8.3 | Ω |
| R<sub>DS(ON)_PD_LS</sub> | Low-side pulldown switch resistance | I<sub>GLx</sub> = 100 mA; V<sub>GVDD </sub>= 12V | 0.5 | 1.1 | 2.8 | Ω |
| I<sub>DRIVEP_HS</sub> | High-side peak source gate current | V<sub>GSHx</sub> = 12V | 550 | 1000 | 1575 | mA |
| I<sub>DRIVEN_HS</sub> | High-side peak sink gate current | V<sub>GSHx</sub> = 0V | 1150 | 2000 | 2675 | mA |
| I<sub>DRIVEP_LS</sub> | Low-side peak source gate current | V<sub>GSLx </sub>= 12V | 550 | 1000 | 1575 | mA |
| I<sub>DRIVEN_LS</sub> | Low-side peak sink gate current | V<sub>GSLx</sub> = 0V | 1150 | 2000 | 2675 | mA |
| R<sub>PD_LS</sub> | Low-side passive pull down | GLx to LSS | 80 | 100 | 120 | kΩ |
| R<sub>PDSA_HS</sub> | High-side semiactive pull down | GHx to SHx, V<sub>GSHx</sub> = 2V | 8 | 10 | 12.5 | kΩ |
| BOOTSTRAP DIODES | BOOTSTRAP DIODES | BOOTSTRAP DIODES | BOOTSTRAP DIODES | BOOTSTRAP DIODES | BOOTSTRAP DIODES | BOOTSTRAP DIODES |
| V<sub>BOOTD</sub> | Bootstrap diode forward voltage | I<sub>BOOT </sub>= 100 µA |  |  | 0.8 | V |
| I<sub>BOOT </sub>= 100 mA |  |  | 1.6 | V |  |  |
| R<sub>BOOTD</sub> | Bootstrap dynamic resistance (ΔV<sub>BOOTD</sub>/ΔI<sub>BOOT</sub>) | I<sub>BOOT </sub>= 100 mA and 50 mA | 4.5 | 5.5 | 9 | Ω |
| LOGIC-LEVEL INPUTS (SCL, SDA, SPEED/WAKE , DIR, EXT_CLK ) | LOGIC-LEVEL INPUTS (SCL, SDA, SPEED/WAKE , DIR, EXT_CLK ) | LOGIC-LEVEL INPUTS (SCL, SDA, SPEED/WAKE , DIR, EXT_CLK ) | LOGIC-LEVEL INPUTS (SCL, SDA, SPEED/WAKE , DIR, EXT_CLK ) | LOGIC-LEVEL INPUTS (SCL, SDA, SPEED/WAKE , DIR, EXT_CLK ) | LOGIC-LEVEL INPUTS (SCL, SDA, SPEED/WAKE , DIR, EXT_CLK ) | LOGIC-LEVEL INPUTS (SCL, SDA, SPEED/WAKE , DIR, EXT_CLK ) |
| V<sub>IL</sub> | Input logic low voltage | AVDD = 3 to 3.6 V |  |  | 0.25*AVDD | V |
| V<sub>IH</sub> | Input logic high voltage | AVDD = 3 to 3.6 V | 0.65*AVDD |  |  | V |
| V<sub>HYS</sub> | Input hysteresis |  | 50 | 500 | 800 | mV |
| I<sub>IL</sub> | Input logic low current | AVDD = 3 to 3.6 V | -0.15 |  | 0.15 | µA |
| I<sub>IH</sub> | Input logic high current | AVDD = 3 to 3.6 V | -0.3 |  | 0.1 | µA |
| R<sub>PD_SPEED</sub> | Input pulldown resistance | SPEED/WAKE pin To GND | 0.6 | 1 | 1.4 | MΩ |
| LOGIC-LEVEL INPUTS (DRVOFF) | LOGIC-LEVEL INPUTS (DRVOFF) | LOGIC-LEVEL INPUTS (DRVOFF) | LOGIC-LEVEL INPUTS (DRVOFF) | LOGIC-LEVEL INPUTS (DRVOFF) | LOGIC-LEVEL INPUTS (DRVOFF) | LOGIC-LEVEL INPUTS (DRVOFF) |
| V<sub>IL</sub> | Input logic low voltage |  |  |  | 0.8 | V |
| V<sub>IH</sub> | Input logic high voltage |  | 2.2 |  |  | V |
| V<sub>HYS</sub> | Input hysteresis |  | 200 | 400 | 650 | mV |
| I<sub>IL</sub> | Input logic low current | Pin Voltage = 0 V | -1 | 0 | 1 | µA |
| I<sub>IH</sub> | Input logic high current | Pin Voltage = 5 V | 7 | 20 | 35 | µA |
| R<sub>PD_DRVOFF</sub> | Input pulldown resistance | DRVOFF To GND | 100 | 200 | 300 | kΩ |
| OPEN-DRAIN OUTPUTS (nFAULT, FG) | OPEN-DRAIN OUTPUTS (nFAULT, FG) | OPEN-DRAIN OUTPUTS (nFAULT, FG) | OPEN-DRAIN OUTPUTS (nFAULT, FG) | OPEN-DRAIN OUTPUTS (nFAULT, FG) | OPEN-DRAIN OUTPUTS (nFAULT, FG) | OPEN-DRAIN OUTPUTS (nFAULT, FG) |
| V<sub>OL</sub> | Output logic low voltage | I<sub>OD</sub> =-5 mA |  |  | 0.4 | V |
| I<sub>OZ</sub> | Output logic high current | V<sub>OD</sub> = 3.3 V | 0 |  | 0.5 | µA |
| SPEED INPUT - ANALOG MODE | SPEED INPUT - ANALOG MODE | SPEED INPUT - ANALOG MODE | SPEED INPUT - ANALOG MODE | SPEED INPUT - ANALOG MODE | SPEED INPUT - ANALOG MODE | SPEED INPUT - ANALOG MODE |
| V<sub>ANA_FS</sub> | Analog full-speed voltage |  | 2.95 | 3 | 3.05 | V |
| V<sub>ANA_RES</sub> | Analog voltage resolution |  |  | 732 |  | μV |
| SPEED INPUT - PWM MODE | SPEED INPUT - PWM MODE | SPEED INPUT - PWM MODE | SPEED INPUT - PWM MODE | SPEED INPUT - PWM MODE | SPEED INPUT - PWM MODE | SPEED INPUT - PWM MODE |
| ƒ<sub>PWM</sub> | PWM input frequency |  | 0.01 |  | 100 | kHz |
| Res<sub>PWM</sub> | PWM input resolution | f<sub>PWM </sub>= 0.01 to 0.35 kHz | 11 | 12 | 13 | bits |
| f<sub>PWM </sub>= 0.35 to 2 kHz | 12 | 13 | 14 | bits |  |  |
| f<sub>PWM </sub>= 2 to 3.5 kHz | 11 | 11.5 | 12 | bits |  |  |
| f<sub>PWM </sub>= 3.5 to 7 kHz | 13 | 13.5 | 14 | bits |  |  |
| f<sub>PWM </sub>= 7 to 14 kHz | 12 | 12.5 | 13 | bits |  |  |
| f<sub>PWM </sub>= 14 to 29.2 kHz | 11 | 11.5 | 12 | bits |  |  |
| f<sub>PWM </sub>= 29.3 to 60 kHz | 10 | 10.5 | 11 | bits |  |  |
| f<sub>PWM </sub>= 60 to 95 kHz | 8 | 9 | 10 | bits |  |  |
| SPEED INPUT - FREQUENCY MODE | SPEED INPUT - FREQUENCY MODE | SPEED INPUT - FREQUENCY MODE | SPEED INPUT - FREQUENCY MODE | SPEED INPUT - FREQUENCY MODE | SPEED INPUT - FREQUENCY MODE | SPEED INPUT - FREQUENCY MODE |
| ƒ<sub>PWM_FREQ</sub> | PWM input frequency range | Duty cycle = 50% | 3 |  | 32767 | Hz |
| SLEEP MODE | SLEEP MODE | SLEEP MODE | SLEEP MODE | SLEEP MODE | SLEEP MODE | SLEEP MODE |
| V<sub>EN_SL</sub> | Analog voltage to enter sleep mode | SPEED_MODE = 00b (analog mode) |  |  | 40 | mV |
| V<sub>EX_SL</sub> | Analog voltage to exit sleep mode |  | 2.6 |  |  | V |
| t<sub>DET_ANA</sub> | Time needed to detect wake up signal on SPEED/WAKE pin | SPEED_MODE = 00b (analog mode), V<sub>SPEED/WAKE</sub> > V<sub>EX_SL</sub> | 0.5 | 1 | 1.5 | μs |
| t<sub>WAKE</sub> | Wakeup time from sleep mode | V<sub>SPEED/WAKE</sub> > V<sub>EX_SL </sub>to DVDD voltage available, SPEED_MODE = 00b (analog mode) |  | 3 | 5 | ms |
| t<sub>EX_SL_DR_ANA</sub> | Time taken to drive motor after exiting from sleep mode | SPEED_MODE = 00b (analog mode) V<sub>SPEED/WAKE</sub> > V<sub>EX_SL</sub>, ISD detection disabled |  |  | 30 | ms |
| t<sub>DET_PWM</sub> | Time needed to detect wake up signal on SPEED pin | SPEED_MODE = 01b (PWM mode) or 11b (Frequency mode), V<sub>SPEED/WAKE</sub> > V<sub>IH</sub> | 0.5 | 1 | 1.5 | μs |
| t<sub>WAKE_PWM</sub> | Wakeup time from sleep mode | V<sub>SPEED/WAKE</sub> > V<sub>IH </sub>to DVDD voltage available and release nFault, SPEED_MODE = 01b (PWM mode) or 11b (Frequency mode) |  | 3 | 5 | ms |
| t<sub>EX_SL_DR_PWM</sub> | Time taken to drive motor after wakeup from sleep state | SPEED_MODE = 01b (PWM mode) V<sub>SPEED/WAKE</sub> > V<sub>IH</sub>, ISD detection disabled |  |  | 30 | ms |
| t<sub>DET_SL_ANA</sub> | Time needed to detect sleep command | SPEED_MODE = 00b (analog mode) V<sub>SPEED/WAKE</sub> < V<sub>EN_SL,  </sub> SLEEP_ENTRY_TIME = 00b or 01b | 0.5 | 1 | 2 | ms |
| t<sub>DET_SL_PWM</sub> | Time needed to detect sleep command | SPEED_MODE = 01b (PWM mode) or 11b (Frequency mode), V<sub>SPEED/WAKE</sub> < V<sub>IL</sub>(PWM mode and Frequency mode),  SLEEP_ENTRY_TIME = 00b | 0.035 | 0.05 | 0.065 | ms |
| SPEED_MODE = 01b (PWM mode),  or 11b (Frequency mode), V<sub>SPEED/WAKE</sub> < V<sub>IL</sub>(PWM mode and Frequency mode),  SLEEP_ENTRY_TIME = 01b | 0.14 | 0.2 | 0.26 | ms |  |  |
| SPEED_MODE = 01b (PWM mode) or 11b (Frequency mode) or 00b (analog mode), V<sub>SPEED/WAKE</sub> < V<sub>IL</sub>(PWM mode and Frequency mode), V<sub>SPEED/WAKE</sub> < V<sub>EN_SL</sub> (analog mode),  SLEEP_ENTRY_TIME = 10b | 14 | 20 | 26 | ms |  |  |
| SPEED_MODE = 01b (PWM mode) or 11b (Frequency mode) or 00b (analog mode), V<sub>SPEED/WAKE</sub> < V<sub>IL</sub>(PWM mode and Frequency mode), V<sub>SPEED/WAKE</sub> < V<sub>EN_SL</sub> (analog mode),  SLEEP_ENTRY_TIME = 11b | 140 | 200 | 260 | ms |  |  |
| t<sub>EN_SL</sub> | Time needed to stop driving motor after detecting sleep command | V<sub>SPEED/WAKE</sub> < V<sub>EN_SL </sub>(analog mode) or V<sub>SPEED/WAKE</sub> < V<sub>IL </sub>(PWM and frequency mode) |  | 1 | 2 | ms |
| STANDBY MODE | STANDBY MODE | STANDBY MODE | STANDBY MODE | STANDBY MODE | STANDBY MODE | STANDBY MODE |
| t<sub>EX_SB_DR_ANA</sub> | Time taken to drive motor after exiting standby mode | SPEED_MODE = 00b (analog mode) V<sub>SPEED</sub> > V<sub>EN_SB</sub>, ISD detection disabled |  |  | 6 | ms |
| t<sub>EX_SB_DR_PWM</sub> | Time taken to drive motor after exiting standby mode | SPEED_MODE = 01b (PWM mode) V<sub>SPEED</sub> > V<sub>IH</sub>, ISD detection disabled |  |  | 6 | ms |
| t<sub>DET_SB_ANA</sub> | Time needed to detect standby mode | SPEED_MODE = 00b (analog mode) V<sub>SPEED</sub> < V<sub>EN_SB</sub> | 0.5 | 1 | 2 | ms |
| t<sub>EN_SB_PWM</sub> | Time needed to detect standby command | SPEED_MODE = 01b (PWM mode) or 11b (Frequency mode), V<sub>SPEED</sub> < V<sub>IL</sub>, SLEEP_ENTRY_TIME = 00b | 0.035 | 0.05 | 0.065 | ms |
| SPEED_MODE = 01b (PWM mode) or 11b (Frequency mode), V<sub>SPEED</sub> < V<sub>IL</sub>, SLEEP_ENTRY_TIME = 01b | 0.14 | 0.2 | 0.26 | ms |  |  |
| SPEED_MODE = 01b (PWM mode) or 11b (Frequency mode), V<sub>SPEED</sub> < V<sub>IL</sub>, SLEEP_ENTRY_TIME = 10b | 14 | 20 | 26 | ms |  |  |
| SPEED_MODE = 01b (PWM mode) or 11b (Frequency mode), V<sub>SPEED</sub> < V<sub>IL</sub>, SLEEP_ENTRY_TIME = 11b | 140 | 200 | 260 | ms |  |  |
| t<sub>EN_SB_DIG</sub> | Time needed to detect standby mode | SPEED_MODE = 10b (I2C mode), SPEED_CMD = 0 |  | 1 | 2 | ms |
| t<sub>EN_SB</sub> | Time needed to stop driving motor after detecting standby command | V<sub>SPEED</sub> < V<sub>EN_SL </sub>(analog mode) or V<sub>SPEED</sub> < V<sub>IL </sub>(PWM mode) or SPEED command = 0 (I2C mode) |  | 1 | 2 | ms |
| OSCILLATOR | OSCILLATOR | OSCILLATOR | OSCILLATOR | OSCILLATOR | OSCILLATOR | OSCILLATOR |
| f<sub>OSCREF</sub> | External clock reference | EXT_CLK_CONFIG = 000b |  | 8 |  | kHz |
| EXT_CLK_CONFIG = 001b |  | 16 |  | kHz |  |  |
| EXT_CLK_CONFIG = 010b |  | 32 |  | kHz |  |  |
| EXT_CLK_CONFIG = 011b |  | 64 |  | kHz |  |  |
| EXT_CLK_CONFIG = 100b |  | 128 |  | kHz |  |  |
| EXT_CLK_CONFIG = 101b |  | 256 |  | kHz |  |  |
| EXT_CLK_CONFIG = 110b |  | 512 |  | kHz |  |  |
| EXT_CLK_CONFIG = 111b |  | 1024 |  | kHz |  |  |
| PROTECTION CIRCUITS | PROTECTION CIRCUITS | PROTECTION CIRCUITS | PROTECTION CIRCUITS | PROTECTION CIRCUITS | PROTECTION CIRCUITS | PROTECTION CIRCUITS |
| V<sub>AVDD_UVLO</sub> | Regulator undervoltage lockout (AVDD-UVLO) | Supply rising | 2.6 | 2.7 | 2.8 | V |
| Supply falling | 2.6 | 2.7 | 2.8 | V |  |  |
| V<sub>AVDD_UVLO_HYS</sub> | Regulator UVLO hysteresis | Rising to falling threshold | 150 | 190 | 240 | mV |
| t<sub>AVDD_UVLO_DEG</sub> | Regulator UVLO deglitch time |  |  | 5 |  | µs |
| V<sub>DVDD_UVLO</sub> | Digital regulator undervoltage lockout (DVDD-UVLO) | Supply rising | 1.2 | 1.25 | 1.32 | V |
| V<sub>DVDD_UVLO</sub> | Digital regulator undervoltage lockout (DVDD-UVLO) | Supply falling | 1.25 | 1.35 | 1.45 | V |
| V<sub>PVDD_UV</sub> | PVDD undervoltage lockout threshold | V<sub>PVDD</sub> rising | 4.3 | 4.4 | 4.5 | V |
| V<sub>PVDD</sub> falling | 4 | 4.1 | 4.25 |  |  | V |
| V<sub>PVDD_UV_HYS</sub> | PVDD undervoltagelockout  hysteresis | Rising to falling threshold | 225 | 265 | 325 | mV |
| t<sub>PVDD_UV_DG</sub> | PVDD undervoltage deglitch time |  | 10 | 20 | 30 | µs |
| V<sub>AVDD_POR</sub> | AVDD supply POR threshold | AVDD rising | 2.7 | 2.85 | 3.0 | V |
| AVDD falling | 2.5 | 2.65 | 2.8 |  |  | V |
| V<sub>AVDD_POR_HYS</sub> | AVDD POR hysteresis | Rising to falling threshold | 170 | 200 | 250 | mV |
| t<sub>AVDD_POR_DG</sub> | AVDD POR deglitch time |  | 7 | 12 | 22 | µs |
| V<sub>GVDD_UV</sub> | GVDD undervoltage threshold | V<sub>GVDD</sub> rising | 7.3 | 7.5 | 7.8 | V |
| V<sub>GVDD</sub> falling | 6.4 | 6.7 | 6.9 | V |  |  |
| V<sub>GVDD_UV_HYS</sub> | GVDD undervoltage hysteresis | Rising to falling threshold | 800 | 900 | 1000 | mV |
| t<sub>GVDD_UV_DG</sub> | GVDD undervoltage deglitch time |  | 5 | 10 | 15 | µs |
| V<sub>BST_UV</sub> | Bootstrap undervoltage threshold | V<sub>BSTx</sub>- V<sub>SHx</sub>; V<sub>BSTx</sub> rising | 3.9 | 4.45 | 5 | V |
| V<sub>BSTx</sub>- V<sub>SHx</sub>; V<sub>BSTx</sub> falling | 3.7 | 4.2 | 4.8 | V |  |  |
| V<sub>BST_UV_HYS</sub> | Bootstrap undervoltage hysteresis | Rising to falling threshold | 150 | 220 | 285 | mV |
| t<sub>BST_UV_DG</sub> | Bootstrap undervoltage deglitch time |  | 2 | 4 | 6 | µs |
| V<sub>DS_LVL</sub> | V<sub>DS</sub> overcurrent protection threshold Reference  | SEL_VDS_LVL = 0000 | 0.04 | 0.06 | 0.08 | V |
| SEL_VDS_LVL = 0001 | 0.09 | 0.12 | 0.15 | V |  |  |
| SEL_VDS_LVL = 0010 | 0.14 | 0.18 | 0.23 | V |  |  |
| SEL_VDS_LVL = 0011 | 0.19 | 0.24 | 0.29 | V |  |  |
| SEL_VDS_LVL = 0100 | 0.23 | 0.3 | 0.37 | V |  |  |
| SEL_VDS_LVL = 0101 | 0.3 | 0.36 | 0.43 | V |  |  |
| SEL_VDS_LVL = 0110 | 0.35 | 0.42 | 0.5 | V |  |  |
| SEL_VDS_LVL = 0111 | 0.4 | 0.48 | 0.56 | V |  |  |
| SEL_VDS_LVL = 1000 | 0.5 | 0.6 | 0.7 | V |  |  |
| SEL_VDS_LVL = 1001 | 0.65 | 0.8 | 0.9 | V |  |  |
| SEL_VDS_LVL = 1010 | 0.85 | 1 | 1.15 | V |  |  |
| SEL_VDS_LVL = 1011 | 1 | 1.2 | 1.34 | V |  |  |
| SEL_VDS_LVL = 1100 | 1.2 | 1.4 | 1.58 | V |  |  |
| SEL_VDS_LVL = 1101 | 1.4 | 1.6 | 1.78 | V |  |  |
| SEL_VDS_LVL = 1110 | 1.6 | 1.8 | 2 | V |  |  |
| SEL_VDS_LVL = 1111 | 1.7 | 2 | 2.2 | V |  |  |
| V<sub>SENSE_LVL</sub> | V<sub>SENSE</sub> overcurrent protection threshold | LSS to GND pin = 0.5V | 0.48 | 0.5 | 0.52 | V |
| t<sub>DS_BLK</sub> | V<sub>DS</sub> overcurrent protection blanking time  |  | 0.5 | 1 | 2.7 | µs |
| t<sub>DS_DG</sub> | V<sub>DS</sub> and V<sub>SENSE </sub>overcurrent protection deglitch time  |  | 1.5 | 3 | 5 | µs |
| t<sub>SD_SINK_DIG</sub> | DRVOFF peak sink current duration |  | 3 | 5 | 7 | µs |
| t<sub>SD_DIG</sub> | DRVOFF digital shutdown delay |  | 0.5 | 1.5 | 2.2 | µs |
| t<sub>SD</sub> | DRVOFF analog shutdown delay |  | 7 | 14 | 21 | µs |
| T<sub>OTSD</sub> | Thermal shutdown temperature | T<sub>J</sub> rising | 160 | 170 | 187 | °C |
| T<sub>HYS</sub> | Thermal shutdown hysteresis |  | 16 | 20 | 23 | °C |
| I<sup>2</sup>C Serial Interface | I<sup>2</sup>C Serial Interface | I<sup>2</sup>C Serial Interface | I<sup>2</sup>C Serial Interface | I<sup>2</sup>C Serial Interface | I<sup>2</sup>C Serial Interface | I<sup>2</sup>C Serial Interface |
| V<sub>I2C_L</sub> | LOW-level input voltage |  | -0.5 |  | 0.3*AVDD | V |
| V<sub>I2C_H</sub> | HIGH-level input voltage |  | 0.7*AVDD |  | 5.5 | V |
| V<sub>I2C_HYS</sub> | Hysterisis |  | 0.05*AVDD |  |  | V |
| V<sub>I2C_OL</sub> | LOW-level output voltage | open-drain at 2mA sink current | 0 |  | 0.4 | V |
| I<sub>I2C_OL</sub> | LOW-level output current | V<sub>I2C_OL </sub>= 0.6V |  |  | 6 | mA |
| I<sub>I2C_IL</sub> | Input current on SDA and SCL |  | -10 <sup>(1)</sup> |  | 10 <sup>(1)</sup> | µA |
| C<sub>i</sub> | Capacitance for SDA and SCL |  |  |  | 10 | pF |
| t<sub>of</sub> | Output fall time from V<sub>I2C_H</sub>(min) to V<sub>I2C_L</sub>(max) | Standard Mode |  |  | 250 <sup>(2)</sup> | ns |
| Fast Mode |  |  | 250 <sup>(2)</sup> | ns |  |  |
| t<sub>SP</sub> | Pulse width of spikes that must be suppressed by the input filter | Fast Mode | 0 |  | 50 <sup>(3)</sup> | ns |
| EEPROM | EEPROM | EEPROM | EEPROM | EEPROM | EEPROM | EEPROM |
| EE<sub>Prog</sub> | Programing voltage |  | 1.35 | 1.5 | 1.65 | V |
| EE<sub>RET</sub> | Retention | T<sub>A </sub>= 25 ℃ |  | 100 |  | Years |
| T<sub>J </sub>= -40 to 150 ℃ | 10 |  |  | Years |  |  |
| EE<sub>END</sub> | Endurance | T<sub>J </sub>= -40 to 150 ℃ | 1000 |  |  | Cycles |
| T<sub>J </sub>= -40 to 85 ℃ | 20000 |  |  | Cycles |  |  |


(1)  If AVDD is switched off, I/O pins must not obstruct the SDA and SCL lines.

(2)  The maximum tf for the SDA and SCL bus lines (300 ns) is longer than the specified maximum tof for the output stages (250 ns). This allows series protection resistors (Rs) to be connected between the SDA/SCL pins and the SDA/SCL bus lines without exceeding the maximum specified tf.

(3)  Input filters on the SDA and SCL inputs suppress noise spikes of less than 50 ns


## 5.6  Characteristics of the SDA and SCL bus for Standard and Fast mode

over operating free-air temperature range (unless otherwise noted)

| PARAMETER | PARAMETER | TEST CONDITIONS | MIN | NOM | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| Standard-mode | Standard-mode | Standard-mode | Standard-mode | Standard-mode | Standard-mode | Standard-mode |
| f<sub>SCL </sub> | SCL clock frequency |  | 0 |  | 100 | kHz |
| t<sub>HD_STA</sub> | Hold time (repeated) START condition | After this period, the first clock pulse is generated | 4 |  |  | µs |
| t<sub>LOW</sub> | LOW period of the SCL clock |  | 4.7 |  |  | µs |
| t<sub>HIGH</sub> | HIGH period of the SCL clock |  | 4 |  |  | µs |
| t<sub>SU_STA</sub> | Set-up time for a repeated START condition |  | 4.7 |  |  | µs |
| t<sub>HD_DAT</sub> | Data hold time <sup>(1)</sup> | I2C bus devices | 0 <sup>(2)</sup> |  | <sup>(3)</sup> | µs |
| t<sub>SU_DAT</sub> | Data set-up time |  | 250 |  |  | ns |
| t<sub>r</sub> | Rise time for both SDA and SCL signals |  |  |  | 1000 | ns |
| t<sub>f</sub> | Fall time of both SDA and SCL signals <sup>(2)</sup> <sup>(5)</sup> <sup>(6)</sup> <sup>(7)</sup> |  |  |  | 300 | ns |
| t<sub>SU_STO</sub> | Set-up time for STOP condition |  | 4 |  |  | µs |
| t<sub>BUF</sub> | Bus free time between STOP and START condition |  | 4.7 |  |  | µs |
| C<sub>b</sub> | Capacitive load for each bus line <sup>(8)</sup> |  |  |  | 400 | pF |
| t<sub>VD_DAT</sub> | Data valid time <sup>(9)</sup> |  |  |  | 3.45 <sup>(3)</sup> | µs |
| t<sub>VD_ACK</sub> | Data valid acknowledge time <sup>(10)</sup> |  |  |  | 3.45 <sup>(3)</sup> | µs |
| V<sub>nL</sub> | Noise margin at the LOW level | For each connected device (including hysteresis) | 0.1*AVDD |  |  | V |
| V<sub>nh</sub> | Noise margin at the HIGHlevel | For each connected device (including hysteresis) | 0.2*AVDD |  |  | V |
| Fast-mode | Fast-mode | Fast-mode | Fast-mode | Fast-mode | Fast-mode | Fast-mode |
| f<sub>SCL </sub> | SCL clock frequency |  | 0 |  | 400 | KHz |
| t<sub>HD_STA</sub> | Hold time (repeated) START condition | After this period, the first clock pulse is generated | 0.6 |  |  | µs |
| t<sub>LOW</sub> | LOW period of the SCL clock |  | 1.3 |  |  | µs |
| t<sub>HIGH</sub> | HIGH period of the SCL clock |  | 0.6 |  |  | µs |
| t<sub>SU_STA</sub> | Set-up time for a repeated START condition |  | 0.6 |  |  | µs |
| t<sub>HD_DAT</sub> | Data hold time <sup>(1)</sup> |  | 0 <sup>(2)</sup> |  | <sup>(3)</sup> | µs |
| t<sub>SU_DAT</sub> | Data set-up time |  | 100 <sup>(4)</sup> |  |  | ns |
| t<sub>r</sub> | Rise time for both SDA and SCL signals |  | 20 |  | 300 | ns |
| t<sub>f</sub> | Fall time of both SDA and SCL signals <sup>(2)</sup> <sup>(5)</sup> <sup>(6)</sup> <sup>(7)</sup> |  | 20 x (AVDD/5.5V) |  | 300 | ns |
| t<sub>SU_STO</sub> | Set-up time for STOP condition |  | 0.6 |  |  | µs |
| t<sub>BUF</sub> | Bus free time between STOP and START condition |  | 1.3 |  |  | µs |
| C<sub>b</sub> | Capacitive load for each bus line <sup>(8)</sup> |  |  |  | 400 | pF |
| t<sub>VD_DAT</sub> | Data valid time <sup>(9)</sup> |  |  |  | 0.9 <sup>(3)</sup> | µs |
| t<sub>VD_ACK</sub> | Data valid acknowledge time <sup>(10)</sup> |  |  |  | 0.9 <sup>(3)</sup> | µs |
| V<sub>nL</sub> | Noise margin at the LOW level | For each connected device (including hysteresis) | 0.1*AVDD |  |  | V |
| V<sub>nh</sub> | Noise margin at the HIGHlevel | For each connected device (including hysteresis) | 0.2*AVDD |  |  | V |


(1)  t<sub>HD_DAT</sub> is the data hold time that is measured from the falling edge of SCL, applies to data in transmission and the acknowledge.

(2)  A device must internally provide a hold time of at least 300 ns for the SDA signal (with respect to the V<sub>IH(min)</sub> of the SCL signal) to bridge the undefined region of the falling edge of SCL.

(3)  The maximum t<sub>HD_DAT</sub> could be 3.45 µs and .9 µs for Standard-mode and Fast-mode, but must be less than the maximum of t<sub>VD_DAT</sub> or t<sub>VD_ACK</sub> by a transition time. This maximum must only be met if the device does not stretch the LOW period (t<sub>LOW</sub>) of the SCL signal. If the clock stretched the SCL, the data must be valid by the set-up time before it releases the clock.

(4)  A Fast-mode I2C-bus device can be used in a Standard-mode I2C-bus system, but the requirement t<sub>SU_DAT</sub> 250 ns must then be met. This will automatically be the case if the device does not stretch the LOW period of the SCL signal. If such a device does stretch the LOW period of the SCL signal, it must output the next data bit to the SDA line t<sub>r(max)</sub> + t<sub>SU_DAT</sub> = 1000 + 250 = 1250 ns (according to the Standard-mode I2C-bus specification) before the SCL line is released. Also the acknowledge timing must meet this set-up time.

(5)  If mixed with HS-mode devices, faster fall times according to Table 10 are allowed.

(6)  The maximum t<sub>f</sub> for the SDA and SCL bus lines is specified at 300 ns. The maximum fall time for the SDA output stage t<sub>f</sub> is specified at 250 ns. This allows series protection resistors to be connected in between the SDA and the SCL pins and the SDA/SCL bus lines without exceeding the maximum specified t<sub>f</sub>.

(7)  In Fast-mode Plus, fall time is specified the same for both output stage and bus timing. If series resistors are used, designers should allow for this when considering bus timing.

(8)  The maximum bus capacitance allowable may vary from the value depending on the actual operating voltage and frequency of the application.

(9)  t<sub>VD_DAT</sub> = time for data signal from SCL LOW to SDA output (HIGH or LOW, depending on which one is worse).

(10)  t<sub>VD_ACK</sub> = time for Acknowledgement signal from SCL LOW to SDA output (HIGH or LOW, dependging on which one is worse).


## 5.7  Typical Characteristics

![MCF8329A-Q1 GVDD Voltage over PVDD Voltage](https://www.ti.com/ods/images/SLLSFV1/GUID-20211211-SS0I-ZSZW-PNZX-JHPD4GGBBTVL-low.svg)

**Figure 5-1 GVDD Voltage over PVDD Voltage**

![MCF8329A-Q1 Bootstrap Diode Resistance over Junction Temperature](https://www.ti.com/ods/images/SLLSFV1/GUID-20211211-SS0I-CQ5V-SVXP-NF0SJZK0BSJL-low.svg)

**Figure 5-3 Bootstrap Diode Resistance over Junction Temperature**

![MCF8329A-Q1 Driver Peak Current over Junction Temperature](https://www.ti.com/ods/images/SLLSFV1/GUID-20211211-SS0I-TSVV-DGF4-DZ424K5HFHZG-low.svg)

**Figure 5-2 Driver Peak Current over Junction Temperature**

![MCF8329A-Q1 Bootstrap Diode Forward Voltage Drop over Junction Temperature](https://www.ti.com/ods/images/SLLSFV1/GUID-20211211-SS0I-JNBZ-MFVS-8N12CDMMHWW2-low.svg)

**Figure 5-4 Bootstrap Diode Forward Voltage Drop over Junction Temperature**


# 6  Detailed Description


## 6.1  Overview

The MCF8329A-Q1 provides a code-free sensorless FOC solution with an integrated three-phase gate driver for driving high-speed brushless-DC motors. Motor current is sensed using an integrated current sensing amplifier and one external sense resistor in a single shunt configuration. The device can operate from a single power supply and integrates an LDO that generates the necessary voltage rails for the device and can be used to power external circuits.

MCF8329A-Q1 implements single shunt sensorless FOC; therefore, an external microcontroller is not required to spin the brushless DC motor. The algorithm is implemented in a fixed-function state machine, so no coding is needed. The algorithm is highly configurable through register settings ranging from motor start-up behavior to closed-loop operation. Register settings can be stored in non-volatile EEPROM, which allows the device to operate stand-alone once it has been configured. The device receives a reference command through a PWM input, analog voltage, frequency input, or I<sup>2</sup>C command. The device can be configured to control motor speed (speed control) DC input power (power control) or the quadrature (q-) axis current (current control) or directly the voltage applied (vq and vd) to the motor (modulation index control or open loop voltage control).

In-built protection features include power-supply undervoltage lockout (PVDD_UVLO), regulator undervoltage lockout (GVDD_UV), bootstrap undervoltage lockout (BST_UV), VDS overcurrent protection (OCP), sense resistor overcurrent protection (SEN_OCP), motor lock detection and overtemperature shutdown (OTSD). Fault events are indicated by the nFAULT pin with detailed fault information available in the status registers.

A standard I<sup>2</sup>C provides a simple method for configuring the various device settings and reading fault diagnostic information through an external controller.

The MCF8329A-Q1 device is available in a 0.5mm pin pitch, wettable flank, WQFN surface-mount package. The WQFN package size is 6mm × 4mm with a height of 0.8mm.


## 6.2  Functional Block Diagram

![MCF8329A-Q1 MCF8329A-Q1 Functional Block Diagram](https://www.ti.com/ods/images/SLLSFV1/GUID-20240302-SS0I-8BBT-P9XN-RPPP6FBGQ2K9-low.svg) 

**Figure 6-1 MCF8329A-Q1 Functional Block Diagram**


## 6.3  Feature Description

[Table 6-1](#GUID-83B71DF8-0D8D-4F8F-8FD5-08C04A70CDF5) lists the recommended values of the external components for the driver.

**Table 6-1 MCF8329A-Q1 External Components**


| COMPONENTS | PIN 1 | PIN 2 | RECOMMENDED |
| --- | --- | --- | --- |
| C<sub>PVDD1</sub> | PVDD | GND | X7R, 0.1µF, >2x PVDD-rated |
| C<sub>PVDD2</sub> | PVDD | GND | ≥ 10µF, >2x PVDD-rated |
| C<sub>CP</sub> | CPH | CPL | X7R, 470nF, PVDD-rated |
| C<sub>AVDD</sub> | AVDD | AGND | X7R, 1µF or 2.2µF, 10V |
| C<sub>GVDD</sub> | GVDD | GND | X7R, ≥10uF, 30V |
| C<sub>DVDD</sub> | DVDD | DGND | X7R, 1µF, 10V |
| C<sub>BSTx</sub> | BSTx | SHx | X7R, 1µF, 25V |
| R<sub>nFAULT</sub> | 1.8 to 5 V Supply | nFAULT | 5.1kΩ, Pullup resistor |
| R<sub>FG</sub> | 1.8 to 5 V Supply | FG | 5.1kΩ, Pullup resistor |
| R<sub>SDA</sub> | 1.8 to 5 V Supply | SDA | 5.1kΩ, Pullup resistor |
| R<sub>SCL</sub> | 1.8 to 5 V Supply | SCL | 5.1kΩ, Pullup resistor |
| R<sub>DIR</sub> | DIR | AGND | Optional ≤ 10kΩ resistor for better noise immunity, if DIR pin is used |


Note:

1.  AVDD and DVDD capacitors should have an effective capacitance between 0.5μF and 2.8μF after operating voltage (AVDD or DVDD) and temperature derating.
2.  The internal pull-up resistor (to AVDD) for both FG and nFAULT pins can be enabled by configuring PULLUP_ENABLE to 1b. Any change to this bit needs to be written to EEPROM followed by a power recycle to take effect. When PULLUP_ENABLE is set to 1b, no external pull-up resistor should be provided.
3.  The FG and nFAULT pins needs to be pulled high prior to the device entering active state if the external supply is used with external pull up and with internal pull up disabled.
4.  DIR pin has an internal pull-down resistor of 100-kΩ. When this pin is used, an additional pull-down resistor of 10-kΩ may be added externally for additional noise immunity.
5.  SPEED/WAKE pin has an internal pull-down resistor of 1-MΩ. In analog speed input mode, a suitable R-C filter can be added externally to reduce noise. In PWM speed input mode, SPEED_PIN_GLITCH_FILTER can be appropriately configured for glitch rejection.


### 6.3.1  Three Phase BLDC Gate Drivers

The MCF8329A-Q1 device integrates three half-bridge gate drivers, each capable of driving high-side and low-side N-channel power MOSFETs. A charge pump is used to generate the GVDD to supply the correct gate bias voltage across a wide operating voltage range. The low side gate outputs are driven directly from GVDD, while the high side gate outputs are driven using a bootstrap circuit with an integrated diode, and an internal trickle charge pump provides support for 100% duty cycle operation.


### 6.3.2  Gate Drive Architecture

The gate driver device use a complimentary, push-pull topology for both the high-side and low-side drivers. This topology allows for both a strong pullup and pulldown of the external MOSFET gates. The low side gate drivers are supplied directly from the GVDD regulator supply. For the high-side gate drivers a bootstrap diode and capacitor are used to generate the floating high-side gate voltage supply. The bootstrap diode is integrated and an external bootstrap capacitor is used on the BSTx pin. To support 100% duty cycle control, a trickle charge pump is integrated into the device. The trickle charge pump is connected to the BSTx node to prevent voltage drop due to the leakage currents of the driver and external MOSFET.

The high-side gate driver has semi-active pull down and low side gate has passive pull down to help prevent the external MOSFET from turning ON during sleep state or when power supply is disconnected.

![MCF8329A-Q1 Gate Driver Block Diagram](https://www.ti.com/ods/images/SLLSFV1/GUID-20221218-SS0I-RSZH-51T8-XF1HJCP2Q07Q-low.svg)

**Figure 6-2 Gate Driver Block Diagram**


#### 6.3.2.1  Dead time and Cross Conduction Prevention

The MCF8329A-Q1 provides digital dead time insertion between the high side and low side PWM signals, to prevent both external MOSFETs of each half-bridge from switching on at the same time. Digital dead time can be adjusted between 50 ns and 1000 ns by configuring the EEPROM register DIG_DEAD_TIME.


### 6.3.3  AVDD Linear Voltage Regulator

A 3.3V, 50mA linear regulator is integrated into the MCF8329A-Q1 and is available for use by external circuitry. This regulator can provide the supply voltage for a low-power MCU or other circuitry with low supply current requirements. The output of the AVDD regulator is bypassed near the AVDD pin with a X7R, 1µF or 2.2µF, 10V ceramic capacitor routed back to the AGND pin.

![MCF8329A-Q1 AVDD Linear Regulator Block Diagram](https://www.ti.com/ods/images/SLLSFV1/GUID-20201112-CA0I-C6Z1-G6F6-MFSDFC0WSD0G-low.gif) 

**Figure 6-3 AVDD Linear Regulator Block Diagram**

The power dissipated in the device by the AVDD linear regulator can be calculated as shown in [Equation 1](#EQUATION-BLOCK_B53_3NR_B5B),


Equation 1. $$P = \left(V_{PVDD} - V_{AVDD}\right) \times I_{AVDD}$$


For example, at a V<sub>PVDD</sub> of 24V, drawing 20mA out of AVDD (output at 3.3V) results in power dissipation as shown in [Equation 2](#X1044),

Equation 2. ![MCF8329A-Q1](https://www.ti.com/ods/images/SLLSFV1/GUID-6F1BA052-73C5-42BA-A341-BB93A32819E2-low.gif)


### 6.3.4  Low-Side Current Sense Amplifier

MCF8329A-Q1 integrates a high-performance low-side current sense amplifier for current measurements using a low-side shunt resistor. Low-side current measurements are used for multiple control features and protections in MCF8329A-Q1. The current sense amplifiers feature configurable gain (5 V/V, 10 V/V, 20 V/V, and 40 V/V) through EEPROM setting. The current sense amplifier can support sensing bidirectional current through the low-side shunt resistor.

MCF8329A-Q1 internally generates common mode voltage of V<sub>REF</sub>/2 to obtain maximum resolution for current measurement for both the direction of current. V<sub>REF</sub> is an internally generated reference voltage having a typical value of 3 V.

Use [Equation 3](#EQUATION-BLOCK_EHQ_CQT_TVB)to design the value of the shunt resistor (R<sub>SENSE</sub>) connected between SP and SN, for the range of current (I) through the low side single shunt and the selected current sense amplifier gain configured by EEPROM bits CSA_GAIN.


Equation 3. $$R_{SENSE} = \frac{V_{SO} - \frac{V_{REF}}{2}}{CSA\_GAIN \times I}$$


Note: TI recommends designing the shunt resistor R<sub>SENSE</sub>value to limit the current sense amplifier output voltage (V<sub>SO</sub>) between 0.25 V and 3 V across the operating range of low-side single shunt resistor current (I) at the selected gain of CSA_GAIN. Appropriately size the shunt resistor power rating based on the I<sup>2</sup>R<sub>SENSE</sub> losses with sufficient margin.


### 6.3.5  Device Interface Modes

MCF8329A-Q1 supports the I<sup>2</sup>C interface to provide end application design suited for either flexibility or simplicity. Along with the I<sup>2</sup>C interface, the device supports I/O pins like FG, nFAULT, DIR, EXT_CLK, SPEED/WAKE, DRVOFF.


#### 6.3.5.1  Interface - Control and Monitoring

-   **DIR**: The DIR pin decides the direction of motor spin; when driven 'High', the sequence is OUTA → OUTB → OUTC, and when driven 'Low' the sequence is OUTA → OUTC → OUTB. DIR pin input can be overwritten by configuring DIR_INPUT over the I<sup>2</sup>C interface.
-   **DRVOFF**: When DRVOFF pin is driven 'High', MCF8329A-Q1 turns off all external MOSFETs by putting the gate drivers into the pull-down state. When DRVOFF is driven 'Low', MCF8329A-Q1 returns to normal state of operation, as if restarting the motor. DRVOFF does not cause the device to go to sleep or standby mode; the digital core is still active.
-   **SPEED/WAKE**: The SPEED/WAKE pin is used to control motor speed (or power or current or modulation index) and wake up MCF8329A-Q1 from sleep mode. SPEED/WAKE pin can be configured to accept PWM, frequency or analog control input signals. The pin is used to enter and exit from sleep and standby mode.
-   **EXT_CLK**: The EXT_CLK pin can be used to provide an external clock reference and in that case the internal clock gets calibrated using the external clock.
-   **FG**: The FG pin provides pulses which are proportional to motor speed (see [Section 6.3.21](GUID-66013C04-1EE6-40A1-A9D7-F3529C365EE6.html)).
-   **nFAULT**: The nFAULT pin provides fault status in device or motor operation.


#### 6.3.5.2  I<sup>2</sup>C Interface

The MCF8329A-Q1 supports an I<sup>2</sup>C serial communication interface that allows an external controller to send and receive data. This I<sup>2</sup>C interface lets the external controller configure the EEPROM and read detailed fault and motor state information. The I<sup>2</sup>C bus is a two-wire interface using the SCL and SDA pins which are described as follows:

-   The SCL pin is the clock signal input.
-   The SDA pin is the data input and output.


### 6.3.6  Motor Control Input Options

The MCF8329A-Q1 offers four ways of controlling the motor:

1.  SPEED Control: In speed control mode, the speed of the motor is controlled using a closed loop PI control according to the input reference.
2.  POWER Control: In power control mode, the DC input power of the inverter power stage is controlled using a closed loop PI control according to the input reference.
3.  CURRENT Control: In current control mode, the torque controlling current (iq) is controlled using a closed loop PI control according to the input reference. In this mode the speed/power control loop is disabled.
4.  MODULATION INDEX Control (VOLTAGE Control): In voltage control mode, the voltage applied to the motor is controlled according to the input reference.

The device can accept four types of input reference signal as configured by SPEED_MODE.

-   PWM input on SPEED/WAKE pin by varying duty cycle of input signal
-   Frequency input on SPEED/WAKE pin by varying frequency of input signal
-   Analog input on SPEED/WAKE pin by varying amplitude of input signal
-   Over I<sup>2</sup>C by configuring DIGITAL_SPEED_CTRL

![MCF8329A-Q1 Multiplexing the Reference Input Command](https://www.ti.com/ods/images/SLLSFV1/GUID-20231119-SS0I-7D54-M8XG-NTFMDWQXSRM9-low.svg) 

**Figure 6-4 Multiplexing the Reference Input Command**

The signal path from REF (SPEED/WAKE) pin input (or I<sup>2</sup>C based speed input) to output reference (SPEED REF or POWER REF or CURRENT REF or MODULATION INDEX REF) shown in [Figure 6-4](#FIG_JDS_2BF_WRB).


#### 6.3.6.1  Analog-Mode Motor Control

Analog input based motor control can be configured by setting SPEED_MODE to 00b. In this mode, the duty command (DUTY CMD) varies with the analog voltage input (V<sub>SPEED</sub>) on the SPEED/WAKE pin. When 0 < V<sub>SPEED</sub> < V<sub>EN_SB</sub>, DUTY CMD is set to zero and the motor is stopped. When V<sub>EN_SB</sub> < V<sub>SPEED</sub> < V<sub>ANA_FS</sub>, DUTY CMD varies linearly with V<sub>SPEED</sub> as shown in [Figure 6-5](#GUID-B27547AD-41E8-4454-9E76-67BDD54D8890) . When V<sub>SPEED</sub> > V<sub>ANA_FS</sub>, DUTY CMD is clamped to 100%.

![MCF8329A-Q1 Analog-Mode Speed Control](https://www.ti.com/ods/images/SLLSFV1/GUID-20221218-SS0I-TXCW-LCF9-2VQCB24QWP9F-low.svg)

**Figure 6-5 Analog-Mode Speed Control**


#### 6.3.6.2  PWM-Mode Motor Control

PWM-based motor control can be configured by setting SPEED_MODE to 01b. In this mode, the PWM duty cycle applied to the SPEED/WAKE pin can be varied from 0 to 100%, and duty command (DUTY_CMD) varies linearly with the applied PWM duty cycle. When 0 ≤ Duty<sub>SPEED</sub> ≤ Duty<sub>EN_SB</sub>, DUTY_CMD is set to zero. When Duty<sub>EX_SB</sub> ≤ Duty<sub>SPEED</sub> ≤ 100%, DUTY_CMD varies linearly with Duty<sub>SPEED</sub> as shown in [Figure 6-6](#GUID-0201EA94-EF08-45BB-96F3-79B6474D9C0A). Duty<sub>EX_SB</sub> and Duty<sub>EN_SB</sub> are the standby entry and exit thresholds - refer [Section 6.4.1.2](GUID-078700E8-98E7-45CA-A678-FC6F80EAAAC5.html) for more information on Duty<sub>EX_SB</sub> and Duty<sub>EN_SB</sub>. The frequency of the PWM input signal applied to the SPEED/WAKE pin is defined as f<sub>PWM</sub> and the range for this frequency can be configured through SPD_RANGE_SEL.

Note:

1.  f<sub>PWM</sub> is the frequency of the PWM signal the device can accept at the SPEED/WAKE pin to control motor speed. It does not correspond to the PWM output frequency that is applied to the motor phases. The PWM output frequency can be configured through PWM_FREQ_OUT (see [Section 6.3.17](GUID-CD974538-626F-4928-A007-9529694A368F.html)).
2.  SLEEP_ENTRY_TIME should be set longer than the off time in the PWM signal (V<sub>SPEED</sub> < V<sub>IL</sub>) at the lowest duty input. For example, if f<sub>PWM</sub> is 10 kHz and the lowest duty input is 2%, SLEEP_ENTRY_TIME should be more than 98 µs to ensure there is no unintended sleep/standby entry.

![MCF8329A-Q1 PWM-Mode Motor Control](https://www.ti.com/ods/images/SLLSFV1/GUID-28B70273-C4A4-458A-99E3-873177E90F1F-low.svg) 

**Figure 6-6 PWM-Mode Motor Control**


#### 6.3.6.3  Frequency-Mode Motor Control

Frequency-based motor control is configured by setting SPEED_MODE to 11b. In this mode, duty command varies linearly as a function of the frequency of the square wave input at the SPEED (SPEED/WAKE) pin. When 0 ≤ Freq<sub>SPEED</sub> ≤ Freq<sub>EN_SB</sub>, DUTY_CMD is set to zero. When Freq<sub>EX_SB</sub> ≤ Freq<sub>SPEED</sub> ≤ INPUT_MAXIMUM_FREQ, DUTY_CMD varies linearly with Freq<sub>SPEED</sub> as shown in [Figure 6-7](#FIG_VFR_DPF_XVB). Freq<sub>EX_SB</sub> and Freq<sub>EN_SB</sub> are the standby entry and exit thresholds - refer [Section 6.4.1.2](GUID-078700E8-98E7-45CA-A678-FC6F80EAAAC5.html) for more information on Freq<sub>EX_SB</sub> and Freq<sub>EN_SB</sub>. Input frequency greater than INPUT_MAXIMUM_FREQ clamps the DUTY_CMD to 100%.

Note: TI recommends a logic low signal on the SPEED/WAKE pin to provide a zero reference in frequency mode control.

![MCF8329A-Q1 Frequency-Mode Motor Control](https://www.ti.com/ods/images/SLLSFV1/GUID-D7FCAE19-F7A1-4EF2-B418-AAAB705B5FD6-low.svg) 

**Figure 6-7 Frequency-Mode Motor Control**


#### 6.3.6.4  I<sup>2</sup>C based Motor Control

I<sup>2</sup>C based serial interface can be used for motor control by setting SPEED_MODE to 10b. In this mode, the duty command can be written directly into DIGITAL_SPEED_CTRL register. The sleep entry and exit are controlled through SLEEP/WAKE as described in [Table 6-6](GUID-A817ADA4-BAE6-4B7C-B3D1-D3D491C45B75.html#SLVSCP26607).


#### 6.3.6.5  Input Control Signal Profiles

MCF8329A-Q1 supports three different kinds of profiles (linear, step, forward-reverse) to convert the DUTY_CMD to the reference control signal. The input control reference signal can be motor speed, DC input power, motor current (i<sub>q</sub>), or motor voltage (modulation index control) as configured by CTRL_MODE. The different profiles can be configured through REF_PROFILE_CONFIG. When REF_PROFILE_CONFIG is set to 00b, the profiler is not applied and the input reference is same as the duty command as explained in [Section 6.3.6.6](GUID-F9714EDE-373F-4097-B82C-A29731066B99.html).

In speed control mode, the profiler output REF_X corresponds to percentage of Maximum Speed (configured by MAX_SPEED) as shown in [Equation 4](#EQUATION-BLOCK_AGB_ZLG_WVB). In power control mode, the profiler output REF_X corresponds to percentage of Maximum Power (configured by MAX_POWER) as shown in [Equation 5](#EQUATION-BLOCK_CCM_JLG_WVB). In the current control mode (i<sub>q</sub> control) the profiler output REF_X corresponds to the percentage of ILIMIT as shown in [Equation 6](#EQUATION-BLOCK_VXR_PNB_NZB). In voltage control mode (Modulation index control mode) REF_X corresponds to the percentage of V<sub>d</sub> and V<sub>q</sub> modulation index applied voltage to the motor.


Equation 4. $$SPEED REF \left(Hz\right) = \frac{REF\_X}{255} \times Maximum Speed \left(Hz\right)$$


Equation 5. $$POWER REF \left(W\right) = \frac{REF\_X}{255} \times Maximum Power (W)$$

 

Equation 6. $$CURRENT (i_{q}) REF \left(A\right) = \frac{REF\_X}{255} \times ILIMIT (A)$$

 

Equation 7. $$MODULATION INDEX REF \left(V_{s}\right) = \frac{REF\_X}{255} \times 100 \%$$


When REF_PROFILE_CONFIG is set to 00b, any change in DUTY_CMD by a value less than DUTY_HYS does not produce any change in SPEED REF or POWER REF or CURRENT REF or MODULATION INDEX REF; DUTY_HYS provides a hysteresis window around DUTY_CMD for noise immunity.


##### 6.3.6.5.1  Linear Control Profiles

Note: For all three profiles (linear, step, forward/reverse),

-   When MCF8329A-Q1 is configured as a sleep device, a zero input reference (0-V in analog mode, 0% duty in PWM mode, DIGITAL_SPEED_CTRL = 0b in I<sup>2</sup>C mode or 0-Hz in frequency mode) will stop the motor.
-   When MCF8329A-Q1 is configured as a standby device, a zero input command will result in motor operating at reference level (speed, power, current or voltage) set by REF_OFF1.

![MCF8329A-Q1 Linear Control Profiles](https://www.ti.com/ods/images/SLLSFV1/GUID-20220704-SS0I-4XJL-JSXT-4WDKPTZRM1MB-low.svg)

**Figure 6-8 Linear Control Profiles**

Linear control profiles can be configured by setting REF_PROFILE_CONFIG to 01b. Linear profiles feature input control references which change linearly between REF_CLAMP1 and REF_CLAMP2 with different slopes which can be set by configuring DUTY_x and REF_x combination.

-   DUTY_OFF1 configures the duty command below which the reference will be REF_OFF1.
-   DUTY_OFF1 and DUTY_ON1 configures a hysteresis around reference control input REF_CLAMP1 and REF_OFF1 as shown in [Figure 6-8](#FIG_PBC_ZBJ_WRB).
-   DUTY_CLAMP1 configures the duty command till which reference will be constant with a value REF_CLAMP1. DUTY_CLAMP1 can be placed anywhere between DUTY_OFF1 and DUTY_A.
-   DUTY_A configures the duty command for reference REF_A. The reference changes from REF_CLAMP1 to REF_A linearly between DUTY_CLAMP1 and DUTY_A. DUTY_A to DUTY_E has to be in the same order as shown in [Figure 6-8](#FIG_PBC_ZBJ_WRB).
-   DUTY_B configures the duty command for reference REF_B. The reference changes linearly between DUTY_A and DUTY_B.
-   DUTY_C configures the duty command for reference REF_C. The reference changes linearly between DUTY_B and DUTY_C.
-   DUTY_D configures the duty command for reference REF_D. The reference changes linearly between DUTY_C and DUTY_D.
-   DUTY_E configures the duty command for reference REF_E. The reference changes linearly between DUTY_D and DUTY_E.
-   DUTY_CLAMP2 configures the duty command above which the reference will be constant at REF_CLAMP2. REF_CLAMP2 configures this constant reference between DUTY_CLAMP2 and DUTY_OFF2 . The reference changes linearly between DUTY_E and DUTY_CLAMP2. DUTY_CLAMP2 can be placed anywhere between DUTY_E and DUTY_OFF2.
-   DUTY_OFF2 and DUTY_ON2 configures a hysteresis around reference control input REF_CLAMP2 and REF_OFF2 as shown in [Figure 6-8](#FIG_PBC_ZBJ_WRB).
-   DUTY_OFF2 configures the duty command above which the reference will change from REF_CLAMP2 to REF_OFF2.


##### 6.3.6.5.2  Staircase Control Profiles

![MCF8329A-Q1 Staircase Control Profiles](https://www.ti.com/ods/images/SLLSFV1/GUID-20220704-SS0I-ZQ9C-HZSP-J8VRXVZGXTBR-low.svg)

**Figure 6-9 Staircase Control Profiles**

Staircase control profiles can be configured by setting REF_PROFILE_CONFIG to 10b. Staircase profiles feature input control reference changes in steps between REF_CLAMP1 and REF_CLAMP2, by configuring DUTY_x and REF_x.

-   DUTY_OFF1 configures the duty command below which the reference will be REF_OFF1.
-   DUTY_OFF1 and DUTY_ON1configures a hysteresis around reference control input REF_CLAMP1 and REF_OFF1 as shown in [Figure 6-9](#T5566057-85).
-   DUTY_CLAMP1 configures the duty command till which reference will be constant. REF_CLAMP1 configures this constant reference between DUTY_OFF1 and DUTY_CLAMP1. DUTY_CLAMP1 can be placed anywhere between DUTY_OFF1 and DUTY_A.
-   DUTY_A configures the duty command for reference REF_A. There is a step change in reference from REF_CLAMP1 to REF_A at DUTY_CLAMP1. DUTY_A to DUTY_E has to be in the same order as shown in [Figure 6-9](#T5566057-85).
-   DUTY_B configures the duty command for reference REF_B. There is a step change in reference from REF_A to REF_B at DUTY_A.
-   DUTY_C configures the duty command for reference REF_C. There is a step change in reference from REF_B to REF_C at DUTY_B.
-   DUTY_D configures the duty command for reference REF_D. There is a step change in reference from REF_C to REF_D at DUTY_C.
-   DUTY_E configures the duty command for reference REF_E. There is a step change in reference from REF_D to REF_E at DUTY_D.
-   DUTY_CLAMP2 configures the duty command above which the reference will be constant at REF_CLAMP2. REF_CLAMP2 configures this constant reference between DUTY_CLAMP2 and DUTY_OFF2. There is a step change in reference from REF_E to REF_CLAMP2 at DUTY_E. DUTY_CLAMP2 can be placed anywhere between DUTY_E and DUTY_OFF2.
-   DUTY_OFF2 and DUTY_ON2 configures a hysteresis around reference control input REF_CLAMP2 and REF_OFF2 as shown in [Figure 6-9](#T5566057-85).
-   DUTY_OFF2 configures the duty command above which the reference will change from REF_CLAMP2 to REF_OFF2.
-   DUTY_HYS configures the hysteresis during every step change at DUTY_CLAMP1, DUTY_A to DUTY_E.


##### 6.3.6.5.3  Forward-Reverse Profiles

![MCF8329A-Q1 Forward Reverse Control Profiles](https://www.ti.com/ods/images/SLLSFV1/GUID-20220704-SS0I-S0JC-9PBT-MH1KS68TGZHR-low.svg)

**Figure 6-10 Forward Reverse Control Profiles**

Forward-Reverse control profiles can be configured by setting REF_PROFILE_CONFIG to 11b. Forward-Reverse profiles feature direction change through adjusting the duty command. DUTY_C configures duty command at which the direction will be changed. The Forward-Reverse speed profile can be used to eliminate the separate signal used to control the motor direction.

Note: The direction change functionality through DIR pin and DIR_INPUT bits are disabled in forward reverse profile mode.

-   DUTY_OFF1 configures the duty command below which the reference will be REF_OFF1.
-   DUTY_OFF1 and DUTY_ON1configures a hysteresis around reference control input REF_CLAMP1 and REF_OFF1 as shown in [Figure 6-10](#FIG_Z14_FVJ_ZRB).
-   DUTY_CLAMP1 configures the duty command till which reference will be constant. REF_CLAMP1 configures this constant reference between DUTY_OFF1 and DUTY_CLAMP1. DUTY_CLAMP1 can be placed anywhere between DUTY_OFF1 and DUTY_A.
-   DUTY_A configures the duty command for reference REF_A. The reference changes linearly between DUTY_CLAMP1 and DUTY_A. DUTY_A to DUTY_E has to be in the same order as shown in [Figure 6-10](#FIG_Z14_FVJ_ZRB).
-   DUTY_B configures the duty command above which MCF8329A-Q1 will be in off state. The reference remains constant at REF_A between DUTY_A and DUTY_B.
-   DUTY_C configures the duty command at which the direction is changed
-   DUTY_D configures the duty command above which the MCF8329A-Q1 will be in running state in the reverse direction. REF_D configures constant reference between DUTY_D and DUTY_E.
-   DUTY_E configures the duty command above which reference changes linearly between DUTY_E and DUTY_CLAMP2.
-   DUTY_CLAMP2 configures the duty command above which the reference will be constant at REF_CLAMP2. REF_CLAMP2 configures this constant reference between DUTY_CLAMP2 and DUTY_OFF2. DUTY_CLAMP2 can be placed anywhere between DUTY_E and DUTY_OFF2.
-   DUTY_OFF2 and DUTY_ON2 configures a hysteresis around reference control input REF_CLAMP2 and REF_OFF2 as shown in [Figure 6-10](#FIG_Z14_FVJ_ZRB).
-   DUTY_OFF2 configures the duty command above which the reference changes in the reverse direction from REF_CLAMP2 to REF_OFF2.
-   DUTY_HYS configures the hysteresis during step change at DUTY_B and DUTY_D.


#### 6.3.6.6  Control Input Transfer Function without Profiler

The input control signal can be motor speed, DC input power or motor voltage (motor PWM duty cycle) as configured by CLOSED_LOOP_MODE and CONST_POWER_MODE bits.

**Speed Input Transfer Function**

![MCF8329A-Q1 Speed Input Transfer Function](https://www.ti.com/ods/images/SLLSFV1/GUID-20220705-SS0I-LWTL-VZ6F-7FJKQ1GCR3P0-low.svg)

**Figure 6-11 Speed Input Transfer Function**

[Figure 6-11](#GUID-C2BEEA0F-E407-4B88-9C0E-E817E2DD7059) shows the relationship between DUTY CMD and SPEED REF. When speed loop is enabled, DUTY CMD sets the SPEED REF in Hz. MAX_SPEED sets the SPEED REF at DUTY CMD of 100%. MIN_DUTY sets the minimum SPEED REF (MIN_DUTY x MAX_SPEED). If MAX_SPEED is set to 0, SPEED REF is clamped to zero (irrespective of DUTY CMD) and motor is in stopped state.

**Power Input Transfer Function**

![MCF8329A-Q1 Power Input Transfer Function](https://www.ti.com/ods/images/SLLSFV1/GUID-20220705-SS0I-BZT0-XT91-K0MFHPTFBLVP-low.svg)

**Figure 6-12 Power Input Transfer Function**

[Figure 6-12](#GUID-02CFD207-7F87-45EA-88B9-B7F3C5EFD76A) shows the relationship between DUTY CMD and POWER REF. When power loop is enabled, DUTY CMD sets the POWER REF in Watt. MAX_POWER sets the POWER REF at DUTY CMD of 100%. MIN_DUTY sets the minimum POWER REF (MIN_DUTY x MAX_POWER). If MAX_POWER is set to 0, POWER REF is clamped to zero (irrespective of DUTY CMD) and motor is in stopped state.

**Current Input Transfer Function**

![MCF8329A-Q1 Current Input Transfer Function](https://www.ti.com/ods/images/SLLSFV1/GUID-20220705-SS0I-C11R-7ZMX-RS1XVWNDCMFK-low.svg)

**Figure 6-13 Current Input Transfer Function**

[Figure 6-13](#FIG_VX1_K5D_C5B) shows the relationship between DUTY_CMD and CURRENT_REF. When the current loop is enabled, DUTY_CMD sets the q-axis CURRENT_REF (i<sub>q_ref</sub>)in Ampere. MAX_CURRENT is the same as ILIMIT and sets the CURRENT_REF at DUTY CMD of 100%. MIN_DUTY sets the minimum CURRENT_REF (MIN_DUTY x MAX_CURRENT).

Note:

1.  In MCF8329A-Q1, MIN_DUTY is set as 1%. Any duty command (DUTY_CMD) or reference (REF_X from input profiles) value set to < 1% will result in target reference (SPEED REF or POWER REF or CURRENT REF or MODULATION INDEX REF) being clamped to zero and motor to be in stopped state.

**Modulation Index Input Transfer Function**

In modulation index control mode, the voltage applied to the motor (direct axis component of modulation index V<sub>d</sub> and quadrature axis component of modulation index V<sub>q</sub>) is proportional to the DUTY_CMD (from MIN_DUTY to 100% PWM duty applied to motor). For DUTY CMD less than MIN_DUTY, the applied voltage to the motor is clamped to zero by making the duty cycle to zero.


### 6.3.7  Bootstrap Capacitor Initial Charging

MCF8329A-Q1 provides a way to precharge the bootstrap capacitor during start-up. The algorithm uses a sequence to charge each phase bootstrap capacitor by turning on the external low side MOSFETs using PWM turn on pulses on GLx pins as shown in [Figure 6-14](#FIG_IL3_QXJ_5WB). In the charging sequence, the low side MOSFET is switched at a frequency set by PWM FREQUENCY with an on time of t<sub>LS_ON_BC</sub> (5% on time duty cycle). Each phase is charged for a period equal to one third of BST_CHRG_TIME.

![MCF8329A-Q1 Bootstrap Capacitor Precharging at Start-up](https://www.ti.com/ods/images/SLLSFV1/GUID-20230313-SS0I-7X9W-3K6S-RJCZNQPJ5LF7-low.svg)

**Figure 6-14 Bootstrap Capacitor Precharging at Start-up**


### 6.3.8  Starting the Motor Under Different Initial Conditions

The motor can be in one of three states when MCF8329A-Q1 begins the start-up process. The motor may be stationary, spinning in the forward direction, or spinning in the reverse direction. The MCF8329A-Q1 includes a number of features to allow for reliable motor start-up under all of these conditions. [Figure 6-15](#FIG_KZN_CSM_WRB) shows the motor start-up flow for each of the three initial motor states.

![MCF8329A-Q1 Starting the motor under different initial conditions](https://www.ti.com/ods/images/SLLSFV1/GUID-5D22767B-E09D-431D-9760-B9D7A32F49BB-low.svg)

**Figure 6-15 Starting the motor under different initial conditions**

Note: "Forward" means "spinning in the same direction as the commanded direction", and "Reverse" means "spinning in the opposite direction as the commanded direction".


#### 6.3.8.1  Case 1 – Motor is Stationary

If the motor is stationary, the commutation must be initialized to be in phase with the position of the motor. The MCF8329A-Q1 provides various options to initialize the commutation logic to the motor position and reliably start the motor.

-   The align and double align techniques force the motor into alignment by applying a voltage across a particular motor phase to force the motor to rotate in alignment with this phase.
-   Initial position detect (IPD) determines the position of the motor based on the deterministic inductance variation, which is often present in BLDC motors.
-   The slow first cycle method starts the motor by applying a low frequency cycle to align the rotor position to the applied commutation by the end of one electrical rotation.

MCF8329A-Q1 also provides a configurable brake option to ensure the motor is stationary before initiating one of the above start-up methods. Device enters open loop acceleration after going through the configured start-up method.


#### 6.3.8.2  Case 2 – Motor is Spinning in the Forward Direction

If the motor is spinning forward (same direction as the commanded direction) with sufficient speed (BEMF), the MCF8329A-Q1 resynchronizes with the spinning motor and continues commutation by going directly to closed loop operation. If the motor speed is too low for closed loop operation, MCF8329A-Q1 enters open loop operation to accelerate the motor till it reaches sufficient speed to enter closed loop operation. By resynchronizing to the spinning motor, the user achieves the fastest possible start-up time for this initial condition. This resynchronization feature can be enabled or disabled through RESYNC_EN. If resynchronization is disabled, the MCF8329A-Q1 can be configured to wait for the motor to coast to a stop and/or apply a brake. After the motor has stopped spinning, the motor start-up sequence proceeds as in Case 1, considering the motor is stationary.


#### 6.3.8.3  Case 3 – Motor is Spinning in the Reverse Direction

If the motor is spinning in the reverse direction (the opposite direction as the commanded direction), the MCF8329A-Q1 provides several methods to change the direction and drive the motor to the target reference in the commanded direction.

The reverse drive method allows the motor to be driven so that it decelerates through zero speed. The motor achieves the shortest possible spin-up time when spinning in the reverse direction.

If reverse drive is not enabled, then the MCF8329A-Q1 can be configured to wait for the motor to coast to a stop and/or apply a brake. After the motor has stopped spinning, the motor start-up sequence proceeds as in Case 1, considering the motor is stationary.

Note:

Take care when using the reverse drive or brake feature to ensure that the current is limited to an acceptable level and that the supply voltage does not surge as a result of energy being returned to the power supply.


### 6.3.9  Motor Start Sequence (MSS)

[Figure 6-16](#FIG_HNG_B1N_WRB) shows the motor-start sequence implemented in the MCF8329A-Q1 device.

![MCF8329A-Q1 Motor Starting-up Flow](https://www.ti.com/ods/images/SLLSFV1/GUID-FBC4B306-DFE2-4DA7-8493-8FDC2E7431EA-low.svg)

**Figure 6-16 Motor Starting-up Flow**

Power-On StateThis is the initial state of the Motor Start Sequence (MSS). The MSS starts in this state on initial power-up or whenever the MCF8329A-Q1 comes out of standby or sleep mode.

DIR Change && DIR_CHANGE_MODE = 0b JudgementIn MCF8329A-Q1, if direction change command is detected and DIR_CHANGE_MODE is set to 0b during any state (including closed loop), the device re-starts the MSS.

ISD_EN JudgementAfter power-on, the MCF8329A-Q1 MSS enters the ISD_EN judgement where it checks to see if the initial speed detect (ISD) function is enabled (ISD_EN = 1b). If ISD is disabled, the MSS proceeds directly to the BRAKE_EN judgement. If ISD is enabled, MSS advances to the ISD (Is Motor Stationary) state.

ISD StateThe MSS determines the initial condition (speed, direction of spin) of the motor (see [Initial Speed Detect (ISD)](GUID-2FDA8E00-8D60-4A39-9319-5FFF616CA1D2.html#TITLE-SLVSEX6SLVSCP23770)). If motor is deemed to be stationary (motor BEMF < STAT_DETECT_THR), the MSS proceeds to BRAKE_EN judgement. If the motor is not stationary, MSS proceeds to verify the direction of spin.

Direction of Spin JudgementThe MSS determines whether the motor is spinning in the forward or the reverse direction. If the motor is spinning in the forward direction, the MCF8329A-Q1 proceeds to the RESYNC_EN judgement. If the motor is spinning in the reverse direction, the MSS proceeds to the RVS_DR_EN judgement.

RESYNC_EN JudgementIf RESYNC_EN is set to 1b, MCF8329A-Q1 proceeds to Speed > Open to Closed Loop Handoff (Re-sync) judgement. If RESYNC_EN is set to 0b, MSS proceeds to HIZ_EN judgement.

Speed > Open to Closed Loop Handoff (Re-sync) JudgementIf motor speed > FW_DRV_RESYN_THR, MCF8329A-Q1 uses the speed and position information from the ISD state to transition to the closed loop state (see [Motor Resynchronization](GUID-58EA3C21-F28E-41F4-9B05-F2C3E2735B50.html#TITLE-SLVSEX6SLVSCP23552) ) directly. If motor speed < FW_DRV_RESYN_THR, MCF8329A-Q1 transitions to open loop state.

RVS_DR_EN JudgementThe MSS checks to see if the reverse drive function is enabled (RVS_DR_EN = 1). If it is enabled, the MSS transitions to check speed of the motor in reverse direction. If the reverse drive function is not enabled, the MSS advances to the HIZ_EN judgement.

Speed > Open to Closed Loop Handoff (Reverse) JudgementThe MSS checks to see if the reverse speed is high enough for MCF8329A-Q1 to decelerate in closed loop. Till the speed (in reverse direction) is high enough, MSS stays in reverse closed loop deceleration. If speed is too low, then the MSS transitions to reverse open loop deceleration.

Reverse Closed Loop, Open Loop Deceleration and Zero Speed CrossoverThe MCF8329A-Q1 resynchronizes in the reverse direction, decelerates the motor in closed loop till motor speed falls below the handoff threshold. (see _[Reverse Drive](GUID-B0B3EF4B-B19B-4E29-A351-D86CA80DA4D8.html#TITLE-SLVSEX6SLVSCP2836)_). When motor speed in reverse direction is too low, the MCF8329A-Q1 switches to open-loop, decelerates the motor in open-loop, crosses zero speed, and accelerates in the forward direction in open-loop before entering closed loop operation after motor speed is sufficiently high.

HIZ_EN JudgementThe MSS checks to determine whether the coast (Hi-Z) function is enabled (HIZ_EN =1). If the coast function is enabled, the MSS advances to the coast routine. If the coast function is disabled, the MSS advances to the BRAKE_EN judgement.

Coast (Hi-Z) RoutineThe device coasts the motor by turning OFF all six MOSFETs for a certain time configured by HIZ_TIME.

BRAKE_EN JudgementThe MSS checks to determine whether the brake function is enabled (BRAKE_EN =1). If the brake function is enabled, the MSS advances to the brake routine. If the brake function is disabled, the MSS advances to the motor start-up state (see [Section 6.3.9.4](GUID-B5CC0BC3-FCE8-4503-93E3-4C8527B8065A.html)).

Brake RoutineMCF8329A-Q1 implements a brake by turning on all three low-side MOSFETS for BRK_TIME.

Closed Loop StateIn this state, the MCF8329A-Q1 drives the motor with FOC.

Note: User should ensure adequate start up time to fully charge the bootstrap capacitors. One option to charge the boot capacitor is by providing enough time with low side brake at start up. Another option is to use the bootstrap precharging routine. The device will initiate ISD only after bootstrap voltage crosses the UVLO threshold.


#### 6.3.9.1  Initial Speed Detect (ISD)

The ISD function is used to identify the initial condition of the motor and is enabled by setting ISD_EN to 1b. The initial speed, position and direction is determined by sampling the phase voltage through the internal ADC. ISD can be disabled by setting ISD_EN to 0b. If the function is disabled (ISD_EN set to 0b), the MCF8329A-Q1 does not perform the initial speed detect function and proceeds to check if the brake routine (BRAKE_EN) is enabled.


#### 6.3.9.2  Motor Resynchronization

The motor resynchronization function works when the ISD and resynchronization functions are both enabled and the device determines that the initial state of the motor is spinning in the forward direction (same direction as the commanded direction). The speed and position information measured during ISD are used to initialize the drive state of the MCF8329A-Q1, which can transition directly into closed loop (or open loop if motor speed is not sufficient for closed loop operation) state without needing to stop the motor. In the MCF8329A-Q1, motor resynchronization can be enabled/disabled through RESYNC_EN bit. If motor resynchronization is disabled, the device proceeds to check if the motor coast (Hi-Z) routine is enabled.


#### 6.3.9.3  Reverse Drive

The MCF8329A-Q1 uses the reverse drive function to change the direction of the motor rotation when ISD_EN and RVS_DR_EN are both set to 1b and the ISD determines the motor spin direction to be opposite to that of the commanded direction. Reverse drive includes synchronizing with the motor speed in the reverse direction, reverse decelerating the motor through zero speed, changing direction, and accelerating in open loop in forward (or commanded) direction until the device transitions into closed loop in forward direction (see [Figure 6-17](#SLVSCP21843)). . MCF8329A-Q1 provides the option of using the forward direction parameters or a separate set of reverse drive parameters by configuring REV_DRV_CONFIG.

![MCF8329A-Q1 Reverse Drive Function](https://www.ti.com/ods/images/SLLSFV1/GUID-B7B404C2-4A70-4050-BDCE-BF7613037E6C-low.gif)

**Figure 6-17 Reverse Drive Function**


##### 6.3.9.3.1  Reverse Drive Tuning

MCF8329A-Q1 provides the option of tuning the open to closed loop handoff threshold, open loop acceleration (and deceleration) rates and open loop current limit in reverse drive to values different to those used in forward drive operation; the reverse drive specific parameters can be used by setting REV_DRV_CONFIG to 1b. If REV_DRV_CONFIG is set to 0b, MCF8329A-Q1 uses the equivalent parameters configured for forward drive operation during the reverse drive operation too.

The speed at which motor would enter the open loop in reverse direction can be configured using REV_DRV_HANDOFF_THR. For a smooth transition without jerks or loss of synchronism, user can configure an appropriate current limit when the motor is spinning in open loop during speed reversal using REV_DRV_OPEN_LOOP_CURRENT. The open loop acceleration rates for the forward direction during speed reversal are defined using REV_DRV_OPEN_LOOP_ACCEL_A1 and REV_DRV_OPEN_LOOP_ACCEL_A2. The reverse drive open loop deceleration rate, when the motor is decelerating in the opposite direction to zero speed, can be configured as a percentage of reverse drive open loop acceleration using REV_DRV_OPEN_LOOP_DEC.


#### 6.3.9.4  Motor Start-up

There are different options available for motor start-up from a stationary position and these options can be configured by MTR_STARTUP. In align and double align mode, the motor is aligned to a known position by injecting a DC current. In IPD mode, the rotor position is estimated by applying 6 different high-frequency pulses. In slow first cycle mode, the motor is started by applying a low frequency cycle.


##### 6.3.9.4.1  Align

Align is enabled by configuring MTR_STARTUP to 00b. The MCF8329A-Q1 aligns the motor by injecting a DC current through a particular phase pattern for a certain time configured by ALIGN_TIME. The phase pattern during align is generated based on ALIGN_ANGLE. In the MCF8329A-Q1, the current limit during align is configured through ALIGN_OR_SLOW_CURRENT LIMIT.

A fast change in the phase current can result in a sudden change in the driving torque and this can result in acoustic noise. To avoid this, the MCF8329A-Q1 ramps up the current from 0 to the current limit at a configurable ramp rate set by ALIGN_SLOW_RAMP_RATE. At the end of align routine the motor, is aligned at the known position.


##### 6.3.9.4.2  Double Align

Double align is enabled by configuring MTR_STARTUP to 01b. Single align is not reliable when the initial position of the rotor is 180<sup>o</sup> out of phase with the applied phase pattern. In this case, it is possible to have start-up failures using single align. In order to improve the reliability of align based start-up, the MCF8329A-Q1 provides the option of double align start-up. In double align start-up, MCF8329A-Q1 uses a phase pattern for the second align that is 90<sup>o</sup> ahead of the first align phase pattern. In double align, relevant parameters like align time, current limit, ramp rate are the same as in the case of single align - two different phase patterns are applied in succession with the same parameters to ensure that the motor will be aligned to a known position irrespective of initial rotor position.


##### 6.3.9.4.3  Initial Position Detection (IPD)

Initial Position Detection (IPD) can be enabled by configuring MTR_STARTUP to 10b. In IPD, inductive sense method is used to determine the initial position of the motor using the spatial variation in the motor inductance.

Align or double align may result in the motor spinning in the reverse direction before starting open loop acceleration. IPD can be used in such applications where reverse rotation of the motor is unacceptable. IPD does not wait for the motor to align with the commutation and therefore can allow for a faster motor start-up sequence. IPD works well when the inductance of the motor varies as a function of position. IPD works by pulsing current in to the motor and hence can generate acoustics which must be taken into account when determining the best start-up method for a particular application.


###### 6.3.9.4.3.1  IPD Operation

IPD operates by sequentially applying six different phase patterns according to the following sequence: BC-> CB-> AB-> BA-> CA-> AC (see [Figure 6-18](#SLVSCP22276)). When the current reaches the threshold configured by IPD_CURR_THR, the MCF8329A-Q1 stops driving the particular phase pattern and measures the time taken to reach the current threshold from when the particular phase pattern was applied. Thus, the time taken to reach IPD_CURR_THR is measured for all six phase patterns - this time varies as a function of the inductance in the motor windings. The state with the shortest time represents the state with the minimum inductance. The minimum inductance is because of the alignment of the north pole of the motor with this particular driving state.

![MCF8329A-Q1 IPD Function](https://www.ti.com/ods/images/SLLSFV1/GUID-22D42A78-C51D-463F-A31B-D6E71C88D636-low.svg)

**Figure 6-18 IPD Function**

Note: The minimum configurable IPD_CURR_THR depends on CSA_GAIN setting.

-   For CSA_GAIN = 40 V/V : Minimum configurable IPD_CURR_THR is 20 %
-   For CSA_GAIN = 20 V/V : Minimum configurable IPD_CURR_THR is 10 %
-   For CSA_GAIN = 10 V/V : Minimum configurable IPD_CURR_THR is 5 %
-   For CSA_GAIN = 5 V/V : Minimum configurable IPD_CURR_THR is 2.5 %


###### 6.3.9.4.3.2  IPD Release

IPD release uses Hi-Z mode, both the high-side (HSA) and low-side (LSC) MOSFETs are turned OFF and the current recirculates through the body diodes back to the power supply (see [Figure 6-19](#SLVSCP22287)).

The Hi-Z mode during IPD release can result in a voltage increase on motor DC supply voltage VM (V<sub>PVDD</sub>). The user must manage this with an appropriate selection of either a clamp circuit or by providing sufficient capacitance between V<sub>PVDD</sub> and GND to absorb the energy.

![MCF8329A-Q1 IPD Release Hi-Z mode](https://www.ti.com/ods/images/SLLSFV1/GUID-83AF2DA2-467D-4EC6-A5B4-B16347E1852D-low.svg)

**Figure 6-19 IPD Release Hi-Z mode**


###### 6.3.9.4.3.3  IPD Advance Angle

After the initial position is detected, the MCF8329A-Q1 begins driving the motor in open loop at an angle specified by IPD_ADV_ANGLE.

Advancing the drive angle anywhere from 0° to 180° results in positive torque. Advancing the drive angle by 90° results in maximum initial torque. Applying maximum initial torque could result in uneven acceleration to the rotor. Select the IPD_ADV_ANGLE to allow for smooth acceleration in the application (see [Figure 6-20](#SLVSCP23922)).

![MCF8329A-Q1 IPD Advance Angle](https://www.ti.com/ods/images/SLLSFV1/GUID-A2A7FF5F-9138-4C67-9BF2-C6B9DEDADBB1-low.svg)

**Figure 6-20 IPD Advance Angle**


##### 6.3.9.4.4  Slow First Cycle Startup

Slow First Cycle start-up is enabled by configuring MTR_STARTUP to 11b. In slow first cycle start-up, the MCF8329A-Q1 starts motor commutation at a frequency defined by SLOW_FIRST_CYCLE_FREQ. The frequency configured is used only for first cycle, and then the motor commutation follows acceleration profile configured by open loop acceleration coefficients A1 and A2. The slow first cycle frequency has to be configured to be slow enough to allow motor to synchronize with the commutation sequence. This mode is useful when fast startup is desired as it significantly reduces the align time.


##### 6.3.9.4.5  Open loop

Upon completing the motor position initialization with either align, double align, IPD or slow first cycle, the MCF8329A-Q1 begins to accelerate the motor in open loop. During open loop, the speed is increased with a fixed current limit. In open loop, the control PI loops for I<sub>q</sub> and I<sub>d</sub> actively control the currents. The angle during open loop is provided from the ramp generator as shown in [Figure 6-21](#FIG_V1K_JX3_51C).

![MCF8329A-Q1 Open Loop](https://www.ti.com/ods/images/SLLSFV1/GUID-20231029-SS0I-H25D-RVSH-KV5CSJHXHHK9-low.svg) 

**Figure 6-21 Open Loop**

In MCF8329A-Q1, the current limit threshold is configured through OL_ILIMIT_CONFIG and is set by ILIMIT or OL_ILIMIT based on configuration of OL_ILIMIT_CONFIG. The function of the open-loop operation is to drive the motor to a speed at which the motor generates sufficient BEMF to allow the back-EMF observer to accurately detect the position of the rotor. The motor is accelerated in open loop and speed at any given time is determined by [Equation 8](#T5566057-175). In MCF8329A-Q1, open loop acceleration coefficients, A1 and A2 are configured through OL_ACC_A1 and OL_ACC_A2 respectively.

Equation 8. Speed(t) = A1 * t + 0.5 * A2 * t<sup>2</sup>


##### 6.3.9.4.6  Transition from Open to Closed Loop

Once the motor has reached a sufficient speed for the back-EMF observer to estimate the angle and speed of the motor, the MCF8329A-Q1 transitions into closed loop state. This handoff speed is automatically determined based on the measured back-EMF and motor speed. Users also have an option to manually set the handoff speed by configuring OPN_CL_HANDOFF_THR and setting AUTO_HANDOFF_EN to 0b. In order to have smooth transition and avoid speed transients, the theta_error (Ɵ<sub>gen</sub> - Ɵ<sub>est</sub>) is decreased linearly after transition. The ramp rate of theta_error reduction can be configured using THETA_ERROR_RAMP_RATE. If the current limit set during the open loop is high and if it is not reduced before transition to closed loop, the motor speed may momentarily rise to higher values than SPEED_REF after transition into closed loop. In order to avoid such speed variations, configure the IQ_RAMP_EN to 1b, so that i<sub>q_ref</sub> decreases prior to transition into closed loop. However if the final speed reference (SPEED_REF) is more than two times the open loop to closed loop hand off speed (OPN_CL_HANDOFF_THR), then i<sub>q_ref</sub> is not decreased independent of the IQ_RAMP_EN setting, to enable faster motor acceleration.

After hand off to closed loop at a sufficient speed, there could be still some theta error, as the estimators may not be fully aligned. A slow acceleration can be used after the open loop to closed loop transition, ensuring that the theta error reduces to zero. The slow acceleration can be configured using CL_SLOW_ACC.

[Figure 4-2](#T5752651-51) shows the control sequence in open to closed loop transition. The current i<sub>q_ref</sub> reduces to a lower value in current decay region, if IQ_RAMP_EN is set to 1b. If IQ_RAMP_EN is set to 0b, then the current decay region will not be present in the transition sequence.

![MCF8329A-Q1 Control Sequence in Open to Closed Loop Transition](https://www.ti.com/ods/images/SLLSFV1/GUID-E997F312-5CAB-4789-AB11-50DDAF932118-low.svg)

**Figure 6-22 Control Sequence in Open to Closed Loop Transition**

![MCF8329A-Q1 Open to Closed Loop Transition](https://www.ti.com/ods/images/SLLSFV1/GUID-20231029-SS0I-5KK9-GDHK-XWWPMRFVW4C1-low.svg) 

**Figure 6-23 Open to Closed Loop Transition**


### 6.3.10  Closed Loop Operation

The MCF8329A-Q1 drives the motor using Field Oriented Control (FOC) as shown in [Figure 6-24](#FIG_T14_HZ3_51C). In closed loop operation, the motor angle (Ɵ<sub>est</sub>) and speed (Speed_est) are estimated using the back-EMF observer. The speed and current regulation are achieved using PI control loop. In order to achieve maximum efficiency, the direct axis current is set to zero (I<sub>d_ref</sub> = 0), which will ensure that stator and rotor field are orthogonal (90<sup>o</sup> out of phase) to each other. If flux weakening or MTPA is enabled I<sub>d_ref</sub> can be zero or a negative value during closed loop operation.

![MCF8329A-Q1 Closed Loop FOC Control](https://www.ti.com/ods/images/SLLSFV1/GUID-20231029-SS0I-MTTS-NSXM-5TCHCDW6V8S2-low.svg) 

**Figure 6-24 Closed Loop FOC Control**


#### 6.3.10.1  Closed loop accelerate

During closed loop acceleration/deceleration, MCF8329A-Q1 provides the option of configuring the slew rate of the reference input. This allows for a linear change in reference input (speed or power or current or modulation index) even when there is a step change in reference input (from Analog, PWM, Frequency or I<sup>2</sup>C) as seen in [Figure 6-25](#FIG_JZX_F1J_51C). This slew rate can be configured so as to prevent sudden changes in the torque applied to the motor which could result in acoustic noise. The closed loop acceleration/deceleration slew rate parameter, CL_ACC/CL_DEC, sets the slew rate of the reference during acceleration and deceleration (when AVS is not active) respectively.

![MCF8329A-Q1 Closed Loop Acceleration/Deceleration Slew Rate](https://www.ti.com/ods/images/SLLSFV1/GUID-20231029-SS0I-3JTZ-FVZK-HWD56KHBP07D-low.svg) 

**Figure 6-25 Closed Loop Acceleration/Deceleration Slew Rate**


#### 6.3.10.2  Speed PI Control

The integrated speed control loop helps maintain a constant speed over varying operating conditions. The K<sub>p</sub> and K<sub>i</sub> coefficients are configured through SPD_LOOP_KP and SPD_LOOP_KI. The output of the speed loop is used to generate the current reference for torque control (I<sub>q_ref</sub>). The output of the speed loop is limited to implement a current limit. The current limit is set by configuring ILIMIT. When output of the speed loop saturates, the integrator is disabled to prevent integral wind-up.

SPEED_REF_SLEW is derived from the duty command input, reference (speed) profiles and closed loop acceleration/deceleration rates configured by the user and SPEED_EST is the estimated speed from the back-EMF observer.

![MCF8329A-Q1 Speed PI Control](https://www.ti.com/ods/images/SLLSFV1/GUID-20231029-SS0I-S8HN-PHWV-WD7T8TD3ZLMR-low.svg) 

**Figure 6-26 Speed PI Control**


#### 6.3.10.3  Current PI Control

The MCF8329A-Q1 has two PI controllers, one each for I<sub>d</sub> and I<sub>q</sub> to control flux and torque separately. K<sub>p</sub> and K<sub>i</sub> coefficients are the same for both PI controllers and are configured through CURR_LOOP_KP and CURR_LOOP_KI. The outputs of the current control loops are used to generate voltage signals V<sub>d</sub> and V<sub>q</sub> to be applied to the motor. The outputs of the current loops are clamped to supply voltage V<sub>M</sub>. I<sub>d</sub> current PI loop is executed first and output of I<sub>d</sub> current PI loop V<sub>d</sub> is checked for saturation. When the output of the current loop saturates, the integration is disabled to prevent integral wind-up.

![MCF8329A-Q1 Id Current PI Control](https://www.ti.com/ods/images/SLLSFV1/GUID-87E0C36B-CB51-4575-9F65-8FFB55DCB297-low.svg)

**Figure 6-27 I<sub>d</sub> Current PI Control**

![MCF8329A-Q1 Iq Current PI Control](https://www.ti.com/ods/images/SLLSFV1/GUID-20231030-SS0I-0T5F-W4G2-ZLZLQXNV47T5-low.svg) 

**Figure 6-28 I<sub>q</sub> Current PI Control**


#### 6.3.10.4  Power Loop

MCF8329A-Q1 provides an option of regulating the (input DC) power instead of motor speed for a closed loop power control. Input power regulation (instead of motor speed) mode is selected by setting CTRL_MODE to 01b. The maximum power that MCF8329A-Q1 can draw from the DC input supply is set by MAX_POWER. The K<sub>p</sub> and K<sub>i</sub> coefficients for power loop are configured through SPD_LOOP_KP and SPD_LOOP_KI.


Equation 9. $$POWER REF \left(W\right) = DUTY CMD \times Maximum Power \left(W\right)$$


![MCF8329A-Q1 Closed Loop Power Control](https://www.ti.com/ods/images/SLLSFV1/GUID-20230208-SS0I-LGZ7-1W40-R2HK5LTBHBDQ-low.svg)

**Figure 6-29 Closed Loop Power Control**


#### 6.3.10.5  Modulation Index Control

MCF8329A-Q1 provides voltage control mode, selected by setting CTRL_MODE to 11b. The closed loop speed control, power control and current control (i<sub>q</sub> and i<sub>d</sub>) are disabled in this mode. The applied V<sub>q</sub> and V<sub>d</sub> are controlled directly using the user defined modulation index reference voltage (VOLTAGE REF) and the lead angle setting. The VOLTAGE REF varies from MIN_DUTY to 100%.

![MCF8329A-Q1 Open Loop Voltage Control](https://www.ti.com/ods/images/SLLSFV1/GUID-20230208-SS0I-4FLN-BZRD-Z3S9STRD7X1N-low.svg)

**Figure 6-30 Open Loop Voltage Control**

Note:

1.  The maximum modulation index (Vs) supported in modulation control mode depends on DIG_DEAD_TIME, SINGLE_SHUNT_BLANKING_TIMES, and PWM_FREQ_OUT settings.
2.  MCF8329A-Q1 is not designed to support recirculation stop mode during modulation index control mode.


### 6.3.11  Maximum Torque Per Ampere (MTPA) Control

PMSM or BLDC motors with magnetic saliency produces a reluctance torque from the difference between the direct-d axis inductance and the quadrature q-axis inductance. The maximum efficiency of the IPM motors can be achieved by proper selection of the current vector ratio between magnetic torque current and reluctance torque current in the total current. MCF8329A-Q1 provides the maximum torque per ampere control and in that, for a given bus current, it is possible to obtain the best torque performance by setting the d axis current reference as a function of the q axis current reference as per the equation below.


Equation 10. $$i_{d\_MTPA} = \frac{\psi_{m}}{2 \left(L_{q} - L_{d}\right)} \left(1 - \sqrt{1 + \frac{4 \left(L_{q} - L_{d}\right)^{2} i_{q}^{2}}{}}\right)$$


Ld and Lq are inductance of the d and q axis respectively. iq is the Q-axis current and ψm is the BEMF constant. In case of motors without saliency in the rotor, the inductances of d and q axis are the same and hence the point of maximum torque is always the one where d-axis current reference is 0. For motors with saliency, the d-axis reference can be set as a function of the q-axis reference as derived in the equation above so as to generate the maximum torque for any current drawn from the DC bus.


### 6.3.12  Flux Weakening Control

PMSM motors can be operated not only in the constant torque region below the base speed (normally rated speed) but also in the constant power region above the base speed, but the base speed can be varied according to current and voltage limitation. MCF8329A-Q1 provides a flux weakening control, to increase the speed beyond the motor rated speed. The flux weakening can be enabled by setting 1b to FLUX_WEAKENING_EN. The flux weakening control uses a PI control loop as shown in [Figure 6-31](#FIG_UWX_G1B_ZRB), to create the I<sub>dref</sub>. Kp and Ki coefficients for flux weakening loop are configured through FLUX_WEAKENING_KP and FLUX_WEAKENING_KI.

The absolute maximum value of flux weakening current reference (I<sub>d_FW</sub>) can be limited as a percentage of ILIMIT by configuring FLUX_WEAKENING_CURRENT_RATIO. If FLUX_WEAKENING_CURRENT_RATIO = 0b, then only circular limit is in place, in that case i<sub>q</sub><sup>2</sup> + i<sub>d</sub><sup>2</sup> is limited to ILIMIT. If I<sub>d_FW</sub> absolute value increases then i<sub>q</sub> is reduced to meet circular limit.

User can configure the modulation index reference, V<sub>s_ref</sub> (shown in [Equation 11](#EQUATION-BLOCK_UGP_YYR_LZB)) below that the flux weakening is not active and I<sub>d_FW</sub> is made to zero. The configuration is available in the bits FLUX_WEAKENING_REF ERENCE.


Equation 11. $$V_{s\_ref} = \sqrt{V_{q\_ref}^{2} + V_{d\_ref}^{2}}$$


The I<sub>dref</sub> can be zero or minimum of i<sub>d</sub> reference from flux weakening or MTPA. The variable FLUX_MODE_REFERENCE is available in the volatile memory (RAM) and a non-zero value can overwrite I<sub>d_FW</sub> and I<sub>d_MTPA</sub>.

![MCF8329A-Q1 Flux Weakening Control](https://www.ti.com/ods/images/SLLSFV1/GUID-20230208-SS0I-LFMJ-NG4C-WBQB99M12KCX-low.svg)

**Figure 6-31 Flux Weakening Control**


### 6.3.13  Motor Parameters

The MCF8329A-Q1 uses the motor resistance, motor inductance and motor back-EMF constant to estimate motor position when operating in closed loop. The MCF8329A-Q1 has the capability of measuring back-EMF constant in the offline state (see [Motor Parameter Extraction Tool (MPET)](GUID-D9386227-94AB-4F28-9EA6-316DF9377F5F.html#GUID-84B7FA28-D82E-4866-995B-FCCB49AD7121)). Offline measurement of back-EMF constant, when enabled, takes place before normal motor operation. The user can also disable the offline measurement and configure motor parameters through EEPROM.


#### 6.3.13.1  Motor Resistance

For a wye-connected motor, the motor phase resistance refers to the resistance from the phase output to the center tap, R<sub>PH</sub> (denoted as R<sub>PH</sub> in [Figure 6-32](#SLVSCP27248)). For a delta-connected motor, the motor phase resistance refers to the equivalent phase to center tap in the wye configuration in [Figure 6-32](#SLVSCP27248).

![MCF8329A-Q1 Motor Resistance](https://www.ti.com/ods/images/SLLSFV1/GUID-92F7C81A-0D6D-4C9D-A3FD-5572B011EF1E-low.gif)

**Figure 6-32 Motor Resistance**

For both the delta-connected and the wye-connected motor, the easy way to get the equivalent R<sub>PH</sub> is to measure the resistance between two phase terminals (R<sub>PH_PH</sub>), and then divide this value by two, R<sub>PH</sub> = ½ R<sub>PH_PH</sub>. In wye-connected motor, if user has access to center tap (CT), R<sub>PH</sub> can also be measured between center tap (CT) and phase terminal.

Configure the motor resistance (R<sub>PH</sub>) to a nearest value from [Table 6-2](#SLVSCP296901).

**Table 6-2 Motor Resistance Look-Up Table**


| MOTOR_RES (HEX) | R<sub>PH</sub> (Ω) | MOTOR_RES (HEX) | R<sub>PH</sub> (Ω) | MOTOR_RES (HEX) | R<sub>PH</sub> (Ω) | MOTOR_RES (HEX) | R<sub>PH</sub> (Ω) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | Not Valid | 0x40 | 0.145 | 0x80 | 0.465 | 0xC0 | 2.1 |
| 0x01 | 0.006 | 0x41 | 0.150 | 0x81 | 0.470 | 0xC1 | 2.2 |
| 0x02 | 0.007 | 0x42 | 0.155 | 0x82 | 0.475 | 0xC2 | 2.3 |
| 0x03 | 0.008 | 0x43 | 0.160 | 0x83 | 0.480 | 0xC3 | 2.4 |
| 0x04 | 0.009 | 0x44 | 0.165 | 0x84 | 0.485 | 0xC4 | 2.5 |
| 0x05 | 0.010 | 0x45 | 0.170 | 0x85 | 0.490 | 0xC5 | 2.6 |
| 0x06 | 0.011 | 0x46 | 0.175 | 0x86 | 0.495 | 0xC6 | 2.7 |
| 0x07 | 0.012 | 0x47 | 0.180 | 0x87 | 0.50 | 0xC7 | 2.8 |
| 0x08 | 0.013 | 0x48 | 0.185 | 0x88 | 0.51 | 0xC8 | 2.9 |
| 0x09 | 0.014 | 0x49 | 0.190 | 0x89 | 0.52 | 0xC9 | 3.0 |
| 0x0A | 0.015 | 0x4A | 0.195 | 0x8A | 0.53 | 0xCA | 3.2 |
| 0x0B | 0.016 | 0x4B | 0.200 | 0x8B | 0.54 | 0xCB | 3.4 |
| 0x0C | 0.017 | 0x4C | 0.205 | 0x8C | 0.55 | 0xCC | 3.6 |
| 0x0D | 0.018 | 0x4D | 0.210 | 0x8D | 0.56 | 0xCD | 3.8 |
| 0x0E | 0.019 | 0x4E | 0.215 | 0x8E | 0.57 | 0xCE | 4.0 |
| 0x0F | 0.020 | 0x4F | 0.220 | 0x8F | 0.58 | 0xCF | 4.2 |
| 0x10 | 0.022 | 0x50 | 0.225 | 0x90 | 0.59 | 0xD0 | 4.4 |
| 0x11 | 0.024 | 0x51 | 0.230 | 0x91 | 0.60 | 0xD1 | 4.6 |
| 0x12 | 0.026 | 0x52 | 0.235 | 0x92 | 0.61 | 0xD2 | 4.8 |
| 0x13 | 0.028 | 0x53 | 0.240 | 0x93 | 0.62 | 0xD3 | 5.0 |
| 0x14 | 0.030 | 0x54 | 0.245 | 0x94 | 0.63 | 0xD4 | 5.2 |
| 0x15 | 0.032 | 0x55 | 0.250 | 0x95 | 0.64 | 0xD5 | 5.4 |
| 0x16 | 0.034 | 0x56 | 0.255 | 0x96 | 0.65 | 0xD6 | 5.6 |
| 0x17 | 0.036 | 0x57 | 0.260 | 0x97 | 0.66 | 0xD7 | 5.8 |
| 0x18 | 0.038 | 0x58 | 0.265 | 0x98 | 0.67 | 0xD8 | 6.0 |
| 0x19 | 0.040 | 0x59 | 0.270 | 0x99 | 0.68 | 0xD9 | 6.2 |
| 0x1A | 0.042 | 0x5A | 0.275 | 0x9A | 0.69 | 0xDA | 6.4 |
| 0x1B | 0.044 | 0x5B | 0.280 | 0x9B | 0.70 | 0xDB | 6.6 |
| 0x1C | 0.046 | 0x5C | 0.285 | 0x9C | 0.72 | 0xDC | 6.8 |
| 0x1D | 0.048 | 0x5D | 0.290 | 0x9D | 0.74 | 0xDD | 7.0 |
| 0x1E | 0.050 | 0x5E | 0.295 | 0x9E | 0.76 | 0xDE | 7.2 |
| 0x1F | 0.052 | 0x5F | 0.300 | 0x9F | 0.78 | 0xDF | 7.4 |
| 0x20 | 0.054 | 0x60 | 0.305 | 0xA0 | 0.80 | 0xE0 | 7.6 |
| 0x21 | 0.056 | 0x61 | 0.310 | 0xA1 | 0.82 | 0xE1 | 7.8 |
| 0x22 | 0.058 | 0x62 | 0.315 | 0xA2 | 0.84 | 0xE2 | 8.0 |
| 0x23 | 0.060 | 0x63 | 0.320 | 0xA3 | 0.86 | 0xE3 | 8.2 |
| 0x24 | 0.062 | 0x64 | 0.325 | 0xA4 | 0.88 | 0xE4 | 8.4 |
| 0x25 | 0.064 | 0x65 | 0.330 | 0xA5 | 0.90 | 0xE5 | 8.6 |
| 0x26 | 0.066 | 0x66 | 0.335 | 0xA6 | 0.92 | 0xE6 | 8.8 |
| 0x27 | 0.068 | 0x67 | 0.340 | 0xA7 | 0.94 | 0xE7 | 9 |
| 0x28 | 0.070 | 0x68 | 0.345 | 0xA8 | 0.96 | 0xE8 | 9.2 |
| 0x29 | 0.072 | 0x69 | 0.350 | 0xA9 | 0.98 | 0xE9 | 9.4 |
| 0x2A | 0.074 | 0x6A | 0.355 | 0xAA | 1.00 | 0xEA | 9.6 |
| 0x2B | 0.076 | 0x6B | 0.360 | 0xAB | 1.05 | 0xEB | 9.8 |
| 0x2C | 0.078 | 0x6C | 0.365 | 0xAC | 1.10 | 0xEC | 10.0 |
| 0x2D | 0.080 | 0x6D | 0.370 | 0xAD | 1.15 | 0xED | 10.5 |
| 0x2E | 0.082 | 0x6E | 0.375 | 0xAE | 1.20 | 0xEE | 11.0 |
| 0x2F | 0.084 | 0x6F | 0.380 | 0xAF | 1.25 | 0xEF | 11.5 |
| 0x30 | 0.086 | 0x70 | 0.385 | 0xB0 | 1.30 | 0xF0 | 12.0 |
| 0x31 | 0.088 | 0x71 | 0.390 | 0xB1 | 1.35 | 0xF1 | 12.5 |
| 0x32 | 0.090 | 0x72 | 0.395 | 0xB2 | 1.40 | 0xF2 | 13.0 |
| 0x33 | 0.092 | 0x73 | 0.400 | 0xB3 | 1.45 | 0xF3 | 13.5 |
| 0x34 | 0.094 | 0x74 | 0.405 | 0xB4 | 1.50 | 0xF4 | 14.0 |
| 0x35 | 0.096 | 0x75 | 0.410 | 0xB5 | 1.55 | 0xF5 | 14.5 |
| 0x36 | 0.098 | 0x76 | 0.415 | 0xB6 | 1.60 | 0xF6 | 15.0 |
| 0x37 | 0.100 | 0x77 | 0.420 | 0xB7 | 1.65 | 0xF7 | 15.5 |
| 0x38 | 0.105 | 0x78 | 0.425 | 0xB8 | 1.70 | 0xF8 | 16.0 |
| 0x39 | 0.110 | 0x79 | 0.430 | 0xB9 | 1.75 | 0xF9 | 16.5 |
| 0x3A | 0.115 | 0x7A | 0.435 | 0xBA | 1.80 | 0xFA | 17.0 |
| 0x3B | 0.120 | 0x7B | 0.440 | 0xBB | 1.85 | 0xFB | 17.5 |
| 0x3C | 0.125 | 0x7C | 0.445 | 0xBC | 1.90 | 0xFC | 18.0 |
| 0x3D | 0.130 | 0x7D | 0.450 | 0xBD | 1.95 | 0xFD | 18.5 |
| 0x3E | 0.135 | 0x7E | 0.455 | 0xBE | 2.00 | 0xFE | 19.0 |
| 0x3F | 0.140 | 0x7F | 0.460 | 0xBF | 2.05 | 0xFF | 20.0 |


#### 6.3.13.2  Motor Inductance

For a wye-connected motor, the motor phase inductance refers to the inductance from the phase output to the center tap, L<sub>PH</sub> (denoted as L<sub>PH</sub> in [Figure 6-33](#SLVSCP27248-2)). For a delta-connected motor, the motor phase inductance refers to the equivalent phase to center tap in the wye configuration in [Figure 6-33](#SLVSCP27248-2).

![MCF8329A-Q1 Motor Inductance](https://www.ti.com/ods/images/SLLSFV1/GUID-778CBDA6-44DE-4F53-8568-888F0FBD797C-low.gif)

**Figure 6-33 Motor Inductance**

For both the delta-connected motor and the wye-connected motor, the easy way to get the equivalent L<sub>PH</sub> is to measure the inductance between two phase terminals (L<sub>PH_PH</sub>), and then divide this value by two, L<sub>PH</sub> = ½ L<sub>PH_PH</sub>. In wye-connected motor, if user has access to center tap (CT), L<sub>PH</sub> can also be measured between center tap (CT) and phase terminal.

Configure the motor inductance (L<sub>PH</sub>) to a nearest value from [Table 6-3](#SLVSCP296901-2).

**Table 6-3 Motor Inductance Look-Up Table**


| MOTOR_IND (HEX) | L<sub>PH</sub> (mH) | MOTOR_IND (HEX) | L<sub>PH</sub> (mH) | MOTOR_IND (HEX) | L<sub>PH</sub> (mH) | MOTOR_IND (HEX) | L<sub>PH</sub> (mH) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | Not Valid | 0x40 | 0.145 | 0x80 | 0.465 | 0xC0 | 2.1 |
| 0x01 | 0.006 | 0x41 | 0.150 | 0x81 | 0.470 | 0xC1 | 2.2 |
| 0x02 | 0.007 | 0x42 | 0.155 | 0x82 | 0.475 | 0xC2 | 2.3 |
| 0x03 | 0.008 | 0x43 | 0.160 | 0x83 | 0.480 | 0xC3 | 2.4 |
| 0x04 | 0.009 | 0x44 | 0.165 | 0x84 | 0.485 | 0xC4 | 2.5 |
| 0x05 | 0.010 | 0x45 | 0.170 | 0x85 | 0.490 | 0xC5 | 2.6 |
| 0x06 | 0.011 | 0x46 | 0.175 | 0x86 | 0.495 | 0xC6 | 2.7 |
| 0x07 | 0.012 | 0x47 | 0.180 | 0x87 | 0.50 | 0xC7 | 2.8 |
| 0x08 | 0.013 | 0x48 | 0.185 | 0x88 | 0.51 | 0xC8 | 2.9 |
| 0x09 | 0.014 | 0x49 | 0.190 | 0x89 | 0.52 | 0xC9 | 3.0 |
| 0x0A | 0.015 | 0x4A | 0.195 | 0x8A | 0.53 | 0xCA | 3.2 |
| 0x0B | 0.016 | 0x4B | 0.200 | 0x8B | 0.54 | 0xCB | 3.4 |
| 0x0C | 0.017 | 0x4C | 0.205 | 0x8C | 0.55 | 0xCC | 3.6 |
| 0x0D | 0.018 | 0x4D | 0.210 | 0x8D | 0.56 | 0xCD | 3.8 |
| 0x0E | 0.019 | 0x4E | 0.215 | 0x8E | 0.57 | 0xCE | 4.0 |
| 0x0F | 0.020 | 0x4F | 0.220 | 0x8F | 0.58 | 0xCF | 4.2 |
| 0x10 | 0.022 | 0x50 | 0.225 | 0x90 | 0.59 | 0xD0 | 4.4 |
| 0x11 | 0.024 | 0x51 | 0.230 | 0x91 | 0.60 | 0xD1 | 4.6 |
| 0x12 | 0.026 | 0x52 | 0.235 | 0x92 | 0.61 | 0xD2 | 4.8 |
| 0x13 | 0.028 | 0x53 | 0.240 | 0x93 | 0.62 | 0xD3 | 5.0 |
| 0x14 | 0.030 | 0x54 | 0.245 | 0x94 | 0.63 | 0xD4 | 5.2 |
| 0x15 | 0.032 | 0x55 | 0.250 | 0x95 | 0.64 | 0xD5 | 5.4 |
| 0x16 | 0.034 | 0x56 | 0.255 | 0x96 | 0.65 | 0xD6 | 5.6 |
| 0x17 | 0.036 | 0x57 | 0.260 | 0x97 | 0.66 | 0xD7 | 5.8 |
| 0x18 | 0.038 | 0x58 | 0.265 | 0x98 | 0.67 | 0xD8 | 6.0 |
| 0x19 | 0.040 | 0x59 | 0.270 | 0x99 | 0.68 | 0xD9 | 6.2 |
| 0x1A | 0.042 | 0x5A | 0.275 | 0x9A | 0.69 | 0xDA | 6.4 |
| 0x1B | 0.044 | 0x5B | 0.280 | 0x9B | 0.70 | 0xDB | 6.6 |
| 0x1C | 0.046 | 0x5C | 0.285 | 0x9C | 0.72 | 0xDC | 6.8 |
| 0x1D | 0.048 | 0x5D | 0.290 | 0x9D | 0.74 | 0xDD | 7.0 |
| 0x1E | 0.050 | 0x5E | 0.295 | 0x9E | 0.76 | 0xDE | 7.2 |
| 0x1F | 0.052 | 0x5F | 0.300 | 0x9F | 0.78 | 0xDF | 7.4 |
| 0x20 | 0.054 | 0x60 | 0.305 | 0xA0 | 0.80 | 0xE0 | 7.6 |
| 0x21 | 0.056 | 0x61 | 0.310 | 0xA1 | 0.82 | 0xE1 | 7.8 |
| 0x22 | 0.058 | 0x62 | 0.315 | 0xA2 | 0.84 | 0xE2 | 8.0 |
| 0x23 | 0.060 | 0x63 | 0.320 | 0xA3 | 0.86 | 0xE3 | 8.2 |
| 0x24 | 0.062 | 0x64 | 0.325 | 0xA4 | 0.88 | 0xE4 | 8.4 |
| 0x25 | 0.064 | 0x65 | 0.330 | 0xA5 | 0.90 | 0xE5 | 8.6 |
| 0x26 | 0.066 | 0x66 | 0.335 | 0xA6 | 0.92 | 0xE6 | 8.8 |
| 0x27 | 0.068 | 0x67 | 0.340 | 0xA7 | 0.94 | 0xE7 | 9 |
| 0x28 | 0.070 | 0x68 | 0.345 | 0xA8 | 0.96 | 0xE8 | 9.2 |
| 0x29 | 0.072 | 0x69 | 0.350 | 0xA9 | 0.98 | 0xE9 | 9.4 |
| 0x2A | 0.074 | 0x6A | 0.355 | 0xAA | 1.00 | 0xEA | 9.6 |
| 0x2B | 0.076 | 0x6B | 0.360 | 0xAB | 1.05 | 0xEB | 9.8 |
| 0x2C | 0.078 | 0x6C | 0.365 | 0xAC | 1.10 | 0xEC | 10.0 |
| 0x2D | 0.080 | 0x6D | 0.370 | 0xAD | 1.15 | 0xED | 10.5 |
| 0x2E | 0.082 | 0x6E | 0.375 | 0xAE | 1.20 | 0xEE | 11.0 |
| 0x2F | 0.084 | 0x6F | 0.380 | 0xAF | 1.25 | 0xEF | 11.5 |
| 0x30 | 0.086 | 0x70 | 0.385 | 0xB0 | 1.30 | 0xF0 | 12.0 |
| 0x31 | 0.088 | 0x71 | 0.390 | 0xB1 | 1.35 | 0xF1 | 12.5 |
| 0x32 | 0.090 | 0x72 | 0.395 | 0xB2 | 1.40 | 0xF2 | 13.0 |
| 0x33 | 0.092 | 0x73 | 0.400 | 0xB3 | 1.45 | 0xF3 | 13.5 |
| 0x34 | 0.094 | 0x74 | 0.405 | 0xB4 | 1.50 | 0xF4 | 14.0 |
| 0x35 | 0.096 | 0x75 | 0.410 | 0xB5 | 1.55 | 0xF5 | 14.5 |
| 0x36 | 0.098 | 0x76 | 0.415 | 0xB6 | 1.60 | 0xF6 | 15.0 |
| 0x37 | 0.100 | 0x77 | 0.420 | 0xB7 | 1.65 | 0xF7 | 15.5 |
| 0x38 | 0.105 | 0x78 | 0.425 | 0xB8 | 1.70 | 0xF8 | 16.0 |
| 0x39 | 0.110 | 0x79 | 0.430 | 0xB9 | 1.75 | 0xF9 | 16.5 |
| 0x3A | 0.115 | 0x7A | 0.435 | 0xBA | 1.80 | 0xFA | 17.0 |
| 0x3B | 0.120 | 0x7B | 0.440 | 0xBB | 1.85 | 0xFB | 17.5 |
| 0x3C | 0.125 | 0x7C | 0.445 | 0xBC | 1.90 | 0xFC | 18.0 |
| 0x3D | 0.130 | 0x7D | 0.450 | 0xBD | 1.95 | 0xFD | 18.5 |
| 0x3E | 0.135 | 0x7E | 0.455 | 0xBE | 2.00 | 0xFE | 19.0 |
| 0x3F | 0.140 | 0x7F | 0.460 | 0xBF | 2.05 | 0xFF | 20.0 |


#### 6.3.13.3  Motor Back-EMF constant

The back-EMF constant describes the motor phase-to-neutral back-EMF voltage as a function of the motor speed. For a wye-connected motor, the motor BEMF constant refers to the BEMF as a function of time from the phase output to the center tap, Kt<sub>PH_N</sub> (denoted as Kt<sub>PH_N</sub> in [Figure 6-34](#SLVSCP27248-20)). For a delta-connected motor, the motor BEMF constant refers to the equivalent phase to center tap in the wye configuration in [Figure 6-34](#SLVSCP27248-20).

![MCF8329A-Q1 Motor back-EMF constant](https://www.ti.com/ods/images/SLLSFV1/GUID-E8DB6708-11D7-444B-9196-C1417F46CAD9-low.svg)

**Figure 6-34 Motor back-EMF constant**

For both the delta-connected motor and the wye-connected motor, the easy way to get the equivalent Kt<sub>PH_N</sub> is to measure the peak value of BEMF on scope for one electrical cycle between two phase terminals (E<sub>PH</sub>), and then multiply by time duration of one electrical cycle and in order to convert from phase-to-phase to phase-to-neutral divide by sqrt(3) as shown in [Equation 12](#GUID-7182171E-34D9-4E68-8530-866074DD9718) .


Equation 12. $$\left(Kt\right)_{PH\_N} = \left(1/\left(\sqrt{3}\right) \times E_{PH} \times t_{E}\right)$$


Configure the motor BEMF constant (Kt<sub>PH_N</sub>) to a nearest value from [Table 6-4](#SLVSCP296901-20).

**Table 6-4 Motor BEMF constant Look-Up Table**


| MOTOR_BEMF_CONST (HEX) | Kt<sub>PH_N</sub> (mV/Hz) | MOTOR_BEMF_CONST (HEX) | Kt<sub>PH_N</sub> (mV/Hz) | MOTOR_BEMF_CONST (HEX) | Kt<sub>PH_N</sub> (mV/Hz) | MOTOR_BEMF_CONST (HEX) | Kt<sub>PH_N</sub> (mV/Hz) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | Self Measurement (see Motor Parameter Extraction Tool (MPET) ) | 0x40 | 14.5 | 0x80 | 46.5 | 0xC0 | 210 |
| 0x01 | 0.6 | 0x41 | 15.0 | 0x81 | 47.0 | 0xC1 | 220 |
| 0x02 | 0.7 | 0x42 | 15.5 | 0x82 | 47.5 | 0xC2 | 230 |
| 0x03 | 0.8 | 0x43 | 16.0 | 0x83 | 48.0 | 0xC3 | 240 |
| 0x04 | 0.9 | 0x44 | 16.5 | 0x84 | 48.5 | 0xC4 | 250 |
| 0x05 | 1.0 | 0x45 | 17.0 | 0x85 | 49.0 | 0xC5 | 260 |
| 0x06 | 1.1 | 0x46 | 17.5 | 0x86 | 49.5 | 0xC6 | 270 |
| 0x07 | 1.2 | 0x47 | 18.0 | 0x87 | 50.0 | 0xC7 | 280 |
| 0x08 | 1.3 | 0x48 | 18.5 | 0x88 | 51 | 0xC8 | 290 |
| 0x09 | 1.4 | 0x49 | 19.0 | 0x89 | 52 | 0xC9 | 300 |
| 0x0A | 1.5 | 0x4A | 19.5 | 0x8A | 53 | 0xCA | 320 |
| 0x0B | 1.6 | 0x4B | 20.0 | 0x8B | 54 | 0xCB | 340 |
| 0x0C | 1.7 | 0x4C | 20.5 | 0x8C | 55 | 0xCC | 360 |
| 0x0D | 1.8 | 0x4D | 21.0 | 0x8D | 56 | 0xCD | 380 |
| 0x0E | 1.9 | 0x4E | 21.5 | 0x8E | 57 | 0xCE | 400 |
| 0x0F | 2.0 | 0x4F | 22.0 | 0x8F | 58 | 0xCF | 420 |
| 0x10 | 2.2 | 0x50 | 22.5 | 0x90 | 59 | 0xD0 | 440 |
| 0x11 | 2.4 | 0x51 | 23.0 | 0x91 | 60 | 0xD1 | 460 |
| 0x12 | 2.6 | 0x52 | 23.5 | 0x92 | 61 | 0xD2 | 480 |
| 0x13 | 2.8 | 0x53 | 24.0 | 0x93 | 62 | 0xD3 | 500 |
| 0x14 | 3.0 | 0x54 | 24.5 | 0x94 | 63 | 0xD4 | 520 |
| 0x15 | 3.2 | 0x55 | 25.0 | 0x95 | 64 | 0xD5 | 540 |
| 0x16 | 3.4 | 0x56 | 25.5 | 0x96 | 65 | 0xD6 | 560 |
| 0x17 | 3.6 | 0x57 | 26.0 | 0x97 | 66 | 0xD7 | 580 |
| 0x18 | 3.8 | 0x58 | 26.5 | 0x98 | 67 | 0xD8 | 600 |
| 0x19 | 4.0 | 0x59 | 27.0 | 0x99 | 68 | 0xD9 | 620 |
| 0x1A | 4.2 | 0x5A | 27.5 | 0x9A | 69 | 0xDA | 640 |
| 0x1B | 4.4 | 0x5B | 28.0 | 0x9B | 70 | 0xDB | 660 |
| 0x1C | 4.6 | 0x5C | 28.5 | 0x9C | 72 | 0xDC | 680 |
| 0x1D | 4.8 | 0x5D | 29.0 | 0x9D | 74 | 0xDD | 700 |
| 0x1E | 5.0 | 0x5E | 29.5 | 0x9E | 76 | 0xDE | 720 |
| 0x1F | 5.2 | 0x5F | 30.0 | 0x9F | 78 | 0xDF | 740 |
| 0x20 | 5.4 | 0x60 | 30.5 | 0xA0 | 80 | 0xE0 | 760 |
| 0x21 | 5.6 | 0x61 | 31.0 | 0xA1 | 82 | 0xE1 | 780 |
| 0x22 | 5.8 | 0x62 | 31.5 | 0xA2 | 84 | 0xE2 | 800 |
| 0x23 | 6.0 | 0x63 | 32.0 | 0xA3 | 86 | 0xE3 | 820 |
| 0x24 | 6.2 | 0x64 | 32.5 | 0xA4 | 88 | 0xE4 | 840 |
| 0x25 | 6.4 | 0x65 | 33.0 | 0xA5 | 90 | 0xE5 | 860 |
| 0x26 | 6.6 | 0x66 | 33.5 | 0xA6 | 92 | 0xE6 | 880 |
| 0x27 | 6.8 | 0x67 | 34.0 | 0xA7 | 94 | 0xE7 | 900 |
| 0x28 | 7.0 | 0x68 | 34.5 | 0xA8 | 96 | 0xE8 | 920 |
| 0x29 | 7.2 | 0x69 | 35.0 | 0xA9 | 98 | 0xE9 | 940 |
| 0x2A | 7.4 | 0x6A | 35.5 | 0xAA | 100 | 0xEA | 960 |
| 0x2B | 7.6 | 0x6B | 36.0 | 0xAB | 105 | 0xEB | 980 |
| 0x2C | 7.8 | 0x6C | 36.5 | 0xAC | 110 | 0xEC | 1000 |
| 0x2D | 8.0 | 0x6D | 37.0 | 0xAD | 115 | 0xED | 1050 |
| 0x2E | 8.2 | 0x6E | 37.5 | 0xAE | 120 | 0xEE | 1100 |
| 0x2F | 8.4 | 0x6F | 38.0 | 0xAF | 125 | 0xEF | 1150 |
| 0x30 | 8.6 | 0x70 | 38.5 | 0xB0 | 130 | 0xF0 | 1200 |
| 0x31 | 8.8 | 0x71 | 39.0 | 0xB1 | 135 | 0xF1 | 1250 |
| 0x32 | 9.0 | 0x72 | 39.5 | 0xB2 | 140 | 0xF2 | 1300 |
| 0x33 | 9.2 | 0x73 | 40.0 | 0xB3 | 145 | 0xF3 | 1350 |
| 0x34 | 9.4 | 0x74 | 40.5 | 0xB4 | 150 | 0xF4 | 1400 |
| 0x35 | 9.6 | 0x75 | 41.0 | 0xB5 | 155 | 0xF5 | 1450 |
| 0x36 | 9.8 | 0x76 | 41.5 | 0xB6 | 160 | 0xF6 | 1500 |
| 0x37 | 10.0 | 0x77 | 42.0 | 0xB7 | 165 | 0xF7 | 1550 |
| 0x38 | 10.5 | 0x78 | 42.5 | 0xB8 | 170 | 0xF8 | 1600 |
| 0x39 | 11.0 | 0x79 | 43.0 | 0xB9 | 175 | 0xF9 | 1650 |
| 0x3A | 11.5 | 0x7A | 43.5 | 0xBA | 180 | 0xFA | 1700 |
| 0x3B | 12.0 | 0x7B | 44.0 | 0xBB | 185 | 0xFB | 1750 |
| 0x3C | 12.5 | 0x7C | 44.5 | 0xBC | 190 | 0xFC | 1800 |
| 0x3D | 13.0 | 0x7D | 45.0 | 0xBD | 195 | 0xFD | 1850 |
| 0x3E | 13.5 | 0x7E | 45.5 | 0xBE | 200 | 0xFE | 1900 |
| 0x3F | 14.0 | 0x7F | 46.0 | 0xBF | 205 | 0xFF | 2000 |


### 6.3.14  Motor Parameter Extraction Tool (MPET)

The MCF8329A-Q1 uses motor winding resistance, motor winding inductance and Back-EMF constant to estimate motor position in closed loop operation. The MPET routine measures motor back EMF constant and mechanical load inertia and frictional coefficients. Offline measurement of parameters takes place before normal motor operation. TI recommends to estimate the motor parameters before motor start-up to minimize the impact caused due to possible parameter variations.

[Figure 6-35](#FIG_TSW_5VM_WRB) shows the sequence of operation in the MPET routine. The MPET routine is entered when either the MPET_CMD bit is set to 1b or a non-zero target speed is set. The MPET routine consists of three steps namely, Open Loop Acceleration, Current Ramp Down and Coasting. Each one of these steps are executed if the condition shown in [Figure 6-35](#FIG_TSW_5VM_WRB) evaluates to TRUE; if the condition evaluates to FALSE, the algorithm bypasses that particular step and moves on to the next step in the sequence. Once all the steps are completed (or bypassed), the algorithm exits the MPET routine. If target speed is set to a non-zero value, the algorithm begins the start-up and acceleration sequence (to target speed reference) once MPET routine is exited.

![MCF8329A-Q1 MPET Sequence](https://www.ti.com/ods/images/SLLSFV1/GUID-20230305-SS0I-SSCB-D9LJ-GPVHKKS8BPLW-low.svg)

**Figure 6-35 MPET Sequence**

TI proprietary MPET routine includes following sequence of operation.

-   **Open loop Acceleration**: The MPET routine run align and then open loop acceleration if the back-EMF constant or mechanical parameter measurement are enabled by setting MPET_KE = 1b and MPET_MECH = 1b. The MPET routine incorporates the sequences for mechanical parameter measurement, if the speed loop PI constants are defined as zero, even if MPET_MECH = 0b. User can configure MPET specific open loop configuration parameters or use normal motor operation open loop configuration parameters. The open loop configuration selection is done using MPET_KE_MEAS_PARAMETER_SELECT. With MPET_KE_MEAS_PARAMETER_SELECT = 1b, the speed slew rate is defined using MPET_OPEN_LOOP_SLEW_RATE, the open loop current reference is defined using MPET_OPEN_LOOP_CURR_REF and the open loop speed reference is defined using MPET_OPEN_LOOP_SPEED_REF. With MPET_KE_MEAS_PARAMETER_SELECT = 0b, the speed slew rate is defined using OL_ACC_A1 and OL_ACC_A2, the current reference is OL_ILIMIT, and speed reference is OPN_CL_HANDOFF_THR.
-   **Current Ramp Down**: After open loop acceleration, if the mechanical parameter measurement is enabled, then the MPET routine optimizes the motor current to lower value sufficient to support the load. If mechanical parameter measurement is disabled (MPET_MECH = 0b, or non-zero speed loop PI parameters) then the MPET will not have the current ramp down sequence.
-   **Coasting**: MPET routine completes the sequence by allowing the motor to coast by enabling Hi-Z. The motor back EMF and indicative values of mechanical parameters are measured during the motor coasting period. If the motor back EMF is lower than the threshold defined in STAT_DETECT_THR, the MPET_BEMF_FAULT is generated.

**Selecting the parameters from EEPROM or MPET**

The MPET estimated values are available in the MTR_PARAMS Register. Setting the MPET_WRITE_SHADOW bit to 1, writes the MPET estimated values to the shadow registers and the user-configured (from EEPROM) values in MOTOR_BEMF_CONST, SPD_LOOP_KP and SPD_LOOP_KI shadow registers will be overwritten by the estimated values from MPET. If any of the shadow registers are initialized to zero (from EEPROM registers), the MPET estimated values are used for those registers independent of the MPET_WRITE_SHADOW setting. The MPET calculates the current loop KP and KI by using the user entered resistance and inductance. The MPET does an estimation of the mechanical parameters including the inertia and frictional coefficient at the shaft (includes both motor and shaft coupled load). These values are used to set an initial values speed loop KP and KI. The estimated speed loop KP and KI setting can be used as an initial setting only and TI recommends to tune these parameters on application by the user based on the performance requirement.

Note:

1.  TI recommends to set the bit VdcFilterDisable to 1b during MPET measurement.
2.  FG signal is not accurate during MPET.
3.  If CURRENT_LOOP_KP and CURRENT_LOOP_KI are set to zero, then MCF8329A-Q1 automatically calculates these coefficients using motor resistance and inductance values.


### 6.3.15  Anti-Voltage Surge (AVS)

When a motor is driven, energy is transferred from the power supply into the motor. Some of this energy is stored in the form of inductive and mechanical energy. If the speed command suddenly drops such that the BEMF voltage generated by the motor is greater than the voltage that is applied to the motor, then the mechanical energy of the motor is returned to the power supply and the V<sub>PVDD</sub> voltage surges. The AVS feature works to prevent this voltage surge on V<sub>PVDD</sub> and can be enabled by setting AVS_EN to 1b. AVS can be disabled by setting AVS_EN to 0b. When AVS is disabled, the deceleration rate is configured through CL_DEC_CONFIG.


### 6.3.16  Active Braking

Decelerating the motor quickly requires the motor mechanical energy to be extracted from the rotor in a fast and controlled manner. However, the DC supply voltage increases if the motor mechanical energy is returned to the power supply during the deceleration process. MCF8329A-Q1 is capable of decelerating the motor quickly without pumping energy back into the supply voltage by using a novel technique called active braking. ACTIVE_BRAKE_EN is set to 1b to enable active braking and prevent DC bus voltage spike during fast motor deceleration. Active braking can also be used during reverse drive (see [Section 6.3.9.3](GUID-B0B3EF4B-B19B-4E29-A351-D86CA80DA4D8.html)) or motor stop (see [Section 6.3.20.4](GUID-348A6941-5C0D-475B-B0C8-F4FE27710B1B.html)) to reduce the motor speed quickly without DC voltage spike.

The maximum limit on the current sourced from the DC bus (i<sub>dc_ref</sub>) during active braking can be configured using ACTIVE_BRAKE_CURRENT_LIMIT. The power flow control during active braking is achieved by using both Q-axis (i<sub>q</sub>) and D-axis (i<sub>d</sub>) components of current. The D-axis current reference (i<sub>d_ref</sub>) is generated from the error between DC bus current limit (i<sub>dc_ref</sub>) and the estimated DC bus current (i<sub>dc</sub>) using a PI controller. The i<sub>dc</sub> value is estimated from the measured phase currents, phase voltage and DC bus voltage, using power balance equation (equating the instantaneous DC bus power to sum of all three instantaneous phase power assuming 100% efficiency). During active braking, the DC bus current limit (i<sub>dc_ref</sub>) starts from zero and linearly increases to ACTIVE_BRAKE_CURRENT_LIMIT with current slew rate as defined by ACTIVE_BRAKE_BUS_CURRENT_SLEW_RATE. The gain constants of PI controller can be configured using ACTIVE_BRAKE_KP and ACTIVE_BRAKE_KI. [Figure 6-36](#T5752651-51)shows the active braking id current control loop.

![MCF8329A-Q1 Active Braking Current Control Loop for id_ref](https://www.ti.com/ods/images/SLLSFV1/GUID-DE38514C-230F-43C4-86FC-A5E68BE4D44E-low.svg)

**Figure 6-36 Active Braking Current Control Loop for i<sub>d_ref</sub>**

ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY sets the minimum difference between the initial and target speed above which active braking is entered. For example, consider ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY is set to 10%; if the initial speed is 100% and target speed is set to 95%, MCF8329A-Q1 uses AVS instead of active braking to reach 95% speed since the difference in commanded speed change (5%) is less than ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY (10%).

ACTIVE_BRAKE_SPEED_DELTA_LIMIT_EXIT sets the difference between the current and target speed below which active braking is exited. For example, consider ACTIVE_BRAKE_SPEED_DELTA_LIMIT_EXIT is set to 5%; if the initial motor speed is 100% and target speed is set to 10%, MCF8329A-Q1 uses active braking to reduce the motor speed to 15%; upon reaching 15% speed, MCF8329A-Q1 exits active braking and uses AVS to decelerate the motor speed to 10%.

ACTIVE_BRAKE_MOD_INDEX_LIMIT sets the modulation index below which active braking is used. For example, consider ACTIVE_BRAKE_MOD_INDEX_LIMIT is set to 50%, ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY is set to 5%, ACTIVE_BRAKE_SPEED_DELTA_LIMIT_EXIT is set to 2.5%. If the initial motor speed is at 70% (corresponding modulation index is 90%) and target speed is 40% (corresponding modulation index is 60%), MCF8329A-Q1 uses AVS to decelerate the motor till target speed of 40% since the modulation index (60%) corresponding to final speed is higher than ACTIVE_BRAKE_MOD_INDEX_LIMIT of 50%. In the same case, if final speed command is 10% (corresponding modulation index is 30%), MCF8329A-Q1 uses AVS till 30% speed (corresponding modulation index is 50%), switches to active braking from 30% to 15% speed (final speed of 10% + ACTIVE_BRAKE_SPEED_DELTA_LIMIT_EXIT of 5%) and uses AVS again from 15% to 10% speed to complete the active braking. TI recommends starting active braking tuning with ACTIVE_BRAKE_MOD_INDEX_LIMIT set to 100%; if there is a DC bus voltage spike observed during active braking, reduce ACTIVE_BRAKE_MOD_INDEX_LIMIT in steps so as to eliminate this voltage spike. If ACTIVE_BRAKE_MOD_INDEX_LIMIT is set to 0%, MCF8329A-Q1 decelerates in AVS (even when ACTIVE_BRAKE_EN is set to 1b) in the forward direction; in reverse direction (during direction change), ACTIVE_BRAKE_MOD_INDEX_LIMIT is not applicable and therefore MCF8329A-Q1 decelerates in active braking.

Note:

1.  ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY, ACTIVE_BRAKE_SPEED_DELTA_LIMIT_EXIT and ACTIVE_BRAKE_MOD_INDEX_LIMIT are applicable only during deceleration in forward direction and not used during direction change.
2.  ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY is set higher than ACTIVE_BRAKE_SPEED_DELTA_LIMIT_EXIT for active braking operation.
3.  During active (or closed loop) braking, I<sub>q_ref</sub> is clamped to -ILIMIT. This (I<sub>q_ref</sub> being clamped to -ILIMIT) can result in the speed PI loop getting saturated and SPEED_LOOP_SATURATION bit getting set to 1b during deceleration. This bit is automatically set to 0b once the deceleration is completed and the speed PI loop is out of saturation. Hence, speed loop saturation fault is to be ignored during deceleration.
4.  Active braking is only available in speed control mode.


### 6.3.17  Output PWM Switching Frequency

MCF8329A-Q1 provides the option to configure the output PWM switching frequency of the MOSFETs through PWM_FREQ_OUT. PWM_FREQ_OUT has a range of 10-75 kHz. In order to select optimal output PWM switching frequency, user has to make tradeoff between the current ripple and the switching losses. Generally, motors having lower L/R ratio require higher PWM switching frequency to reduce current ripple.

Note: PWM frequency in multiples of 15 kHz enables high current loop bandwidth and gives best performance at high speed motor operation.


### 6.3.18  Dead Time Compensation

Dead time is inserted between the switching instants of high-side and low-side MOSFET in a half bridge leg to avoid shoot-through condition. Due to dead time insertion, the expected voltage and applied voltage at the phase node differ based on the phase current direction. The phase node voltage distortion introduces undesired distortion in the phase current causing audible noise. The distortion in current waveform due to dead time appear as sixth harmonic of fundamental frequency in the dq reference frame. The MCF8329A-Q1 integrates a proprietary dead time compensation, so that the current distortion due to dead time is alleviated. The dead time compensation can be enabled or disabled by configuring DEADTIME_COMP_EN. Even when DEADTIME_COMP_EN is set to 1b (compensation enabled), dead time compensation is disabled when motor electrical frequency exceeds 108-Hz.


### 6.3.19  Voltage Sense Scaling

The MCF8329A-Q1 integrates dynamic voltage scaling to improve the resolution of phase voltage and DC bus voltage sensing. The DC bus voltage is sensed at the PVDD pin. The motor phase voltage and DC bus voltage is sensed using an integrated voltage divider with voltage scaling of 5V/V or 10V/V or 20V/V, to limit the sense voltage to less than 3-V across operating voltage. Setting the bit DYN_VOLT_SCALING_EN = 0b disables dynamic voltage scaling and MCF8329A-Q1 uses 20V/V gain. Setting the bit DYN_VOLT_SCALING_EN = 1b enables dynamic voltage scaling and MCF8329A-Q1 senses the DC bus voltage during motor start-up and select the appropriate voltage scaling of 5V/V or 10V/V or 20V/V.

Note: TI recommends to disable dynamic voltage scaling in case DC bus voltage more than 15V is expected.


### 6.3.20  Motor Stop Options

The MCF8329A-Q1 provides different options for stopping the motor which can be configured by MTR_STOP.


#### 6.3.20.1  Coast (Hi-Z) Mode

Coast (Hi-Z) mode is configured by setting MTR_STOP to 000b. When motor stop command is received, the MCF8329A-Q1 turns off all the external MOSFETs creating Hi-Z state at the phase motor terminals. When the MCF8329A-Q1 transitions from driving the motor into a Hi-Z state, the inductive current in the motor windings continues to flow and the energy returns to the power supply through the body diodes in the MOSFET output stage (see example [Figure 6-37](#FIG_GF1_ZMP_XRB)).

![MCF8329A-Q1 Coast (Hi-Z) Mode](https://www.ti.com/ods/images/SLLSFV1/GUID-194A26D3-D61E-4B15-80B3-DBB4FACF6416-low.svg)

**Figure 6-37 Coast (Hi-Z) Mode**

In this example, current is applied to the motor through the high-side phase-A MOSFET (HSA), high-side phase-B MOSFET(HSB) and returned through the low-side phase-C MOSFET (LSC). When motor stop command is received all 6 MOSFETs transition to Hi-Z state and the inductive energy returns to supply through body diodes of MOSFETs LSA, LSB and HSC.


#### 6.3.20.2  Recirculation Mode

Recirculation mode is configured by setting MTR_STOP to 001b. In order to prevent the inductive energy from returning to DC input supply during motor stop, the MCF8329A-Q1 allows current to circulate within the external MOSFETs by selectively turning OFF some of the active (ON) MOSFETs for a certain time (auto calculated recirculation time to allow the inductive current to decay to zero) before transitioning into Hi-Z by turning OFF the remaining MOSFETs.

Depending on the phase voltage pattern at the time of receiving the stop command, either low-side (see [Figure 6-38](#GUID-7634B56D-BBA5-4B6D-880D-523DF03567BB)) or high-side recirculation (see [Figure 6-39](#GUID-282600C4-0DE7-46FF-A126-C961F2EF335C)) will be used to stop the motor without sending the inductive energy back to the DC input supply.

![MCF8329A-Q1 Low-Side Recirculation](https://www.ti.com/ods/images/SLLSFV1/GUID-C6BFD209-9D6B-4DB6-952E-F1A720D87C63-low.svg)

**Figure 6-38 Low-Side Recirculation**

![MCF8329A-Q1 High-Side Recirculation](https://www.ti.com/ods/images/SLLSFV1/GUID-1CA6F126-1E69-4870-A5AC-C0EF500FC5BD-low.svg)

**Figure 6-39 High-Side Recirculation**

Note:

1.  Recirculation stop is not supported when the motor is in flux weakening zone or MTPA or in active brake mode, and when motor is in any of these states then recirculation stop mode is over written with Hi-Z.
2.  Recirculation mode is not supported in modulation index control mode and TI recommends to use other stop modes if modulation index control mode is used.


#### 6.3.20.3  Low-Side Braking

Low-side braking mode is configured by setting MTR_STOP to 010b. When a motor stop command is received, the output speed is reduced to a value defined by BRAKE_SPEED_THRESHOLD prior to turning all low-side MOSFETs ON (see example [Figure 6-40](#FIG_Z3K_VSP_XRB)) for a time configured by MTR_STOP_BRK_TIME. If the motor speed is below BRAKE_SPEED_THRESHOLD prior to receiving stop command, then the MCF8329A-Q1 transitions directly into the brake state. After applying the brake for MTR_STOP_BRK_TIME, the MCF8329A-Q1 transitions into the Hi-Z state by turning OFF all MOSFETs.

![MCF8329A-Q1 Low-Side Braking](https://www.ti.com/ods/images/SLLSFV1/GUID-A66BF46A-EF6D-45A2-BA67-86C7E2748599-low.svg)

**Figure 6-40 Low-Side Braking**

The MCF8329A-Q1 can also enter low-side braking through BRAKE pin input. When BRAKE pin is pulled to HIGH state, the output speed is reduced to a value defined by BRAKE_SPEED_THRESHOLD prior to turning all low-side MOSFETs ON. In this case, MCF8329A-Q1 stays in low-side brake state till BRAKE pin changes to LOW state.


#### 6.3.20.4  Active Spin-Down

Active spin down mode is configured by setting MTR_STOP to 100b. When a motor stop command is received, the MCF8329A-Q1 reduces SPEED_REF to ACT_SPIN_THR and then transitions to Hi-Z state by turning all MOSFETs OFF. The advantage of this mode is that by reducing SPEED_REF, the motor is decelerated to lower speed thereby reducing the phase currents before entering Hi-Z. Now, when the motor transitions into Hi-Z state, the energy transfer to the power supply is reduced. The threshold ACT_SPIN_THR needs to configured high enough for MCF8329A-Q1 to not lose synchronization with the motor.


### 6.3.21  FG Configuration

The MCF8329A-Q1 provides information about the motor speed through the Frequency Generate (FG) pin. In MCF8329A-Q1, the FG pin output is configured through FG_CONFIG. When FG_CONFIG is configured to 0b, the FG output is active as long as the MCF8329A-Q1 is driving the motor. When FG_CONFIG is configured to 1b, the MCF8329A-Q1 provides an FG output as long as the MCF8329A-Q1 is driving the motor and also during coasting until the motor back-EMF falls below the threshold configured by FG_BEMF_THR.


#### 6.3.21.1  FG Output Frequency

The FG output frequency can be configured by FG_DIV. Many applications require the FG output to provide a pulse for every mechanical rotation of the motor. Different FG_DIV configurations can accomplish this for 2-pole up to 30-pole motors.

[Figure 6-41](#T5566057-108) shows the FG output when MCF8329A-Q1 has been configured to provide FG pulses once every electrical cycle (2 poles), once every two electrical cycle (4 poles), once every three electrical cycles (6 poles), once every four electrical cycles (8 poles), and so on.

![MCF8329A-Q1 FG Frequency Divider](https://www.ti.com/ods/images/SLLSFV1/GUID-927B7EFC-223D-43D8-9DA7-20DCBA034776-low.svg)

**Figure 6-41 FG Frequency Divider**


#### 6.3.21.2  FG in Open-Loop

During closed loop (commutation) operation, the driving speed (FG output frequency) and the actual motor speed are synchronized. During open-loop operation, however, FG may not reflect the actual motor speed. The open loop and closed loop here refers to the motor commutation method and not referred to closed loop speed or power control.

The MCF8329A-Q1 provides three options for controlling the FG output during open loop, as shown in [Figure 6-42](#T5566057-109). The selection of these options is configured through FG_SEL.

If FG_SEL is set to,

-   00b : Output FG in ISD, open loop and closed loop.
-   01b : Output FG in only closed loop. FG pin will be Hi-Z (high with external pull up) during open loop.
-   10b: The FG output will reflect the driving frequency during open loop operation in the first motor start-up cycle after power-on, sleep/standby; FG will be Hi-Z (high with external pull up) during open loop operation in subsequent start-up cycles.

![MCF8329A-Q1 FG Behavior During Open Loop](https://www.ti.com/ods/images/SLLSFV1/GUID-E19C2C77-2FAE-499C-8CED-83E9DE8BC89F-low.svg)

**Figure 6-42 FG Behavior During Open Loop**


#### 6.3.21.3  FG During Motor Stop

The FG pin state when the motor stops rotating can be defined using FG_IDLE_CONFIG. The motor stop is decided by FG_BEMF_THR.


#### 6.3.21.4  FG Behavior During Fault

The FG behavior during faults (those reported on nFAULT pin) can be configured using FG_FAULT_CONFIG.

Note: Fault type reporting on FG pin may not be available in case of retry faults with retry time < 1s (FG signal time period for fault type reporting)


### 6.3.22  DC Bus Current Limit

The DC bus current limit feature can be used in applications to limit the current supplied by source without entering the constant current mode. The DC bus current limit feature can be enabled by setting BUS_CURRENT_LIMIT_ENABLE to 1b. The DC bus current limit threshold can be configured using BUS_CURRENT_LIMIT. The DC bus current limit limits the speed reference and a functional diagram is shown in [Figure 6-43](#FIG_Q2B_ZCK_51C), [Figure 6-44](#FIG_KGS_1DK_51C) and [Figure 6-45](#FIG_Y5F_2DK_51C). Enabling this feature may restrict the speed of the motor so that current drawn from source is limited. The algorithm estimates the bus current using the measured phase currents, phase voltage and DC bus voltage. The current limit status is reported on BUS_CURRENT_LIMIT_STATUS.

![MCF8329A-Q1 DC Bus Current Limit Functional Block Diagram in Speed or Power Control Mode](https://www.ti.com/ods/images/SLLSFV1/GUID-20231029-SS0I-NSRS-CGKQ-QQDRKN9ZZQLG-low.svg) 

**Figure 6-43 DC Bus Current Limit Functional Block Diagram in Speed or Power Control Mode**

![MCF8329A-Q1 DC Bus Current Limit Functional Block Diagram in Current Control Mode](https://www.ti.com/ods/images/SLLSFV1/GUID-20231029-SS0I-K06H-GFCX-8HQVPDDWPVCK-low.svg) 

**Figure 6-44 DC Bus Current Limit Functional Block Diagram in Current Control Mode**

![MCF8329A-Q1 DC Bus Current Limit Functional Block Diagram in Modulation Index Control Mode](https://www.ti.com/ods/images/SLLSFV1/GUID-20231029-SS0I-BDMX-VQ1N-L5JXQTCCSV4G-low.svg) 

**Figure 6-45 DC Bus Current Limit Functional Block Diagram in Modulation Index Control Mode**

Note:

1.  DC bus current limit feature is not available when active braking is enabled.
2.  MCF8329A-Q1 implements a 5% hysteresis around BUS_CURRENT_LIMIT to avoid chattering around this set-point.


### 6.3.23  Protections

The MCF8329A-Q1 is protected from a host of fault events including motor lock, PVDD undervoltage, AVDD undervoltage, GVDD undervoltage, bootstrap undervoltage, overtemperature and overcurrent events. [Table 6-5](#TABLE_NKP_BG3_5WB) summarizes the response, recovery modes, gate driver status, reporting mechanism for different faults.

Note:

1.  Actionable and report only faults (latched or retry) are always reported on nFAULT pin (as logic low).
2.  Priority order for multi-fault scenarios is latched > slower retry time fault > faster retry time fault > report only fault. For example, if a latched and retry fault happen simultaneously, the device stays latched in fault mode until user issues clear fault command by writing 1b to CLR_FLT or through a power recycle. If two retry faults with different retry times happen simultaneously, the device retries only after the longer (slower) retry time lapses.
3.  Recovery refers only to state of gate driver after the fault condition is removed. Automatic indicates that the device automatically recovers (and gate driver outputs and hence external FETs are active) when retry time lapses after the fault condition is removed. Latched indicates that the device waits for clearing of fault condition (by writing 1b to CLR_FLT bit) or through a power recycle.
4.  The GVDD undervoltage, BST under voltage, VDS OCP, SENSE OCP faults can take up to 200ms after fault response (gate driver outputs pulled low to put the external FETs in Hi-Z) to be reported on nFAULT pin (as logic low).
5.  Latched faults can take up to 200ms after CLR_FLT command is issued (over I<sup>2</sup>C) to be cleared.
6.  CLR_FLT command (over I<sup>2</sup>C) can clear all the faults including latched, retry and auto recovery faults.

**Table 6-5 Fault Action and Response**


| FAULT | CONDITION | CONFIGURATION | REPORT | GATE DRIVER | LOGIC | RECOVERY |
| --- | --- | --- | --- | --- | --- | --- |
| PVDD under-voltage (PVDD_UV) | V<sub>PVDD</sub> < V<sub>PVDD_UV</sub> | — | nFAULT | Disabled | Disabled | Automatic: V<sub>PVDD</sub> > V<sub>PVDD_UV</sub> |
| AVDD POR (AVDD_POR) | V<sub>AVDD</sub> < V<sub>AVDD_POR</sub> | — | nFAULT | Disabled | Disabled | Automatic: V<sub>AVDD</sub> > V<sub>AVDD_POR</sub> |
| GVDD under-voltage (GVDD_UV) | V<sub>GVDD </sub> < V<sub>GVDD_UV</sub> | GVDD_UV_MODE = 0b | nFAULT and GATE_DRIVER_FAULT_STATUS Register | Pulled Low <sup> <sup>(1)</sup> </sup> | Active | Latched: CLR_FLT |
| GVDD_UV_MODE = 1b | nFAULT and GATE_DRIVER_FAULT_STATUS Register | Pulled Low <sup> <sup>(1)</sup> </sup> | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| BSTx under-voltage (BST_UV) | V<sub>BSTx</sub> - V<sub>SHx</sub> < V<sub>BST_UV</sub> | DIS_BST_FLT = 0b BST_UV_MODE = 0b | nFAULT and GATE_DRIVER_FAULT_STATUS Register | Pulled Low <sup> <sup>(1)</sup> </sup> | Active | Latched: CLR_FLT |
| DIS_BST_FLT = 0b BST_UV_MODE = 1b | nFAULT and GATE_DRIVER_FAULT_STATUS Register | Pulled Low <sup> <sup>(1)</sup> </sup> | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| V<sub>DS</sub> overcurrent (VDS_OCP) | V<sub>DS</sub> > V<sub>SEL_VDS_LVL</sub> | DIS_VDS_FLT = 0b VDS_FLT_MODE = 0b | nFAULT and GATE_DRIVER_FAULT_STATUS Register | Pulled Low <sup> <sup>(1)</sup> </sup> | Active | Latched: CLR_FLT |
| DIS_VDS_FLT = 0b VDS_FLT_MODE = 1b | nFAULT and GATE_DRIVER_FAULT_STATUS Register | Pulled Low <sup> <sup>(1)</sup> </sup> | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| V<sub>SENSE</sub> overcurrent (SEN_OCP)V<sub>SENSE</sub> overcurrent (SEN_OCP) | V<sub>SP</sub> > V<sub>SENSE_LVL</sub> | DIS_SNS_FLT = 0b SNS_FLT_MODE = 0b | nFAULT and GATE_DRIVER_FAULT_STATUS Register | Pulled Low <sup> <sup>(1)</sup> </sup> | Active | Latched: CLR_FLT |
| DIS_SNS_FLT = 0b SNS_FLT_MODE = 1b | nFAULT and GATE_DRIVER_FAULT_STATUS Register | Pulled Low <sup> <sup>(1)</sup> </sup> | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| 3 Motor Lock (MTR_LCK ) | Motor lock: Abnormal Speed; No Motor Lock; Abnormal BEMF | MTR_LCK_MODE = 0000b or 0001b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Latched: CLR_FLT |
| MTR_LCK_MODE = 0010b or 0011b | nFAULT and CONTROLLER_FAULT_STATUS register | Low side brake logic | Active | Latched: CLR_FLT |  |  |
| MTR_LCK_MODE = 0100b or 0101b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| MTR_LCK_MODE = 0110b or 0111b | nFAULT and CONTROLLER_FAULT_STATUS register | Low side brake logic | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| MTR_LCK_MODE = 1000b | nFAULT and CONTROLLER_FAULT_STATUS register | Active | Active | No action |  |  |
| MTR_LCK_MODE = 1001b to 1111b | None | Active | Active | No action |  |  |
| Hardware Lock-Detection Current Limit (HW_LOCK_ILIMIT) | Phase Current > HW_LOCK_ILIMIT | HW_LOCK_ILIMIT_MODE = 0000b or 0001b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Latched: CLR_FLT |
| HW_LOCK_ILIMIT_MODE =0010b or 0011b | nFAULT and CONTROLLER_FAULT_STATUS register | Low-side brake logic | Active | Latched: CLR_FLT |  |  |
| HW_LOCK_ILIMIT_MODE = 0100b or 0101b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| HW_LOCK_ILIMIT_MODE = 0110b or 0111b | nFAULT and CONTROLLER_FAULT_STATUS register | Low-side brake logic | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| HW_LOCK_ILIMIT_MODE= 1000b | nFAULT and CONTROLLER_FAULT_STATUS register | Active | Active | No action |  |  |
| HW_LOCK_ILIMIT_MODE = 1001b to 1111b | None | Active | Active | No action |  |  |
| ADC based Lock-Detection Current Limit (LOCK_ILIMIT) | Phase Current > LOCK_ILIMIT | LOCK_ILIMIT_MODE = 0000b or 0001b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Latched: CLR_FLT |
| LOCK_ILIMIT_MODE = 0010b or 0011b | nFAULT and CONTROLLER_FAULT_STATUS register | Low-side brake logic | Active | Latched: CLR_FLT |  |  |
| LOCK_ILIMIT_MODE = 0100b or 0101b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| LOCK_ILIMIT_MODE = 0110b or 0111b | nFAULT and CONTROLLER_FAULT_STATUS register | Low-side brake logic | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| LOCK_ILIMIT_MODE= 1000b | nFAULT and CONTROLLER_FAULT_STATUS register | Active | Active | No action |  |  |
| LOCK_ILIMIT_MODE = 1001b to 1111b | None | Active | Active | No action |  |  |
| IPD Timeout Fault (IPD_T1_FAULT) | IPD TIME > 500ms (approx), during IPD current ramp up or ramp down | IPD_TIMEOUT_FAULT_EN = 0b | - | Active | Active | No action |
| IPD_TIMEOUT_FAULT_EN = 1b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| IPD Frequency Fault (IPD_FREQ_FAULT) | IPD pulse before the current decay in previous IPD | IPD_FREQ_FAULT_EN = 0b | - | Active | Active | No action |
| IPD_FREQ_FAULT_EN = 1b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Retry: t<sub>LCK_RETRY</sub> |  |  |
| MPET Back-EMF Fault (MPET_BEMF_FAULT) | Motor Back EMF < STAT_DETECT_THR | MPET_CMD = 1 or MPET_KE = 1 | nFAULT and CONTROLLER_FAULT_STATUS register | Hi-Z | Active | Latched: CLR_FLT |
| Maximum V<sub>PVDD</sub> (over-voltage) fault | V<sub>PVDD</sub> > MAX_VM_MOTOR, if MAX_VM_MOTOR ≠ 000b | MAX_VM_MODE = 0b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Latched: CLR_FLT |
| MAX_VM_MODE = 1b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Automatic: (V<sub>VM</sub> < MAX_VM_MOTOR - VM_UV_OV_HYS) V |  |  |
| Minimum V<sub>PVDD</sub> (under-voltage) fault | V<sub>PVDD</sub> < MIN_VM_MOTOR, if MIN_VM_MOTOR ≠ 000b | MIN_VM_MODE = 0b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Latched: CLR_FLT |
| MIN_VM_MODE = 1b | nFAULT and CONTROLLER_FAULT_STATUS register | Pulled Low <sup> <sup>(1)</sup> </sup>(MOSFETs in Hi-Z) | Active | Automatic: (V<sub>VM</sub> > MIN_VM_MOTOR + VM_UV_OV_HYS) V |  |  |
| Bus Current Limit | I<sub>VM</sub> > BUS_CURRENT_LIMIT | BUS_CURRENT_LIMIT_ENABLE = 1b | nFAULT and CONTROLLER_FAULT_STATUS register | Active; motor speed/power/current will be restricted to limit DC bus current | Active | Automatic: Restriction is removed when I<sub>VM</sub> < BUS_CURRENT_LIMIT |
| Current Loop Saturation | Indication of current loop saturation due to lower V<sub>VM</sub> | SATURATION_FLAGS_EN = 1b | nFAULT and CONTROLLER_FAULT_STATUS register | Active; motor speed/power/current may not reach reference | Active | Automatic: motor will reach reference operating point upon exiting saturation |
| Speed/power Loop Saturation | Indication of speed/power loop saturation due to lower V<sub>VM</sub>, lower ILIMIT setting etc., | SATURATION_FLAGS_EN = 1b | nFAULT and CONTROLLER_FAULT_STATUS register | Active; motor speed/power may not reach reference | Active | Automatic: motor will reach reference operating point upon exiting saturation |
| External Watchdog Fault | Time between watchdog tickles > EXT_WD_CONFIG | EXT_WD_EN = 1bEXT_WD_FAULT_MODE = 0b | nFAULT and CONTROLLER_FA ULT_STATUS register | Active | Active | No action |
| EXT_WD_EN = 1bEXT_WD_FAULT_MODE = 1b | nFAULT and CONTROLLER_FA ULT_STATUS register | Pulled Low (MOSFETs in Hi-Z) <sup> <sup>(1)</sup> </sup> | Active | Latched: CLR_FLT |  |  |
| Thermal shutdown (TSD) | T<sub>J</sub> > T<sub>TSD</sub> | OTS_AUTO_RECOVERY = 0b | nFAULT and GATE_DRIVER_FAULT_STATUS Register | Pulled Low (MOSFETs in Hi-Z) <sup> <sup>(1)</sup> </sup> | Active | Latched: CLR_FLT |
| OTS_AUTO_RECOVERY = 1b | nFAULT and GATE_DRIVER_FAULT_STATUS Register | Pulled Low (MOSFETs in Hi-Z) <sup> <sup>(1)</sup> </sup> | Active | Automatic: T<sub>J</sub> < T<sub>OTSD</sub> – T<sub>HYS</sub> |  |  |


(1)  Pulled Low: GHx and GLx are actively pulled low by the gate driver

Note: Any fault reporting on nFAULT pin or CONTROLLER_FAULT_STATUS register or GATE_DRIVER_FAULT_STATUS register can have a latency up to 200ms.


#### 6.3.23.1  PVDD Supply Undervoltage Lockout (PVDD_UV)

If at any time the power supply voltage on the PVDD pin falls below the V<sub>PVDD_UV</sub> threshold for longer than the t<sub>PVDD_UV_DG</sub> time, the device detects a PVDD undervoltage event. After detecting the undervoltage condition, the gate driver is disabled, the charge pump is disabled, the internal digital logic is disabled, and the nFAULT pin is driven low. Normal operation starts again (the gate driver becomes operable and the nFAULT pin is released) when the PVDD pin rises above V<sub>PVDD_UV</sub>.


#### 6.3.23.2  AVDD Power on Reset (AVDD_POR)

If at any time the supply voltage on the AVDD pin falls below the V<sub>AVDD_POR</sub> threshold for longer than the t<sub>AVDD_POR_DG</sub> time, the device enters an inactive state, disabling the gate driver, the charge pump, and the internal digital logic, and nFAULT is driven low. Normal operation (digital logic operational) requires AVDD to exceed V<sub>AVDD_POR</sub> level.


#### 6.3.23.3  GVDD Undervoltage Lockout (GVDD_UV)

If at any time the voltage on the GVDD pin falls lower than the V<sub>GVDD_UV</sub> threshold voltage for longer than the t<sub>GVDD_UV_DG</sub> time, the device detects a GVDD undervoltage event. After detecting the GVDD_UV undervoltage event, all of the gate driver outputs are driven low to disable the external MOSFETs, the charge pump is still running and nFAULT pin is driven low.

The device can be configured in a latched fault state or retry mode upon a GVDD_UV condition using the GVDD_UV_MODE bit. With GVDD_UV_MODE = 0b, normal operation resumes after the GVDD_UV condition is cleared and a clear fault command is issued through the CLR_FLT bit. With GVDD_UV_MODE = 1b, normal operation resumes after the GVDD_UV condition is cleared and a time period of t<sub>LCK_RETRY</sub> is elapsed.


#### 6.3.23.4  BST Undervoltage Lockout (BST_UV)

If at any time the voltage across BSTx and SHx pins falls lower than the V<sub>BST_UV</sub> threshold voltage for longer than the t<sub>BST_UV_DG</sub> time, the device detects a BST undervoltage event. After detecting the BST_UV event, all of the gate driver outputs are driven low to disable the external MOSFETs, and nFAULT pin is driven low. BST_UV can be disabled by configuring DIS_BST_FLT to 1b.

The device can be configured in a latched fault state or retry mode upon a BST_UV condition using the BST_UV_MODE bit. With BST_UV_MODE = 0b, normal operation resumes after the BST_UV condition is cleared and a clear fault command is issued through the CLR_FLT bit. With BST_UV_MODE = 1b, normal operation resumes after the BST_UV condition is cleared and a time period of t<sub>LCK_RETRY</sub> is elapsed.


#### 6.3.23.5  MOSFET VDS Overcurrent Protection (VDS_OCP)

The device has adjustable VDS voltage monitors to detect overcurrent or short-circuit conditions on the external power MOSFETs. A MOSFET overcurrent event is sensed by monitoring the VDS voltage drop across the external MOSFET R<sub>DS(on)</sub>. The high-side VDS monitors measure between the PVDD and SHx pins and the low-side VDS monitors measure between the SHx and LSS pins. If the voltage across external MOSFET exceeds the threshold set by SEL_VDS_LVL for longer than the t<sub>DS_DG</sub> deglitch time, a V<sub>DS_OCP</sub> event is recognized. After detecting the VDS overcurrent event, all of the gate driver outputs are driven low to disable the external MOSFETs and nFAULT pin is driven low. V<sub>DS_OCP</sub> can be disabled by configuring DIS_VDS_FLT to 1b.

The device can be configured in a latched fault state or retry mode upon a V<sub>DS_OCP</sub> event using the VDS_FLT_MODE bit. With VDS_FLT_MODE = 0b, normal operation resumes after the V<sub>DS_OCP</sub> condition is cleared and a clear fault command is issued through the CLR_FLT bit. With VDS_FLT_MODE = 1b, normal operation resumes after the V<sub>DS_OCP</sub> condition is cleared and a time period of t<sub>LCK_RETRY</sub> is elapsed.

![MCF8329A-Q1 VDS Monitors](https://www.ti.com/ods/images/SLLSFV1/GUID-6A0D9929-713A-4927-BAF4-702B9AD1FD3A-low.gif)

**Figure 6-46 VDS Monitors**


#### 6.3.23.6  VSENSE Overcurrent Protection (SEN_OCP)

Overcurrent is also monitored by sensing the voltage drop across the external current sense resistor between LSS and GND pin. If at any time the voltage on the LSS input exceeds the VSEN_OCP threshold for longer than the t<sub>DS_DG</sub> deglitch time, a SEN_OCP event is recognized. After detecting the SEN_OCP overcurrent event, all of the gate driver outputs are driven low to disable the external MOSFETs and nFAULT pin is driven low. The V<sub>SENSE</sub> threshold is fixed at 0.5V. V<sub>SEN_OCP</sub> can be disabled by configuring DIS_SNS_FLT to 1b.

The device can be configured in a latched fault state or retry mode upon a V<sub>DS_OCP</sub> event using the SNS_FLT_MODE bit. With SNS_FLT_MODE = 0b, normal operation resumes after the V<sub>SEN_OCP</sub> condition is cleared and a clear fault command is issued through the CLR_FLT bit. With SNS_FLT_MODE = 1b, normal operation resumes after the V<sub>SEN_OCP</sub> condition is cleared and a time period of t<sub>LCK_RETRY</sub> is elapsed.


#### 6.3.23.7  Thermal Shutdown (OTSD)

If the die temperature exceeds the trip point of the thermal shutdown limit (T<sub>OTSD</sub>), an OTSD event is recognized. After detecting the OTSD overtemperature event, all of the gate driver outputs are driven low to disable the external MOSFETs, and nFAULT pin is driven low. The over temperature protection can be configured for a latched mode or automatic recovery mode by configuring OTS_AUTO_RECOVERY. In latched mode, normal operation resumes after the T<sub>OTSD</sub> condition is cleared and a clear fault command is issued through the CLR_FLT bit. In automatic recovery mode, normal operation resumes after the T<sub>OTSD</sub> condition is cleared.


#### 6.3.23.8  Hardware Lock Detection Current Limit (HW_LOCK_ILIMIT)

The hardware lock detection current limit function provides a configurable threshold for limiting the current to prevent damage to the system. The output of current sense amplifier is connected to hardware comparator. If at any time, the voltage on the output of CSA exceeds HW_LOCK_ILIMIT threshold for a time longer than t<sub>HW_LOCK_ILIMIT</sub>, a HW_LOCK_ILIMIT event is recognized and action is taken according to the HW_LOCK_ILIMIT_MODE. The threshold is set through HW_LOCK_ILIMIT, the t<sub>HW_LCK_ILIMIT</sub> is set through the HW_LOCK_ILIMIT_DEG. HW_LOCK_ILIMIT_MODE bit can operate in four different modes: HW_LOCK_ILIMIT latched shutdown, HW_LOCK_ILIMIT automatic retry, HW_LOCK_ILIMIT report only, and HW_LOCK_ILIMIT disabled.


##### 6.3.23.8.1  HW_LOCK_ILIMIT Latched Shutdown (HW_LOCK_ILIMIT_MODE = 00xxb)

When a HW_LOCK_ILIMIT event happens in this mode, the status of MOSFET will be configured by HW_LOCK_ILIMIT_MODE and nFAULT is driven low. Status of MOSFETs during HW_LOCK_ILIMIT:

-   HW\_ LOCK_ILIMIT_MODE = 0000b or 0001b: All MOSFETs are turned OFF.
-   HW_LOCK_ILIMIT_MODE = 0010b or 0011b: All-low side MOSFETs are turned ON.

The CONTROLLER_FAULT and HW_LOCK_ILIMIT bits are set to 1b in the fault status registers. Normal operation resumes (gate driver operation and the nFAULT pin is released) when the HW_LOCK_ILIMIT condition clears and a clear fault command is issued through the CLR_FLT bit.


##### 6.3.23.8.2  HW_LOCK_ILIMIT Automatic recovery (HW_LOCK_ILIMIT_MODE = 01xxb)

When a HW_LOCK_ILIMIT event happens in this mode, the status of MOSFET will be configured by HW_LOCK_ILIMIT_MODE and nFAULT is driven low. Status of MOSFET during HW_LOCK_ILIMIT:

-   HW_LOCK_ILIMIT_MODE = 0100b or 0101b: All MOSFETs are turned OFF.
-   HW_LOCK_ILIMIT_MODE = 0110b or 0111b: All low-side MOSFETs are turned ONThe CONTROLLER_FAULT and HW_LOCK_ILIMIT bits are set to 1b in the fault status registers. Normal operation resumes automatically (gate driver operation and the nFAULT pin is released) after the t<sub>LCK_RETRY</sub> (configured by LCK_RETRY) time lapses. The CONTROLLER_FAULT and HW_LOCK_ILIMIT bits are reset to 0b after the t<sub>LCK_RETRY</sub> period expires.


##### 6.3.23.8.3  HW_LOCK_ILIMIT Report Only (HW_LOCK_ILIMIT_MODE = 1000b)

No protective action is taken when a HW\_ LOCK_ILIMIT event happens in this mode. The hardware lock detection current limit event is reported by setting the CONTROLLER_FAULT and HW_LOCK_ILIMIT bits to 1b in the fault status registers and nFAULT is pulled low. The gate drivers continue to operate. The external controller manages this condition by acting appropriately. The reporting clears when the HW_LOCK_ILIMIT condition clears and a clear fault command is issued through the CLR_FLT bit.


##### 6.3.23.8.4  HW_LOCK_ILIMIT Disabled (HW_LOCK_ILIMIT_MODE= 1001b to 1111b)

No action is taken when a HW_LOCK_ILIMIT event happens in this mode.


#### 6.3.23.9  Lock Detection Current Limit (LOCK_ILIMIT)

The lock detection current limit function provides a configurable threshold for limiting the current to prevent damage to the system. The MCF8329A-Q1 continuously monitors the output of the current sense amplifier (CSA) through the ADC. If at any time, any phase current exceeds LOCK_ILIMIT for a time longer than t<sub>LCK_ILIMIT</sub>, a LOCK_ILIMIT event is recognized and action is taken according to LOCK_ILIMIT_MODE. The threshold is set through LOCK_ILIMIT and the t<sub>LCK_ILIMIT</sub> is set through LOCK_ILIMIT_DEG. LOCK_ILIMIT_MODE can be set to four different modes: LOCK_ILIMIT latched shutdown, LOCK_ILIMIT automatic retry, LOCK_ILIMIT report only and LOCK_ILIMIT disabled.


##### 6.3.23.9.1  LOCK_ILIMIT Latched Shutdown (LOCK_ILIMIT_MODE = 00xxb)

When a LOCK_ILIMIT event happens in this mode, the status of external MOSFETs will be configured by LOCK_ILIMIT_MODE and nFAULT is driven low. Status of external MOSFETs driven from MCF8329A-Q1 during LOCK_ILIMIT:

-   LOCK_ILIMIT_MODE = 0000b or 0001b: All MOSFETs are turned OFF, the gate driver outputs pulled low.
-   LOCK_ILIMIT_MODE = 0010b or 0011b: All low-side MOSFETs (gate driver outputs) are turned ON.

The CONTROLLER_FAULT and LOCK_ILIMIT bits are set to 1b in the fault status registers. Normal operation resumes (gate driver operation and the nFAULT pin is released) when the LOCK_ILIMIT condition clears and a clear fault command is issued through the CLR_FLT bit.


##### 6.3.23.9.2  LOCK_ILIMIT Automatic Recovery (LOCK_ILIMIT_MODE = 01xxb)

When a LOCK_ILIMIT event happens in this mode, the status of external MOSFETs will be configured by LOCK_ILIMIT_MODE and nFAULT is driven low. Status of external MOSFETs driven from MCF8329A-Q1 during LOCK_ILIMIT:

-   LOCK_ILIMIT_MODE = 0100b or 0101b: All MOSFETs are turned OFF, the gate driver outputs pulled low.
-   LOCK_ILIMIT_MODE = 0110b or 0111b: All low-side MOSFETs (gate driver outputs) are turned ONThe CONTROLLER_FAULT and LOCK_ILIMIT bits are set to 1b in the fault status registers. Normal operation resumes automatically (gate driver operation and the nFAULT pin is released) after the t<sub>LCK_RETRY</sub> (configured by LCK_RETRY) time lapses. The CONTROLLER_FAULT and LOCK_ILIMIT bits are reset to 0b after the t<sub>LCK_RETRY</sub> period expires.


##### 6.3.23.9.3  LOCK_ILIMIT Report Only (LOCK_ILIMIT_MODE = 1000b)

No protective action is taken when a LOCK_ILIMIT event happens in this mode. The lock detection current limit event is reported by setting the CONTROLLER_FAULT and LOCK_ILIMIT bits to 1b in the fault status registers and nFAULT is pulled low. The gate drivers continue to operate. The external controller manages this condition by acting appropriately. The reporting clears when the LOCK_ILIMIT condition clears and a clear fault command is issued through the CLR_FLT bit.


##### 6.3.23.9.4  LOCK_ILIMIT Disabled (LOCK_ILIMIT_MODE = 1xx1b)

No action is taken when a LOCK_ILIMIT event happens in this mode.


#### 6.3.23.10  Motor Lock (MTR_LCK)

The MCF8329A-Q1 continuously checks for different motor lock conditions (see [Motor Lock Detection](GUID-ABC573EC-BDB1-404F-B65D-7AE97FE89D54.html#TITLE-SLVSEX6T5566057-46)) during motor operation. When one of the enabled lock condition happens, a MTR_LCK event is recognized and action is taken according to the MTR_LCK_MODE.

MCF8329A-Q1 locks can be enabled or disabled individually and retry times can be configured through LCK_RETRY. MTR_LCK_MODE bit can operate in four different modes: MTR_LCK latched shutdown, MTR_LCK automatic retry, MTR_LCK report only and MTR_LCK disabled.


##### 6.3.23.10.1  MTR_LCK Latched Shutdown (MTR_LCK_MODE = 00xxb)

When a MTR_LCK event happens in this mode, the status of external MOSFETs will be configured by MTR_LCK_MODE and nFAULT is driven low. Status of external MOSFETs during MTR_LCK:

-   MTR_LCK_MODE = 0000b or 0001b: All external MOSFETs are turned OFF, the gate driver outputs pulled low.
-   MTR_LCK_MODE = 0010b or 0011b: All low-side MOSFETs (gate driver outputs) are turned ON.

The CONTROLLER_FAULT, MTR_LCK and respective motor lock condition bits are set to 1b in the fault status registers. Normal operation resumes (gate driver operation and the nFAULT pin is released) when the MTR_LCK condition clears and a clear fault command is issued through the CLR_FLT bit.


##### 6.3.23.10.2  MTR_LCK Automatic Recovery (MTR_LCK_MODE= 01xxb)

When a MTR_LCK event happens in this mode, the status of MOSFETs will be configured by MTR_LCK_MODE and nFAULT is driven low. Status of MOSFETs during MTR_LCK:

-   MTR_LCK_MODE = 0100b or 0101b: All external MOSFETs are turned OFF, the gate driver outputs pulled low.
-   MTR_LCK_MODE = 0110b or 0111b: All low-side MOSFETs (gate driver outputs) are turned ON.

The CONTROLLER_FAULT, MTR_LCK and respective motor lock condition bits are set to 1b in the fault status registers. Normal operation resumes automatically (gate driver operation and the nFAULT pin is released) after the t<sub>LCK_RETRY</sub> (configured by LCK_RETRY) time lapses. The CONTROLLER_FAULT, MTR_LCK and respective motor lock condition bits are reset to 0b after the t<sub>LCK_RETRY</sub> period expires.


##### 6.3.23.10.3  MTR_LCK Report Only (MTR_LCK_MODE = 1000b)

No protective action is taken when a MTR_LCK event happens in this mode. The motor lock event is reported by setting the CONTROLLER_FAULT, MTR_LCK and respective motor lock condition bits to 1b in the fault status registers and nFAULT pin is pulled low. The gate drivers continue to operate. The external controller manages this condition by acting appropriately. The reporting clears when the MTR_LCK condition clears and a clear fault command is issued through the CLR_FLT bit.


##### 6.3.23.10.4  MTR_LCK Disabled (MTR_LCK_MODE = 1xx1b)

No action is taken when a MTR_LCK event happens in this mode.


#### 6.3.23.11  Motor Lock Detection

The MCF8329A-Q1 provides different lock detect mechanisms to determine if the motor is in a locked state. Multiple detection mechanisms work together to ensure the lock condition is detected quickly and reliably. In addition to detecting if there is a locked motor condition, the MCF8329A-Q1 can also identify and take action if there is no motor connected to the system. Each of the lock detect mechanisms and the no-motor detection can be disabled by their respective register bits.


##### 6.3.23.11.1  Lock 1: Abnormal Speed (ABN_SPEED)

MCF8329A-Q1 monitors the speed continuously and at any time the speed exceeds LOCK_ABN_SPEED, an ABN_SPEED lock event is recognized and action is taken according to the MTR_LCK_MODE.

The threshold is set through the LOCK_ABN_SPEED register. ABN_SPEED lock can be enabled/disabled by LOCK1_EN.


##### 6.3.23.11.2  Lock 2: Abnormal BEMF (ABN_BEMF)

MCF8329A-Q1 estimates back-EMF in order to run motor optimally in closed loop. This estimated back-EMF is compared against the expected back-EMF calculated using the estimated speed and the BEMF constant. Whenever motor is stalled the estimated back-EMF is inaccurate due to lower back-EMF at low speed. When the difference between estimated and expected back-EMF exceeds ABNORMAL_BEMF_THR, an abnormal BEMF fault is triggered and action is taken according to the MTR_LCK_MODE.

ABN_BEMF lock can be enabled/disabled by LOCK2_EN.


##### 6.3.23.11.3  Lock3: No-Motor Fault (NO_MTR)

The MCF8329A-Q1 continuously monitors phase currents on all three phases; if any phase current stays below NO_MTR_THR for 500ms during open loop, a NO_MTR event is recognized. The response to the NO_MTR event is configured through MTR_LCK_MODE. NO_MTR lock can be enabled/disabled by LOCK3_EN.

Note: For a reliable detection of no-motor fault, ensure that the open loop time is sufficiently higher than 500 ms.


#### 6.3.23.12  MPET Faults

An error during BEMF constant measurement is reported using MPET_BEMF_FAULT. This fault gets triggered when the measured back EMF is less than the threshold set in STAT_DETECT_THR. One example of such fault scenario can be the motor stall while running in open loop due to incorrect open loop configuration used.


#### 6.3.23.13  IPD Faults

The MCF8329A-Q1 uses 12-bit timers to estimate the time during the current ramp up in IPD, when the motor start-up is configured as IPD (MTR_STARTUP is set to 10b). During IPD, the algorithm checks for a successful current ramp-up to IPD_CURR_THR, starting with an IPD clock of 10MHz; if unsuccessful (timer overflow before current reaches IPD_CURR_THR), IPD is repeated with lower frequency clocks of 1MHz, 100kHz, and 10kHz sequentially. If the IPD timer overflows (current does not reach IPD_CURR_THR) with all the four clock frequencies, then the IPD_T1_FAULT gets triggered. The user can enable IPD timeout (IPD timer overflow) by setting IPD_TIMEOUT_FAULT_EN to 1b.

IPD gives incorrect results if the next IPD pulse is commanded before the complete decay of current due to present IPD pulse. The MCF8329A-Q1 can generate a fault called IPD_FREQ_FAULT during such a scenario by setting IPD_FREQ_FAULT_EN to 1b. The IPD_FREQ_FAULT maybe triggered if the IPD frequency is too high for the IPD current limit or if the motor inductance is too high for the IPD frequency and IPD current limit.


## 6.4  Device Functional Modes


### 6.4.1  Functional Modes


#### 6.4.1.1  Sleep Mode

In sleep mode all gate drivers are disabled, the GVDD regulator is disabled ,the AVDD regulator is disabled, the sense amplifier, and the I<sup>2</sup>C bus are disabled. The device can be configured to enter sleep (instead of standby) mode by configuring DEV_MODE to 1b. The entry and exit from sleep state as described in [Table 6-6](#SLVSCP26607).

**Table 6-6 Conditions to Enter or Exit Sleep Modes**


| INPUT REFERENCE COMMAND MODE | ENTER SLEEP, DEV_MODE = 1b | EXIT FROM SLEEP | ENTER STANDBY, DEV_MODE = 0b | EXIT FROM STANDBY |
| --- | --- | --- | --- | --- |
| Analog input at SPEED/WAKE pin | V<sub>SPEED/WAKE</sub> < V<sub>EN_SL</sub> for t<sub>DET_SL_ANA</sub> if SLEEP_ENTRY_TIME = 00b or 01b ; for t<sub>DET_SL_PWM</sub> if SLEEP_ENTRY_TIME = 10b or 11b | V<sub>SPEED/WAKE</sub> > V<sub>EX_SL</sub> | V<sub>SPEED/WAKE</sub> < V<sub>EN_SB</sub> | V<sub>SPEED/WAKE</sub> > V<sub>EX_SB</sub> |
| PWM | V<sub>SPEED/WAKE</sub> < V<sub>IL</sub> for t<sub>DET_SL_PWM</sub> | V<sub>SPEED/WAKE</sub> > V<sub>IH</sub> for t<sub>DET_PWM</sub> | Duty<sub>SPEED/WAKE</sub> < Duty<sub>EN_SB</sub> for t<sub>DET_SL_PWM</sub> | Duty<sub>SPEED/WAKE</sub> > Duty<sub>EX_SB</sub> for t<sub>DET_PWM</sub> |
| Frequency | V<sub>SPEED/WAKE</sub> < V<sub>IL</sub> for t<sub>DET_SL_PWM</sub> | V<sub>SPEED/WAKE</sub> > V<sub>IH</sub> for t<sub>DET_PWM</sub> | Freq<sub>SPEED/WAKE</sub> < Freq<sub>EN_SB</sub> for t<sub>DET_SL_PWM</sub> | Freq<sub>SPEED/WAKE</sub> > Freq<sub>EX_SB</sub> for t<sub>DET_PWM</sub> |
| I<sup>2</sup>C | V<sub>SPEED/WAKE</sub>< V<sub>IL</sub> | V<sub>SPEED/WAKE</sub> > V<sub>IH</sub> | V<sub>SPEED/WAKE</sub> < V<sub>IL</sub> or DIGITAL_SPEED_CTRL < DIGITAL_SPEED_CTRL<sub>EN_SB</sub> | V<sub>SPEED/WAKE</sub> > V<sub>IH</sub> and DIGITAL_SPEED_CTRL > DIGITAL_SPEED_CTRL<sub>EX_SB</sub> |


Note:

During power-up and power-down of the device, the nFAULT pin is held low as the internal regulators are disabled. After the regulators have been enabled, the nFAULT pin is automatically released.


#### 6.4.1.2  Standby Mode

In standby mode the gate driver, AVDD LDO and I<sup>2</sup>C bus are active. The device can be configured to enter standby mode by configuring DEV_MODE to 0b. The device enters standby mode when the reference command after the profiler is zero.

The thresholds for entering and exiting standby mode in different input modes are as follows,

**Table 6-7 Standby Mode Entry/Exit Thresholds**


| Control Input Source | Standby entry/exit thresholds | REF_PROFILE_CONFIG = 00b | REF_PROFILE_CONFIG ≠ 00b |
| --- | --- | --- | --- |
| Analog | V<sub>EN_SB</sub> or V<sub>EX_SB</sub> | Maximum of (1%, DUTY_HYS) x V<sub>ANA_FS</sub> | REF_X = 1% of MAX_SPEED or MAX_POWER or ILIMIT or MODULATION INDEX |
| PWM | Duty<sub>EN_SB</sub> or Duty<sub>EX_SB</sub> | Maximum of (1%, DUTY_HYS) | REF_X = 1% of MAX_SPEED or MAX_POWER or ILIMIT or MODULATION INDEX |
| I<sup>2</sup>C | DIGITAL_SPEED_CTRL<sub>EN_SB</sub> or DIGITAL_SPEED_CTRL<sub>EX_SB</sub> | Maximum of (1%, DUTY_HYS) x 32767 | REF_X = 1% of MAX_SPEED or MAX_POWER or ILIMIT or MODULATION INDEX |
| Frequency | Freq<sub>EN_SB</sub> or Freq<sub>EX_SB</sub> | Maximum of (1%, DUTY_HYS) x INPUT_MAXIMUM_FREQ (subject to minimum of 3Hz) | REF_X = 1% of MAX_SPEED or MAX_POWER or ILIMIT or MODULATION INDEX |


Note: If the control input source is DIGITAL_SPEED_CTRL (I<sup>2</sup>C mode), a logic low on SPEED/WAKE pin will place the device in standby mode.


#### 6.4.1.3  Fault Reset (CLR_FLT)

In the case of latched faults, the device goes into a partial shutdown state to help protect the power MOSFETs and system. When the fault condition clears, the device can go to the operating state again by setting the CLR_FLT to 1b.


## 6.5  External Interface


### 6.5.1  DRVOFF - Gate Driver Shutdown Functionality

When DRVOFF is driven high, the gate driver goes into shutdown. DRVOFF bypasses the digital control logic inside the device, and is connected directly to the gate driver output (see [Figure 6-47](#FIG_J5C_3FV_B5B)). This pin provides a mechanism for externally monitored faults to disable gate driver by directly bypassing the internal control logic. When the MCF8329A-Q1 detects logic high on the DRVOFF pin, the device disables the gate driver and puts the device into pull down mode (see [Figure 6-48](#FIG_Q33_VFV_B5B)). The gate driver shutdown sequence proceeds as shown in [Figure 6-48](#FIG_Q33_VFV_B5B). When the gate driver initiates the shutdown sequence, the active driver pull down is applied at I<sub>SINK</sub> current for the t<sub>SD_SINK_DIG</sub> time, after which the gate driver moves to passive pull down mode.

![MCF8329A-Q1 DRVOFF Gate Driver Output State](https://www.ti.com/ods/images/SLLSFV1/GUID-20211118-SS0I-L04C-HNW5-J56TMHG7SMQ9-low.svg)

**Figure 6-47 DRVOFF Gate Driver Output State**

![MCF8329A-Q1 Gate Driver Shutdown Sequence](https://www.ti.com/ods/images/SLLSFV1/GUID-20221218-SS0I-QQVL-MR2Q-SSCNTBCSHFMT-low.svg)

**Figure 6-48 Gate Driver Shutdown Sequence**

Note: Pulling the DRVOFF pin high does not cause the device to enter sleep or standby mode and the digital core is still active. The DRVOFF status is reported on DRV_OFF bit and has a latency of up to 200ms between the pin status change to DRV_OFF bit status update. The DRVOFF is not reported on nFAULT pin, however nFAULT pin can go low if a motor fault happens when DRVOFF goes to logic high during motor operation. When DRVOFF is pulled from high to low, MCF8329A-Q1 execute motor start sequence (with a latency up to 200ms after pulling DRVOFF pin low) as described in [Section 6.3.9](GUID-B46425F7-C9D1-49AC-927D-499E666F0B4D.html).


### 6.5.2  Oscillator Source

MCF8329A-Q1 has a built-in oscillator that is used as the clock source for all digital peripherals and timing measurements. Default configuration for MCF8329A-Q1 is to use the internal oscillator and it is sufficient to drive the motor without need for any external crystal or clock sources.

In case MCF8329A-Q1 does not meet accuracy requirements of timing measurement or speed loop, then MCF8329A-Q1 has an option to support an external clock reference.

In order to improve EMI performance, MCF8329A-Q1 provides the option of modulating the clock frequency by enabling Spread Spectrum Modulation (SSM) through SPREAD_SPECTRUM_MODULATION_DIS.


#### 6.5.2.1  External Clock Source

Speed loop accuracy of MCF8329A-Q1 over wide operating temperature range can be improved by providing more accurate optional clock reference on EXT_CLK pin as shown in [Figure 6-49](#T5566057-9). EXT_CLK will be used to calibrate internal clock oscillator and match the accuracy of the external clock. External clock source can be selected by configuring CLK_SEL to 11b and setting EXT_CLK_EN to 1b. The external clock source frequency can be configured through EXT_CLK_CONFIG.

![MCF8329A-Q1 External Clock Reference](https://www.ti.com/ods/images/SLLSFV1/GUID-1F2C5F89-141C-48C9-988E-1D19304A7EB7-low.gif)

**Figure 6-49 External Clock Reference**

Note:

External clock is optional and can be used when higher clock accuracy is needed. MCF8329A-Q1 will always power up using the internal oscillator in all modes.


## 6.6  EEPROM access and I<sup>2</sup>C interface


### 6.6.1  EEPROM Access

MCF8329A-Q1 has 1024 bits (16 rows of 64 bits each) of EEPROM, which are used to store the motor configuration parameters. Erase operations are row-wise (all 64 bits are erased in a single erase operation), but 32-bit write and read operations are supported. EEPROM can be written and read using the I<sup>2</sup>C serial interface but erase cannot be performed using I<sup>2</sup>C serial interface. The shadow registers corresponding to the EEPROM are located at addresses 0x000080-0x0000AE.

Note: MCF8329A-Q1 allows EEPROM write and read operations only when the motor is not spinning.


#### 6.6.1.1  EEPROM Write

In MCF8329A-Q1, EEPROM write procedure is as follows,

1.  Write register 0x000080 (ISD_CONFIG) with ISD and reverse drive configuration like resync enable, reverse drive enable, stationary detect threshold, reverse drive handoff threshold etc.
2.  Write register 0x000082 (REV_DRIVE_CONFIG) with reverse drive and active brake configuration like reverse drive open loop acceleration, active brake current limit, Kp, Ki values etc.
3.  Write register 0x000084 (MOTOR_STARTUP1) with motor start-up configuration like start-up method, IPD parameters, align parameters etc.
4.  Write register 0x000086 (MOTOR_STARTUP2) with motor start-up configuration like open loop acceleration, open loop current limit, first cycle frequency etc.
5.  Write register 0x000088 (CLOSED_LOOP1) with motor control configuration like closed loop acceleration, overmodulation enable, PWM frequency, FG signal parameters etc.
6.  Write register 0x00008A (CLOSED_LOOP2) with motor control configuration like motor winding resistance and inductance, motor stop options, brake speed threshold etc.
7.  Write register 0x00008C (CLOSED_LOOP3) with motor control configuration like motor BEMF constant, current loop Kp, Ki etc.
8.  Write register 0x00008E (CLOSED_LOOP4) with motor control configuration like speed loop Kp, Ki and maximum speed.
9.  Write register 0x000090 (FAULT_CONFIG1) with fault control configuration software and hardware current limits, lock current limit and actions, retry times etc.
10.  Write register 0x000092 (FAULT_CONFIG2) with fault control configuration like hardware current limit actions, OV, UV limits and actions, abnormal speed level, no motor threshold etc.
11.  Write registers 0x000094 – 0x00009E (SPEED_PROFILES1-6) with speed profile configuration like profile type, duty cycle, speed clamp level, duty cycle clamp level etc.
12.  Write register 0x0000A0 (INT_ALGO_1) with miscellaneous configuration like ISD run time and timeout, MPET parameters etc.
13.  Write register 0x0000A2 (INT_ALGO_2) with miscellaneous configuration like additional MPET parameters, IPD high resolution enable, active brake current slew rate, closed loop slow acceleration etc.
14.  Write registers 0x0000A4 (PIN_CONFIG1) with pin configuration for speed input mode (analog or PWM), BRAKE pin mode etc.
15.  Write registers 0x0000A6 and 0x0000A8 (DEVICE_CONFIG1 and DEVICE_CONFIG2) with device configuration like pins 36, 37 configuration, pin 38 configuration, dynamic CSA gain enable, dynamic voltage gain enable, clock source select, speed range select etc.
16.  Write register 0x0000AA (PERI_CONFIG1) with peripheral configuration like dead time, bus current limit, DIR input, SSM enable etc.
17.  Write registers 0x0000AC and 0x0000AE (GD_CONFIG1 and GD_CONFIG2) with gate driver configuration like slew rate, CSA gain, OCP level, mode, OVP enable, level, buck voltage level, buck current limit etc.
18.  Write 0x8A500000 into register 0x0000EA to write the shadow register(0x000080-0x0000AE) values into the EEPROM.
19.  Wait for 100ms for the EEPROM write operation to complete

Steps 1-17 can be selectively executed based on registers/parameters that need to be modified. After all shadow registers have been updated with the required values, step 18 should be executed to copy the contents of the shadow registers into the EEPROM.

Note: EEPROM reserved bit field defaults settings must not be changed. To avoid changing the content of reserved bits, TI recommends using “read-modify-write” sequence to perform EEPROM write operation.


#### 6.6.1.2  EEPROM Read

In MCF8329A-Q1, EEPROM read procedure is as follows,

1.  Write 0x40000000 into register 0x0000EA to read the EEPROM data into the shadow registers (0x000080-0x0000AE).
2.  Wait for 100ms for the EEPROM read operation to complete.
3.  Read the shadow register values,1 or 2 registers at a time, using the I<sup>2</sup>C read command as explained in [Section 6.6.2](GUID-93F84D07-9D51-43A3-B209-CD403B71DB8C.html). Shadow register addresses are in the range of 0x000080-0x0000AE. Register address increases in steps of 2 for 32-bit read operation (since each address is a 16-bit location).


### 6.6.2  **I<sup>2</sup>C Serial Interface**

MCF8329A-Q1 interfaces with an external MCU over an I<sup>2</sup>C serial interface. MCF8329A-Q1 is an I<sup>2</sup>C target to be interfaced with a controller. External MCU can use this interface to read/write from/to any non-reserved register in MCF8329A-Q1.

Note: For reliable communication, a 100-µs delay should be used between every byte transferred over the I<sup>2</sup>C bus.


#### 6.6.2.1  I<sup>2</sup>C Data Word

The I<sup>2</sup>C data word format is shown in [Table 6-8](#TABLE_GCQ_5RV_5PB).

**Table 6-8 I<sup>2</sup>C Data Word Format**


| TARGET_ID | TARGET_ID | TARGET_ID | TARGET_ID | R/W | R/W | R/W | R/W | CONTROL WORD | CONTROL WORD | DATA | CRC-8 | CRC-8 | CRC-8 | CRC-8 | CRC-8 | CRC-8 | CRC-8 | CRC-8 | CRC-8 | CRC-8 | CRC-8 | CRC-8 | CRC-8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A6 - A0 | A6 - A0 | A6 - A0 | A6 - A0 | W0 | W0 | W0 | W0 | CW23 - CW0 | CW23 - CW0 | D15 / D31/ D63 - D0 | C7 - C0 | C7 - C0 | C7 - C0 | C7 - C0 | C7 - C0 | C7 - C0 | C7 - C0 | C7 - C0 | C7 - C0 | C7 - C0 | C7 - C0 | C7 - C0 | C7 - C0 |


**Target ID and R/W Bit**: The first byte includes the 7-bit I<sup>2</sup>C target ID (0x01), followed by the read/write command bit. Every packet in MCF8329A-Q1 the communication protocol starts with writing a 24-bit control word and hence the R/W bit is always 0.

**24-bit Control Word**: The Target Address is followed by a 24-bit control bit. The control word format is shown in [Table 6-9](#TABLE_FGR_D51_NQB).

**Table 6-9 24-bit Control Word Format**


| OP_R/W | OP_R/W | OP_R/W | OP_R/W | CRC_EN | CRC_EN | CRC_EN | CRC_EN | DLEN | DLEN | MEM_SEC | MEM_PAGE | MEM_ADDR | MEM_ADDR | MEM_ADDR | MEM_ADDR | MEM_ADDR | MEM_ADDR | MEM_ADDR | MEM_ADDR | MEM_ADDR | MEM_ADDR | MEM_ADDR | MEM_ADDR | MEM_ADDR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CW23 | CW23 | CW23 | CW23 | CW22 | CW22 | CW22 | CW22 | CW21- CW20 | CW21- CW20 | CW19 - CW16 | CW15 - CW12 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 | CW11 - CW0 |


Each field in the control word is explained in detail below.

**OP_R/W – Read/Write**: R/W bit gives information on whether this is a read operation or write operation. Bit value 0 indicates it is a write operation. Bit value 1 indicates it is a read operation. For write operation, MCF8329A-Q1 will expect data bytes to be sent after the 24-bit control word. For read operation, MCF8329A-Q1 will expect an I<sup>2</sup>C read request with repeated start or normal start after the 24-bit control word.

**CRC_EN – Cyclic Redundancy Check(CRC) Enable**: MCF8329A-Q1 supports CRC to verify the data integrity. This bit controls whether the CRC feature is enabled or not.

**DLEN – Data Length**: DLEN field determines the length of the data that will be sent by external MCU to MCF8329A-Q1. MCF8329A-Q1 protocol supports three data lengths: 16-bit, 32-bit and 64-bit.

**Table 6-10 Data Length Configuration**


| DLEN Value | DLEN Value | DLEN Value | Data Length | Data Length | Data Length | Data Length | Data Length | Data Length | Data Length | Data Length | Data Length | Data Length |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 00b | 00b | 00b | 16-bit | 16-bit | 16-bit | 16-bit | 16-bit | 16-bit | 16-bit | 16-bit | 16-bit | 16-bit |
| 01b | 01b | 01b | 32-bit | 32-bit | 32-bit | 32-bit | 32-bit | 32-bit | 32-bit | 32-bit | 32-bit | 32-bit |
| 10b | 10b | 10b | 64-bit | 64-bit | 64-bit | 64-bit | 64-bit | 64-bit | 64-bit | 64-bit | 64-bit | 64-bit |
| 11b | 11b | 11b | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved |


**MEM_SEC – Memory Section**: Each memory location in MCF8329A-Q1 is addressed using three separate entities in the control word – Memory Section, Memory Page, Memory Address. Memory Section is a 4-bit field which denotes the memory section to which the memory location belongs like RAM, ROM etc.

**MEM_PAGE – Memory Page**: Memory page is a 4-bit field which denotes the memory page to which the memory location belongs.

**MEM_ADDR – Memory Address**: Memory address is the last 12-bits of the address. The complete 22-bit address is constructed internally by MCF8329A-Q1 using all three fields – Memory Section, Memory Page, Memory Address. For memory locations 0x000000-0x000800, memory section is 0x0, memory page is 0x0 and memory address is the lowest 12 bits(0x000 for 0x000000, 0x080 for 0x000080 and 0x800 for 0x000800)

**Data Bytes**: For a write operation to MCF8329A-Q1, the 24-bit control word is followed by data bytes. The DLEN field in the control word should correspond with the number of bytes sent in this section.

**CRC Byte**: If the CRC feature is enabled in the control word, CRC byte has to be sent at the end of a write transaction. Procedure to calculate CRC is explained in CRC Byte Calculation below.


#### 6.6.2.2  I<sup>2</sup>C Write Operation

MCF8329A-Q1 write operation over I<sup>2</sup>C involves the following sequence.

1.  I<sup>2</sup>C start condition.
2.  The sequence starts with I<sup>2</sup>C target start byte, made up of 7-bit target ID (0x01) to identify the MCF8329A-Q1 along with the R/W bit set to 0.
3.  The start byte is followed by 24-bit control word. Bit 23 in the control word has to be 0 as it is a write operation.
4.  The 24-bit control word is then followed by the data bytes. The length of the data byte depends on the DLEN field.
    1.  While sending data bytes, the LSB byte is sent first. Refer below examples for more details.
    2.  16-bit/32-bit write – The data sent is written to the address mentioned in Control Word.
    3.  64-bit Write – 64-bit is treated as two 32-bit writes. The address mentioned in Control word is taken as Addr 0. Addr 1 is calculating internally by MCF8329A-Q1 by incrementing Addr 0 by 2. A total of 8 data bytes are sent. The first 4 bytes (sent in LSB first way) are written to Addr 0 and the next 4 bytes are written to Addr 1.
5.  If CRC is enabled, the packet ends with a CRC byte. CRC is calculated for the entire packet (Target ID + W bit, Control Word, Data Bytes).
6.  I<sup>2</sup>C stop condition.

![MCF8329A-Q1 I2C Write Operation Sequence](https://www.ti.com/ods/images/SLLSFV1/GUID-801F7D00-3C7B-4771-8649-B2559432A727-low.svg)

**Figure 6-50 I<sup>2</sup>C Write Operation Sequence**


#### 6.6.2.3  I<sup>2</sup>C Read Operation

MCF8329A-Q1 read operation over I<sup>2</sup>C involves the following sequence.

1.  I<sup>2</sup>C start condition.
2.  The sequence starts with I<sup>2</sup>C target Start Byte.
3.  The Start Byte is followed by 24-bit Control Word. Bit 23 in the control word has to be 1 as it is a read operation.
4.  The control word is followed by a repeated start or normal start.
5.  MCF8329A-Q1 sends the data bytes on SDA. The number of bytes sent by MCF8329A-Q1 depends on the DLEN field value in the control word.
    1.  While sending data bytes, the LSB byte is sent first. Refer the examples below for more details.
    2.  16-bit/32-bit Read – The data from the address mentioned in Control Word is sent back.
    3.  64-bit Read – 64-bit is treated as two 32-bit read. The address mentioned in Control Word is taken as Addr 0. Addr 1 is calculating internally by MCF8329A-Q1 by incrementing Addr 0 by 2. A total of 8 data bytes are sent by MCF8329A-Q1. The first 4 bytes (sent in LSB first way) are read from Addr 0 and the next 4 bytes are read from Addr 1.
    4.  MCF8329A-Q1 takes some time to process the control word and read data from the given address. This involves some delay. It is quite possible that the repeated start with Target ID will be NACK’d. If the I<sup>2</sup>C read request has been NACK’d by MCF8329A-Q1, retry after few cycles. During this retry, it is not necessary to send the entire packet along with the control word. It is sufficient to send only the start condition with target ID and read bit.
6.  If CRC is enabled, then MCF8329A-Q1 sends an additional CRC byte at the end. If CRC is enabled, external MCU I<sup>2</sup>C controller has to read this additional byte before sending the stop bit. CRC is calculated for the entire packet (Target ID + W bit, Control Word, Target ID + R bit, Data Bytes).
7.  I<sup>2</sup>C stop condition.

![MCF8329A-Q1 I2C Read Operation Sequence](https://www.ti.com/ods/images/SLLSFV1/GUID-A27D3C86-AD6C-4111-8665-68103C50D447-low.svg)

**Figure 6-51 I<sup>2</sup>C Read Operation Sequence**


#### 6.6.2.4  Examples of I<sup>2</sup>C Communication Protocol Packets

All values used in this example section are in hex format. I<sup>2</sup>C target ID used in the examples is 0x01.

**Example for 32-bit Write Operation**: Address – 0x00000080, Data – 0x1234ABCD, CRC Byte – 0x45 (Sample value; does not match with the actual CRC calculation)

**Table 6-11 Example for 32-bit Write Operation Packet**


| Start Byte | Start Byte | Control Word 0 | Control Word 0 | Control Word 0 | Control Word 0 | Control Word 1 | Control Word 1 | Control Word 2 | Data Bytes | Data Bytes | Data Bytes | Data Bytes | CRC |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Target ID | I<sup>2</sup>C Write | OP_R/W | CRC_EN | DLEN | MEM_SEC | MEM_PAGE | MEM_ADDR | MEM_ADDR | DB0 | DB1 | DB2 | DB3 | CRC Byte |
| A6-A0 | W0 | CW23 | CW22 | CW21-CW20 | CW19-CW16 | CW15-CW12 | CW11-CW8 | CW7-CW0 | D7-D0 | D7-D0 | D7-D0 | D7-D0 | C7-C0 |
| 0x01 | 0x0 | 0x0 | 0x1 | 0x1 | 0x0 | 0x0 | 0x0 | 0x80 | 0xCD | 0xAB | 0x34 | 0x12 | 0x45 |
| 0x02 | 0x02 | 0x50 | 0x50 | 0x50 | 0x50 | 0x00 | 0x00 | 0x80 | 0xCD | 0xAB | 0x34 | 0x12 | 0x45 |


**Example for 64-bit Write Operation**: Address - 0x00000080, Data Address 0x00000080 - Data 0x01234567, Data Address 0x00000082 – Data 0x89ABCDEF, CRC Byte – 0x45 (Sample value; does not match with the actual CRC calculation)

**Table 6-12 Example for 64-bit Write Operation Packet**


| Start Byte | Start Byte | Control Word 0 | Control Word 0 | Control Word 0 | Control Word 0 | Control Word 1 | Control Word 1 | Control Word 2 | Data Bytes | Data Bytes | Data Bytes | Data Bytes | Data Bytes | Data Bytes | Data Bytes | Data Bytes | CRC |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Target ID | I<sup>2</sup>C Write | OP_R/W | CRC_EN | DLEN | MEM_SEC | MEM_PAGE | MEM_ADDR | MEM_ADDR | DB0 - DB7 | DB0 - DB7 | DB0 - DB7 | DB0 - DB7 | DB0 - DB7 | DB0 - DB7 | DB0 - DB7 | DB0 - DB7 | CRC Byte |
| A6-A0 | W0 | CW23 | CW22 | CW21-CW20 | CW19-CW16 | CW15-CW12 | CW11-CW8 | CW7-CW0 | [D7-D0] x 8 | [D7-D0] x 8 | [D7-D0] x 8 | [D7-D0] x 8 | [D7-D0] x 8 | [D7-D0] x 8 | [D7-D0] x 8 | [D7-D0] x 8 | C7-C0 |
| 0x01 | 0x0 | 0x0 | 0x1 | 0x2 | 0x0 | 0x0 | 0x0 | 0x80 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x45 |
| 0x02 | 0x02 | 0x60 | 0x60 | 0x60 | 0x60 | 0x00 | 0x00 | 0x80 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x67452301EFCDAB89 | 0x45 |


**Example for 32-bit Read Operation**: Address – 0x00000080, Data – 0x1234ABCD, CRC Byte – 0x56 (Sample value; does not match with the actual CRC calculation)

**Table 6-13 Example for 32-bit Read Operation Packet**


| Start Byte | Start Byte | Control Word 0 | Control Word 0 | Control Word 0 | Control Word 0 | Control Word 1 | Control Word 1 | Control Word 2 | Start Byte | Start Byte | Byte 0 | Byte 1 | Byte 2 | Byte 3 | Byte 4 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Target ID | I<sup>2</sup>C Write | R/W | CRC_EN | DLEN | MEM_SEC | MEM_PAGE | MEM_ADDR | MEM_ADDR | Target ID | I<sup>2</sup>C Read | DB0 | DB1 | DB2 | DB3 | CRC Byte |
| A6-A0 | W0 | CW23 | CW22 | CW21-CW20 | CW19-CW16 | CW15-CW12 | CW11-CW8 | CW7-CW0 | A6-A0 | W0 | D7-D0 | D7-D0 | D7-D0 | D7-D0 | C7-C0 |
| 0x01 | 0x0 | 0x1 | 0x1 | 0x1 | 0x0 | 0x0 | 0x0 | 0x80 | 0x01 | 0x1 | 0xCD | 0xAB | 0x34 | 0x12 | 0x56 |
| 0x02 | 0x02 | 0xD0 | 0xD0 | 0xD0 | 0xD0 | 0x00 | 0x00 | 0x80 | 0x03 | 0x03 | 0xCD | 0xAB | 0x34 | 0x12 | 0x56 |


#### 6.6.2.5  Internal Buffers

MCF8329A-Q1 uses buffers internally to store the data received on I<sup>2</sup>C. Highest priority is given to collecting data on the I<sup>2</sup>C Bus. There are 2 buffers (ping-pong) for I<sup>2</sup>C Rx Data and 2 buffers (ping-pong) for I<sup>2</sup>C Tx Data.

A write request from external MCU is stored in Rx Buffer 1 and then the parsing block is triggered to work on this data in Rx Buffer 1. While MCF8329A-Q1 is processing a write packet from Rx Buffer 1, if there is another new read/write request, the entire data from the I<sup>2</sup>C bus is stored in Rx Buffer 2 and it will be processed after the current request.

MCF8329A-Q1 can accommodate a maximum of two consecutive read/write requests. If MCF8329A-Q1 is busy due to high priority interrupts, the data sent will be stored in internal buffers (Rx Buffer 1 and Rx Buffer 2). At this point, if there is a third read/write request, the Target ID will be NACK’d as the buffers are already full.

During read operations, the read request is processed and the read data from the register is stored in the Tx Buffer along with the CRC byte, if enabled. Now if the external MCU initiates an I<sup>2</sup>C Read (Target ID + R bit), the data from this Tx Buffer is sent over I<sup>2</sup>C. Since there are two Tx Buffers, register data from 2 MCF8329A-Q1 reads can be buffered. Given this scenario, if there is a third read request, the control word will be stored in the Rx Buffer 1, but it will not be processed by MCF8329A-Q1 as the Tx Buffers are full.

Once a data is read from Tx Buffer, the data is no longer stored in the Tx buffer. The buffer is cleared and it becomes available for the next data to be stored. If the read transaction was interrupted in between and if the MCU had not read all the bytes, external MCU can initiate another I<sup>2</sup>C read (only I<sup>2</sup>C read, without any control word information) to read all the data bytes from first.


#### 6.6.2.6  CRC Byte Calculation

An 8-bit CCIT polynomial (x<sup>8</sup> + x<sup>2</sup>\+ x + 1) is used for CRC computation.

_CRC Calculation in Write Operation_: When the external MCU writes to MCF8329A-Q1, if the CRC is enabled, the external MCU has to compute an 8-bit CRC byte and add the CRC byte at the end of the data. MCF8329A-Q1 computes CRC using the same polynomial internally and if there is a mismatch, the write request is discarded. Input data for CRC calculation by external MCU for write operation are listed below:

1.  Target ID + write bit.
2.  Control word – 3 bytes
3.  Data bytes – 2/4/8 bytes

_CRC Calculation in Read Operation_: When the external MCU reads from MCF8329A-Q1, if the CRC is enabled, MCF8329A-Q1 sends the CRC byte at the end of the data. The CRC computation in read operation involves the start byte, control words sent by external MCU along with data bytes sent by MCF8329A-Q1. Input data for CRC calculation by external MCU to verify the data sent by MCF8329A-Q1 are listed below :

1.  Target ID + write bit
2.  Control word – 3 bytes
3.  Target ID + read bit
4.  Data bytes – 2/4/8 bytes


# 7  EEPROM (Non-Volatile) Register Map


## 7.1  Algorithm_Configuration Registers

[Table 7-1](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE) lists the memory-mapped registers for the Algorithm_Configuration registers. All register offset addresses not listed in [Table 7-1](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE) are to be considered as reserved locations and the register contents are not to be modified.

**Table 7-1 ALGORITHM_CONFIGURATION Registers**


| Offset | Acronym | Register Name | Section |
| --- | --- | --- | --- |
| 80h | ISD_CONFIG | ISD Configuration | Section 7.1.1 |
| 82h | REV_DRIVE_CONFIG | Reverse Drive Configuration | Section 7.1.2 |
| 84h | MOTOR_STARTUP1 | Motor Startup Configuration1 | Section 7.1.3 |
| 86h | MOTOR_STARTUP2 | Motor Startup Configuration2 | Section 7.1.4 |
| 88h | CLOSED_LOOP1 | Close Loop Configuration1 | Section 7.1.5 |
| 8Ah | CLOSED_LOOP2 | Close Loop Configuration2 | Section 7.1.6 |
| 8Ch | CLOSED_LOOP3 | Close Loop Configuration3 | Section 7.1.7 |
| 8Eh | CLOSED_LOOP4 | Close Loop Configuration4 | Section 7.1.8 |
| 94h | REF_PROFILES1 | Reference Profile Configuration1 | Section 7.1.9 |
| 96h | REF_PROFILES2 | Reference Profile Configuration2 | Section 7.1.10 |
| 98h | REF_PROFILES3 | Reference Profile Configuration3 | Section 7.1.11 |
| 9Ah | REF_PROFILES4 | Reference Profile Configuration4 | Section 7.1.12 |
| 9Ch | REF_PROFILES5 | Reference Profile Configuration5 | Section 7.1.13 |
| 9Eh | REF_PROFILES6 | Reference Profile Configuration6 | Section 7.1.14 |


Complex bit access types are encoded to fit into small table cells. [Table 7-2](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_LEGEND_TABLE) shows the codes that are used for access types in this section.

**Table 7-2 Algorithm_Configuration Access Type Codes**


| Access Type | Code | Description |
| --- | --- | --- |
| Read Type | Read Type | Read Type |
| R | R | Read |
| Write Type | Write Type | Write Type |
| W | W | Write |
| Reset or Default Value | Reset or Default Value | Reset or Default Value |
| - n |  | Value after reset or the default value |


## 7.1.1 ISD_CONFIG Register (Offset = 80h) \[Reset = 00000000h\]

ISD_CONFIG is shown in [Figure 7-1](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ISD_CONFIG_FIGURE_TABLE) and described in [Table 7-3](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ISD_CONFIG_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure initial speed detect settings

**Figure 7-1 ISD_CONFIG Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | ISD_EN | BRAKE_EN | HIZ_EN | RVS_DR_EN | RESYNC_EN | FW_DRV_RESYN_THR | FW_DRV_RESYN_THR |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| FW_DRV_RESYN_THR | FW_DRV_RESYN_THR | RESERVED | SINGLE_SHUNT_BLANKING_TIME | SINGLE_SHUNT_BLANKING_TIME | SINGLE_SHUNT_BLANKING_TIME | SINGLE_SHUNT_BLANKING_TIME | BRK_TIME |
| R/W-0h | R/W-0h | R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| BRK_TIME | BRK_TIME | BRK_TIME | HIZ_TIME | HIZ_TIME | HIZ_TIME | HIZ_TIME | STAT_DETECT_THR |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| STAT_DETECT_THR | STAT_DETECT_THR | REV_DRV_HANDOFF_THR | REV_DRV_HANDOFF_THR | REV_DRV_HANDOFF_THR | REV_DRV_HANDOFF_THR | REV_DRV_OPEN_LOOP_CURRENT | REV_DRV_OPEN_LOOP_CURRENT |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-3 ISD_CONFIG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30 | ISD_EN | R/W | 0h | ISD Enable 0h = Disable 1h = Enable |
| 29 | BRAKE_EN | R/W | 0h | Brake enable during MSS 0h = Disable 1h = Enable |
| 28 | HIZ_EN | R/W | 0h | Hi-Z enable during MSS 0h = Disable 1h = Enable |
| 27 | RVS_DR_EN | R/W | 0h | Reverse Drive Enable 0h = Disable 1h = Enable |
| 26 | RESYNC_EN | R/W | 0h | Resynchronization Enable 0h = Disable 1h = Enable |
| 25-22 | FW_DRV_RESYN_THR | R/W | 0h | Minimum Speed threshold to resynchronize to close loop (% of MAX_SPEED) 0h = 5% 1h = 10% 2h = 15% 3h = 20% 4h = 25% 5h = 30% 6h = 35% 7h = 40% 8h = 45% 9h = 50% Ah = 55% Bh = 60% Ch = 70% Dh = 80% Eh = 90% Fh = 100% |
| 21 | RESERVED | R | 0h | Reserved |
| 20-17 | SINGLE_SHUNT_BLANKING_TIME | R/W | 0h | Blanking time before current is sampled from the PWM Edge 0h = 0.25µs 1h = 0.5µs 2h = 0.75µs 3h = 1µs 4h = 1.25µs 5h = 1.5µs 6h = 1.75µs 7h = 2µs 8h = 2.25µs 9h = 2.5µs Ah = 2.75µs Bh = 3µs Ch = 3.5µs Dh = 4µs Eh = 5µs Fh = 6µs |
| 16-13 | BRK_TIME | R/W | 0h | Brake time during MSS 0h = 10ms 1h = 50ms 2h = 100ms 3h = 200ms 4h = 300ms 5h = 400ms 6h = 500ms 7h = 750ms 8h = 1s 9h = 2s Ah = 3s Bh = 4s Ch = 5s Dh = 7.5s Eh = 10s Fh = 15s |
| 12-9 | HIZ_TIME | R/W | 0h | Hi-Z time during MSS 0h = 10ms 1h = 50ms 2h = 100ms 3h = 200ms 4h = 300ms 5h = 400ms 6h = 500ms 7h = 750ms 8h = 1s 9h = 2s Ah = 3s Bh = 4s Ch = 5s Dh = 7.5s Eh = 10s Fh = 15s |
| 8-6 | STAT_DETECT_THR | R/W | 0h | BEMF threshold to detect if motor is stationary 0h = 100mV 1h = 150mV 2h = 200mV 3h = 500mV 4h = 1000mV 5h = 1500mV 6h = 2000mV 7h = 3000mV |
| 5-2 | REV_DRV_HANDOFF_THR | R/W | 0h | Speed threshold used to transition to open loop during reverse drive (% of MAX_SPEED) 0h = 2.5% 1h = 5% 2h = 7.5% 3h = 10% 4h = 12.5% 5h = 15% 6h = 20% 7h = 25% 8h = 30% 9h = 40% Ah = 50% Bh = 60% Ch = 70% Dh = 80% Eh = 90% Fh = 100% |
| 1-0 | REV_DRV_OPEN_LOOP_CURRENT | R/W | 0h | Open loop current limit during reverse drive (% of BASE_CURRENT) 0h = 15% 1h = 25% 2h = 35% 3h = 50% |


## 7.1.2 REV_DRIVE_CONFIG Register (Offset = 82h) \[Reset = 00000000h\]

REV_DRIVE_CONFIG is shown in [Figure 7-2](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REV_DRIVE_CONFIG_FIGURE_TABLE) and described in [Table 7-4](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REV_DRIVE_CONFIG_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure reverse drive settings

**Figure 7-2 REV_DRIVE_CONFIG Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | REV_DRV_OPEN_LOOP_ACCEL_A1 | REV_DRV_OPEN_LOOP_ACCEL_A1 | REV_DRV_OPEN_LOOP_ACCEL_A1 | REV_DRV_OPEN_LOOP_ACCEL_A1 | REV_DRV_OPEN_LOOP_ACCEL_A2 | REV_DRV_OPEN_LOOP_ACCEL_A2 | REV_DRV_OPEN_LOOP_ACCEL_A2 |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| REV_DRV_OPEN_LOOP_ACCEL_A2 | ACTIVE_BRAKE_CURRENT_LIMIT | ACTIVE_BRAKE_CURRENT_LIMIT | ACTIVE_BRAKE_CURRENT_LIMIT | ACTIVE_BRAKE_KP | ACTIVE_BRAKE_KP | ACTIVE_BRAKE_KP | ACTIVE_BRAKE_KP |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| ACTIVE_BRAKE_KP | ACTIVE_BRAKE_KP | ACTIVE_BRAKE_KP | ACTIVE_BRAKE_KP | ACTIVE_BRAKE_KP | ACTIVE_BRAKE_KP | ACTIVE_BRAKE_KI | ACTIVE_BRAKE_KI |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| ACTIVE_BRAKE_KI | ACTIVE_BRAKE_KI | ACTIVE_BRAKE_KI | ACTIVE_BRAKE_KI | ACTIVE_BRAKE_KI | ACTIVE_BRAKE_KI | ACTIVE_BRAKE_KI | ACTIVE_BRAKE_KI |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-4 REV_DRIVE_CONFIG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-27 | REV_DRV_OPEN_LOOP_ACCEL_A1 | R/W | 0h | Open loop acceleration coefficient A1 during reverse drive 0h = 0.01Hz/s 1h = 0.05Hz/s 2h = 1Hz/s 3h = 2.5Hz/s 4h = 5Hz/s 5h = 10Hz/s 6h = 25Hz/s 7h = 50Hz/s 8h = 75Hz/s 9h = 100Hz/s Ah = 250Hz/s Bh = 500Hz/s Ch = 750Hz/s Dh = 1000Hz/s Eh = 5000Hz/s Fh = 10000Hz/s |
| 26-23 | REV_DRV_OPEN_LOOP_ACCEL_A2 | R/W | 0h | Open loop acceleration coefficient A2 during reverse drive 0h = 0.0Hz/s2 1h = 0.05Hz/s2 2h = 1Hz/s2 3h = 2.5Hz/s2 4h = 5Hz/s2 5h = 10Hz/s2 6h = 25Hz/s2 7h = 50Hz/s2 8h = 75Hz/s2 9h = 100Hz/s2 Ah = 250Hz/s2 Bh = 500Hz/s2 Ch = 750Hz/s2 Dh = 1000Hz/s2 Eh = 5000Hz/s2 Fh = 10000Hz/s2 |
| 22-20 | ACTIVE_BRAKE_CURRENT_LIMIT | R/W | 0h | Bus current limit during active braking (% of BASE_CURRENT) 0h = 10% 1h = 20 % 2h = 30 % 3h = 40 % 4h = 50 % 5h = 60 % 6h = 70 % 7h = 80 % |
| 19-10 | ACTIVE_BRAKE_KP | R/W | 0h | 10-bit value for active braking PI loop Kp. Kp = ACTIVE_BRAKE_KP / 2<sup>7</sup> |
| 9-0 | ACTIVE_BRAKE_KI | R/W | 0h | 10-bit value for active braking PI loop Ki. Ki = ACTIVE_BRAKE_KI / 2<sup>9</sup> |


## 7.1.3 MOTOR_STARTUP1 Register (Offset = 84h) \[Reset = 00000000h\]

MOTOR_STARTUP1 is shown in [Figure 7-3](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_MOTOR_STARTUP1_FIGURE_TABLE) and described in [Table 7-5](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_MOTOR_STARTUP1_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure motor startup settings1

**Figure 7-3 MOTOR_STARTUP1 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | MTR_STARTUP | MTR_STARTUP | ALIGN_SLOW_RAMP_RATE | ALIGN_SLOW_RAMP_RATE | ALIGN_SLOW_RAMP_RATE | ALIGN_SLOW_RAMP_RATE | ALIGN_TIME |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| ALIGN_TIME | ALIGN_TIME | ALIGN_TIME | ALIGN_OR_SLOW_CURRENT_ILIMIT | ALIGN_OR_SLOW_CURRENT_ILIMIT | ALIGN_OR_SLOW_CURRENT_ILIMIT | ALIGN_OR_SLOW_CURRENT_ILIMIT | IPD_CLK_FREQ |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| IPD_CLK_FREQ | IPD_CLK_FREQ | IPD_CURR_THR | IPD_CURR_THR | IPD_CURR_THR | IPD_CURR_THR | IPD_CURR_THR | RESERVED |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| IPD_ADV_ANGLE | IPD_ADV_ANGLE | IPD_REPEAT | IPD_REPEAT | OL_ILIMIT_CONFIG | IQ_RAMP_DOWN_EN | ACTIVE_BRAKE_EN | REV_DRV_CONFIG |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-5 MOTOR_STARTUP1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-29 | MTR_STARTUP | R/W | 0h | Motor startup option 0h = Align 1h = Double Align 2h = IPD 3h = Slow first cycle |
| 28-25 | ALIGN_SLOW_RAMP_RATE | R/W | 0h | Align, slow first cycle and open loop current ramp rate 0h = 1A/s 1h = 5A/s 2h = 10A/s 3h = 25A/s 4h = 50A/s 5h = 100A/s 6h = 150A/s 7h = 250A/s 8h = 500A/s 9h = 1000A/s Ah = 2000A/s Bh = 5000A/s Ch = 10000A/s Dh = 20000A/s Eh = 50000A/s Fh = No Limit A/s |
| 24-21 | ALIGN_TIME | R/W | 0h | Align time 0h = 10ms 1h = 50ms 2h = 100ms 3h = 200ms 4h = 300ms 5h = 400ms 6h = 500ms 7h = 750ms 8h = 1s 9h = 1.5s Ah = 2s Bh = 3s Ch = 4s Dh = 5s Eh = 7.5s Fh = 10s |
| 20-17 | ALIGN_OR_SLOW_CURRENT_ILIMIT | R/W | 0h | Align or slow first cycle current limit (% of BASE_CURRENT) 0h = 5 % 1h = 10 % 2h = 15 % 3h = 20 % 4h = 25 % 5h = 30 % 6h = 40 % 7h = 50 % 8h = 60 % 9h = 65 % Ah = 70 % Bh = 75 % Ch = 80 % Dh = 85 % Eh = 90 % Fh = 95 % |
| 16-14 | IPD_CLK_FREQ | R/W | 0h | IPD Clock Frequency 0h = 50Hz 1h = 100Hz 2h = 250Hz 3h = 500Hz 4h = 1000Hz 5h = 2000Hz 6h = 5000Hz 7h = 10000Hz |
| 13-9 | IPD_CURR_THR | R/W | 0h | IPD Current Threshold (% of BASE_CURRENT) 0h = 2.5 % 1h = 5 % 2h = 7.5 % 3h = 10 % 4h = 12.5 % 5h = 15 % 6h = 20 % 7h = 25 % 8h = 30 % 9h = 36.67 % Ah = 40 % Bh = 46.67 % Ch = 53..33 % Dh = 60 % Eh = 66.67 % Fh = 72 % 10h = NA 11h = NA 12h = NA 13h = NA 14h = NA 15h = NA 16h = NA 17h = NA 18h = NA 19h = NA 1Ah = NA 1Bh = NA 1Ch = NA 1Dh = NA 1Eh = NA 1Fh = NA |
| 8 | RESERVED | R | 0h | Reserved |
| 7-6 | IPD_ADV_ANGLE | R/W | 0h | IPD advance angle 0h = 0° 1h = 30° 2h = 60° 3h = 90° |
| 5-4 | IPD_REPEAT | R/W | 0h | Number of times IPD is executed 0h = 1 time 1h = average of 2 times 2h = average of 3 times 3h = average of 4 times |
| 3 | OL_ILIMIT_CONFIG | R/W | 0h | Open loop current limit configuration 0h = Open loop current limit defined by OL_ILIMIT 1h = Open loop current limit defined by ILIMIT |
| 2 | IQ_RAMP_DOWN_EN | R/W | 0h | Iq reference ramp down during transition from open loop to closed loop 0h = Disable Iq ramp down 1h = Enable Iq ramp down |
| 1 | ACTIVE_BRAKE_EN | R/W | 0h | Enable active brake 0h = Disable Active Brake 1h = Enable Active Brake |
| 0 | REV_DRV_CONFIG | R/W | 0h | Open loop Configuration setting for reverse drive 0h = Open loop current, A1, A2 based on forward drive 1h = Open loop current, A1, A2 based on reverse drive |


## 7.1.4 MOTOR_STARTUP2 Register (Offset = 86h) \[Reset = 00000000h\]

MOTOR_STARTUP2 is shown in [Figure 7-4](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_MOTOR_STARTUP2_FIGURE_TABLE) and described in [Table 7-6](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_MOTOR_STARTUP2_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure motor startup settings2

**Figure 7-4 MOTOR_STARTUP2 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | OL_ILIMIT | OL_ILIMIT | OL_ILIMIT | OL_ILIMIT | OL_ACC_A1 | OL_ACC_A1 | OL_ACC_A1 |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| OL_ACC_A1 | OL_ACC_A2 | OL_ACC_A2 | OL_ACC_A2 | OL_ACC_A2 | AUTO_HANDOFF_EN | OPN_CL_HANDOFF_THR | OPN_CL_HANDOFF_THR |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| OPN_CL_HANDOFF_THR | OPN_CL_HANDOFF_THR | OPN_CL_HANDOFF_THR | ALIGN_ANGLE | ALIGN_ANGLE | ALIGN_ANGLE | ALIGN_ANGLE | ALIGN_ANGLE |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| SLOW_FIRST_CYC_FREQ | SLOW_FIRST_CYC_FREQ | SLOW_FIRST_CYC_FREQ | SLOW_FIRST_CYC_FREQ | FIRST_CYCLE_FREQ_SEL | THETA_ERROR_RAMP_RATE | THETA_ERROR_RAMP_RATE | THETA_ERROR_RAMP_RATE |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-6 MOTOR_STARTUP2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-27 | OL_ILIMIT | R/W | 0h | Open Loop current limit (% of BASE_CURRENT) 0h = 5 % 1h = 10 % 2h = 15 % 3h = 20 % 4h = 25 % 5h = 30 % 6h = 40 % 7h = 50 % 8h = 60 % 9h = 65 % Ah = 70 % Bh = 75 % Ch = 80 % Dh = 85 % Eh = 90 % Fh = 95 % |
| 26-23 | OL_ACC_A1 | R/W | 0h | Open loop acceleration coefficient A1 0h = 0.01Hz/s 1h = 0.05Hz/s 2h = 1Hz/s 3h = 2.5Hz/s 4h = 5Hz/s 5h = 10Hz/s 6h = 25Hz/s 7h = 50Hz/s 8h = 75Hz/s 9h = 100Hz/s Ah = 250Hz/s Bh = 500Hz/s Ch = 750Hz/s Dh = 1000Hz/s Eh = 5000Hz/s Fh = 10000Hz/s |
| 22-19 | OL_ACC_A2 | R/W | 0h | Open loop acceleration coefficient A2 0h = 0.0Hz/s2 1h = 0.05Hz/s2 2h = 1Hz/s2 3h = 2.5Hz/s2 4h = 5Hz/s2 5h = 10Hz/s2 6h = 25Hz/s2 7h = 50Hz/s2 8h = 75Hz/s2 9h = 100Hz/s2 Ah = 250Hz/s2 Bh = 500Hz/s2 Ch = 750Hz/s2 Dh = 1000Hz/s2 Eh = 5000Hz/s2 Fh = 10000Hz/s2 |
| 18 | AUTO_HANDOFF_EN | R/W | 0h | Auto Handoff Enable 0h = Disable Auto Handoff (and use OPN_CL_HANDOFF_THR) 1h = Enable Auto Handoff |
| 17-13 | OPN_CL_HANDOFF_THR | R/W | 0h | Open to Close loop Handoff Threshold (% of MAX_SPEED) 0h = 1% 1h = 2% 2h = 3% 3h = 4% 4h = 5% 5h = 6% 6h = 7% 7h = 8% 8h = 9% 9h = 10% Ah = 11% Bh = 12% Ch = 13% Dh = 14% Eh = 15% Fh = 16% 10h = 17% 11h = 18% 12h = 19% 13h = 20% 14h = 22.5% 15h = 25% 16h = 27.5% 17h = 30% 18h = 32.5% 19h = 35% 1Ah = 37.5% 1Bh = 40% 1Ch = 42.5% 1Dh = 45% 1Eh = 47.5% 1Fh = 50% |
| 12-8 | ALIGN_ANGLE | R/W | 0h | Align Angle 0h = 0 deg 1h = 10 deg 2h = 20 deg 3h = 30 deg 4h = 45 deg 5h = 60 deg 6h = 70 deg 7h = 80 deg 8h = 90 deg 9h = 110 deg Ah = 120 deg Bh = 135 deg Ch = 150 deg Dh = 160 deg Eh = 170 deg Fh = 180 deg 10h = 190 deg 11h = 210 deg 12h = 225 deg 13h = 240 deg 14h = 250 deg 15h = 260 deg 16h = 270 deg 17h = 280 deg 18h = 290 deg 19h = 315 deg 1Ah = 330 deg 1Bh = 340 deg 1Ch = 350 deg 1Dh = Reserved 1Eh = Reserved 1Fh = Reserved |
| 7-4 | SLOW_FIRST_CYC_FREQ | R/W | 0h | Frequency of first cycle in slow first cycle startup (% of MAX_SPEED) 0h = 0.1% 1h = 0.2% 2h = 0.3% 3h = 0.4% 4h = 0.5% 5h = 0.7% 6h = 1.0% 7h = 1.2% 8h = 1.5% 9h = 2.0% Ah = 2.5% Bh = 3% Ch = 3.5% Dh = 4% Eh = 4.5% Fh = 5% |
| 3 | FIRST_CYCLE_FREQ_SEL | R/W | 0h | First cycle frequency in open loop for align, double align and IPD startup options 0h = 0Hz 1h = Defined by SLOW_FIRST_CYC_FREQ |
| 2-0 | THETA_ERROR_RAMP_RATE | R/W | 0h | Ramp rate for reducing difference between estimated angle and open loop angle 0h = 0.01 deg/ms 1h = 0.05 deg/ms 2h = 0.1 deg/ms 3h = 0.15 deg/ms 4h = 0.2 deg / ms 5h = 0.5 deg/ms 6h = 1 deg/ms 7h = 2 deg/ms |


## 7.1.5 CLOSED_LOOP1 Register (Offset = 88h) \[Reset = 00000000h\]

CLOSED_LOOP1 is shown in [Figure 7-5](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_CLOSED_LOOP1_FIGURE_TABLE) and described in [Table 7-7](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_CLOSED_LOOP1_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure close loop settings1

**Figure 7-5 CLOSED_LOOP1 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | RESERVED | CL_ACC | CL_ACC | CL_ACC | CL_ACC | CL_ACC | CL_DEC_CONFIG |
| R-0h | R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| CL_DEC | CL_DEC | CL_DEC | CL_DEC | CL_DEC | PWM_FREQ_OUT | PWM_FREQ_OUT | PWM_FREQ_OUT |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| PWM_FREQ_OUT | RESERVED | FG_SEL | FG_SEL | FG_DIV | FG_DIV | FG_DIV | FG_DIV |
| R/W-0h | R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| FG_CONFIG | FG_BEMF_THR | FG_BEMF_THR | FG_BEMF_THR | AVS_EN | DEADTIME_COMP_EN | RESERVED | LOW_SPEED_RECIRC_BRAKE_EN |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-7 CLOSED_LOOP1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30 | RESERVED | R | 0h | Reserved |
| 29-25 | CL_ACC | R/W | 0h | Closed loop acceleration Speed Mode ( Hz/s) Power Mode (W/s) Current Mode (A/s) Voltage Mode(0.1% modulation index per second) 0h = 0.5 1h = 1 2h = 2.5 3h = 5 4h = 7.5 5h = 10 6h = 20 7h = 40 8h = 60 9h = 80 Ah = 100 Bh = 200 Ch = 300 Dh = 400 Eh = 500 Fh = 600 10h = 700 11h = 800 12h = 900 13h = 1000 14h = 2000 15h = 4000 16h = 6000 17h = 8000 18h = 10000 19h = 20000 1Ah = 30000 1Bh = 40000 1Ch = 50000 1Dh = 60000 1Eh = 70000 1Fh = No limit |
| 24 | CL_DEC_CONFIG | R/W | 0h | Closed loop deceleration configuration 0h = Closed loop deceleration defined by CL_DEC 1h = Closed loop deceleration defined by CL_ACC |
| 23-19 | CL_DEC | R/W | 0h | Closed loop deceleration. Speed Mode ( Hz/s) Power Mode (W/s) Current Mode (A/s) Voltage Mode(0.1% modulation index per second) Note: This configuration bits are not used if AVS is enabled in speed mode or CL_DEC_CONFIG is set to '1' 0h = 0.5 1h = 1 2h = 2.5 3h = 5 4h = 7.5 5h = 10 6h = 20 7h = 40 8h = 60 9h = 80 Ah = 100 Bh = 200 Ch = 300 Dh = 400 Eh = 500 Fh = 600 10h = 700 11h = 800 12h = 900 13h = 1000 14h = 2000 15h = 4000 16h = 6000 17h = 8000 18h = 10000 19h = 20000 1Ah = 30000 1Bh = 40000 1Ch = 50000 1Dh = 60000 1Eh = 70000 1Fh = No limit |
| 18-15 | PWM_FREQ_OUT | R/W | 0h | PWM output frequency 0h = 10kHz 1h = 15kHz 2h = 20kHz 3h = 25kHz 4h = 30kHz 5h = 35kHz 6h = 40kHz 7h = 45kHz 8h = 50kHz 9h = 55kHz Ah = 60kHz Bh = 65kHz Ch = 70kHz Dh = 75kHz Eh = Not Applicable Fh = Not Applicable |
| 14 | RESERVED | R | 0h | Reserved |
| 13-12 | FG_SEL | R/W | 0h | FG select 0h = Output FG in ISD, open loop and closed loop (HW config) 1h = Output FG in only closed loop 2h = Output FG in open loop for the first try. 3h = Not Defined |
| 11-8 | FG_DIV | R/W | 0h | FG Division factor 0h = Divide by 1 (2-pole motor mechanical speed) 1h = Divide by 1 (2-pole motor mechanical speed) 2h = Divide by 2 (4-pole motor mechanical speed) 3h = Divide by 3 (6-pole motor mechanical speed) 4h = Divide by 4 (8-pole motor mechanical speed) ... Fh = Divide by 15 (30-pole motor mechanical speed) |
| 7 | FG_CONFIG | R/W | 0h | FG output configuration 0h = FG active as long as motor is driven 1h = FG active till BEMF drops below BEMF threshold defined by FG_BEMF_THR |
| 6-4 | FG_BEMF_THR | R/W | 0h | FG output BEMF threshold, calculated as voltage at SHx pin divided by voltage gain. Voltage gain = 20V/V, BUS_VOLT = 60 Voltage gain = 10V/V, BUS_VOLT = 30 Voltage gain = 5V/V, BUS_VOLT = 15 0h = +/- 1mV 1h = +/- 2mV 2h = +/- 5mV 3h = +/- 10mV 4h = +/- 20mV 5h = +/- 30mV 6h = Not Applicable 7h = Not Applicable |
| 3 | AVS_EN | R/W | 0h | AVS enable 0h = Disable 1h = Enable |
| 2 | DEADTIME_COMP_EN | R/W | 0h | Deadtime compensation enable 0h = Disable 1h = Enable |
| 1 | RESERVED | R | 0h | Reserved |
| 0 | LOW_SPEED_RECIRC_BRAKE_EN | R/W | 0h | Motor stop option applied when MTR_STOP is recirculation Mode and motor is running in align or open loop 0h = Hi-z 1h = Low Side Brake |


## 7.1.6 CLOSED_LOOP2 Register (Offset = 8Ah) \[Reset = 00000000h\]

CLOSED_LOOP2 is shown in [Figure 7-6](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_CLOSED_LOOP2_FIGURE_TABLE) and described in [Table 7-8](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_CLOSED_LOOP2_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure close loop settings2

**Figure 7-6 CLOSED_LOOP2 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | MTR_STOP | MTR_STOP | MTR_STOP | MTR_STOP_BRK_TIME | MTR_STOP_BRK_TIME | MTR_STOP_BRK_TIME | MTR_STOP_BRK_TIME |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| ACT_SPIN_THR | ACT_SPIN_THR | ACT_SPIN_THR | ACT_SPIN_THR | BRAKE_SPEED_THRESHOLD | BRAKE_SPEED_THRESHOLD | BRAKE_SPEED_THRESHOLD | BRAKE_SPEED_THRESHOLD |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| MOTOR_RES | MOTOR_RES | MOTOR_RES | MOTOR_RES | MOTOR_RES | MOTOR_RES | MOTOR_RES | MOTOR_RES |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| MOTOR_IND | MOTOR_IND | MOTOR_IND | MOTOR_IND | MOTOR_IND | MOTOR_IND | MOTOR_IND | MOTOR_IND |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-8 CLOSED_LOOP2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-28 | MTR_STOP | R/W | 0h | Motor stop option 0h = Hi-z 1h = Recirculation Mode 2h = Low side braking 3h = Low side braking 4h = Active spin down 5h = Not Defined 6h = Not Defined 7h = Not Defined |
| 27-24 | MTR_STOP_BRK_TIME | R/W | 0h | Brake time during motor stop 0h = 1ms 1h = 1ms 2h = 1ms 3h = 1ms 4h = 1ms 5h = 5ms 6h = 10ms 7h = 50ms 8h = 100ms 9h = 250ms Ah = 500ms Bh = 1000ms Ch = 2500ms Dh = 5000ms Eh = 10000ms Fh = 15000ms |
| 23-20 | ACT_SPIN_THR | R/W | 0h | Speed threshold for active spin down (% of MAX_SPEED) 0h = 100 % 1h = 90 % 2h = 80 % 3h = 70 % 4h = 60% 5h = 50 % 6h = 45 % 7h = 40 % 8h = 35 % 9h = 30 % Ah = 25 % Bh = 20 % Ch = 15 % Dh = 10 % Eh = 5 % Fh = 2.5 % |
| 19-16 | BRAKE_SPEED_THRESHOLD | R/W | 0h | Speed threshold below which brake is applied for BRAKE pin and Motor stop options (Low side Braking) (% of MAX_SPEED) 0h = 100 % 1h = 90 % 2h = 80 % 3h = 70 % 4h = 60% 5h = 50 % 6h = 45 % 7h = 40 % 8h = 35 % 9h = 30 % Ah = 25 % Bh = 20 % Ch = 15 % Dh = 10 % Eh = 5 % Fh = 2.5 % |
| 15-8 | MOTOR_RES | R/W | 0h | 8-bit values for motor phase resistance |
| 7-0 | MOTOR_IND | R/W | 0h | 8-bit values for motor phase inductance |


## 7.1.7 CLOSED_LOOP3 Register (Offset = 8Ch) \[Reset = 00000000h\]

CLOSED_LOOP3 is shown in [Figure 7-7](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_CLOSED_LOOP3_FIGURE_TABLE) and described in [Table 7-9](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_CLOSED_LOOP3_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure close loop settings3

**Figure 7-7 CLOSED_LOOP3 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| MOTOR_BEMF_CONST | CURR_LOOP_KP | CURR_LOOP_KP | CURR_LOOP_KP | CURR_LOOP_KP | CURR_LOOP_KP | CURR_LOOP_KP | CURR_LOOP_KP |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| CURR_LOOP_KP | CURR_LOOP_KP | CURR_LOOP_KP | CURR_LOOP_KI | CURR_LOOP_KI | CURR_LOOP_KI | CURR_LOOP_KI | CURR_LOOP_KI |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| CURR_LOOP_KI | CURR_LOOP_KI | CURR_LOOP_KI | CURR_LOOP_KI | CURR_LOOP_KI | SPD_LOOP_KP | SPD_LOOP_KP | SPD_LOOP_KP |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-9 CLOSED_LOOP3 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-23 | MOTOR_BEMF_CONST | R/W | 0h | 8-bit values for motor BEMF Constant |
| 22-13 | CURR_LOOP_KP | R/W | 0h | 10-bit Kp value for Iq and Id PI loop. CURR_LOOP_KP is divided in 2 sections. SCALE(9:8) and VALUE(7:0). Kp = VALUE / 10^SCALE Set to 0 for auto calculation of current Kp and Ki |
| 12-3 | CURR_LOOP_KI | R/W | 0h | 10-bit Ki value for Iq and Id PI loop. CURR_LOOP_KI is divided in 2 sections. SCALE(9:8) and VALUE(7:0). Ki = 1000 × VALUE / 10^SCALE Set to 0 for auto calculation of current Kp and Ki |
| 2-0 | SPD_LOOP_KP | R/W | 0h | 3 MSB bits for speed loop Kp. SPD_LOOP_KP is divided in 2 sections SCALE(9:8) and VALUE(7:0). Kp = 0.01 × VALUE / 10^SCALE. |


## 7.1.8 CLOSED_LOOP4 Register (Offset = 8Eh) \[Reset = 00000000h\]

CLOSED_LOOP4 is shown in [Figure 7-8](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_CLOSED_LOOP4_FIGURE_TABLE) and described in [Table 7-10](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_CLOSED_LOOP4_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure close loop settings4

**Figure 7-8 CLOSED_LOOP4 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | SPD_LOOP_KP | SPD_LOOP_KP | SPD_LOOP_KP | SPD_LOOP_KP | SPD_LOOP_KP | SPD_LOOP_KP | SPD_LOOP_KP |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| SPD_LOOP_KI | SPD_LOOP_KI | SPD_LOOP_KI | SPD_LOOP_KI | SPD_LOOP_KI | SPD_LOOP_KI | SPD_LOOP_KI | SPD_LOOP_KI |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| SPD_LOOP_KI | SPD_LOOP_KI | MAX_SPEED | MAX_SPEED | MAX_SPEED | MAX_SPEED | MAX_SPEED | MAX_SPEED |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| MAX_SPEED | MAX_SPEED | MAX_SPEED | MAX_SPEED | MAX_SPEED | MAX_SPEED | MAX_SPEED | MAX_SPEED |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-10 CLOSED_LOOP4 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-24 | SPD_LOOP_KP | R/W | 0h | 7 LSB bits for speed loop Kp. SPD_LOOP_KP is divided in 2 sections SCALE(10:9) and VALUE(8:0). Kp = 0.01 × VALUE / 10^SCALE. |
| 23-14 | SPD_LOOP_KI | R/W | 0h | 10 bit value for speed loop Ki. SPD_LOOP_KI is divided in 2 sections SCALE(9:8) and VALUE(7:0). Ki = 0.1 × VALUE / 10^SCALE. |
| 13-0 | MAX_SPEED | R/W | 0h | 14-bit value for setting maximum value of Speed in electrical Hz. 0 - 9600d = MAX_SPEED/6 9601d - 16383d = (MAX_SPEED/4 - 800) For example, if MAX_SPEED is 0x5DC(1500d), then maximum motor speed (Hz) is 1500/6 is equal to 250Hz If MAX_SPEED is 0x2710(10000d), then maximum motor speed (Hz) is (10000/4) - 800 is equal to 1700Hz |


## 7.1.9 REF_PROFILES1 Register (Offset = 94h) \[Reset = 00000000h\]

REF_PROFILES1 is shown in [Figure 7-9](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES1_FIGURE_TABLE) and described in [Table 7-11](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES1_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure reference profile1

**Figure 7-9 REF_PROFILES1 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | REF_PROFILE_CONFIG | REF_PROFILE_CONFIG | DUTY_ON1 | DUTY_ON1 | DUTY_ON1 | DUTY_ON1 | DUTY_ON1 |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| DUTY_ON1 | DUTY_ON1 | DUTY_ON1 | DUTY_OFF1 | DUTY_OFF1 | DUTY_OFF1 | DUTY_OFF1 | DUTY_OFF1 |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| DUTY_OFF1 | DUTY_OFF1 | DUTY_OFF1 | DUTY_CLAMP1 | DUTY_CLAMP1 | DUTY_CLAMP1 | DUTY_CLAMP1 | DUTY_CLAMP1 |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| DUTY_CLAMP1 | DUTY_CLAMP1 | DUTY_CLAMP1 | DUTY_A | DUTY_A | DUTY_A | DUTY_A | DUTY_A |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-11 REF_PROFILES1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-29 | REF_PROFILE_CONFIG | R/W | 0h | Configuration for Reference profiles 0h = Reference Mode 1h = Linear Mode 2h = Staircase Mode 3h = Forward Reverse Mode |
| 28-21 | DUTY_ON1 | R/W | 0h | Duty_ON1 Configuration Turn On Duty Cycle (%) = {(DUTY_ON1/255) × 100} |
| 20-13 | DUTY_OFF1 | R/W | 0h | Duty_OFF1 Configuration Turn Off Duty Cycle (%) = {(DUTY_OFF1/255) × 100} |
| 12-5 | DUTY_CLAMP1 | R/W | 0h | Duty_CLAMP1 Configuration Duty Cycle for clamping (%) = {(DUTY_CLAMP1/255) ×100} |
| 4-0 | DUTY_A | R/W | 0h | 5 MSB bits for Duty Cycle A |


## 7.1.10 REF_PROFILES2 Register (Offset = 96h) \[Reset = 00000000h\]

REF_PROFILES2 is shown in [Figure 7-10](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES2_FIGURE_TABLE) and described in [Table 7-12](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES2_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure reference profile2

**Figure 7-10 REF_PROFILES2 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | DUTY_A | DUTY_A | DUTY_A | DUTY_B | DUTY_B | DUTY_B | DUTY_B |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| DUTY_B | DUTY_B | DUTY_B | DUTY_B | DUTY_C | DUTY_C | DUTY_C | DUTY_C |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| DUTY_C | DUTY_C | DUTY_C | DUTY_C | DUTY_D | DUTY_D | DUTY_D | DUTY_D |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| DUTY_D | DUTY_D | DUTY_D | DUTY_D | DUTY_E | DUTY_E | DUTY_E | DUTY_E |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-12 REF_PROFILES2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-28 | DUTY_A | R/W | 0h | 3 LSB bits for Duty Cycle A Configuration Duty Cycle A (%) = {(DUTY_A/255) × 100} |
| 27-20 | DUTY_B | R/W | 0h | Duty_B Configuration Duty Cycle B (%) = {(DUTY_B/255) × 100} |
| 19-12 | DUTY_C | R/W | 0h | Duty_C Configuration Duty Cycle C (%) = {(DUTY_C/255) × 100} |
| 11-4 | DUTY_D | R/W | 0h | Duty_D Configuration Duty Cycle D (%) = {(DUTY_D/255) × 100} |
| 3-0 | DUTY_E | R/W | 0h | 4 MSB bits for Duty Cycle E |


## 7.1.11 REF_PROFILES3 Register (Offset = 98h) \[Reset = 00000000h\]

REF_PROFILES3 is shown in [Figure 7-11](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES3_FIGURE_TABLE) and described in [Table 7-13](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES3_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure reference profile3

**Figure 7-11 REF_PROFILES3 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | DUTY_E | DUTY_E | DUTY_E | DUTY_E | DUTY_ON2 | DUTY_ON2 | DUTY_ON2 |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| DUTY_ON2 | DUTY_ON2 | DUTY_ON2 | DUTY_ON2 | DUTY_ON2 | DUTY_OFF2 | DUTY_OFF2 | DUTY_OFF2 |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| DUTY_OFF2 | DUTY_OFF2 | DUTY_OFF2 | DUTY_OFF2 | DUTY_OFF2 | DUTY_CLAMP2 | DUTY_CLAMP2 | DUTY_CLAMP2 |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| DUTY_CLAMP2 | DUTY_CLAMP2 | DUTY_CLAMP2 | DUTY_CLAMP2 | DUTY_CLAMP2 | DUTY_HYS | DUTY_HYS | RESERVED |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 7-13 REF_PROFILES3 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-27 | DUTY_E | R/W | 0h | 4 LSB bits for Duty Cycle E Configuration Duty Cycle E (%) = {(DUTY_E/255) × 100} |
| 26-19 | DUTY_ON2 | R/W | 0h | Duty_ON2 Configuration Turn On Duty Cycle (%) = {(DUTY_ON2/255) × 100} |
| 18-11 | DUTY_OFF2 | R/W | 0h | Duty_OFF2 Configuration Turn Off Duty Cycle (%) = {(DUTY_OFF2/255) × 100} |
| 10-3 | DUTY_CLAMP2 | R/W | 0h | Duty_CLAMP2 Configuration Duty Cycle for clamping (%) = {(DUTY_CLAMP2/255) × 100} |
| 2-1 | DUTY_HYS | R/W | 0h | Duty hysteresis 0h = 0% 1h = 0.8% 2h = 2% 3h = 4% |
| 0 | RESERVED | R | 0h | Reserved |


## 7.1.12 REF_PROFILES4 Register (Offset = 9Ah) \[Reset = 00000000h\]

REF_PROFILES4 is shown in [Figure 7-12](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES4_FIGURE_TABLE) and described in [Table 7-14](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES4_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure reference profile4

**Figure 7-12 REF_PROFILES4 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | REF_OFF1 | REF_OFF1 | REF_OFF1 | REF_OFF1 | REF_OFF1 | REF_OFF1 | REF_OFF1 |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| REF_OFF1 | REF_CLAMP1 | REF_CLAMP1 | REF_CLAMP1 | REF_CLAMP1 | REF_CLAMP1 | REF_CLAMP1 | REF_CLAMP1 |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| REF_CLAMP1 | REF_A | REF_A | REF_A | REF_A | REF_A | REF_A | REF_A |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| REF_A | REF_B | REF_B | REF_B | REF_B | REF_B | REF_B | REF_B |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-14 REF_PROFILES4 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-23 | REF_OFF1 | R/W | 0h | Turn off ref Configuration Turn off reference (% of Maximum Reference) = {(REF_OFF1/255) × 100} |
| 22-15 | REF_CLAMP1 | R/W | 0h | Ref Clamp1 Configuration Clamp Ref (% of Maximum Reference) = {(REF_CLAMP1/255) × 100} |
| 14-7 | REF_A | R/W | 0h | Ref A configuration Ref A (% of Maximum Reference) = {(REF_A/255) × 100} |
| 6-0 | REF_B | R/W | 0h | 7 MSB of REF_B configuration |


## 7.1.13 REF_PROFILES5 Register (Offset = 9Ch) \[Reset = 00000000h\]

REF_PROFILES5 is shown in [Figure 7-13](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES5_FIGURE_TABLE) and described in [Table 7-15](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES5_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure reference profile5

**Figure 7-13 REF_PROFILES5 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | REF_B | REF_C | REF_C | REF_C | REF_C | REF_C | REF_C |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| REF_C | REF_C | REF_D | REF_D | REF_D | REF_D | REF_D | REF_D |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| REF_D | REF_D | REF_E | REF_E | REF_E | REF_E | REF_E | REF_E |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| REF_E | REF_E | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R/W-0h | R/W-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 7-15 REF_PROFILES5 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30 | REF_B | R/W | 0h | 1 LSB of REF_B configuration Ref B(% of Maximum Reference) = {(REF_B/255) × 100} |
| 29-22 | REF_C | R/W | 0h | Ref C configuration Ref C (% of Maximum Reference) = {(REF_C/255) × 100} |
| 21-14 | REF_D | R/W | 0h | Ref D configuration Ref D (% of Maximum Reference) = {(REF_D/255) × 100} |
| 13-6 | REF_E | R/W | 0h | Ref E Configuration Ref E(% of Maximum Reference) = {(REF_E/255)*100} |
| 5-0 | RESERVED | R | 0h | Reserved |


## 7.1.14 REF_PROFILES6 Register (Offset = 9Eh) \[Reset = 00000000h\]

REF_PROFILES6 is shown in [Figure 7-14](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES6_FIGURE_TABLE) and described in [Table 7-16](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_REF_PROFILES6_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONFIGURATION_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure reference profile6

**Figure 7-14 REF_PROFILES6 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | REF_OFF2 | REF_OFF2 | REF_OFF2 | REF_OFF2 | REF_OFF2 | REF_OFF2 | REF_OFF2 |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| REF_OFF2 | REF_CLAMP2 | REF_CLAMP2 | REF_CLAMP2 | REF_CLAMP2 | REF_CLAMP2 | REF_CLAMP2 | REF_CLAMP2 |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| REF_CLAMP2 | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R/W-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 7-16 REF_PROFILES6 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-23 | REF_OFF2 | R/W | 0h | Turn off Ref Configuration Turn off Ref (% of Maximum Reference)) = {(REF_OFF2/255) × 100} |
| 22-15 | REF_CLAMP2 | R/W | 0h | Clamp Ref Configuration Clamp Ref (% of Maximum Reference) = {(REF_CLAMP2/255) ×100} |
| 14-0 | RESERVED | R | 0h | Reserved |


## 7.2  Fault_Configuration Registers

[Table 7-17](#FAULT_CONFIGURATION_FAULT_CONFIGURATION_TABLE_1_TABLE) lists the memory-mapped registers for the Fault_Configuration registers. All register offset addresses not listed in [Table 7-17](#FAULT_CONFIGURATION_FAULT_CONFIGURATION_TABLE_1_TABLE) should be considered as reserved locations and the register contents should not be modified.

**Table 7-17 FAULT_CONFIGURATION Registers**


| Offset | Acronym | Register Name | Section |
| --- | --- | --- | --- |
| 90h | FAULT_CONFIG1 | Fault Configuration1 | Section 7.2.1 |
| 92h | FAULT_CONFIG2 | Fault Configuration2 | Section 7.2.2 |


Complex bit access types are encoded to fit into small table cells. [Table 7-18](#FAULT_CONFIGURATION_FAULT_CONFIGURATION_LEGEND_TABLE) shows the codes that are used for access types in this section.

**Table 7-18 Fault_Configuration Access Type Codes**


| Access Type | Code | Description |
| --- | --- | --- |
| Read Type | Read Type | Read Type |
| R | R | Read |
| Write Type | Write Type | Write Type |
| W | W | Write |
| Reset or Default Value | Reset or Default Value | Reset or Default Value |
| - n |  | Value after reset or the default value |


## 7.2.1 FAULT_CONFIG1 Register (Offset = 90h) \[Reset = 00000000h\]

FAULT_CONFIG1 is shown in [Figure 7-15](#FAULT_CONFIGURATION_FAULT_CONFIGURATION_FAULT_CONFIGURATION_FAULT_CONFIG1_FIGURE_TABLE) and described in [Table 7-19](#FAULT_CONFIGURATION_FAULT_CONFIGURATION_FAULT_CONFIGURATION_FAULT_CONFIG1_TABLE_TABLE).

Return to the [Summary Table](#FAULT_CONFIGURATION_FAULT_CONFIGURATION_TABLE_1_TABLE).

Register to configure fault settings1

**Figure 7-15 FAULT_CONFIG1 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | ILIMIT | ILIMIT | ILIMIT | ILIMIT | HW_LOCK_ILIMIT | HW_LOCK_ILIMIT | HW_LOCK_ILIMIT |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| HW_LOCK_ILIMIT | LOCK_ILIMIT | LOCK_ILIMIT | LOCK_ILIMIT | LOCK_ILIMIT | LOCK_ILIMIT_MODE | LOCK_ILIMIT_MODE | LOCK_ILIMIT_MODE |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| LOCK_ILIMIT_MODE | LOCK_ILIMIT_DEG | LOCK_ILIMIT_DEG | LOCK_ILIMIT_DEG | LOCK_ILIMIT_DEG | LCK_RETRY | LCK_RETRY | LCK_RETRY |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| LCK_RETRY | MTR_LCK_MODE | MTR_LCK_MODE | MTR_LCK_MODE | MTR_LCK_MODE | IPD_TIMEOUT_FAULT_EN | IPD_FREQ_FAULT_EN | SATURATION_FLAGS_EN |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-19 FAULT_CONFIG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-27 | ILIMIT | R/W | 0h | Phase Current Peak Limit (% of BASE_CURRENT) 0h = 5 % 1h = 10 % 2h = 15 % 3h = 20 % 4h = 25 % 5h = 30 % 6h = 40 % 7h = 50 % 8h = 60 % 9h = 65 % Ah = 70 % Bh = 75 % Ch = 80 % Dh = 85 % Eh = 90 % Fh = 95 % |
| 26-23 | HW_LOCK_ILIMIT | R/W | 0h | Comparator based lock detection current limit (% of BASE_CURRENT) 0h = 5 % 1h = 10 % 2h = 15 % 3h = 20 % 4h = 25 % 5h = 30 % 6h = 40 % 7h = 50 % 8h = 60 % 9h = 65 % Ah = 70 % Bh = 75 % Ch = 80 % Dh = 85 % Eh = 90 % Fh = 95 % |
| 22-19 | LOCK_ILIMIT | R/W | 0h | ADC based lock detection current threshold (% of BASE_CURRENT) 0h = 5 % 1h = 10 % 2h = 15 % 3h = 20 % 4h = 25 % 5h = 30 % 6h = 40 % 7h = 50 % 8h = 60 % 9h = 65 % Ah = 70 % Bh = 75 % Ch = 80 % Dh = 85 % Eh = 90 % Fh = 95 % |
| 18-15 | LOCK_ILIMIT_MODE | R/W | 0h | Lock current Limit Mode 0h = Ilimit lock detection causes latched fault; nFAULT active; Gate driver is tristated 1h = Ilimit lock detection causes latched fault; nFAULT active; Gate driver is tristated 2h = Ilimit lock detection causes latched fault; nFAULT active; Gate driver is in low side brake mode (All low side FETs are turned ON 3h = Ilimit lock detection causes latched fault; nFAULT active; Gate driver is in low side brake mode (All low side FETs are turned ON) 4h = Fault automatically cleared after LCK_RETRY time. Number of retries limited to AUTO_RETRY_TIMES. If number of retries exceed AUTO_RETRY_TIMES, fault is latched; Gate driver is tristated; nFAULT active 5h = Fault automatically cleared after LCK_RETRY time. Number of retries limited to AUTO_RETRY_TIMES. If number of retries exceed AUTO_RETRY_TIMES, fault is latched; Gate driver is tristated; nFAULT active 6h = Fault automatically cleared for AUTO_RETRY_TIMES after LCK_RETRY time; Gate driver is in low side brake mode (All low side FETs are turned ON); nFAULT active 7h = Fault automatically cleared after LCK_RETRY time. Number of retries limited to AUTO_RETRY_TIMES. If number of retries exceed AUTO_RETRY_TIMES, fault is latched; Gate driver is in low side brake mode (All low side FETs are turned ON); nFAULT active 8h = Ilimit lock detection current limit is in report only but no action is taken; nFAULT active 9h = ILIMIT LOCK is disabled Ah = ILIMIT LOCK is disabled Bh = ILIMIT LOCK is disabled Ch = ILIMIT LOCK is disabled Dh = ILIMIT LOCK is disabled Eh = ILIMIT LOCK is disabled Fh = ILIMIT LOCK is disabled |
| 14-11 | LOCK_ILIMIT_DEG | R/W | 0h | Lock detection current limit deglitch time 0h = No deglitch 1h = 0.1 ms 2h = 0.2 ms 3h = 0.5 ms 4h = 1 ms 5h = 2.5 ms 6h = 5 ms 7h = 7.5 ms 8h = 10 ms 9h = 25 ms Ah = 50 ms Bh = 75 ms Ch = 100 ms Dh = 200 ms Eh = 500 ms Fh = 1000 ms |
| 10-7 | LCK_RETRY | R/W | 0h | Lock detection retry time 0h = 300 ms 1h = 500 ms 2h = 1 s 3h = 2 s 4h = 3 s 5h = 4 s 6h = 5 s 7h = 6 s 8h = 7 s 9h = 8 s Ah = 9 s Bh = 10 s Ch = 11 s Dh = 12 s Eh = 13 s Fh = 14 s |
| 6-3 | MTR_LCK_MODE | R/W | 0h | Motor Lock Mode 0h = Motor lock detection causes latched fault; nFAULT active; Gate driver is tristated 1h = Motor lock detection causes latched fault; nFAULT active; Gate driver is tristated 2h = Motor lock detection causes latched fault; nFAULT active; Gate driver is in low side brake mode (All low side FETs are turned ON) 3h = Motor lock detection causes latched fault; nFAULT active; Gate driver is in low side brake mode (All low side FETs are turned ON) 4h = Fault automatically cleared after LCK_RETRY time. Number of retries limited to AUTO_RETRY_TIMES. If number of retries exceed AUTO_RETRY_TIMES, fault is latched; Gate driver is tristated; nFAULT active 5h = Fault automatically cleared after LCK_RETRY time. Number of retries limited to AUTO_RETRY_TIMES. If number of retries exceed AUTO_RETRY_TIMES, fault is latched; Gate driver is tristated; nFAULT active 6h = Fault automatically cleared for AUTO_RETRY_TIMES after LCK_RETRY time; Gate driver is in low side brake mode (All low side FETs are turned ON); nFAULT active 7h = Fault automatically cleared after LCK_RETRY time. Number of retries limited to AUTO_RETRY_TIMES. If number of retries exceed AUTO_RETRY_TIMES, fault is latched; Gate driver is in low side brake mode (All low side FETs are turned ON); nFAULT active 8h = Motor lock detection current limit is in report only but no action is taken; nFAULT active 9h = Motor lock detection is disabled Ah = Motor lock detection is disabled Bh = Motor lock detection is disabled Ch = Motor lock detection is disabled Dh = Motor lock detection is disabled Eh = Motor lock detection is disabled Fh = Motor lock detection is disabled |
| 2 | IPD_TIMEOUT_FAULT_EN | R/W | 0h | IPD timeout fault Enable 0h = Disable 1h = Enable |
| 1 | IPD_FREQ_FAULT_EN | R/W | 0h | IPD frequency fault Enable 0h = Disable 1h = Enable |
| 0 | SATURATION_FLAGS_EN | R/W | 0h | Enable indication of current loop and speed loop saturation 0h = Disable 1h = Enable |


## 7.2.2 FAULT_CONFIG2 Register (Offset = 92h) \[Reset = 00000000h\]

FAULT_CONFIG2 is shown in [Figure 7-16](#FAULT_CONFIGURATION_FAULT_CONFIGURATION_FAULT_CONFIGURATION_FAULT_CONFIG2_FIGURE_TABLE) and described in [Table 7-20](#FAULT_CONFIGURATION_FAULT_CONFIGURATION_FAULT_CONFIGURATION_FAULT_CONFIG2_TABLE_TABLE).

Return to the [Summary Table](#FAULT_CONFIGURATION_FAULT_CONFIGURATION_TABLE_1_TABLE).

Register to configure fault settings2

**Figure 7-16 FAULT_CONFIG2 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | LOCK1_EN | LOCK2_EN | LOCK3_EN | LOCK_ABN_SPEED | LOCK_ABN_SPEED | LOCK_ABN_SPEED | ABNORMAL_BEMF_THR |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| ABNORMAL_BEMF_THR | ABNORMAL_BEMF_THR | NO_MTR_THR | NO_MTR_THR | NO_MTR_THR | HW_LOCK_ILIMIT_MODE | HW_LOCK_ILIMIT_MODE | HW_LOCK_ILIMIT_MODE |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| HW_LOCK_ILIMIT_MODE | HW_LOCK_ILIMIT_DEG | HW_LOCK_ILIMIT_DEG | HW_LOCK_ILIMIT_DEG | VM_UV_OV_HYS | MIN_VM_MOTOR | MIN_VM_MOTOR | MIN_VM_MOTOR |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| MIN_VM_MODE | MAX_VM_MOTOR | MAX_VM_MOTOR | MAX_VM_MOTOR | MAX_VM_MODE | AUTO_RETRY_TIMES | AUTO_RETRY_TIMES | AUTO_RETRY_TIMES |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-20 FAULT_CONFIG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30 | LOCK1_EN | R/W | 0h | Lock 1 (Abnormal Speed) Enable 0h = Disable 1h = Enable |
| 29 | LOCK2_EN | R/W | 0h | Lock 2 (Abnormal BEMF) Enable 0h = Disable 1h = Enable |
| 28 | LOCK3_EN | R/W | 0h | Lock 3 (No Motor) Enable 0h = Disable 1h = Enable |
| 27-25 | LOCK_ABN_SPEED | R/W | 0h | Abnormal speed lock threshold (% of MAX_SPEED) 0h = 130% 1h = 140% 2h = 150% 3h = 160% 4h = 170% 5h = 180% 6h = 190% 7h = 200% |
| 24-22 | ABNORMAL_BEMF_THR | R/W | 0h | Abnormal BEMF lock threshold (% of expected BEMF) Expected BEMF = MOTOR_BEMF_CONST × Estimated Speed 0h = 40% 1h = 45% 2h = 50% 3h = 55% 4h = 60% 5h = 65% 6h = 67.5% 7h = 70% |
| 21-19 | NO_MTR_THR | R/W | 0h | No motor lock threshold (% of BASE_CURRENT) 0h = 1 % 1h = 2 % 2h = 3 % 3h = 4 % 4h = 5 % 5h = 7.5 % 6h = 10 % 7h = 20 % |
| 18-15 | HW_LOCK_ILIMIT_MODE | R/W | 0h | Hardware Lock Detection current mode 0h = Hardware Ilimit lock detection causes latched fault; nFAULT active; Gate driver is tristated 1h = Hardware Ilimit lock detection causes latched fault; nFAULT active; Gate driver is tristated 2h = Hardware Ilimit lock detection causes latched fault; nFAULT active; Gate driver is in low side brake mode (All low side FETs are turned ON) 3h = Hardware Ilimit lock detection causes latched fault; nFAULT active; Gate driver is in low side brake mode (All low side FETs are turned ON) 4h = Fault automatically cleared after LCK_RETRY time. Number of retries limited to AUTO_RETRY_TIMES. If number of retries exceed AUTO_RETRY_TIMES, fault is latched; Gate driver is tristated 5h = Fault automatically cleared after LCK_RETRY time. Number of retries limited to AUTO_RETRY_TIMES. If number of retries exceed AUTO_RETRY_TIMES, fault is latched; Gate driver is tristated 6h = Fault automatically cleared after LCK_RETRY time. Number of retries limited to AUTO_RETRY_TIMES. If number of retries exceed AUTO_RETRY_TIMES, fault is latched; Gate driver is in low side brake mode (All low side FETs are turned ON) 7h = Fault automatically cleared after LCK_RETRY time. Number of retries limited to AUTO_RETRY_TIMES. If number of retries exceed AUTO_RETRY_TIMES, fault is latched; Gate driver is in low side brake mode (All low side FETs are turned ON) 8h = Hardware ILIMIT lock detection is in report only but no action is taken 9h = Hardware ILIMIT lock detection is disabled Ah = Hardware ILIMIT lock detection is disabled Bh = Hardware ILIMIT lock detection is disabled Ch = Hardware ILIMIT lock detection is disabled Dh = Hardware ILIMIT lock detection is disabled Eh = Hardware ILIMIT lock detection is disabled Fh = Hardware ILIMIT lock detection is disabled |
| 14-12 | HW_LOCK_ILIMIT_DEG | R/W | 0h | Hardware Lock Detection current limit deglitch time 0h = No Deglitch 1h = 1 us 2h = 2 us 3h = 3 us 4h = 4 us 5h = 5 us 6h = 6 us 7h = 7 us |
| 11 | VM_UV_OV_HYS | R/W | 0h | Hysteresis for DC bus under voltage and over voltage auto recovery 0h = 0.5V for UV and 1V for OV 1h = 1V for UV and 2V for OV |
| 10-8 | MIN_VM_MOTOR | R/W | 0h | Vm under voltage fault threshold - minimum DC bus voltage for running motor 0h = No Limit 1h = 5.0 V 2h = 6.0 V 3h = 7.0 V 4h = 8.0 V 5h = 10.0 V 6h = 12.0 V 7h = 15.0 V |
| 7 | MIN_VM_MODE | R/W | 0h | Vm undervoltage fault recovery mode 0h = Latch on Undervoltage 1h = Automatic clear if voltage in bounds |
| 6-4 | MAX_VM_MOTOR | R/W | 0h | Vm over voltage fault threshold - maximum DC bus voltage for running motor 0h = No Limit 1h = 10.0 V 2h = 15.0 V 3h = 22.0 V 4h = 32.0 V 5h = 40.0 V 6h = 50.0 V 7h = 60.0 V |
| 3 | MAX_VM_MODE | R/W | 0h | Vm overvoltage fault recovery mode 0h = Latch on Overvoltage 1h = Automatic clear if voltage in bounds |
| 2-0 | AUTO_RETRY_TIMES | R/W | 0h | Automatic retry attempts. This is used only if any of the fault mode is configured as "retry" 0h = No Limit 1h = 2 2h = 3 3h = 5 4h = 7 5h = 10 6h = 15 7h = 20 |


## 7.3  Hardware_Configuration Registers

[Table 7-21](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_TABLE_1_TABLE) lists the memory-mapped registers for the Hardware_Configuration registers. All register offset addresses not listed in [Table 7-21](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_TABLE_1_TABLE) should be considered as reserved locations and the register contents should not be modified.

**Table 7-21 HARDWARE_CONFIGURATION Registers**


| Offset | Acronym | Register Name | Section |
| --- | --- | --- | --- |
| A4h | PIN_CONFIG | Hardware Pin Configuration | Section 7.3.1 |
| A6h | DEVICE_CONFIG1 | Device configuration1 | Section 7.3.2 |
| A8h | DEVICE_CONFIG2 | Device configuration2 | Section 7.3.3 |
| AAh | PERI_CONFIG1 | Peripheral Configuration1 | Section 7.3.4 |
| ACh | GD_CONFIG1 | Gate Driver Configuration1 | Section 7.3.5 |
| AEh | GD_CONFIG2 | Gate Driver Configuration2 | Section 7.3.6 |


Complex bit access types are encoded to fit into small table cells. [Table 7-22](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_LEGEND_TABLE) shows the codes that are used for access types in this section.

**Table 7-22 Hardware_Configuration Access Type Codes**


| Access Type | Code | Description |
| --- | --- | --- |
| Read Type | Read Type | Read Type |
| R | R | Read |
| Write Type | Write Type | Write Type |
| W | W | Write |
| Reset or Default Value | Reset or Default Value | Reset or Default Value |
| - n |  | Value after reset or the default value |


## 7.3.1 PIN_CONFIG Register (Offset = A4h) \[Reset = 00000000h\]

PIN_CONFIG is shown in [Figure 7-17](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_PIN_CONFIG_FIGURE_TABLE) and described in [Table 7-23](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_PIN_CONFIG_TABLE_TABLE).

Return to the [Summary Table](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_TABLE_1_TABLE).

Register to configure hardware pins

**Figure 7-17 PIN_CONFIG Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | FLUX_WEAKENING_CURRENT_RATIO | FLUX_WEAKENING_CURRENT_RATIO | FLUX_WEAKENING_CURRENT_RATIO | VdcFilterDisable | LEAD_ANGLE | LEAD_ANGLE | LEAD_ANGLE |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| LEAD_ANGLE | LEAD_ANGLE | MAX_POWER | MAX_POWER | MAX_POWER | MAX_POWER | MAX_POWER | MAX_POWER |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| MAX_POWER | MAX_POWER | MAX_POWER | MAX_POWER | MAX_POWER | FG_IDLE_CONFIG | FG_IDLE_CONFIG | FG_FAULT_CONFIG |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| FG_FAULT_CONFIG | RESERVED | BRAKE_PIN_MODE | RESERVED | BRAKE_INPUT | BRAKE_INPUT | SPEED_MODE | SPEED_MODE |
| R/W-0h | R-0h | R/W-0h | R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-23 PIN_CONFIG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-28 | FLUX_WEAKENING_CURRENT_RATIO | R/W | 0h | Max value of Flux Weakening Current Reference as % of ILIMIT 0h = Only circular limit in place 1h = 80% 2h = 70% 3h = 60% 4h = 50% 5h = 40% 6h = 30% 7h = 20% |
| 27 | VdcFilterDisable | R/W | 0h | Vdc filter disable 0h = Vdc filter Enable 1h = Vdc filter Disable |
| 26-22 | LEAD_ANGLE | R/W | 0h | Lead Angle (deg) 0- 15 = 1 × Bit Value 15 - 31 = 2 × (Bit Value -15) + 15 |
| 21-11 | MAX_POWER | R/W | 0h | Maximum power (Watts) 0- 1023 = 1 × Bit Value 1024 - 2047 = 2 × (Bit Value -1024) + 1024 |
| 10-9 | FG_IDLE_CONFIG | R/W | 0h | FG Configuration During Stop 0h = FG continues and end state not defined, provided FG_CONFIG (defining FG during coasting) 1h = FG is Hi-Z (Externally Pulled up) 2h = FG is pulled to Low 3h = FG is Hi-Z (Externally Pulled up) |
| 8-7 | FG_FAULT_CONFIG | R/W | 0h | FG signal behavior during fault 0h = FG is Hi-Z (Externally Pulled up) 1h = FG is Hi-Z (Externally Pulled up) 2h = FG is pulled to Low 3h = FG active till BEMF drops below BEMF threshold defined by FG_BEMF_THR if FG_CONFIG is1 |
| 6 | RESERVED | R | 0h | Reserved |
| 5 | BRAKE_PIN_MODE | R/W | 0h | Brake Pin Mode 0h = Low side Brake 1h = Reserved |
| 4 | RESERVED | R | 0h | Reserved |
| 3-2 | BRAKE_INPUT | R/W | 0h | Brake pin override 0h = Hardware Pin BRAKE 1h = Override pin and brake according to BRAKE_PIN_MODE 2h = Override pin and do not brake / align 3h = Hardware Pin BRAKE |
| 1-0 | SPEED_MODE | R/W | 0h | Configure Reference Command mode from Speed pin 0h = Analog Mode 1h = Controlled by Duty Cycle of SPEED Input Pin 2h = Register Override mode 3h = Controlled by Frequency of SPEED Input Pin |


## 7.3.2 DEVICE_CONFIG1 Register (Offset = A6h) \[Reset = 00000000h\]

DEVICE_CONFIG1 is shown in [Figure 7-18](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_DEVICE_CONFIG1_FIGURE_TABLE) and described in [Table 7-24](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_DEVICE_CONFIG1_TABLE_TABLE).

Return to the [Summary Table](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_TABLE_1_TABLE).

Register to configure device

**Figure 7-18 DEVICE_CONFIG1 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | MTPA_EN | RESERVED | RESERVED | RESERVED | I2C_TARGET_ADDR | I2C_TARGET_ADDR | I2C_TARGET_ADDR |
| R-0h | R/W-0h | R-0h | R-0h | R-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| I2C_TARGET_ADDR | I2C_TARGET_ADDR | I2C_TARGET_ADDR | I2C_TARGET_ADDR | RESERVED | RESERVED | RESERVED | RESERVED |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| RESERVED | RESERVED | RESERVED | SLEW_RATE_I2C_PINS | SLEW_RATE_I2C_PINS | PULLUP_ENABLE | BUS_VOLT | BUS_VOLT |
| R-0h | R-0h | R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-24 DEVICE_CONFIG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30 | MTPA_EN | R/W | 0h | Enable Maximum Torque Per Ampere(MTPA) Operation 0h = MTPA disabled 1h = MTPA enabled |
| 29-28 | RESERVED | R | 0h | Reserved |
| 27 | RESERVED | R | 0h | Reserved |
| 26-20 | I2C_TARGET_ADDR | R/W | 0h | I2C target address/ID |
| 19-5 | RESERVED | R | 0h | Reserved |
| 4-3 | SLEW_RATE_I2C_PINS | R/W | 0h | Slew Rate Control for I2C Pins 0h = 4.8 mA 1h = 3.9 mA 2h = 1.86 mA 3h = 30.8 mA |
| 2 | PULLUP_ENABLE | R/W | 0h | Internal Pull up Enable for nFAULT and FG Pins 0h = Disable 1h = Enable |
| 1-0 | BUS_VOLT | R/W | 0h | Maximum DC Bus Voltage Configuration (V) 0h = 15 V 1h = 30 V 2h = 60 V 3h = Not defined |


## 7.3.3 DEVICE_CONFIG2 Register (Offset = A8h) \[Reset = 00000000h\]

DEVICE_CONFIG2 is shown in [Figure 7-19](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_DEVICE_CONFIG2_FIGURE_TABLE) and described in [Table 7-25](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_DEVICE_CONFIG2_TABLE_TABLE).

Return to the [Summary Table](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_TABLE_1_TABLE).

Register to configure device

**Figure 7-19 DEVICE_CONFIG2 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ | INPUT_MAXIMUM_FREQ |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| SLEEP_ENTRY_TIME | SLEEP_ENTRY_TIME | RESERVED | DYNAMIC_VOLTAGE_GAIN_EN | DEV_MODE | CLK_SEL | CLK_SEL | EXT_CLK_EN |
| R/W-0h | R/W-0h | R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| EXT_CLK_CONFIG | EXT_CLK_CONFIG | EXT_CLK_CONFIG | EXT_WD_EN | EXT_WD_CONFIG | EXT_WD_CONFIG | RESERVED | EXT_WD_FAULT_MODE |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-25 DEVICE_CONFIG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-16 | INPUT_MAXIMUM_FREQ | R/W | 0h | Input frequency on speed pin for control mode as "controlled by frequency speed pin input" that corresponds to 100% duty cycle Input duty cycle = Input frequency / INPUT_MAXIMUM_FREQ |
| 15-14 | SLEEP_ENTRY_TIME | R/W | 0h | Device enters sleep mode when input source is held at or below the sleep entry threshold for SLEEP_ENTRY_TIME 0h = Sleep entry when SPEED pin remains low for 50µs 1h = Sleep entry when SPEED pin remains low for 200µs 2h = Sleep entry when SPEED pin remains low for 20ms 3h = Sleep entry when SPEED pin remains low for 200ms |
| 13 | RESERVED | R | 0h | Reserved |
| 12 | DYNAMIC_VOLTAGE_GAIN_EN | R/W | 0h | Adjust voltage gain at 1ms rate for optimal voltage resolution at all voltage levels 0h = Dynamic Voltage Gain is Disabled 1h = Dynamic Voltage Gain is Enabled |
| 11 | DEV_MODE | R/W | 0h | Device mode select 0h = Standby Mode 1h = Sleep Mode |
| 10-9 | CLK_SEL | R/W | 0h | Clock Source 0h = Internal Oscillator 1h = N/A 2h = NA 3h = External Clock input |
| 8 | EXT_CLK_EN | R/W | 0h | Enable External Clock mode 0h = Disable 1h = Enable |
| 7-5 | EXT_CLK_CONFIG | R/W | 0h | External Clock Configuration 0h = 8KHz 1h = 16KHz 2h = 32KHz 3h = 64KHz 4h = 128 KHz 5h = 256 KHz 6h = 512KHz 7h = 1024 KHz |
| 4 | EXT_WD_EN | R/W | 0h | Enable external Watch Dog 0h = Disable 1h = Enable |
| 3-2 | EXT_WD_CONFIG | R/W | 0h | External Watchdog Configuration in I2C mode 0h = 1s 1h = 2s 2h = 5s 3h = 10s |
| 1 | RESERVED | R | 0h | Reserved |
| 0 | EXT_WD_FAULT_MODE | R/W | 0h | External Watchdog Fault Mode 0h = Report Only 1h = Latch with Hi-z |


## 7.3.4 PERI_CONFIG1 Register (Offset = AAh) \[Reset = 40000000h\]

PERI_CONFIG1 is shown in [Figure 7-20](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_PERI_CONFIG1_FIGURE_TABLE) and described in [Table 7-26](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_PERI_CONFIG1_TABLE_TABLE).

Return to the [Summary Table](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_TABLE_1_TABLE).

Register to peripheral1

**Figure 7-20 PERI_CONFIG1 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | SPREAD_SPECTRUM_MODULATION_DIS | DIG_DEAD_TIME | DIG_DEAD_TIME | DIG_DEAD_TIME | DIG_DEAD_TIME | BUS_CURRENT_LIMIT | BUS_CURRENT_LIMIT |
| R-0h | R/W-1h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| BUS_CURRENT_LIMIT | BUS_CURRENT_LIMIT | BUS_CURRENT_LIMIT_ENABLE | DIR_INPUT | DIR_INPUT | DIR_CHANGE_MODE | RESERVED | ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY | ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY | ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY | ACTIVE_BRAKE_MOD_INDEX_LIMIT | ACTIVE_BRAKE_MOD_INDEX_LIMIT | ACTIVE_BRAKE_MOD_INDEX_LIMIT | SPD_RANGE_SELECT | RESERVED |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| FLUX_WEAKENING_REFERENCE | FLUX_WEAKENING_REFERENCE | CTRL_MODE | CTRL_MODE | SALIENCY_PERCENTAGE | SALIENCY_PERCENTAGE | SALIENCY_PERCENTAGE | SALIENCY_PERCENTAGE |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-26 PERI_CONFIG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30 | SPREAD_SPECTRUM_MODULATION_DIS | R/W | 1h | Spread Spectrum Modulation Disable 0h = SSM is Enabled 1h = SSM is Disabled |
| 29-26 | DIG_DEAD_TIME | R/W | 0h | Dead time 0h = 0 1h = 50 ns 2h = 100 ns 3h = 150 ns 4h = 200 ns 5h = 250 ns 6h = 300 ns 7h = 350 ns 8h = 400 ns 9h = 450 ns Ah = 500 ns Bh = 600 ns Ch = 700 ns Dh = 800 ns Eh = 900 ns Fh = 1000 ns |
| 25-22 | BUS_CURRENT_LIMIT | R/W | 0h | Bus Current Limit (% of BASE_CURRENT) 0h = 5 % 1h = 10 % 2h = 15 % 3h = 20 % 4h = 25 % 5h = 30 % 6h = 40 % 7h = 50 % 8h = 60 % 9h = 65 % Ah = 70 % Bh = 75 % Ch = 80 % Dh = 85 % Eh = 90 % Fh = 95 % |
| 21 | BUS_CURRENT_LIMIT_ENABLE | R/W | 0h | Bus Current Limit Enable 0h = Disable 1h = Enable |
| 20-19 | DIR_INPUT | R/W | 0h | DIR pin override 0h = Hardware Pin DIR 1h = Override DIR pin with clockwise rotation OUTA-OUTB-OUTC 2h = Override DIR pin with counter clockwise rotation OUTA-OUTC-OUTB 3h = Hardware Pin DIR |
| 18 | DIR_CHANGE_MODE | R/W | 0h | Response to change of DIR pin status 0h = Follow motor stop options and ISD routine on detecting DIR change 1h = Change the direction through Reverse Drive while continuously driving the motor |
| 17 | RESERVED | R | 0h | Reserved |
| 16-13 | ACTIVE_BRAKE_SPEED_DELTA_LIMIT_ENTRY | R/W | 0h | Speed Reference difference(% of MAX_SPEED) to enter Active Brake state 0h = 2.5% 1h = 5% 2h = 10% 3h = 15% 4h = 20% 5h = 25% 6h = 30% 7h = 35% 8h = 40% 9h = 45% Ah = 50% Bh = 60% Ch = 70% Dh = 80% Eh = 90% Fh = 100% |
| 12-10 | ACTIVE_BRAKE_MOD_INDEX_LIMIT | R/W | 0h | Modulation Index limit below which active braking will be applied 0h = 0% 1h = 40% 2h = 50% 3h = 60% 4h = 70% 5h = 80% 6h = 90% 7h = 100% |
| 9 | SPD_RANGE_SELECT | R/W | 0h | SPEED/WAKE pin PWM input frequency selection 0h = 325Hz to 100KHz speed PWM input 1h = 10Hz to 325Hz speed PWM input |
| 8 | RESERVED | R | 0h | Reserved |
| 7-6 | FLUX_WEAKENING_REFERENCE | R/W | 0h | Modulation Index Reference to be tracked in Flux Weakening mode 0h = 70% 1h = 80% 2h = 90% 3h = 95% |
| 5-4 | CTRL_MODE | R/W | 0h | Control mode 0h = Speed Control 1h = Power Control 2h = Current Control 3h = Modulation index Control |
| 3-0 | SALIENCY_PERCENTAGE | R/W | 0h | Saliency Percentage calculated as ((Lq-Ld) × 100)/(4 × (Lq+Ld)) |


## 7.3.5 GD_CONFIG1 Register (Offset = ACh) \[Reset = 00000000h\]

GD_CONFIG1 is shown in [Figure 7-21](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_GD_CONFIG1_FIGURE_TABLE) and described in [Table 7-27](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_GD_CONFIG1_TABLE_TABLE).

Return to the [Summary Table](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_TABLE_1_TABLE).

Register to configure gated driver settings1

**Figure 7-21 GD_CONFIG1 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | BST_CHRG_TIME | BST_CHRG_TIME |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| SNS_FLT_MODE | VDS_FLT_MODE | BST_UV_MODE | GVDD_UV_MODE | RESERVED | RESERVED | RESERVED | DIS_BST_FLT |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h | R-0h | R-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| OTS_AUTO_RECOVERY | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | DIS_SNS_FLT | DIS_VDS_FLT |
| R/W-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| RESERVED | SEL_VDS_LVL | SEL_VDS_LVL | SEL_VDS_LVL | SEL_VDS_LVL | RESERVED | CSA_GAIN | CSA_GAIN |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-27 GD_CONFIG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-26 | RESERVED | R | 0h | Reserved |
| 25-24 | BST_CHRG_TIME | R/W | 0h | Bootstrap Capacitor Charging Time 0h = 0 ms 1h = 3 ms 2h = 6 ms 3h = 12 ms |
| 23 | SNS_FLT_MODE | R/W | 0h | Sense Over Current Fault Mode 0h = Latch Mode 1h = Retry after tLCK_RETRY |
| 22 | VDS_FLT_MODE | R/W | 0h | VDS Over Current Fault Mode 0h = Latch Mode 1h = Retry after tLCK_RETRY |
| 21 | BST_UV_MODE | R/W | 0h | BST Under Voltage Fault Mode 0h = Latch Mode 1h = Retry after tLCK_RETRY |
| 20 | GVDD_UV_MODE | R/W | 0h | GVDD Under Voltage Fault Mode 0h = Latch Mode 1h = Retry after tLCK_RETRY |
| 19 | RESERVED | R | 0h | Reserved |
| 18 | RESERVED | R | 0h | Reserved |
| 17 | RESERVED | R | 0h | Reserved |
| 16 | DIS_BST_FLT | R/W | 0h | Disable BST Fault 0h = Enable BST Fault 1h = Disable BST Fault |
| 15 | OTS_AUTO_RECOVERY | R/W | 0h | OTS Auto recovery 0h = OTS Latched Fault 1h = OTS Auto Recovery |
| 14-10 | RESERVED | R | 0h | Reserved |
| 9 | DIS_SNS_FLT | R/W | 0h | Disable Sense Fault 0h = Enable SNS OCP Fault 1h = Disable SNS OCP Fault |
| 8 | DIS_VDS_FLT | R/W | 0h | Disable VDS Fault 0h = Enable VDS Fault 1h = Disable VDS Fault |
| 7 | RESERVED | R | 0h | Reserved |
| 6-3 | SEL_VDS_LVL | R/W | 0h | Select the VDS_OCP Levels 0h = 0.06 V 1h = 0.12 V 2h = 0.18 V 3h = 0.24 V 4h = 0.3 V 5h = 0.36 V 6h = 0.42 V 7h = 0.48 V 8h = 0.6 V 9h = 0.8 V Ah = 1.0 V Bh = 1.2 V Ch = 1.4 V Dh = 1.6 V Eh = 1.8 V Fh = 2.0 V |
| 2 | RESERVED | R | 0h | Reserved |
| 1-0 | CSA_GAIN | R/W | 0h | Current Sense Amplifier (CSA) Gain 0h = 5 V/V 1h = 10 V/V 2h = 20 V/V 3h = 40 V/V |


## 7.3.6 GD_CONFIG2 Register (Offset = AEh) \[Reset = 00000000h\]

GD_CONFIG2 is shown in [Figure 7-22](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_GD_CONFIG2_FIGURE_TABLE) and described in [Table 7-28](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_GD_CONFIG2_TABLE_TABLE).

Return to the [Summary Table](#HARDWARE_CONFIGURATION_HARDWARE_CONFIGURATION_TABLE_1_TABLE).

Register to configure gated driver settings2

**Figure 7-22 GD_CONFIG2 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| RESERVED | BASE_CURRENT | BASE_CURRENT | BASE_CURRENT | BASE_CURRENT | BASE_CURRENT | BASE_CURRENT | BASE_CURRENT |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| BASE_CURRENT | BASE_CURRENT | BASE_CURRENT | BASE_CURRENT | BASE_CURRENT | BASE_CURRENT | BASE_CURRENT | BASE_CURRENT |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-28 GD_CONFIG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-15 | RESERVED | R | 0h | Reserved |
| 14-0 | BASE_CURRENT | R/W | 0h | Base current (15 bit value) calculated based on gain settings Base Current in Ampere = 1.5/(RSENSE × CSA_GAIN) BASE_CURRENT = Base Current in Ampere × 32768/1200 Example: for 15A, enter 15 × 32768 / 1200 |


## 7.4  Internal_Algorithm_Configuration Registers

[Table 7-29](#INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_TABLE_1_TABLE) lists the memory-mapped registers for the Internal_Algorithm_Configuration registers. All register offset addresses not listed in [Table 7-29](#INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_TABLE_1_TABLE) should be considered as reserved locations and the register contents should not be modified.

**Table 7-29 INTERNAL_ALGORITHM_CONFIGURATION Registers**


| Offset | Acronym | Register Name | Section |
| --- | --- | --- | --- |
| A0h | INT_ALGO_1 | Internal Algorithm Configuration1 | Section 7.4.1 |
| A2h | INT_ALGO_2 | Internal Algorithm Configuration2 | Section 7.4.2 |


Complex bit access types are encoded to fit into small table cells. [Table 7-30](#INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_LEGEND_TABLE) shows the codes that are used for access types in this section.

**Table 7-30 Internal_Algorithm_Configuration Access Type Codes**


| Access Type | Code | Description |
| --- | --- | --- |
| Read Type | Read Type | Read Type |
| R | R | Read |
| Write Type | Write Type | Write Type |
| W | W | Write |
| Reset or Default Value | Reset or Default Value | Reset or Default Value |
| - n |  | Value after reset or the default value |


## 7.4.1 INT_ALGO_1 Register (Offset = A0h) \[Reset = 00000000h\]

INT_ALGO_1 is shown in [Figure 7-23](#INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_INT_ALGO_1_FIGURE_TABLE) and described in [Table 7-31](#INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_INT_ALGO_1_TABLE_TABLE).

Return to the [Summary Table](#INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure internal algorithm parameters1

**Figure 7-23 INT_ALGO_1 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | ACTIVE_BRAKE_SPEED_DELTA_LIMIT_EXIT | ACTIVE_BRAKE_SPEED_DELTA_LIMIT_EXIT | SPEED_PIN_GLITCH_FILTER | SPEED_PIN_GLITCH_FILTER | FAST_ISD_EN | ISD_STOP_TIME | ISD_STOP_TIME |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| ISD_RUN_TIME | ISD_RUN_TIME | ISD_TIMEOUT | ISD_TIMEOUT | AUTO_HANDOFF_MIN_BEMF | AUTO_HANDOFF_MIN_BEMF | AUTO_HANDOFF_MIN_BEMF | RESERVED |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | MPET_OPEN_LOOP_CURR_REF | MPET_OPEN_LOOP_CURR_REF | MPET_OPEN_LOOP_CURR_REF |
| R-0h | R-0h | R-0h | R-0h | R-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| MPET_OPEN_LOOP_SPEED_REF | MPET_OPEN_LOOP_SPEED_REF | MPET_OPEN_LOOP_SLEW_RATE | MPET_OPEN_LOOP_SLEW_RATE | MPET_OPEN_LOOP_SLEW_RATE | REV_DRV_OPEN_LOOP_DEC | REV_DRV_OPEN_LOOP_DEC | REV_DRV_OPEN_LOOP_DEC |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-31 INT_ALGO_1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-29 | ACTIVE_BRAKE_SPEED_DELTA_LIMIT_EXIT | R/W | 0h | Speed Reference difference (% of MAX_SPEED) to come out of Active Brake state 0h = 2.5% 1h = 5% 2h = 7.5% 3h = 10% |
| 28-27 | SPEED_PIN_GLITCH_FILTER | R/W | 0h | Glitch filter applied on SPEED/WAKE pin in PWM and Frequency input mode 0h = No Glitch Filter 1h = 0.2 µs 2h = 0.5 µs 3h = 1.0 µs |
| 26 | FAST_ISD_EN | R/W | 0h | Enable fast speed detection during ISD 0h = Disable Fast ISD 1h = Enable Fast ISD |
| 25-24 | ISD_STOP_TIME | R/W | 0h | Persistence time for declaring motor has stopped during ISD 0h = 1 ms 1h = 5 ms 2h = 50 ms 3h = 100 ms |
| 23-22 | ISD_RUN_TIME | R/W | 0h | Persistence time for declaring motor is running during ISD 0h = 1 ms 1h = 5 ms 2h = 50 ms 3h = 100 ms |
| 21-20 | ISD_TIMEOUT | R/W | 0h | Timeout in case ISD is unable to reliably detect speed or direction of the motor 0h = 500ms 1h = 750 ms 2h = 1000 ms 3h = 2000 ms |
| 19-17 | AUTO_HANDOFF_MIN_BEMF | R/W | 0h | Minimum BEMF for handoff. Applicable when auto handoff is enabled. 0h = 0 mV 1h = 100 mV 2h = 200 mV 3h = 500 mV 4h = 1000 mV 5h = 2000 mV 6h = 2500 mV 7h = 3000 mV |
| 16-15 | RESERVED | R | 0h | Reserved |
| 14-13 | RESERVED | R | 0h | Reserved |
| 12-11 | RESERVED | R | 0h | Reserved |
| 10-8 | MPET_OPEN_LOOP_CURR_REF | R/W | 0h | Open Loop Current Reference for MPET (% of BASE_CURRENT) 0h = 10% 1h = 20% 2h = 30% 3h = 40% 4h = 50% 5h = 60% 6h = 70% 7h = 80% |
| 7-6 | MPET_OPEN_LOOP_SPEED_REF | R/W | 0h | Open Loop Speed Reference for MPET (% of MAXIMUM_SPEED) 0h = 15% 1h = 25% 2h = 35% 3h = 50% |
| 5-3 | MPET_OPEN_LOOP_SLEW_RATE | R/W | 0h | Open loop acceleration for MPET 0h = 0.1 Hz/s 1h = 0.5 Hz/s 2h = 1 Hz/s 3h = 2 Hz/s 4h = 3 Hz/s 5h = 5 Hz/s 6h = 10 Hz/s 7h = 20 Hz/s |
| 2-0 | REV_DRV_OPEN_LOOP_DEC | R/W | 0h | % of open loop acceleration to be applied during open loop deceleration in reverse drive 0h = 50% 1h = 60% 2h = 70% 3h = 80% 4h = 90% 5h = 100% 6h = 125% 7h = 150% |


## 7.4.2 INT_ALGO_2 Register (Offset = A2h) \[Reset = 00000000h\]

INT_ALGO_2 is shown in [Figure 7-24](#INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_INT_ALGO_2_FIGURE_TABLE) and described in [Table 7-32](#INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_INT_ALGO_2_TABLE_TABLE).

Return to the [Summary Table](#INTERNAL_ALGORITHM_CONFIGURATION_INTERNAL_ALGORITHM_CONFIGURATION_TABLE_1_TABLE).

Register to configure internal algorithm parameters2

**Figure 7-24 INT_ALGO_2 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | FLUX_WEAKENING_KP | FLUX_WEAKENING_KP | FLUX_WEAKENING_KP | FLUX_WEAKENING_KP | FLUX_WEAKENING_KP | FLUX_WEAKENING_KP | FLUX_WEAKENING_KP |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| FLUX_WEAKENING_KP | FLUX_WEAKENING_KP | FLUX_WEAKENING_KP | FLUX_WEAKENING_KI | FLUX_WEAKENING_KI | FLUX_WEAKENING_KI | FLUX_WEAKENING_KI | FLUX_WEAKENING_KI |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| FLUX_WEAKENING_KI | FLUX_WEAKENING_KI | FLUX_WEAKENING_KI | FLUX_WEAKENING_KI | FLUX_WEAKENING_KI | FLUX_WEAKENING_EN | CL_SLOW_ACC | CL_SLOW_ACC |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| CL_SLOW_ACC | CL_SLOW_ACC | ACTIVE_BRAKE_BUS_CURRENT_SLEW_RATE | ACTIVE_BRAKE_BUS_CURRENT_SLEW_RATE | ACTIVE_BRAKE_BUS_CURRENT_SLEW_RATE | RESERVED | MPET_KE_MEAS_PARAMETER_SELECT | IPD_HIGH_RESOLUTION_EN |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 7-32 INT_ALGO_2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-21 | FLUX_WEAKENING_KP | R/W | 0h | 10-bit value for flux weakening Kp FLUX_WEAKENING_KP is divided in 2 sections SCALE(9:8) and VALUE(7:0) Kp = 0.1 × VALUE / 10^SCALE. |
| 20-11 | FLUX_WEAKENING_KI | R/W | 0h | 10-bit value for flux weakening Ki FLUX_WEAKENING_KI is divided in 2 sections SCALE(9:8) and VALUE(7:0) Ki = 10.0 × VALUE / 10^SCALE). |
| 10 | FLUX_WEAKENING_EN | R/W | 0h | Flux Weakening Enable 0h = Flux Weakening Disabled 1h = Flux Weakening Enabled |
| 9-6 | CL_SLOW_ACC | R/W | 0h | Close loop acceleration when estimator is not yet fully aligned just after transition to closed loop Speed Mode ( Hz/s) Power Mode (W/s) Current Mode (A/s) Voltage Mode(0.1% modulation index per second) 0h = 0.1 1h = 1 2h = 2 3h = 3 4h = 5 5h = 10 6h = 20 7h = 30 8h = 40 9h = 50 Ah = 100 Bh = 200 Ch = 500 Dh = 750 Eh = 1000 Fh = 2000 |
| 5-3 | ACTIVE_BRAKE_BUS_CURRENT_SLEW_RATE | R/W | 0h | Bus Current slew rate during active braking (A/s) 0h = 10 A/s 1h = 50 A/s 2h = 100 A/s 3h = 250 A/s 4h = 500 A/s 5h = 1000 A/s 6h = 5000 A/s 7h = No Limit |
| 2 | RESERVED | R | 0h | Reserved |
| 1 | MPET_KE_MEAS_PARAMETER_SELECT | R/W | 0h | MPET parameters selection 0h = Configured parameters for normal motor operation (OL_ACC_A1, OL_ACC_A2 for slew rate, OL_ILIMIT for current reference and OPN_CL_HANDOFF_THR for speed reference). 1h = MPET specific parameters (MPET_OPEN_LOOP_SLEW_RATE for slew rate, MPET_OPEN_LOOP_CURR_REF for current reference, MPET_OPEN_LOOP_SPEED_REF for speed reference). |
| 0 | IPD_HIGH_RESOLUTION_EN | R/W | 0h | IPD high resolution enable 0h = Disable 1h = Enable |


# 8  RAM (Volatile) Register Map


## 8.1  Fault_Status Registers

[Table 8-1](#FAULT_STATUS_FAULT_STATUS_TABLE_1_TABLE) lists the memory-mapped registers for the Fault_Status registers. All register offset addresses not listed in [Table 8-1](#FAULT_STATUS_FAULT_STATUS_TABLE_1_TABLE) should be considered as reserved locations and the register contents should not be modified.

**Table 8-1 FAULT_STATUS Registers**


| Offset | Acronym | Register Name | Section |
| --- | --- | --- | --- |
| E0h | GATE_DRIVER_FAULT_STATUS | Fault Status Register | Section 8.1.1 |
| E2h | CONTROLLER_FAULT_STATUS | Fault Status Register | Section 8.1.2 |


Complex bit access types are encoded to fit into small table cells. [Table 8-2](#FAULT_STATUS_FAULT_STATUS_LEGEND_TABLE) shows the codes that are used for access types in this section.

**Table 8-2 Fault_Status Access Type Codes**


| Access Type | Code | Description |
| --- | --- | --- |
| Read Type | Read Type | Read Type |
| R | R | Read |
| Reset or Default Value | Reset or Default Value | Reset or Default Value |
| - n |  | Value after reset or the default value |


## 8.1.1 GATE_DRIVER_FAULT_STATUS Register (Offset = E0h) \[Reset = 00000000h\]

GATE_DRIVER_FAULT_STATUS is shown in [Figure 8-1](#FAULT_STATUS_FAULT_STATUS_FAULT_STATUS_GATE_DRIVER_FAULT_STATUS_FIGURE_TABLE) and described in [Table 8-3](#FAULT_STATUS_FAULT_STATUS_FAULT_STATUS_GATE_DRIVER_FAULT_STATUS_TABLE_TABLE).

Return to the [Summary Table](#FAULT_STATUS_FAULT_STATUS_TABLE_1_TABLE).

Status of various gate driver faults

**Figure 8-1 GATE_DRIVER_FAULT_STATUS Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DRIVER_FAULT | RESERVED | OTS_FAULT | OCP_VDS_FAULT | OCP_SNS_FAULT | BST_UV_FAULT | GVDD_UV_FLT | DRV_OFF |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 8-3 GATE_DRIVER_FAULT_STATUS Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | DRIVER_FAULT | R | 0h | Logic OR of driver fault registers 0h = No Gate Driver fault condition is detected 1h = Gate Driver fault condition is detected |
| 30 | RESERVED | R | 0h | Reserved |
| 29 | OTS_FAULT | R | 0h | Over Temperature Fault 0h = No overtemperature warning / shutdown is detected 1h = Overtemperature warning / shutdown is detected |
| 28 | OCP_VDS_FAULT | R | 0h | Overcurrent VDS Fault status 0h = No overcurrent condition is detected 1h = Overcurrent condition is detected |
| 27 | OCP_SNS_FAULT | R | 0h | Overcurrent Sense Fault status 0h = No overcurrent condition is detected 1h = Overcurrent condition is detected |
| 26 | BST_UV_FAULT | R | 0h | Boot Strap UV protection status 0h = No BST undervoltage condition is detected 1h = BST undervoltage condition is detected |
| 25 | GVDD_UV_FLT | R | 0h | GVDD UV fault status 0h = No GVDD undervoltage condition is detected 1h = GVDD undervoltage condition is detected |
| 24 | DRV_OFF | R | 0h | DRVOFF status 0h = DRVOFF is disabled 1h = DRVOFF is enabled (pulled high) |
| 23-0 | RESERVED | R | 0h | Reserved |


## 8.1.2 CONTROLLER_FAULT_STATUS Register (Offset = E2h) \[Reset = 00000000h\]

CONTROLLER_FAULT_STATUS is shown in [Figure 8-2](#FAULT_STATUS_FAULT_STATUS_FAULT_STATUS_CONTROLLER_FAULT_STATUS_FIGURE_TABLE) and described in [Table 8-4](#FAULT_STATUS_FAULT_STATUS_FAULT_STATUS_CONTROLLER_FAULT_STATUS_TABLE_TABLE).

Return to the [Summary Table](#FAULT_STATUS_FAULT_STATUS_TABLE_1_TABLE).

Status of various controller faults

**Figure 8-2 CONTROLLER_FAULT_STATUS Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CONTROLLER_FAULT | RESERVED | IPD_FREQ_FAULT | IPD_T1_FAULT | RESERVED | BUS_CURRENT_LIMIT_STATUS | RESERVED | MPET_BEMF_FAULT |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| ABN_SPEED | ABN_BEMF | NO_MTR | MTR_LCK | LOCK_ILIMIT | HW_LOCK_ILIMIT | DCBUS_UNDER_VOLTAGE | DCBUS_OVER_VOLTAGE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| SPEED_LOOP_SATURATION | CURRENT_LOOP_SATURATION | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| RESERVED | RESERVED | RESERVED | RESERVED | WATCHDOG_FAULT | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 8-4 CONTROLLER_FAULT_STATUS Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | CONTROLLER_FAULT | R | 0h | Logic OR of Controller FAULT status registers |
| 30 | RESERVED | R | 0h | Reserved |
| 29 | IPD_FREQ_FAULT | R | 0h | Indicates IPD frequency fault |
| 28 | IPD_T1_FAULT | R | 0h | Indicates IPD T1 fault |
| 27 | RESERVED | R | 0h | Reserved |
| 26 | BUS_CURRENT_LIMIT_STATUS | R | 0h | Indicates status of Bus Current limit |
| 25 | RESERVED | R | 0h | Reserved |
| 24 | MPET_BEMF_FAULT | R | 0h | Indicates error during MPET BEMF constant measurement |
| 23 | ABN_SPEED | R | 0h | Indicates Abnormal speed motor lock fault |
| 22 | ABN_BEMF | R | 0h | Indicates Abnormal BEMF or locked rotor fault |
| 21 | NO_MTR | R | 0h | Indicates No Motor (loss of phase) fault |
| 20 | MTR_LCK | R | 0h | Indicates when one of the motor lock(ABN_SPEED or ABN_BEMF or NO_MTR) fault is triggered |
| 19 | LOCK_ILIMIT | R | 0h | Indicates ADC based over current fault |
| 18 | HW_LOCK_ILIMIT | R | 0h | Indicates Hardware based over current fault |
| 17 | DCBUS_UNDER_VOLTAGE | R | 0h | Indicates configurable under voltage fault on VM |
| 16 | DCBUS_OVER_VOLTAGE | R | 0h | Indicates configurable over voltage fault on VM |
| 15 | SPEED_LOOP_SATURATION | R | 0h | Indicates speed loop saturation |
| 14 | CURRENT_LOOP_SATURATION | R | 0h | Indicates current loop saturation |
| 13-4 | RESERVED | R | 0h | Reserved |
| 3 | WATCHDOG_FAULT | R | 0h | Indicates watchdog timeout fault |
| 2 | RESERVED | R | 0h | Reserved |
| 1 | RESERVED | R | 0h | Reserved |
| 0 | RESERVED | R | 0h | Reserved |


## 8.2  Algorithm_Control Registers

[Table 8-5](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_TABLE_1_TABLE) lists the memory-mapped registers for the Algorithm_Control registers. All register offset addresses not listed in [Table 8-5](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_TABLE_1_TABLE) should be considered as reserved locations and the register contents should not be modified.

**Table 8-5 ALGORITHM_CONTROL Registers**


| Offset | Acronym | Register Name | Section |
| --- | --- | --- | --- |
| ECh | ALGO_DEBUG1 | Algorithm Control Register | Section 8.2.1 |
| EEh | ALGO_DEBUG2 | Algorithm Control Register | Section 8.2.2 |
| F0h | CURRENT_PI | Current PI Controller used | Section 8.2.3 |
| F2h | SPEED_PI | Speed PI controller used | Section 8.2.4 |


Complex bit access types are encoded to fit into small table cells. [Table 8-6](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_LEGEND_TABLE) shows the codes that are used for access types in this section.

**Table 8-6 Algorithm_Control Access Type Codes**


| Access Type | Code | Description |
| --- | --- | --- |
| Read Type | Read Type | Read Type |
| R | R | Read |
| Write Type | Write Type | Write Type |
| W | W | Write |
| Reset or Default Value | Reset or Default Value | Reset or Default Value |
| - n |  | Value after reset or the default value |


## 8.2.1 ALGO_DEBUG1 Register (Offset = ECh) \[Reset = 00000000h\]

ALGO_DEBUG1 is shown in [Figure 8-3](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGO_DEBUG1_FIGURE_TABLE) and described in [Table 8-7](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGO_DEBUG1_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_TABLE_1_TABLE).

Algorithm control register for debug

**Figure 8-3 ALGO_DEBUG1 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SPEED_OVER_RIDE | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL | DIGITAL_SPEED_CTRL |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| CLOSED_LOOP_DIS | FORCE_ALIGN_EN | FORCE_SLOW_FIRST_CYCLE_EN | FORCE_IPD_EN | FORCE_ISD_EN | FORCE_ALIGN_ANGLE_SRC_SEL | RESERVED | RESERVED |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 8-7 ALGO_DEBUG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | SPEED_OVER_RIDE | R/W | 0h | Use to control the reference input mode. If OVERRIDE = 0x1, speed command can be written by the user through I2C interface irrespective of SPEED_MODE setting. 0h = SPEED_CMD using Analog/PWM/Frequency mode 1h = SPEED_CMD using DIGITAL_SPEED_CTRL |
| 30-16 | DIGITAL_SPEED_CTRL | R/W | 0h | Reference input when OVERRIDE is set 0x1 or SPEED_MODE is set to 0x2. Reference input = (DIGITAL_SPEED_CTRL/32768 *100)% |
| 15 | CLOSED_LOOP_DIS | R/W | 0h | Use to disable closed loop operation 0h = Enable Closed Loop 1h = Disable Closed loop, motor commutation in open loop |
| 14 | FORCE_ALIGN_EN | R/W | 0h | Enable force align state 0h = Disable force align 1h = Enable force align state, device stops proceeding to next state after align state if MTR_STARTUP is selected as ALIGN or DOUBLE ALIGN |
| 13 | FORCE_SLOW_FIRST_CYCLE_EN | R/W | 0h | Force Slow First Cycle Enable 0h = Disable Force Slow First Cycle 1h = Enable Force Slow First Cycle state, device stops proceeding to next state after slow first cycle state if MTR_STARTUP is selected as SLOW FIRST CYCLE |
| 12 | FORCE_IPD_EN | R/W | 0h | Force IPD Enable 0h = Disable Force IPD 1h = Enable Force IPD state, device stops proceeding to next state after IPD state if MTR_STARTUP is selected as IPD |
| 11 | FORCE_ISD_EN | R/W | 0h | Force ISD enable 0h = Disable Force ISD 1h = Enable Force ISD state, device stays in ISD state if ISD_EN is set |
| 10 | FORCE_ALIGN_ANGLE_SRC_SEL | R/W | 0h | Force Align Angle State Source Select 0h = Force Align Angle defined by ALIGN_ANGLE 1h = Force Align Angle defined by FORCED_ALIGN_ANGLE |
| 9-0 | RESERVED | R | 0h | Reserved |


## 8.2.2 ALGO_DEBUG2 Register (Offset = EEh) \[Reset = 00000000h\]

ALGO_DEBUG2 is shown in [Figure 8-4](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGO_DEBUG2_FIGURE_TABLE) and described in [Table 8-8](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGO_DEBUG2_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_TABLE_1_TABLE).

Algorithm control register for debug

**Figure 8-4 ALGO_DEBUG2 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | FORCE_RECIRCULATE_STOP_SECTOR | FORCE_RECIRCULATE_STOP_SECTOR | FORCE_RECIRCULATE_STOP_SECTOR | FORCE_RECIRCULATE_STOP_EN | CURRENT_LOOP_DIS | FORCE_VD_CURRENT_LOOP_DIS | FORCE_VD_CURRENT_LOOP_DIS |
| R-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| FORCE_VD_CURRENT_LOOP_DIS | FORCE_VD_CURRENT_LOOP_DIS | FORCE_VD_CURRENT_LOOP_DIS | FORCE_VD_CURRENT_LOOP_DIS | FORCE_VD_CURRENT_LOOP_DIS | FORCE_VD_CURRENT_LOOP_DIS | FORCE_VD_CURRENT_LOOP_DIS | FORCE_VD_CURRENT_LOOP_DIS |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| FORCE_VQ_CURRENT_LOOP_DIS | FORCE_VQ_CURRENT_LOOP_DIS | FORCE_VQ_CURRENT_LOOP_DIS | FORCE_VQ_CURRENT_LOOP_DIS | FORCE_VQ_CURRENT_LOOP_DIS | FORCE_VQ_CURRENT_LOOP_DIS | FORCE_VQ_CURRENT_LOOP_DIS | FORCE_VQ_CURRENT_LOOP_DIS |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| FORCE_VQ_CURRENT_LOOP_DIS | FORCE_VQ_CURRENT_LOOP_DIS | MPET_CMD | RESERVED | RESERVED | MPET_KE | MPET_MECH | MPET_WRITE_SHADOW |
| R/W-0h | R/W-0h | W-0h | R-0h | R-0h | W-0h | W-0h | W-0h |
|  |  |  |  |  |  |  |  |


**Table 8-8 ALGO_DEBUG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30-28 | FORCE_RECIRCULATE_STOP_SECTOR | R/W | 0h | Select the specific sector for recirculation stop if FORCE_RECIRCULATE_STOP_EN is set to 0x1 0h = The last sector before stop condition 1h = Sector1 2h = Sector2 3h = Sector3 4h = Sector4 5h = Sector5 6h = Sector6 7h = The last sector before stop condition |
| 27 | FORCE_RECIRCULATE_STOP_EN | R/W | 0h | Enable force recirculate stop 0h = Enable Force recirculate stop 1h = Disable Force recirculate stop |
| 26 | CURRENT_LOOP_DIS | R/W | 0h | Use to control the FORCE_VD_CURRENT_LOOP_DIS and FORCE_VQ_CURRENT_LOOP_DIS. If CURRENT_LOOP_DIS = 0x1, Current loop and speed loop are disabled 0h = Enable Current Loop 1h = Disable Current Loop |
| 25-16 | FORCE_VD_CURRENT_LOOP_DIS | R/W | 0h | Sets Vd when current loop and speed loop are disabled If CURRENT_LOOP_DIS = 0b1, then Vd is control using FORCE_VD_CURRENT_LOOP_DIS mdRef = (FORCE_VD_CURRENT_LOOP_DIS /500) if FORCE_VD_CURRENT_LOOP_DIS < 500 (FORCE_VD_CURRENT_LOOP_DIS - 1024)/500 if FORCE_VD_CURRENT_LOOP_DIS > 524 Valid values: 0 to 500 and 524 to 1024 |
| 15-6 | FORCE_VQ_CURRENT_LOOP_DIS | R/W | 0h | Sets Vq when current loop speed loop are disabled If CURRENT_LOOP_DIS = 0b1, then Vq is control using FORCE_VQ_CURRENT_LOOP_DIS mqRef = (FORCE_VQ_CURRENT_LOOP_DIS /500) if FORCE_VQ_CURRENT_LOOP_DIS < 500 (FORCE_VQ_CURRENT_LOOP_DIS - 1024)/500 if FORCE_VQ_CURRENT_LOOP_DIS > 512 Valid values: 0 to 500 and 512 to 1000 |
| 5 | MPET_CMD | W | 0h | Initiates motor parameter measurement (MPET) routine when set to 0x1 |
| 4 | RESERVED | R | 0h | Reserved |
| 3 | RESERVED | R | 0h | Reserved |
| 2 | MPET_KE | W | 0h | Enables motor BEMF constant measurement during motor parameter measurement routine (MPET) 0h = Disables Motor BEMF constant measurement during motor parameter measurement routine 1h = Enable Motor BEMF constant measurement during motor parameter measurement routine |
| 1 | MPET_MECH | W | 0h | Enables motor mechanical parameter measurement during motor parameter measurement routine (MPET) 0h = Disables Motor mechanical parameter measurement during motor parameter measurement routine 1h = Enable Motor mechanical parameter measurement during motor parameter measurement routine |
| 0 | MPET_WRITE_SHADOW | W | 0h | Write measured parameters to shadow register when set to 1 |


## 8.2.3 CURRENT_PI Register (Offset = F0h) \[Reset = 00000000h\]

CURRENT_PI is shown in [Figure 8-5](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGORITHM_CONTROL_CURRENT_PI_FIGURE_TABLE) and described in [Table 8-9](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGORITHM_CONTROL_CURRENT_PI_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_TABLE_1_TABLE).

Current PI controller used

**Figure 8-5 CURRENT_PI Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KI | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP | CURRENT_LOOP_KP |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-9 CURRENT_PI Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-16 | CURRENT_LOOP_KI | R | 0h | 10 bit value for current loop Ki Same Scaling as CURR_LOOP_KI |
| 15-0 | CURRENT_LOOP_KP | R | 0h | 10 bit value for current loop Kp Same Scaling as CURR_LOOP_KP |


## 8.2.4 SPEED_PI Register (Offset = F2h) \[Reset = 00000000h\]

SPEED_PI is shown in [Figure 8-6](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGORITHM_CONTROL_SPEED_PI_FIGURE_TABLE) and described in [Table 8-10](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_ALGORITHM_CONTROL_SPEED_PI_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_CONTROL_ALGORITHM_CONTROL_TABLE_1_TABLE).

Speed PI controller used

**Figure 8-6 SPEED_PI Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KI | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP | SPEED_LOOP_KP |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-10 SPEED_PI Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-16 | SPEED_LOOP_KI | R | 0h | 10 bit value for Speed loop Ki Same Scaling as SPD_LOOP_KI |
| 15-0 | SPEED_LOOP_KP | R | 0h | 10 bit value for Speed loop Kp Same Scaling as SPD_LOOP_KP |


## 8.3  System_Status Registers

[Table 8-11](#SYSTEM_STATUS_SYSTEM_STATUS_TABLE_1_TABLE) lists the memory-mapped registers for the System_Status registers. All register offset addresses not listed in [Table 8-11](#SYSTEM_STATUS_SYSTEM_STATUS_TABLE_1_TABLE) should be considered as reserved locations and the register contents should not be modified.

**Table 8-11 SYSTEM_STATUS Registers**


| Offset | Acronym | Register Name | Section |
| --- | --- | --- | --- |
| E4h | ALGO_STATUS | System Status Register | Section 8.3.1 |
| E6h | MTR_PARAMS | System Status Register | Section 8.3.2 |
| E8h | ALGO_STATUS_MPET | System Status Register | Section 8.3.3 |


Complex bit access types are encoded to fit into small table cells. [Table 8-12](#SYSTEM_STATUS_SYSTEM_STATUS_LEGEND_TABLE) shows the codes that are used for access types in this section.

**Table 8-12 System_Status Access Type Codes**


| Access Type | Code | Description |
| --- | --- | --- |
| Read Type | Read Type | Read Type |
| R | R | Read |
| Reset or Default Value | Reset or Default Value | Reset or Default Value |
| - n |  | Value after reset or the default value |


## 8.3.1 ALGO_STATUS Register (Offset = E4h) \[Reset = 00000000h\]

ALGO_STATUS is shown in [Figure 8-7](#SYSTEM_STATUS_SYSTEM_STATUS_SYSTEM_STATUS_ALGO_STATUS_FIGURE_TABLE) and described in [Table 8-13](#SYSTEM_STATUS_SYSTEM_STATUS_SYSTEM_STATUS_ALGO_STATUS_TABLE_TABLE).

Return to the [Summary Table](#SYSTEM_STATUS_SYSTEM_STATUS_TABLE_1_TABLE).

Status of various system and algorithm parameters

**Figure 8-7 ALGO_STATUS Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| VOLT_MAG | VOLT_MAG | VOLT_MAG | VOLT_MAG | VOLT_MAG | VOLT_MAG | VOLT_MAG | VOLT_MAG |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| VOLT_MAG | VOLT_MAG | VOLT_MAG | VOLT_MAG | VOLT_MAG | VOLT_MAG | VOLT_MAG | VOLT_MAG |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| DUTY_CMD | DUTY_CMD | DUTY_CMD | DUTY_CMD | DUTY_CMD | DUTY_CMD | DUTY_CMD | DUTY_CMD |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| DUTY_CMD | DUTY_CMD | DUTY_CMD | DUTY_CMD | RESERVED | SYS_ENABLE_FLAG | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 8-13 ALGO_STATUS Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-16 | VOLT_MAG | R | 0h | 16-bit value indicating applied Modulation index Modulation index applied = VOLT_MAG * 100 / 32768 % |
| 15-4 | DUTY_CMD | R | 0h | 12-bit value indicating input duty command in PWM/Analog/Freq mode DUTY_CMD (%) = (DUTY_CMD/4095 * 100)%. |
| 3 | RESERVED | R | 0h | Reserved |
| 2 | SYS_ENABLE_FLAG | R | 0h | 1 indicates GUI can control the register 0 indicates GUI is still copying default parameters from shadow memory |
| 1-0 | RESERVED | R | 0h | Reserved |


## 8.3.2 MTR_PARAMS Register (Offset = E6h) \[Reset = 00000000h\]

MTR_PARAMS is shown in [Figure 8-8](#SYSTEM_STATUS_SYSTEM_STATUS_SYSTEM_STATUS_MTR_PARAMS_FIGURE_TABLE) and described in [Table 8-14](#SYSTEM_STATUS_SYSTEM_STATUS_SYSTEM_STATUS_MTR_PARAMS_TABLE_TABLE).

Return to the [Summary Table](#SYSTEM_STATUS_SYSTEM_STATUS_TABLE_1_TABLE).

Status of various motor parameters

**Figure 8-8 MTR_PARAMS Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST | MOTOR_BEMF_CONST |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-14 MTR_PARAMS Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-24 | RESERVED | R | 0h | Reserved |
| 23-16 | MOTOR_BEMF_CONST | R | 0h | 8-bit value indicating MPET measured BEMF constant |
| 15-8 | RESERVED | R | 0h | Reserved |
| 7-0 | RESERVED | R | 0h | Reserved |


## 8.3.3 ALGO_STATUS_MPET Register (Offset = E8h) \[Reset = 00000000h\]

ALGO_STATUS_MPET is shown in [Figure 8-9](#SYSTEM_STATUS_SYSTEM_STATUS_SYSTEM_STATUS_ALGO_STATUS_MPET_FIGURE_TABLE) and described in [Table 8-15](#SYSTEM_STATUS_SYSTEM_STATUS_SYSTEM_STATUS_ALGO_STATUS_MPET_TABLE_TABLE).

Return to the [Summary Table](#SYSTEM_STATUS_SYSTEM_STATUS_TABLE_1_TABLE).

Status of various MPET parameters

**Figure 8-9 ALGO_STATUS_MPET Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RESERVED | RESERVED | MPET_KE_STATUS | MPET_MECH_STATUS | MPET_PWM_FREQ | MPET_PWM_FREQ | MPET_PWM_FREQ | MPET_PWM_FREQ |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED | RESERVED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 8-15 ALGO_STATUS_MPET Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | RESERVED | R | 0h | Reserved |
| 30 | RESERVED | R | 0h | Reserved |
| 29 | MPET_KE_STATUS | R | 0h | Indicates status of BEMF constant measurement 0h = Measurement of motor BEMF constant during MPET routine is not completed if BEMF constant measurement is initiated during MPET 1h = Measurement of motor BEMF constant during MPET routine is completed |
| 28 | MPET_MECH_STATUS | R | 0h | Indicates status of mechanical parameter measurement 0h = Auto Calculation of Speed loop Kp, Ki values during MPET routine is not completed if mechanical parameters measurement(speed loop kp,ki values) is initiated during MPET 1h = Auto Calculation of Speed loop Kp, Ki values during MPET routine is completed |
| 27-24 | MPET_PWM_FREQ | R | 0h | 4-bit value indicating MPET recommended PWM switching frequency based on electrical time constant. Follows same enum list as PWM_FREQ_OUT |
| 23-0 | RESERVED | R | 0h | Reserved |


## 8.4  Device_Control Registers

[Table 8-16](#DEVICE_CONTROL_DEVICE_CONTROL_TABLE_1_TABLE) lists the memory-mapped registers for the Device_Control registers. All register offset addresses not listed in [Table 8-16](#DEVICE_CONTROL_DEVICE_CONTROL_TABLE_1_TABLE) should be considered as reserved locations and the register contents should not be modified.

**Table 8-16 DEVICE_CONTROL Registers**


| Offset | Acronym | Register Name | Section |
| --- | --- | --- | --- |
| EAh | ALGO_CTRL1 | Device Control Register | Section 8.4.1 |


Complex bit access types are encoded to fit into small table cells. [Table 8-17](#DEVICE_CONTROL_DEVICE_CONTROL_LEGEND_TABLE) shows the codes that are used for access types in this section.

**Table 8-17 Device_Control Access Type Codes**


| Access Type | Code | Description |
| --- | --- | --- |
| Read Type | Read Type | Read Type |
| R | R | Read |
| Write Type | Write Type | Write Type |
| W | W | Write |
| Reset or Default Value | Reset or Default Value | Reset or Default Value |
| - n |  | Value after reset or the default value |


## 8.4.1 ALGO_CTRL1 Register (Offset = EAh) \[Reset = 00000000h\]

ALGO_CTRL1 is shown in [Figure 8-10](#DEVICE_CONTROL_DEVICE_CONTROL_DEVICE_CONTROL_ALGO_CTRL1_FIGURE_TABLE) and described in [Table 8-18](#DEVICE_CONTROL_DEVICE_CONTROL_DEVICE_CONTROL_ALGO_CTRL1_TABLE_TABLE).

Return to the [Summary Table](#DEVICE_CONTROL_DEVICE_CONTROL_TABLE_1_TABLE).

Control settings

**Figure 8-10 ALGO_CTRL1 Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EEPROM_WRT | EEPROM_READ | CLR_FLT | CLR_FLT_RETRY_COUNT | EEPROM_WRITE_ACCESS_KEY | EEPROM_WRITE_ACCESS_KEY | EEPROM_WRITE_ACCESS_KEY | EEPROM_WRITE_ACCESS_KEY |
| R/W-0h | R/W-0h | W-0h | W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| EEPROM_WRITE_ACCESS_KEY | EEPROM_WRITE_ACCESS_KEY | EEPROM_WRITE_ACCESS_KEY | EEPROM_WRITE_ACCESS_KEY | FORCED_ALIGN_ANGLE | FORCED_ALIGN_ANGLE | FORCED_ALIGN_ANGLE | FORCED_ALIGN_ANGLE |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| FORCED_ALIGN_ANGLE | FORCED_ALIGN_ANGLE | FORCED_ALIGN_ANGLE | FORCED_ALIGN_ANGLE | FORCED_ALIGN_ANGLE | WATCHDOG_TICKLE | FLUX_MODE_REFERENCE | FLUX_MODE_REFERENCE |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| FLUX_MODE_REFERENCE | FLUX_MODE_REFERENCE | FLUX_MODE_REFERENCE | FLUX_MODE_REFERENCE | FLUX_MODE_REFERENCE | FLUX_MODE_REFERENCE | FLUX_MODE_REFERENCE | FLUX_MODE_REFERENCE |
| R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h | R/W-0h |
|  |  |  |  |  |  |  |  |


**Table 8-18 ALGO_CTRL1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31 | EEPROM_WRT | R/W | 0h | Write the configuration from RAM/shadow to EEPROM |
| 30 | EEPROM_READ | R/W | 0h | Read the default configuration from EEPROM to RAM/shadow |
| 29 | CLR_FLT | W | 0h | Clears all faults |
| 28 | CLR_FLT_RETRY_COUNT | W | 0h | Clears automatic fault retry count |
| 27-20 | EEPROM_WRITE_ACCESS_KEY | R/W | 0h | EEPROM write access key (0xA5) |
| 19-11 | FORCED_ALIGN_ANGLE | R/W | 0h | 9-bit value (in degrees) used during forced align state (applicable when FORCE_ALIGN_EN = 0x1) For example if FORCED_ALIGN_ANGLE value is 225 degrees then angle applied during Forced Align will be 225 degrees, similarly if FORCED_ALIGN_ANGLE value is 395 degrees then angle applied during Forced Align will be 395%360 which is 35 degrees Angle applied = (FORCED_ALIGN_ANGLE % 360)deg |
| 10 | WATCHDOG_TICKLE | W | 0h | RAM bit to tickle watchdog in I2C mode. This bit should be written to 1b by external controller with in every EXT_WD_CONFIG. MCF8329A-Q1 will reset this bit to 0b. |
| 9-0 | FLUX_MODE_REFERENCE | R/W | 0h | Sets ID Ref (% of BASE_CURRENT) when motor is in closed loop operation idRef = (FLUX_MODE_REFERENCE/500) * BASE_CURRENT if FLUX_MODE_REFERENCE < 500 idRef = (FLUX_MODE_REFERENCE - 1024)/500 * BASE_CURRENT if FLUX_MODE_REFERENCE > 524 Valid values are 0 to 500 and 524 to 1024 |


## 8.5  Algorithm_Variables Registers

[Table 8-19](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE) lists the memory-mapped registers for the Algorithm_Variables registers. All register offset addresses not listed in [Table 8-19](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE) are considered as reserved locations and the register contents are not to be modified.

**Table 8-19 ALGORITHM_VARIABLES Registers**


| Offset | Acronym | Register Name | Section |
| --- | --- | --- | --- |
| 196h | ALGORITHM_STATE | Current Algorithm State Register | Section 8.5.1 |
| 19Ch | FG_SPEED_FDBK | FG Speed Feedback Register | Section 8.5.2 |
| 40Eh | BUS_CURRENT | Calculated DC Bus Current Register | Section 8.5.3 |
| 43Ch | PHASE_CURRENT_A | Measured Current on Phase A Register | Section 8.5.4 |
| 43Eh | PHASE_CURRENT_B | Measured Current on Phase B Register | Section 8.5.5 |
| 440h | PHASE_CURRENT_C | Measured Current on Phase C Register | Section 8.5.6 |
| 450h | CSA_GAIN_FEEDBACK | CSA Gain Register | Section 8.5.7 |
| 458h | VOLTAGE_GAIN_FEEDBACK | Voltage Gain Register | Section 8.5.8 |
| 45Ch | VM_VOLTAGE | VM Voltage Register | Section 8.5.9 |
| 460h | PHASE_VOLTAGE_VA | Phase A Voltage Register | Section 8.5.10 |
| 462h | PHASE_VOLTAGE_VB | Phase B Voltage Register | Section 8.5.11 |
| 464h | PHASE_VOLTAGE_VC | Phase C Voltage Register | Section 8.5.12 |
| 4AAh | SIN_COMMUTATION_ANGLE | Sine of Commutation Angle | Section 8.5.13 |
| 4ACh | COS_COMMUTATION_ANGLE | Cosine of Commutation Angle | Section 8.5.14 |
| 4CCh | IALPHA | IALPHA Current Register | Section 8.5.15 |
| 4CEh | IBETA | IBETA Current Register | Section 8.5.16 |
| 4D0h | VALPHA | VALPHA Voltage Register | Section 8.5.17 |
| 4D2h | VBETA | VBETA Voltage Register | Section 8.5.18 |
| 4DCh | ID | Measured d-axis Current Register | Section 8.5.19 |
| 4DEh | IQ | Measured q-axis Current Register | Section 8.5.20 |
| 4E0h | VD | VD Voltage Register | Section 8.5.21 |
| 4E2h | VQ | VQ Voltage Register | Section 8.5.22 |
| 51Ah | IQ_REF_ROTOR_ALIGN | Align Current Reference | Section 8.5.23 |
| 532h | SPEED_REF_OPEN_LOOP | Open Loop Speed Register | Section 8.5.24 |
| 542h | IQ_REF_OPEN_LOOP | Open Loop Current Reference | Section 8.5.25 |
| 5D0h | SPEED_REF_CLOSED_LOOP | Speed Reference Register | Section 8.5.26 |
| 60Ah | ID_REF_CLOSED_LOOP | Reference for d-axis Current loop Register | Section 8.5.27 |
| 60Ch | IQ_REF_CLOSED_LOOP | Reference q-axis for Current loop Register | Section 8.5.28 |
| 6B0h | ISD_STATE | ISD State Register | Section 8.5.29 |
| 6BAh | ISD_SPEED | ISD Speed Register | Section 8.5.30 |
| 6E4h | IPD_STATE | IPD State Register | Section 8.5.31 |
| 71Ah | IPD_ANGLE | Calculated IPD Angle Register | Section 8.5.32 |
| 75Ch | ED | Estimated BEMF EQ Register | Section 8.5.33 |
| 75Eh | EQ | Estimated BEMF ED Register | Section 8.5.34 |
| 76Eh | SPEED_FDBK | Speed Feedback Register | Section 8.5.35 |
| 774h | THETA_EST | Estimated rotor Position Register | Section 8.5.36 |


Complex bit access types are encoded to fit into small table cells. [Table 8-20](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_LEGEND_TABLE) shows the codes that are used for access types in this section.

**Table 8-20 Algorithm_Variables Access Type Codes**


| Access Type | Code | Description |
| --- | --- | --- |
| Read Type | Read Type | Read Type |
| R | R | Read |
| Reset or Default Value | Reset or Default Value | Reset or Default Value |
| - n |  | Value after reset or the default value |


## 8.5.1 ALGORITHM_STATE Register (Offset = 196h) \[Reset = 0000h\]

ALGORITHM_STATE is shown in [Figure 8-11](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_STATE_FIGURE_TABLE) and described in [Table 8-21](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_STATE_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Current Algorithm State Register

**Figure 8-11 ALGORITHM_STATE Register**


| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE | ALGORITHM_STATE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 8-21 ALGORITHM_STATE Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 15-0 | ALGORITHM_STATE | R | 0h | 16-bit value indicating current state of device 0h = MOTOR_IDLE 1h = MOTOR_ISD 2h = MOTOR_TRISTATE 3h = MOTOR_BRAKE_ON_START 4h = MOTOR_IPD 5h = MOTOR_SLOW_FIRST_CYCLE 6h = MOTOR_ALIGN 7h = MOTOR_OPEN_LOOP 8h = MOTOR_CLOSED_LOOP_UNALIGNED 9h = MOTOR_CLOSED_LOOP_ALIGNED Ah = MOTOR_CLOSED_LOOP_ACTIVE_BRAKING Bh = MOTOR_SOFT_STOP Ch = MOTOR_RECIRCULATE_STOP Dh = MOTOR_BRAKE_ON_STOP Eh = MOTOR_FAULT Fh = MOTOR_MPET_MOTOR_STOP_CHECK 10h = MOTOR_MPET_MOTOR_STOP_WAIT 11h = MOTOR_MPET_MOTOR_BRAKE 12h = MOTOR_MPET_ALGORITHM_PARAMETERS_INIT 13h = MOTOR_MPET_RL_MEASURE 14h = MOTOR_MPET_KE_MEASURE 15h = MOTOR_MPET_STALL_CURRENT_MEASURE 16h = MOTOR_MPET_TORQUE_MODE 17h = MOTOR_MPET_DONE 18h = MOTOR_MPET_FAULT |


## 8.5.2 FG_SPEED_FDBK Register (Offset = 19Ch) \[Reset = 00000000h\]

FG_SPEED_FDBK is shown in [Figure 8-12](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_FG_SPEED_FDBK_FIGURE_TABLE) and described in [Table 8-22](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_FG_SPEED_FDBK_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Speed Feedback from FG

**Figure 8-12 FG_SPEED_FDBK Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK | FG_SPEED_FDBK |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-22 FG_SPEED_FDBK Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | FG_SPEED_FDBK | R | 0h | 32-bit value indicating absolute (unsigned) value of estimated motor speed based on FG Estimated Motor Speed (in Hz) = (FG_SPEED_FDBK / 2<sup>27</sup>) * MAX_SPEED (in Hz) |


## 8.5.3 BUS_CURRENT Register (Offset = 40Eh) \[Reset = 00000000h\]

BUS_CURRENT is shown in [Figure 8-13](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_BUS_CURRENT_FIGURE_TABLE) and described in [Table 8-23](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_BUS_CURRENT_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Calculated Supply Current Register

**Figure 8-13 BUS_CURRENT Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT | BUS_CURRENT |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-23 BUS_CURRENT Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | BUS_CURRENT | R | 0h | 32-bit signed value indicating DC bus current. Negative value represented in two's complement. DC bus Current (in Amps) = (BUS_CURRENT / 2<sup>27</sup>) * 10/8Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.4 PHASE_CURRENT_A Register (Offset = 43Ch) \[Reset = 00000000h\]

PHASE_CURRENT_A is shown in [Figure 8-14](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_CURRENT_A_FIGURE_TABLE) and described in [Table 8-24](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_CURRENT_A_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Measured current on Phase A Register

**Figure 8-14 PHASE_CURRENT_A Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A | PHASE_CURRENT_A |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-24 PHASE_CURRENT_A Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | PHASE_CURRENT_A | R | 0h | 32-bit signed value indicating measured continuous Phase A current. Negative value represented in two's complement. Phase A current (in Amps) = (PHASE_CURRENT_A / 2<sup>27</sup>) * Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.5 PHASE_CURRENT_B Register (Offset = 43Eh) \[Reset = 00000000h\]

PHASE_CURRENT_B is shown in [Figure 8-15](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_CURRENT_B_FIGURE_TABLE) and described in [Table 8-25](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_CURRENT_B_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Measured current on Phase B Register

**Figure 8-15 PHASE_CURRENT_B Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B | PHASE_CURRENT_B |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-25 PHASE_CURRENT_B Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | PHASE_CURRENT_B | R | 0h | 32-bit signed value indicating measured continuous Phase B current. Negative value represented in two's complement. Phase B current (in Amps) = (PHASE_CURRENT_B / 2<sup>27</sup>) * Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.6 PHASE_CURRENT_C Register (Offset = 440h) \[Reset = 00000000h\]

PHASE_CURRENT_C is shown in [Figure 8-16](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_CURRENT_C_FIGURE_TABLE) and described in [Table 8-26](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_CURRENT_C_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Measured current on Phase C Register

**Figure 8-16 PHASE_CURRENT_C Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C | PHASE_CURRENT_C |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-26 PHASE_CURRENT_C Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | PHASE_CURRENT_C | R | 0h | 32-bit signed value indicating measured continuous Phase C current. Negative value represented in two's complement. Phase C current (in Amps) = (PHASE_CURRENT_C / 2<sup>27</sup>) * 10/8 Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.7 CSA_GAIN_FEEDBACK Register (Offset = 450h) \[Reset = 0000h\]

CSA_GAIN_FEEDBACK is shown in [Figure 8-17](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_CSA_GAIN_FEEDBACK_FIGURE_TABLE) and described in [Table 8-27](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_CSA_GAIN_FEEDBACK_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

CSA Gain Register

**Figure 8-17 CSA_GAIN_FEEDBACK Register**


| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK | CSA_GAIN_FEEDBACK |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 8-27 CSA_GAIN_FEEDBACK Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 15-0 | CSA_GAIN_FEEDBACK | R | 0h | 16-bit value indicating current sense gain 0h = 40V/V 1h = 20V/V 2h = 10V/V 3h = 5V/V |


## 8.5.8 VOLTAGE_GAIN_FEEDBACK Register (Offset = 458h) \[Reset = 0000h\]

VOLTAGE_GAIN_FEEDBACK is shown in [Figure 8-18](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VOLTAGE_GAIN_FEEDBACK_FIGURE_TABLE) and described in [Table 8-28](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VOLTAGE_GAIN_FEEDBACK_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Voltage Gain Register

**Figure 8-18 VOLTAGE_GAIN_FEEDBACK Register**


| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK | VOLTAGE_GAIN_FEEDBACK |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 8-28 VOLTAGE_GAIN_FEEDBACK Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 15-0 | VOLTAGE_GAIN_FEEDBACK | R | 0h | 16-bit value indicating voltage gain 0h = 60V 1h = 30V 2h = 15V |


## 8.5.9 VM_VOLTAGE Register (Offset = 45Ch) \[Reset = 00000000h\]

VM_VOLTAGE is shown in [Figure 8-19](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VM_VOLTAGE_FIGURE_TABLE) and described in [Table 8-29](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VM_VOLTAGE_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Supply voltage register

**Figure 8-19 VM_VOLTAGE Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE | VM_VOLTAGE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-29 VM_VOLTAGE Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | VM_VOLTAGE | R | 0h | 32-bit value indicating DC bus voltage DC Bus Voltage (in Volts) = VM_VOLTAGE * 60 / 2<sup>27</sup> |


## 8.5.10 PHASE_VOLTAGE_VA Register (Offset = 460h) \[Reset = 00000000h\]

PHASE_VOLTAGE_VA is shown in [Figure 8-20](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_VOLTAGE_VA_FIGURE_TABLE) and described in [Table 8-30](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_VOLTAGE_VA_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Phase A Voltage Register

**Figure 8-20 PHASE_VOLTAGE_VA Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA | PHASE_VOLTAGE_VA |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-30 PHASE_VOLTAGE_VA Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | PHASE_VOLTAGE_VA | R | 0h | 32-bit signed value indicating measured A phase voltage during ISD. Negative value represented in two's complement. Phase A voltage (in Volts) = PHASE_VOLTAGE_VA * 60 / (sqrt(3) * 2<sup>27</sup>) |


## 8.5.11 PHASE_VOLTAGE_VB Register (Offset = 462h) \[Reset = 00000000h\]

PHASE_VOLTAGE_VB is shown in [Figure 8-21](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_VOLTAGE_VB_FIGURE_TABLE) and described in [Table 8-31](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_VOLTAGE_VB_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Phase B Voltage Register

**Figure 8-21 PHASE_VOLTAGE_VB Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB | PHASE_VOLTAGE_VB |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-31 PHASE_VOLTAGE_VB Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | PHASE_VOLTAGE_VB | R | 0h | 32-bit signed value indicating measured B phase voltage during ISD. Negative value represented in two's complement. Phase B voltage (in Volts) = PHASE_VOLTAGE_VB * 60 / (sqrt(3) * 2<sup>27</sup>) |


## 8.5.12 PHASE_VOLTAGE_VC Register (Offset = 464h) \[Reset = 0h\]

PHASE_VOLTAGE_VC is shown in [Table 8-32](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_PHASE_VOLTAGE_VC_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Phase C Voltage Register

**Table 8-32 PHASE_VOLTAGE_VC Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 2 | PHASE_VOLTAGE_VC | R | 0h | 32-bit signed value indicating measured C phase voltage during ISD. Negative value represented in two's complement. Phase C voltage (in Volts) = PHASE_VOLTAGE_VC * 60 / (sqrt(3) * 2<sup>27</sup>) |
| 1-0 | RESERVED | R | 0h |  |


## 8.5.13 SIN_COMMUTATION_ANGLE Register (Offset = 4AAh) \[Reset = 00000000h\]

SIN_COMMUTATION_ANGLE is shown in [Figure 8-22](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_SIN_COMMUTATION_ANGLE_FIGURE_TABLE) and described in [Table 8-33](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_SIN_COMMUTATION_ANGLE_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Sine of Commutation Angle

**Figure 8-22 SIN_COMMUTATION_ANGLE Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE | SIN_COMMUTATION_ANGLE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-33 SIN_COMMUTATION_ANGLE Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | SIN_COMMUTATION_ANGLE | R | 0h | 32-bit signed value indicating sine of rotor Angle. Negative value represented in two's complement. sin(rotor angle) = (SIN_COMMUTATION_ANGLE / 2<sup>27</sup>) |


## 8.5.14 COS_COMMUTATION_ANGLE Register (Offset = 4ACh) \[Reset = 00000000h\]

COS_COMMUTATION_ANGLE is shown in [Figure 8-23](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_COS_COMMUTATION_ANGLE_FIGURE_TABLE) and described in [Table 8-34](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_COS_COMMUTATION_ANGLE_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Cosine of Commutation Angle

**Figure 8-23 COS_COMMUTATION_ANGLE Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE | COS_COMMUTATION_ANGLE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-34 COS_COMMUTATION_ANGLE Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | COS_COMMUTATION_ANGLE | R | 0h | 32-bit signed value indicating cosine of rotor angle. Negative value represented in two's complement. cos(rotor angle) = (COS_COMMUTATION_ANGLE / 2<sup>27</sup>) |


## 8.5.15 IALPHA Register (Offset = 4CCh) \[Reset = 00000000h\]

IALPHA is shown in [Figure 8-24](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IALPHA_FIGURE_TABLE) and described in [Table 8-35](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IALPHA_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

IALPHA Current Register

**Figure 8-24 IALPHA Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA | IALPHA |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-35 IALPHA Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | IALPHA | R | 0h | 32-bit signed value indicating phase current in alpha- beta domain. Negative value represented in two's complement. IAlpha (in Amps) = (IALPHA / 2<sup>27</sup>) * Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.16 IBETA Register (Offset = 4CEh) \[Reset = 00000000h\]

IBETA is shown in [Figure 8-25](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IBETA_FIGURE_TABLE) and described in [Table 8-36](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IBETA_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

IBETA Current Register

**Figure 8-25 IBETA Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA | IBETA |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-36 IBETA Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | IBETA | R | 0h | 32-bit signed value indicating phase current in alpha- beta domain. Negative value represented in two's complement. IBeta (in Amps) = (IBETA / 2<sup>27</sup>) * Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.17 VALPHA Register (Offset = 4D0h) \[Reset = 00000000h\]

VALPHA is shown in [Figure 8-26](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VALPHA_FIGURE_TABLE) and described in [Table 8-37](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VALPHA_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

VALPHA Voltage Register

**Figure 8-26 VALPHA Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA | VALPHA |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-37 VALPHA Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | VALPHA | R | 0h | 32-bit signed value indicating applied phase voltage in alpha-beta domain VAlpha (in Volts) = (VALPHA / 2<sup>27</sup>) * 60 / sqrt(3) |


## 8.5.18 VBETA Register (Offset = 4D2h) \[Reset = 00000000h\]

VBETA is shown in [Figure 8-27](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VBETA_FIGURE_TABLE) and described in [Table 8-38](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VBETA_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

VBETA Voltage Register

**Figure 8-27 VBETA Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA | VBETA |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-38 VBETA Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | VBETA | R | 0h | 32-bit signed value indicating applied phase voltage in alpha-beta domain. Negative value represented in two's complement. VBeta (in Volts)) = (VBETA / 2<sup>27</sup>) * 60 / sqrt(3) |


## 8.5.19 ID Register (Offset = 4DCh) \[Reset = 00000000h\]

ID is shown in [Figure 8-28](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ID_FIGURE_TABLE) and described in [Table 8-39](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ID_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Measured d-axis Current Register

**Figure 8-28 ID Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID | ID |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-39 ID Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | ID | R | 0h | 32-bit signed value indicating d-axis(flux component) phase current in d-q domain. Negative value represented in two's complement. Flux component phase current (in Amps) = (ID / 2<sup>27</sup>) * Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.20 IQ Register (Offset = 4DEh) \[Reset = 00000000h\]

IQ is shown in [Figure 8-29](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IQ_FIGURE_TABLE) and described in [Table 8-40](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IQ_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Measured q-axis Current Register

**Figure 8-29 IQ Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ | IQ |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-40 IQ Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | IQ | R | 0h | 32-bit signed value indicating q-axis(torque component) phase current in d-q domain. Negative value represented in two's complement. Torque component phase current (in Amps) = (IQ / 2<sup>27</sup>) * Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.21 VD Register (Offset = 4E0h) \[Reset = 00000000h\]

VD is shown in [Figure 8-30](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VD_FIGURE_TABLE) and described in [Table 8-41](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VD_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

VD Voltage Register

**Figure 8-30 VD Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD | VD |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-41 VD Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | VD | R | 0h | 32-bit signed value indicating applied phase voltage in d-q domain. Negative value represented in two's complement. Vd (in Volts) = (VD / 2<sup>27</sup>) * 60 / sqrt(3) |


## 8.5.22 VQ Register (Offset = 4E2h) \[Reset = 00000000h\]

VQ is shown in [Figure 8-31](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VQ_FIGURE_TABLE) and described in [Table 8-42](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_VQ_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

VQ Voltage Register

**Figure 8-31 VQ Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ | VQ |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-42 VQ Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | VQ | R | 0h | 32-bit signed value indicating applied phase voltage in d-q domain. Negative value represented in two's complement. Vq (in Volts) = (VQ / 2<sup>27</sup>) * 60 / sqrt(3) |


## 8.5.23 IQ_REF_ROTOR_ALIGN Register (Offset = 51Ah) \[Reset = 00000000h\]

IQ_REF_ROTOR_ALIGN is shown in [Figure 8-32](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IQ_REF_ROTOR_ALIGN_FIGURE_TABLE) and described in [Table 8-43](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IQ_REF_ROTOR_ALIGN_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Align Current Reference

**Figure 8-32 IQ_REF_ROTOR_ALIGN Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN | IQ_REF_ROTOR_ALIGN |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-43 IQ_REF_ROTOR_ALIGN Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | IQ_REF_ROTOR_ALIGN | R | 0h | 32-bit signed value indicating current reference during align state. Negative value represented in two's complement. Current reference during Align State (in Amps) = (IQ_REF_ROTOR_ALIGN / 2<sup>27</sup>) * Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.24 SPEED_REF_OPEN_LOOP Register (Offset = 532h) \[Reset = 00000000h\]

SPEED_REF_OPEN_LOOP is shown in [Figure 8-33](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_SPEED_REF_OPEN_LOOP_FIGURE_TABLE) and described in [Table 8-44](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_SPEED_REF_OPEN_LOOP_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Speed at which motor transitions to close loop

**Figure 8-33 SPEED_REF_OPEN_LOOP Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP | SPEED_REF_OPEN_LOOP |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-44 SPEED_REF_OPEN_LOOP Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | SPEED_REF_OPEN_LOOP | R | 0h | 32-bit signed value indicating open loop speed reference. Negative value represented in two's complement. Speed reference during open loop (in Hz) = (SPEED_REF_OPEN_LOOP / 2<sup>27</sup>) * MAX_SPEED (in Hz) |


## 8.5.25 IQ_REF_OPEN_LOOP Register (Offset = 542h) \[Reset = 00000000h\]

IQ_REF_OPEN_LOOP is shown in [Figure 8-34](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IQ_REF_OPEN_LOOP_FIGURE_TABLE) and described in [Table 8-45](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IQ_REF_OPEN_LOOP_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Open Loop Current Reference

**Figure 8-34 IQ_REF_OPEN_LOOP Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP | IQ_REF_OPEN_LOOP |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-45 IQ_REF_OPEN_LOOP Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | IQ_REF_OPEN_LOOP | R | 0h | 32-bit signed value indicating current reference during open loop. Negative value represented in two's complement. Current reference during open loop (in Amps) = (IQ_REF_OPEN_LOOP / 2<sup>27</sup>) * Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.26 SPEED_REF_CLOSED_LOOP Register (Offset = 5D0h) \[Reset = 00000000h\]

SPEED_REF_CLOSED_LOOP is shown in [Figure 8-35](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_SPEED_REF_CLOSED_LOOP_FIGURE_TABLE) and described in [Table 8-46](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_SPEED_REF_CLOSED_LOOP_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Speed Reference Register

**Figure 8-35 SPEED_REF_CLOSED_LOOP Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP | SPEED_REF_CLOSED_LOOP |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-46 SPEED_REF_CLOSED_LOOP Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | SPEED_REF_CLOSED_LOOP | R | 0h | 32-bit signed value indicating reference for closed loop. Negative value represented in two's complement. In speed control mode, speed reference in closed loop (in Hz)= (SPEED_REF_CLOSED_LOOP/ 2<sup>27</sup>) * MAX_SPEED (in Hz). In power mode, power reference in closed loop (in Watts) = (SPEED_REF_CLOSED_LOOP/ 2<sup>27</sup>) * MAX_POWER (in Watts) In current mode, Iq current reference in closed loop (in Amps) = (SPEED_REF_CLOSED_LOOP / 2<sup>27</sup>) * ILIMIT(in Amps) |


## 8.5.27 ID_REF_CLOSED_LOOP Register (Offset = 60Ah) \[Reset = 00000000h\]

ID_REF_CLOSED_LOOP is shown in [Figure 8-36](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ID_REF_CLOSED_LOOP_FIGURE_TABLE) and described in [Table 8-47](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ID_REF_CLOSED_LOOP_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Reference for Current Loop Register

**Figure 8-36 ID_REF_CLOSED_LOOP Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP | ID_REF_CLOSED_LOOP |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-47 ID_REF_CLOSED_LOOP Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | ID_REF_CLOSED_LOOP | R | 0h | 32-bit signed value indicating d-axis(flux component) phase current reference in closed loop . Negative value represented in two's complement. Flux component phase current reference in closed loop (in Amps) = (ID / 2<sup>27</sup>) * Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.28 IQ_REF_CLOSED_LOOP Register (Offset = 60Ch) \[Reset = 00000000h\]

IQ_REF_CLOSED_LOOP is shown in [Figure 8-37](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IQ_REF_CLOSED_LOOP_FIGURE_TABLE) and described in [Table 8-48](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IQ_REF_CLOSED_LOOP_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Reference for Current Loop Register

**Figure 8-37 IQ_REF_CLOSED_LOOP Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP | IQ_REF_CLOSED_LOOP |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-48 IQ_REF_CLOSED_LOOP Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | IQ_REF_CLOSED_LOOP | R | 0h | 32-bit signed value indicating q-axis(torque component) phase current reference in closed loop. Negative value represented in two's complement. Torque component phase current reference in closed loop (in Amps) = (IQ / 2<sup>27</sup>) * Base Current Base Current is 0.0375/Rsense (Rsense is current sense resistor in Ohms) A |


## 8.5.29 ISD_STATE Register (Offset = 6B0h) \[Reset = 0000h\]

ISD_STATE is shown in [Figure 8-38](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ISD_STATE_FIGURE_TABLE) and described in [Table 8-49](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ISD_STATE_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

ISD state Register

**Figure 8-38 ISD_STATE Register**


| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ISD_STATE | ISD_STATE | ISD_STATE | ISD_STATE | ISD_STATE | ISD_STATE | ISD_STATE | ISD_STATE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| ISD_STATE | ISD_STATE | ISD_STATE | ISD_STATE | ISD_STATE | ISD_STATE | ISD_STATE | ISD_STATE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 8-49 ISD_STATE Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 15-0 | ISD_STATE | R | 0h | 16-bit value indicating current ISD state 0h = ISD_INIT 1h = ISD_MOTOR_STOP_CHECK 2h = ISD_ESTIM_INIT 3h = ISD_RUN_MOTOR_CHECK 4h = ISD_MOTOR_DIRECTION_CHECK 5h = ISD_COMPLETE 6h = ISD_FAULT |


## 8.5.30 ISD_SPEED Register (Offset = 6BAh) \[Reset = 00000000h\]

ISD_SPEED is shown in [Figure 8-39](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ISD_SPEED_FIGURE_TABLE) and described in [Table 8-50](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ISD_SPEED_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

ISD Speed Register

**Figure 8-39 ISD_SPEED Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED | ISD_SPEED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-50 ISD_SPEED Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | ISD_SPEED | R | 0h | 32-bit value indicating calculated absolute speed during ISD state Speed estimated during ISD (in Hz) = (ISD_SPEED / 2<sup>27</sup>) * MAX_SPEED (in Hz) |


## 8.5.31 IPD_STATE Register (Offset = 6E4h) \[Reset = 0000h\]

IPD_STATE is shown in [Figure 8-40](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IPD_STATE_FIGURE_TABLE) and described in [Table 8-51](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IPD_STATE_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

IPD state Register

**Figure 8-40 IPD_STATE Register**


| 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IPD_STATE | IPD_STATE | IPD_STATE | IPD_STATE | IPD_STATE | IPD_STATE | IPD_STATE | IPD_STATE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| IPD_STATE | IPD_STATE | IPD_STATE | IPD_STATE | IPD_STATE | IPD_STATE | IPD_STATE | IPD_STATE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |


**Table 8-51 IPD_STATE Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 15-0 | IPD_STATE | R | 0h | 16-bit value indicating current IPD state 0h = IPD_INIT 1h = IPD_VECTOR_CONFIG 2h = IPD_RUN 3h = IPD_SLOW_RISE_CLOCK 4h = IPD_SLOW_FALL_CLOCK 5h = IPD_WAIT_CURRENT_DECAY 6h = IPD_GET_TIMES 7h = IPD_SET_NEXT_VECTOR 8h = IPD_CALC_SECTOR_RISE 9h = IPD_CALC_ROTOR_POSITION Ah = IPD_CALC_ANGLE Bh = IPD_COMPLETE Ch = IPD_FAULT |


## 8.5.32 IPD_ANGLE Register (Offset = 71Ah) \[Reset = 00000000h\]

IPD_ANGLE is shown in [Figure 8-41](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IPD_ANGLE_FIGURE_TABLE) and described in [Table 8-52](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_IPD_ANGLE_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Calculated IPD Angle Register

**Figure 8-41 IPD_ANGLE Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE | IPD_ANGLE |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-52 IPD_ANGLE Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | IPD_ANGLE | R | 0h | 32-bit signed value indicating measured IPD angle. Negative value represented in two's complement. IPD Angle (in degrees) = (IPD_ANGLE / 2<sup>27</sup>) * 360 |


## 8.5.33 ED Register (Offset = 75Ch) \[Reset = 00000000h\]

ED is shown in [Figure 8-42](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ED_FIGURE_TABLE) and described in [Table 8-53](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ED_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Estimated BEMF EQ Register

**Figure 8-42 ED Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED | ED |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-53 ED Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | ED | R | 0h | 32-bit signed value indicating estimated Back EMF along the D-Axis (Ed). Negative value represented in two's complement. Ed (in Volts) = (ED / 2<sup>27</sup>) * 60 / sqrt(3) |


## 8.5.34 EQ Register (Offset = 75Eh) \[Reset = 00000000h\]

EQ is shown in [Figure 8-43](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_EQ_FIGURE_TABLE) and described in [Table 8-54](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_EQ_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Estimated BEMF ED Register

**Figure 8-43 EQ Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ | EQ |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-54 EQ Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | EQ | R | 0h | 32-bit signed value indicating estimated Back EMF along the Q-Axis (Eq). Negative value represented in two's complement. Eq (in Volts) = (EQ / 2<sup>27</sup>) * 60 / sqrt(3) |


## 8.5.35 SPEED_FDBK Register (Offset = 76Eh) \[Reset = 00000000h\]

SPEED_FDBK is shown in [Figure 8-44](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_SPEED_FDBK_FIGURE_TABLE) and described in [Table 8-55](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_SPEED_FDBK_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Speed Feedback Register

**Figure 8-44 SPEED_FDBK Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK | SPEED_FDBK |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-55 SPEED_FDBK Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | SPEED_FDBK | R | 0h | 32-bit signed value indicating estimated motor speed. Negative value represented in two's complement. Estimated Motor Speed (in Hz) = (SPEED_FDBK / 2<sup>27</sup>) * MAX_SPEED (in Hz) |


## 8.5.36 THETA_EST Register (Offset = 774h) \[Reset = 00000000h\]

THETA_EST is shown in [Figure 8-45](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_THETA_EST_FIGURE_TABLE) and described in [Table 8-56](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_THETA_EST_TABLE_TABLE).

Return to the [Summary Table](#ALGORITHM_VARIABLES_ALGORITHM_VARIABLES_TABLE_1_TABLE).

Estimated rotor Position Register

**Figure 8-45 THETA_EST Register**


| 31 | 30 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST | THETA_EST |
| R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h | R-0h |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


**Table 8-56 THETA_EST Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 31-0 | THETA_EST | R | 0h | 32-bit signed value indicating estimated rotor angle. Angle should be modulo 360 degrees. For example if the estimated Angle value 380 degrees then it means 380%360 = 20 degrees Estimated rotor Angle (in degrees) = (THETA_EST / 2<sup>27</sup>)*360 |


# 9  Application and Implementation

Note:

Information in the following applications sections is not part of the TI component specification, and TI does not warrant its accuracy or completeness. TI’s customers are responsible for determining suitability of components for their purposes. Customers should validate and test their design implementation to confirm system functionality.


## 9.1  Application Information

The MCF8329A-Q1 is used in 3-phase sensorless motor control applications such as oil/coolant/fuel/water pumps, HVAC blowers, sunroof modules and wipers.


## 9.2  Typical Applications

[Figure 9-1](#FIG_NRL_4NK_51C) shows the typical schematic of MCF8329A-Q1. [Table 7-1](GUID-8C5EEA95-881C-4ABE-A7A4-8EA1EB0B1ACB.html#GUID-8D228EF1-517A-4CEF-AB09-CF3CFC8570AB) shows the recommended values of the external components for the driver.

![MCF8329A-Q1 Typical Schematic of MCF8329A-Q1](https://www.ti.com/ods/images/SLLSFV1/GUID-20240302-SS0I-8BBT-P9XN-RPPP6FBGQ2K9-low.svg) 

**Figure 9-1 Typical Schematic of MCF8329A-Q1**


### Detailed Design Procedure

Table below lists the example input parameters for the system design.

**Table 9-1 Design parameters**


| DESIGN PARAMETERS | REFERENCE | EXAMPLE VALUE |
| --- | --- | --- |
| Supply voltage | V<sub>PVDD</sub> | 24 V |
| Motor peak current | I<sub>PEAK</sub> | 20 A |
| PWM Frequency | f<sub>PWM</sub> | 20 kHz |
| MOSFET VDS Slew Rate | SR | 120 V/us |
| MOSFET input gate capacitance | Q<sub>G</sub> | 54 nC |
| MOSFET input gate capacitance | Q<sub>GD</sub> | 14 nC |
| Dead time | t<sub>dead</sub> | 200 ns |
| Overcurrent protection | I<sub>OCP</sub> | 30 A |


### Bootstrap Capacitor and GVDD Capacitor Selection

The bootstrap capacitor must be sized to maintain the bootstrap voltage above the undervoltage lockout for normal operation. [Equation 13](#EQUATION-BLOCK_PNG_GLD_2NB) calculates the maximum allowable voltage drop across the bootstrap capacitor:

Equation 13. ![MCF8329A-Q1](https://www.ti.com/ods/images/SLLSFV1/GUID-20200927-CA0I-XQLZ-MPTJ-QHB8BMDQLKGS-low.gif)

ΔV<sub>BSTX</sub>=12V – 0.85V – 4.45V = 6.7V

where

-   V<sub>GVDD</sub> is the supply voltage of the gate drive
-   V<sub>BOOTD</sub> is the forward voltage drop of the bootstrap diode
-   V<sub>BSTUV</sub> is the threshold of the bootstrap undervoltage lockout

In the example, allowed voltage drop across bootstrap capacitor is 6.7V. TI generally recommends that ripple voltage on both the bootstrap capacitor and GVDD capacitor are minimized as much as possible. Many of commercial, industrial, and automotive applications use ripple value between 0.5V to 1V.

The total charge needed per switching cycle can be estimated with [Equation 14](#GUID-BD5BE6D3-714F-4CA9-843F-F2A508C9DC40):


Equation 14. $$Q_{TOT} = Q_{G} + \frac{IL_{BS\_TRAN}}{f_{SW}}$$


Q<sub>TOT</sub>=54nC + 115μA/20kHz = 54nC + 5.8nC = 59.8nC

where

-   Q<sub>G</sub> is the total MOSFET gate charge
-   IL<sub>BS_TRAN</sub> is the bootstrap pin leakage current
-   f<sub>SW</sub> is the is the PWM frequency

The minimum bootstrap capacitor can then be estimated as below assuming 1V of ΔV<sub>BSTx</sub>:

Equation 15. ![MCF8329A-Q1](https://www.ti.com/ods/images/SLLSFV1/GUID-20200927-CA0I-34PB-JZQV-BTKNMXGBXPBL-low.gif)

C<sub>BST_MIN</sub>= 59.8nC / 1V = 59.8nFThe calculated value of minimum bootstrap capacitor is 59.8nF. Note that, this value of capacitance is needed at full bias voltage. In practice, the value of the bootstrap capacitor must be greater than calculated value to allow for situations where the power stage can skip pulse due to various transient conditions. TI recommends to use a 100nF bootstrap capacitor in this example. TI recommends to include enough margin and place the bootstrap capacitor as close to the BSTx and SHx pins as possible.

Equation 16. ![MCF8329A-Q1](https://www.ti.com/ods/images/SLLSFV1/GUID-20201221-CA0I-JW7J-DPTD-GFN8RP35WWVZ-low.gif)

C<sub>GVDD</sub>= 10*100nF= 1μFFor this example application, choose a 1µF C<sub>GVDD</sub> capacitor. Choose a capacitor with a voltage rating at least twice the maximum voltage that the capacitor is exposed to because most ceramic capacitors lose significant capacitance when biased. This value also improves the long-term reliability of the system.

Note: For higher power system requiring 100% duty cycle support for longer duration TI recommends to use C<sub>BSTx</sub> of ≥1μF and C<sub>GVDD</sub> of ≥10μF.


### Gate Drive Current

Selecting an appropriate gate drive current is essential when turning on or off power MOSFETs gates to switch motor current. The amount of gate drive current and input capacitance of the MOSFETs determines the drain-to-source voltage slew rate (V<sub>DS</sub>). Gate drive current can be sourced from GVDD into the MOSFET gate (I<sub>SOURCE</sub>) or sunk from the MOSFET gate into SHx or LSS (I<sub>SINK</sub>).

Using too high of a gate drive current can turn on MOSFETs too quickly which may cause excessive ringing, dV/dt coupling, or cross-conduction from switching large amounts of current. If parasitic inductances and capacitances exist in the system, voltage spiking or ringing may occur which can damage the MOSFETs or the MCF8329A-Q1 device.

On the other hand, using too low of a gate drive current causes long V<sub>DS</sub> slew rates. Turning on the MOSFETs too slowly may heat up the MOSFETs due to R<sub>DS,on</sub> switching losses.

The relationship between gate drive current I<sub>GATE</sub>, MOSFET gate-to-drain charge Q<sub>GD</sub>, and V<sub>DS</sub> slew rate switching time t<sub>rise,fall</sub> are described by the following equations:


Equation 17. $$SR_{DS} = \frac{V_{DS}}{t_{rise , fall}}$$


Equation 18. $$I_{GATE} = \frac{Q_{gd}}{t_{rise , fall}}$$


It is recommend to evaluate at lower gate drive currents and increase gate drive current settings to avoid damage from unintended operation during initial evaluation.


### Gate Resistor Selection

The slew rate of the SHx connection will be dependent on the rate at which the gate of the external MOSFETs is controlled. The pull-up/pull-down strength of MCF8329A-Q1 is fixed internally, hence the slew rate of gate voltage can be controlled with an external series gate resistor. In some applications, the gate charge of the MOSFET, which is the load on gate driver device, is significantly larger than the gate driver peak output current capability. In such applications, external gate resistors can limit the peak output current of the gate driver. External gate resistors are also used to dampen ringing and noise.

The specific parameters of the MOSFET, system voltage, and board parasitics will all affect the final SHx slew rate, so generally selecting an optimal value or configuration of external gate resistor is an iterative process.

To lower the gate drive current, a series resistor R<sub>GATE</sub> can be placed on the gate drive outputs to control the current for the source and sink current paths. A single gate resistor will have the same gate path for source and sink gate current, so larger R<sub>GATE</sub> values will yield similar SHx slew rates. Note that gate drive current varies by PVDD voltage, junction temperature, and process variation of the device.

![MCF8329A-Q1 Gate driver outputs with series resistors](https://www.ti.com/ods/images/SLLSFV1/GUID-20221222-SS0I-RDS3-MPHV-NRZKGBHZ7XBZ-low.svg)

**Figure 9-2 Gate driver outputs with series resistors**

![MCF8329A-Q1 Gate driver outputs with separate source and sink current paths](https://www.ti.com/ods/images/SLLSFV1/GUID-20221222-SS0I-RHQB-M65M-T3VH1BZPHCNS-low.svg)

**Figure 9-3 Gate driver outputs with separate source and sink current paths**

Typically, it is recommended to have the sink current be twice the source current to implement a strong pull-down from gate to the source to ensure the MOSFET stays off while the opposite FET is switching. This can be implemented discretely by providing a separate path through a resistor for the source and sink currents by placing a diode and sink resistor (R<sub>SINK</sub>) in parallel to the source resistor (R<sub>SOURCE</sub>). Using the same value of source and sink resistors results in half the equivalent resistance for the sink path. This yields twice the gate drive sink current compared to the source current, and SHx will slew twice as fast when turning off the MOSFET.


### System Considerations in High Power Designs

Higher power system designs can require design and application considerations that are not regarded in lower power system designs. It is important to combat the volatile nature of higher power systems by implementing troubleshooting guidelines, external components and circuits, driver product features, or layout techniques. For more information, please visit the [System Design Considerations for High-Power Motor Driver Applications](https://www.ti.com/lit/pdf/slvaf66) application note.


### Capacitor Voltage Ratings

Use capacitors with voltage ratings that are 2x the supply voltage (PVDD, GVDD, AVDD, etc). Capacitors can experience up to half the rated capacitance due to poor DC voltage rating performance.

For example, since the bootstrap voltage is around 12 to 13-V with respect to SHx (BSTx-SHx) then the BSTx-SHx capacitor should be rated for 25-V or greater.


### External Power Stage Components

External components in the power stage are not required by design but are helpful in suppressing transients, managing inductor coil energy, mitigating supply pumping, dampening phase ringing, or providing strong gate-to-source pulldown paths. These components are used for system tuning and debuggability so the BLDC motor system is robust while avoiding damage to the MCF8329A-Q1 device or external MOSFETs.

![MCF8329A-Q1 Optional external power stage components](https://www.ti.com/ods/images/SLLSFV1/GUID-20221222-SS0I-H5XN-4KVV-KM6CTVX18GVX-low.svg)

**Figure 9-4 Optional external power stage components**

Some examples of issues and external components that can resolve those issues are found in table below.

**Table 9-2 Common issues and resolutions for power stage debugging**


| Issue | Resolution | Components |
| --- | --- | --- |
| Gate drive current required is too large, resulting in very fast MOSFET V<sub>DS</sub> slew rate | Series resistors required for gate drive current adjustability | 0-100 Ω series resistors (RGATE/RSOURCE) at gate driver outputs (GHx/GLx), optional sink resistor (RSINK) and diode in parallel with gate resistor for adjustable sink current |
| Ringing at phase’s switch node (SHx) resulting in high EMI emissions | RC snubbers placed in parallel to each HS/LS MOSFET to dampen oscillations | Resistor (RSNUB) and Capacitor (CSNUB) placed parallel to the MOSFET, calculate RC values based on ringing frequency using Proper RC Snubber Design for Motor Drivers |
| Negative transients at low-side source (LSS) below minimum specification | HS drain to LS source capacitor to suppress negative bouncing | 0.01uF-1uF, PVDD-rated capacitor from PVDD-LSS (CHSD_LSS) placed near LS MOSFET’s source |
| Negative transient at low-side gate (GLx) below minimum specification | Gate-to-ground Zener diode to clamp negative voltage | GVDD voltage rated Zener diode (DGS) with anode connected to GND and cathode connected to GLx |
| Extra protection required to ensure MOSFET is turned off if gate drive signals are Hi-Z | External gate-to-source pulldown resistors (after series gate resistors) | 10 kΩ to 100 kΩ resistor (RPD) connected from gate to source for each MOSFET |


## 9.3  Power Supply Recommendations

The MCF8329A-Q1 is designed to operate from an input voltage supply (PVDD) range from 4.5 V to 60 V. A 10-µF and 0.1-µF ceramic capacitor rated for PVDD must be placed as close to the device as possible. In addition, a bulk capacitor must be included on the PVDD pin but can be shared with the bulk bypass capacitance for the external power MOSFETs. Additional bulk capacitance is required to bypass the external half-bridge MOSFETs and should be sized according to the application requirements.


### 9.3.1  Bulk Capacitance

Having an appropriate local bulk capacitance is an important factor in motor drive system design. Designs generally benefit in having more bulk capacitance, while the disadvantages are increased cost and physical size.

The amount of local capacitance needed depends on a variety of factors, including:

-   The highest current required by the motor system
-   The capacitance and current capability of the power supply
-   The amount of parasitic inductance between the power supply and motor system
-   The acceptable voltage ripple
-   The type of motor used (brushed DC, brushless DC, stepper)
-   The motor braking method

The inductance between the power supply and the motor drive system limits the rate at which current can change from the power supply. If the local bulk capacitance is too small, the system responds to excessive current demands or dumps from the motor with a change in PVDD voltage. When adequate bulk capacitance is used, the PVDD voltage remains stable and high current can be quickly supplied.

The data sheet generally provides a recommended value, but system-level testing is required to determine the appropriate bulk capacitor. The voltage rating for bulk capacitors needs to be higher than the operating voltage, to provide margin for cases when the motor transfers energy to the supply.

![MCF8329A-Q1 Example Setup of Motor Drive System With External Power Supply](https://www.ti.com/ods/images/SLLSFV1/GUID-6CB3ED1C-0FE3-454A-B691-426AB59366F4-low.gif)

**Figure 9-5 Example Setup of Motor Drive System With External Power Supply**


## 9.4  Layout


### 9.4.1  Layout Guidelines

Bypass the PVDD pin to the GND pin using a low-ESR ceramic bypass capacitor with a recommended value of 0.1µF. Place this capacitor as close to the PVDD pin as possible with a thick trace or ground plane connected to the GND pin. Additionally, bypass the PVDD pin using a bulk capacitor rated for PVDD. This component can be electrolytic. This capacitance must be at least 10µF.

Additional bulk capacitance is required to bypass the high current path on the external MOSFETs. This bulk capacitance should be placed such that it minimizes the length of any high current paths through the external MOSFETs. The connecting metal traces should be as wide as possible, with numerous vias connecting PCB layers. These practices minimize inductance and let the bulk capacitor deliver high current.

Place a low-ESR ceramic capacitor between the CPL and CPH pins. This capacitor should be 470nF, rated for PVDD, and be of type X7R.

The bootstrap capacitors (BSTx-SHx) should be placed closely to device pins to minimize loop inductance for the gate drive paths.

Bypass the AVDD pin to the AGND pin with a 1µF or 2.2µF low-ESR ceramic capacitor rated for 10V and of type X7R. Place this capacitor as close to the pin as possible and minimize the path from the capacitor to the AGND pin.

Bypass the DVDD pin to the GND pin with a 1µF or 2.2µF low-ESR ceramic capacitor rated for 10V and of type X7R. Place this capacitor as close to the pin as possible and minimize the path from the capacitor to the DGND pin.

AVDD and DVDD capacitors should have an effective capacitance between 0.5μF and 2.8μF after operating voltage (AVDD or DVDD) and temperature derating.

Minimize the loop length for the high-side and low-side gate drivers. The high-side loop is from the GHx pin of the device to the high-side power MOSFET gate, then follows the high-side MOSFET source back to the SHx pin. The low-side loop is from the GLx pin of the device to the low-side power MOSFET gate, then follows the low-side MOSFET source back to the GND pin.

When designing higher power systems, physics in the PCB layout can cause parasitic inductance, capacitance, and impedance that deter the performance of the system. Understanding the parasitic that are present in a higher power motor drive system can help designers mitigate their effects through good PCB layout. For more information, please visit the [System Design Considerations for High-Power Motor Driver Applications](https://www.ti.com/lit/pdf/slvaf66) and [Best Practices for Board Layout of Motor Drivers](https://www.ti.com/lit/pdf/slva959) application notes.

Gate drive traces (BSTx, GHx, SHx, GLx, LSS) should be at least 15-20mil wide and as short as possible to the MOSFET gates to minimize parasitic inductance and impedance. This helps supply large gate drive currents, turn MOSFETs on efficiently, and improves VGS and VDS monitoring. Ensure that the shunt resistor selected to monitor the low-side current from LSS to GND, is wide to minimize inductance introduced at the low-side source LSS.

Ensure grounds are connected through net-ties or wide resistors to reduce voltage offsets and maintain gate driver performance. The device thermal pad should be soldered to the PCB top-layer ground plane. Multiple vias should be used to connect to a large bottom-layer ground plane. The use of large metal planes and multiple vias helps dissipate the heat that is generated in the device. To improve thermal performance, maximize the ground area that is connected to the thermal pad ground across all possible layers of the PCB. Using thick copper pours can lower the junction-to-air thermal resistance and improve thermal dissipation from the die surface.


### 9.4.2  Layout Example

![MCF8329A-Q1 Layout example of MCF8329A-Q1](https://www.ti.com/ods/images/SLLSFV1/GUID-20250324-SS0I-RT7R-XTKW-FP6KNPO76V4G-low.svg) 

**Figure 9-6 Layout example of MCF8329A-Q1**


### 9.4.3  Thermal Considerations

The MCF8329A-Q1 has thermal shutdown (TSD) as previously described. A die temperature in excess of 150°C (minimally) disables the device until the temperature drops to a safe level.

Any tendency of the device to enter thermal shutdown is an indication of excessive power dissipation, insufficient heat-sinking, or too high an ambient temperature.


#### 9.4.3.1  Power Dissipation

The MCF8329A-Q1 integrates a variety of circuits that contribute to total power losses. These power losses include standby power losses, GVDD power losses, AVDD power losses, DVDD power losses. At start-up and fault conditions, this current is much higher than normal running current; remember to take these peak currents and their duration into consideration. The maximum amount of power that the device can dissipate depends on ambient temperature and heat-sinking.


# 10  Device and Documentation Support


## 10.1  Documentation Support


### 10.1.1  Related Documentation

-   Refer to the application note [Power Delivery in Cordless Power Tools Using DRV8329](https://www.ti.com/lit/slvafg1)
-   Refer to the application note [System Design Considerations for High-Power Motor Driver Applications](https://www.ti.com/lit/pdf/slvaf66)
    
-   Refer to the E2E FAQ [How to Conduct a BLDC Schematic Review and Debug](https://e2e.ti.com/support/motor-drivers-group/motor-drivers/f/motor-drivers-forum/1039040/faq-how-to-conduct-a-bldc-schematic-review-and-debug)
    
-   Refer to the application note [Best Practices for Board Layout of Motor Drivers](https://www.ti.com/lit/pdf/slva959)
    
-   Refer to the application note [QFN and SON PCB Attachment](https://www.ti.com/lit/pdf/slua271)
    
-   Refer to the application note [Cut-Off Switch in High-Current Motor-Drive Applications](https://www.ti.com/lit/pdf/slva991)


## 10.2  Support Resources

[TI E2E™ support forums](https://e2e.ti.com) are an engineer's go-to source for fast, verified answers and design help — straight from the experts. Search existing answers or ask your own question to get the quick design help you need.

Linked content is provided "AS IS" by the respective contributors. They do not constitute TI specifications and do not necessarily reflect TI's views; see TI's [Terms of Use](https://www.ti.com/corp/docs/legal/termsofuse.shtml).


## 10.3  Trademarks

TI E2E™ is a trademark of Texas Instruments.

All trademarks are the property of their respective owners.


## 10.4  Electrostatic Discharge Caution


|  | This integrated circuit can be damaged by ESD. Texas Instruments recommends that all integrated circuits be handled with appropriate precautions. Failure to observe proper handling and installation procedures can cause damage. |
| --- | --- |
| ESD damage can range from subtle performance degradation to complete device failure. Precision integrated circuits may be more susceptible to damage because very small parametric changes could cause the device not to meet its published specifications. |  |


## 10.5  Glossary

[TI Glossary](https://www.ti.com/lit/pdf/SLYZ022) This glossary lists and explains terms, acronyms, and definitions.


# 11  Revision History


| DATE | REVISION | NOTES |
| --- | --- | --- |
| March 2025 | * | Initial Release |


# 12  Mechanical, Packaging, and Orderable Information

The following pages include mechanical, packaging, and orderable information. This information is the most-current data available for the designated device. This data is subject to change without notice and without revision of this document. For browser-based versions of this data sheet, see the left-hand navigation pane.

![MCF8329A-Q1](https://www.ti.com/ods/images/SLLSFV1/GUID-20240320-SS0I-SCBD-ZWFM-9RLJRBZ7GHLK-low.svg)

![MCF8329A-Q1](https://www.ti.com/ods/images/SLLSFV1/GUID-20240320-SS0I-QM8B-DJ51-SHNCDNZSJQRB-low.svg)

![MCF8329A-Q1](https://www.ti.com/ods/images/SLLSFV1/GUID-20240320-SS0I-SW1T-C0NF-R25HZKBZWGLV-low.svg)

