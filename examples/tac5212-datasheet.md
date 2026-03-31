# SLASF23 Data sheet

**Product:** TAC5212

**Document ID:** TAC5212

**Source:** [TI Document Viewer](https://www.ti.com/document-viewer/TAC5212/datasheet)

---

Data Sheet

# TAC5212 High-performance stereo audio codec with 119dB dynamic range ADC and 120dB dynamic range DAC


# 1  Features

-   Stereo high-performance audio ADC
    -   Performance:
        -   Line/Microphone differential input dynamic range: 119dB
        -   THD+N: –98dB
        -   Channel summing mode supports high SNR: 122dB
    -   Input voltage:
        -   Differential, 2V<sub>RMS</sub> full-scale input
        -   Single-ended, 1V<sub>RMS</sub> full-scale input
    -   Input mix/mux options
    -   ADC sample rate (f<sub>S</sub>) = 4kHz to 768kHz
    -   Programmable microphone bias (up to 3V)
    -   Up to 4 Record Channels
        -   2 Channel Analog + 2 Channel Digital
        -   1 Channel Analog + 3 Channel Digital
        -   4 Channel Digital

-   Stereo differential or Quad single-ended high performance audio DAC
    -   Performance:
        -   DAC to differential line-out dynamic range: 120dB
        -   DAC to differential headphone-out dynamic range: 118dB
        -   THD+N:–104dB
    -   Line-out/headphone output voltage :
        -   Differential, 2V<sub>RMS</sub> full-scale
        -   Pseudo-differential, 1V<sub>RMS</sub> full-scale
        -   Single-ended, 1V<sub>RMS</sub> full-scale
    -   DAC sample rate (f<sub>S</sub>) = 4kHz to 768kHz
-   Common features
    -   Analog input to output bypass
    -   Voice activity detection
    -   Ultrasonic activity detection
    -   Battery and thermal foldback protection
    -   Signal distortion limiter
    -   Low and Ultra-low latency filter options
    -   Programmable HPF and Biquad filters
    -   I<sup>2</sup>C or SPI control interface
    -   Audio serial interface
        -   Format: TDM, I<sup>2</sup>S or Left-justified (LJ)
        -   Word length: 16, 20, 24 or 32 bits
        -   Bus controller and target modes
    -   Programmable PLL for flexible clocking
    -   Auto clock and sample rate detection
    -   Low power modes
        -   8mW for 2\-Ch recording (1.8V Supply)
        -   11mW for 2\-Ch playback (1.8V Supply)
    -   Single supply operation AVDD: 1.8V or 3.3V
    -   I/O supply operation: 1.2V or 1.8V or 3.3V
    -   Temperature grade 1: –40°C ≤ T<sub>A</sub> ≤ +125°C


# 2  Applications

-   [Land Mobile Radio](https://www.ti.com/solution/land-mobile-radio)
-   [IP Network Camera](https://www.ti.com/solution/ip-network-camera)
-   [IP Telephone](https://www.ti.com/solution/ip-telephone)
-   [Video Conference System](https://www.ti.com/solution/video-conference-system)
-   [Smart Speakers](https://www.ti.com/solution/smart-speaker)
-   [Professional audio mixer/control surface](https://www.ti.com/solution/professional-audio-mixer-control-surface)


# 3  Description

The TAC5212 is a high-performance stereo audio codec with 2V<sub>RMS</sub> differential input, 119dB stereo ADC and 2V<sub>RMS</sub> differential output, 120dB stereo or 1V<sub>RMS</sub> single-ended output, 111dB quad DAC. The TAC5212 supports both differential and single-ended inputs and outputs. The ADC supports both line/microphone input signals with options for AC or DC coupling configurations. The DAC outputs can be configured for either line-output or headphone loads. The DAC can drive up to 62.5mW into a 16Ω headphone load. The TAC5212 integrates programable channel gain, digital volume control, a low-jitter phase-locked loop (PLL), a programmable high-pass filter (HPF), programmable EQ and biquad filters, low-latency and ultra-low latency filter modes, and allows for sample rates up to 768kHz for both ADC and DAC signal chains. The TAC5212 supports time-division multiplexing (TDM), I<sup>2</sup>S, or left-justified (LJ) audio formats, and can be controlled with I<sup>2</sup>C or SPI. These integrated high-performance features, along with a single supply operation, makes TAC5212 an excellent choice for space-constrained audio applications.

**Device Information**


| PART NUMBER | PACKAGE <sup>(1)</sup> | PACKAGE SIZE (NOM) <sup>(2)</sup> |
| --- | --- | --- |
| TAC5212 | VQFN (24) | 4mm x 4mm with 0.5mm pitch |


(1)  For all available packages, see the orderable addendum at the end of the data sheet.

(2)  The package size (length × width) is a nominal value and includes pins, where applicable.

![TAC5212 Simplified Block Diagram](https://www.ti.com/ods/images/SLASF23A/GUID-20231214-SS0I-3JP5-QBKN-KNQSWKTSTWLJ-low.svg) 

**Simplified Block Diagram**


# 4  Device Comparison Table


| FEATURE | TAC5212 | TAC5112 | TAC5211 | TAC5111 | TAC5242 | TAC5142 |
| --- | --- | --- | --- | --- | --- | --- |
| Control interface | I<sup>2</sup>C or SPI | I<sup>2</sup>C or SPI | I<sup>2</sup>C or SPI | I<sup>2</sup>C or SPI | Pin or Hardware control | Pin or Hardware control |
| Digital audio serial interface | TDM or I<sup>2</sup>S or left-justified (LJ) | TDM or I<sup>2</sup>S or left-justified (LJ) | TDM or I<sup>2</sup>S or left-justified (LJ) | TDM or I<sup>2</sup>S or left-justified (LJ) | TDM or I<sup>2</sup>S or left-justified (LJ) | TDM or I<sup>2</sup>S or left-justified (LJ) |
| Audio ADC channels | 2 | 2 | 1 | 1 | 2 | 2 |
| Digital microphone channels | 4 | 4 | 4 | 4 | Not available (N/A) | Not available (N/A) |
| Microphone bias | Yes (Programmable voltage) | Yes (Programmable voltage) | Yes (Programmable voltage) | Yes (Programmable voltage) | Yes (Fixed voltage) | Yes (Fixed voltage) |
| ADC Dynamic range | 119dB | 105dB | 119dB | 105dB | 119dB | 103dB |
| Audio DAC Channels | 4 | 4 | 2 | 2 | 2 | 2 |
| DAC Dynamic Range | 120dB | 114dB | 120dB | 114dB | 120dB | 110dB |
| Compatibility | Pin-to-pin, package, and control registers compatible; drop-in replacements of each other | Pin-to-pin, package, and control registers compatible; drop-in replacements of each other | Pin-to-pin, package, and control registers compatible; drop-in replacements of each other | Pin-to-pin, package, and control registers compatible; drop-in replacements of each other | Pin-to-pin, package, and control configuration compatible; drop-in replacements of each other | Pin-to-pin, package, and control configuration compatible; drop-in replacements of each other |
| Package | VQFN, 24-pins, 4.00mm × 4.00mm with 0.5mm pitch | VQFN, 24-pins, 4.00mm × 4.00mm with 0.5mm pitch | VQFN, 24-pins, 4.00mm × 4.00mm with 0.5mm pitch | VQFN, 24-pins, 4.00mm × 4.00mm with 0.5mm pitch | VQFN, 24-pins, 4.00mm × 4.00mm with 0.5mm pitch | VQFN, 24-pins, 4.00mm × 4.00mm with 0.5mm pitch |


# 5  Pin Configuration and Functions

![TAC5212 24-Pin QFN Package with Exposed Thermal Pad and Corner Pins, Top View](https://www.ti.com/ods/images/SLASF23A/GUID-20241125-SS0I-1CWO-7COX-15H2Y91PZ309-low.svg) 

**Figure 5-1 24-Pin QFN Package with Exposed Thermal Pad and Corner Pins, Top View**

**Table 5-1 Pin Functions**


| NAME | NO. | TYPE <sup>(1)</sup> | DESCRIPTION |
| --- | --- | --- | --- |
| VSS | A1 | Ground | Ground pin. Short directly to board ground plane. |
| DREG | 1 | Digital Supply | Digital on-chip regulator output voltage for digital supply (1.55V, nominal) |
| BCLK | 2 | Digital I/O | Audio serial data interface bus bit clock |
| FSYNC | 3 | Digital I/O | Audio serial data interface bus frame synchronization signal |
| DOUT | 4 | Digital I/O | Audio serial data interface bus output |
| DIN | 5 | Digital Input | Audio serial data interface bus input |
| IOVDD | 6 | Digital Supply | Digital I/O power supply (1.2V or 1.8V or 3.3V, nominal) |
| VSS | A2 | Ground | Ground pin. Short directly to board ground plane. |
| SCL | 7 | Digital Input | Clock for I<sup>2</sup>C control interface |
| SDA | 8 | Digital Input | Data for I<sup>2</sup>C control interface |
| GPIO1 | 9 | Digital I/O | General-purpose digital input/output 1 (multipurpose functions such as daisy-chain input, audio data output, PLL input clock source, interrupt, and so forth) |
| GPIO2 | 10 | Digital I/O | General-purpose digital input/output 2 (multipurpose functions such as daisy-chain input, audio data output, PLL input clock source, interrupt, and so forth) |
| GPO1 | 11 | Digital Output | General-purpose digital output 1 (multipurpose functions such as audio data output, interrupt, and so forth) |
| GPI1 | 12 | Digital Input | General-purpose digital input 1 (multipurpose functions such as daisy-chain input, PLL input clock source, and so forth) |
| VSS | A3 | Ground | Ground pin. Short directly to board ground plane. |
| ADDR | 13 | Analog Input | I<sup>2</sup>C address pin |
| MICBIAS | 14 | Analog | Microphone bias output (Programmable output up to 3V) |
| IN1P | 15 | Analog Input | Analog input 1P pin |
| IN1M | 16 | Analog Input | Analog input 1M pin |
| IN2P | 17 | Analog Input | Analog input 2P pin |
| IN2M | 18 | Analog Input | Analog input 2M pin |
| VSS | A4 | Ground | Ground pin. Short directly to board ground plane. |
| OUT1M | 19 | Analog Output | Analog output 1M pin |
| OUT1P | 20 | Analog Output | Analog output 1P pin |
| OUT2P | 21 | Analog Output | Analog output 2P pin |
| OUT2M | 22 | Analog Output | Analog output 2M pin |
| AVDD | 23 | Analog Supply | Analog power supply (1.8V or 3.3V, nominal) |
| VREF | 24 | Analog | Analog reference voltage filter output |
| VSS | Thermal Pad | Ground | Thermal pad shorted to internal device ground. Short directly to board ground plane. |


(1)  I = Input, O = Output, I/O = Input or Output, G = Ground, P = Power.


# 6  Specifications


## 6.1  Absolute Maximum Ratings

over the operating ambient temperature range (unless otherwise noted)[<sup>(1)</sup>](#ABSMAXNOTE_li:1;91:47)

|  |  | MIN | MAX | UNIT |
| --- | --- | --- | --- | --- |
| Supply voltage | AVDD to VSS (thermal pad) | –0.3 | 3.9 | V |
| Supply voltage | IOVDD to VSS (thermal pad) | –0.3 | 3.9 | V |
| Ground voltage differences | VSS to VSS (thermal pad) | –0.3 | 0.3 | V |
| Analog input voltage | Analog input pins voltage to VSS (thermal pad) | –0.3 | 5.656 | V |
| Digital input voltage | Digital input pins voltage to VSS (thermal pad) | –0.3 | IOVDD + 0.3 | V |
| Temperature | Functional ambient, T<sub>A</sub> | –55 | 125 | °C |
| Operating ambient, T<sub>A</sub> | –40 | 125 |  | °C |
| Junction, T<sub>J</sub> | –40 | 150 |  | °C |
| Storage, T<sub>stg</sub> | –65 | 150 |  | °C |


(1)  Operation outside the Absolute Maximum Ratings may cause permanent device damage. Absolute Maximum Ratings do not imply functional operation of the device at these or any other conditions beyond those listed under Recommended Operating Conditions. If used outside the Recommended Operating Conditions but within the Absolute Maximum Ratings, the device may not be fully functional, and this may affect device reliability, functionality, performance, and shorten the device lifetime.


## 6.2  ESD Ratings


|  |  |  |  | VALUE | UNIT |
| --- | --- | --- | --- | --- | --- |
| V<sub>(ESD)</sub> | Electrostatic discharge | Human-body model (HBM), per ANSI/ESDA/JEDEC JS-001 <sup>(1)</sup> | Human-body model (HBM), per ANSI/ESDA/JEDEC JS-001 <sup>(1)</sup> | ±2000 | V |
| V<sub>(ESD)</sub> | Electrostatic discharge | Charged-device model (CDM), per ANSI/ESDA/JEDEC JS-002 <sup>(2)</sup> | Charged-device model (CDM), per ANSI/ESDA/JEDEC JS-002 <sup>(2)</sup> | ±500 | V |


(1)  JEDEC document JEP155 states that 500V HBM allows safe manufacturing with a standard ESD control process.

(2)  JEDEC document JEP157 states that 250V CDM allows safe manufacturing with a standard ESD control process.


## 6.3  Recommended Operating Conditions

over the operating ambient temperature range (unless otherwise noted)

|  |  |  | MIN | NOM | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| POWER | POWER | POWER | POWER | POWER | POWER | POWER |
| AVDD <sup>(1)</sup> | Analog supply voltage to VSS (thermal pad) - AVDD 3.3V operation | Analog supply voltage to VSS (thermal pad) - AVDD 3.3V operation | 3.0 | 3.3 | 3.6 | V |
| Analog supply voltage to VSS (thermal pad) - AVDD 1.8V operation <sup>(2)</sup> | Analog supply voltage to VSS (thermal pad) - AVDD 1.8V operation <sup>(2)</sup> | 1.65 | 1.8 | 1.95 |  | V |
| IOVDD | IO supply voltage to VSS (thermal pad) - IOVDD 3.3V operation | IO supply voltage to VSS (thermal pad) - IOVDD 3.3V operation | 3.0 | 3.3 | 3.6 | V |
| IO supply voltage to VSS (thermal pad) - IOVDD 1.8V operation <sup>(3)</sup> | IO supply voltage to VSS (thermal pad) - IOVDD 1.8V operation <sup>(3)</sup> | 1.65 | 1.8 | 1.95 |  | V |
| IO supply voltage to VSS (thermal pad) - IOVDD 1.2V operation <sup>(3)</sup> | IO supply voltage to VSS (thermal pad) - IOVDD 1.2V operation <sup>(3)</sup> | 1.08 | 1.2 | 1.32 |  | V |
| INPUTS | INPUTS | INPUTS | INPUTS | INPUTS | INPUTS | INPUTS |
| INxx | Analog input pins voltage to VSS (thermal pad) for line-in recording | Analog input pins voltage to VSS (thermal pad) for line-in recording | 0 |  | 5.6 | V |
| IO | Digital input pins voltage to VSS (thermal pad) | Digital input pins voltage to VSS (thermal pad) | 0 |  | IOVDD | V |
| ADDR | ADDR pin w.r.t VSS (thermal pad) | ADDR pin w.r.t VSS (thermal pad) | 0 |  | AVDD | V |
| TEMPERATURE | TEMPERATURE | TEMPERATURE | TEMPERATURE | TEMPERATURE | TEMPERATURE | TEMPERATURE |
| T<sub>A</sub> | Operating ambient temperature | Operating ambient temperature | –40 |  | 125 | °C |
| OTHERS | OTHERS | OTHERS | OTHERS | OTHERS | OTHERS | OTHERS |
| CCLK | GPIOx or GPIx controller mode clock frequency (CCLK) | GPIOx or GPIx controller mode clock frequency (CCLK) |  |  | 36.864 <sup>(4)</sup> | MHz |
| C<sub>b</sub> | SCL and SDA bus capacitance for I<sup>2</sup>C interface supports standard-mode and fast-mode | SCL and SDA bus capacitance for I<sup>2</sup>C interface supports standard-mode and fast-mode |  |  | 400 | pF |
| SCL and SDA bus capacitance for I<sup>2</sup>C interface supports fast-mode plus | SCL and SDA bus capacitance for I<sup>2</sup>C interface supports fast-mode plus |  |  | 550 |  | pF |
| C<sub>L</sub> | Digital output load capacitance | Digital output load capacitance |  | 20 | 50 | pF |


(1)  VSS and VSS (thermal pad); all ground pins must be tied together and must not differ in voltage by more than 0.2V.

(2)  Set the AVDD_MODE bit correctly for AVDD 1.8V Operation. Refer Section 9.3 for more details.

(3)  Set the IOVDD_IO_MODE bit correctly for IOVDD 1.8V and 1.2V Operation. Refer Section 9.3 for more details.

(4)  CCLK input rise time (V<sub>IL</sub> to V<sub>IH</sub>) and fall time (V<sub>IH</sub> to V<sub>IL</sub>) must be less than 5ns. For better audio noise performance, CCLK input must be used with low jitter.


## 6.4  Thermal Information


| 24 PINS | THERMAL METRIC <sup>(1)</sup> | TAC5212 | UNIT |
| --- | --- | --- | --- |
| R<sub>θJA</sub> | Junction-to-ambient thermal resistance | 38.4 | °C/W |
| R<sub>θJC(top)</sub> | Junction-to-case (top) thermal resistance | 26.3 | °C/W |
| R<sub>θJB</sub> | Junction-to-board thermal resistance | 15.9 | °C/W |
| ψ<sub>JT</sub> | Junction-to-top characterization parameter | 0.5 | °C/W |
| ψ<sub>JB</sub> | Junction-to-board characterization parameter | 15.8 | °C/W |
| R<sub>θJC(bot)</sub> | Junction-to-case (bottom) thermal resistance | 13.8 | °C/W |


(1)  For more information about traditional and new thermal metrics, see the [Semiconductor and IC Package Thermal Metrics](https://www.ti.com/lit/pdf/spra953) application report.


## 6.5  Electrical Characteristics

At T<sub>A</sub> = 25°C, AVDD = 3.3V, IOVDD = 3.3V, f<sub>IN</sub> = 1kHz sinusoidal signal, f<sub>S</sub> = 48kHz, 32-bit audio data, BCLK = 256×f<sub>S</sub>, TDM target mode, linear phase decimation/interpolation filters, 5kΩ input impedance setting, AC-coupled differential input with ADC_CHx_CM_TOL = 2'b00 or DC-coupled differential input with ADC_CHx_CM_TOL = 2'b10 as applicable, 1200Ω/600Ω line-out load in differential/single-ended configuration or 32Ω/16Ω receiver/headphone load as applicable, PLL on, channel gain = 0dB, MICBIAS programmed to VREF and other default configurations; measured filter free with an Audio Precision with a 20Hz to 20kHz un-weighted bandwidth, unless otherwise noted

| PARAMETER | PARAMETER | TEST CONDITIONS | TEST CONDITIONS | MIN | NOM | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ADC PERFORMANCE FOR INPUT RECORDING | ADC PERFORMANCE FOR INPUT RECORDING | ADC PERFORMANCE FOR INPUT RECORDING | ADC PERFORMANCE FOR INPUT RECORDING | ADC PERFORMANCE FOR INPUT RECORDING | ADC PERFORMANCE FOR INPUT RECORDING | ADC PERFORMANCE FOR INPUT RECORDING | ADC PERFORMANCE FOR INPUT RECORDING |
|  | Differential input full-scale DC signal voltage | AC-coupled or DC-coupled input   | AC-coupled or DC-coupled input   |  | 2 |  | V<sub>RMS</sub> |
| DC-coupled input (High Swing Mode) <sup>(3)</sup> | DC-coupled input (High Swing Mode) <sup>(3)</sup> |  | 4 |  |  |  | V<sub>RMS</sub> |
|  | Single-ended input full-scale AC signal voltage | AC-coupled or DC-coupled input | AC-coupled or DC-coupled input |  | 1 |  | V<sub>RMS</sub> |
| DC-coupled input (High Swing Mode) <sup>(3)</sup> | DC-coupled input (High Swing Mode) <sup>(3)</sup> |  | 2 |  |  |  | V<sub>RMS</sub> |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain | INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain |  | 119 |  | dB |
| INxx differential AC-coupled input and AC signal shorted to ground, 12dB channel gain | INxx differential AC-coupled input and AC signal shorted to ground, 12dB channel gain |  | 107 |  |  |  | dB |
| INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain | INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain |  | 111 |  |  |  | dB |
| INxx differential DC-coupled input and AC signal shorted to ground, 12dB channel gain | INxx differential DC-coupled input and AC signal shorted to ground, 12dB channel gain |  | 99 |  |  |  | dB |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | Wideband Mode <sup>(4)</sup> : INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain (Integrated till 20kHz and A-Weighted) | Wideband Mode <sup>(4)</sup> : INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain (Integrated till 20kHz and A-Weighted) |  | 100 |  | dB |
| SNR | Signal-to-noise ratio <sup>(1)</sup> | Wideband Mode <sup>(4)</sup> : INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain (Integrated till 85kHz) | Wideband Mode <sup>(4)</sup> : INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain (Integrated till 85kHz) |  | 89 |  | dB |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | Power Tune Mode <sup>(5)</sup> : INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain | Power Tune Mode <sup>(5)</sup> : INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain |  | 104 |  | dB |
| Power Tune Mode <sup>(5)</sup> : INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain | Power Tune Mode <sup>(5)</sup> : INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain |  | 103 |  |  |  | dB |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain, AVDD = 1.8V | INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain, AVDD = 1.8V |  | 113 |  | dB |
| INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain, AVDD = 1.8V | INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain, AVDD = 1.8V |  | 104 |  |  |  | dB |
| INxx differential DC-coupled input selected and AC signal shorted to ground, 12dB channel gain, AVDD = 1.8V | INxx differential DC-coupled input selected and AC signal shorted to ground, 12dB channel gain, AVDD = 1.8V |  | 94 |  |  |  | dB |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | Power Tune Mode <sup>(5)</sup> : INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain, AVDD = 1.8V | Power Tune Mode <sup>(5)</sup> : INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain, AVDD = 1.8V |  | 104 |  | dB |
| Power Tune Mode <sup>(5)</sup> : INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain, AVDD = 1.8V | Power Tune Mode <sup>(5)</sup> : INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain, AVDD = 1.8V |  | 101 |  |  |  | dB |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain, 10kΩ input impedance | INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain, 10kΩ input impedance |  | 115 |  | dB |
| INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain, 40kΩ input impedance | INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain, 40kΩ input impedance |  | 105 |  |  |  | dB |
| INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain, ADC_CH1_CM_TOL = 2'b01 | INxx differential AC-coupled input and AC signal shorted to ground, 0dB channel gain, ADC_CH1_CM_TOL = 2'b01 |  | 116 |  |  |  | dB |
| INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain, High Swing Mode <sup>(3)</sup> | INxx differential DC-coupled input and AC signal shorted to ground, 0dB channel gain, High Swing Mode <sup>(3)</sup> |  | 112 |  |  |  | dB |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | INxx single-ended AC-coupled input and AC signal shorted to ground, 0dB channel gain | INxx single-ended AC-coupled input and AC signal shorted to ground, 0dB channel gain |  | 111 |  | dB |
| Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | INxx single-ended AC-coupled input and AC signal shorted to ground, 12dB channel gain | INxx single-ended AC-coupled input and AC signal shorted to ground, 12dB channel gain |  | 99 |  |  | dB |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | INxx single-ended DC-coupled input and AC signal shorted to ground, 0dB channel gain | INxx single-ended DC-coupled input and AC signal shorted to ground, 0dB channel gain |  | 104 |  | dB |
| Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | INxx single-ended DC-coupled input and AC signal shorted to ground, 12dB channel gain | INxx single-ended DC-coupled input and AC signal shorted to ground, 12dB channel gain |  | 92 |  |  | dB |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | INxx single-ended mux AC-coupled input and AC signal shorted to ground, 0dB channel gain, 10kΩ input impedance | INxx single-ended mux AC-coupled input and AC signal shorted to ground, 0dB channel gain, 10kΩ input impedance |  | 97 |  | dB |
| Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | INxx single-ended mux DC-coupled input and AC signal shorted to ground, 0dB channel gain 10kΩ input impedance | INxx single-ended mux DC-coupled input and AC signal shorted to ground, 0dB channel gain 10kΩ input impedance |  | 96 |  |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | INxx differential AC-coupled input and –60dBFS AC signal input, 0dB channel gain | INxx differential AC-coupled input and –60dBFS AC signal input, 0dB channel gain |  | 119 |  | dB |
| INxx differential DC-coupled input and –60dBFS AC signal input, 0dB channel gain | INxx differential DC-coupled input and –60dBFS AC signal input, 0dB channel gain |  | 112 |  |  |  | dB |
| INxx differential DC-coupled input and –72dBFS AC signal input, 12dB channel gain | INxx differential DC-coupled input and –72dBFS AC signal input, 12dB channel gain |  | 100 |  |  |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | Power Tune Mode <sup>(5)</sup> : INxx differential AC-coupled input and –60dBFS AC signal input, 0dB channel gain | Power Tune Mode <sup>(5)</sup> : INxx differential AC-coupled input and –60dBFS AC signal input, 0dB channel gain |  | 106 |  | dB |
| Power Tune Mode <sup>(5)</sup> : INxx differential DC-coupled input and –60dBFS AC signal input, 0dB channel gain | Power Tune Mode <sup>(5)</sup> : INxx differential DC-coupled input and –60dBFS AC signal input, 0dB channel gain |  | 105 |  |  |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | INxx differential AC-coupled input and –60dBFS AC signal input, 0dB channel gain, AVDD = 1.8V | INxx differential AC-coupled input and –60dBFS AC signal input, 0dB channel gain, AVDD = 1.8V |  | 113 |  | dB |
| INxx differential DC-coupled input and –60dBFS AC signal input, 0dB channel gain, AVDD = 1.8V | INxx differential DC-coupled input and –60dBFS AC signal input, 0dB channel gain, AVDD = 1.8V |  | 105 |  |  |  | dB |
| INxx differential DC-coupled input and –72dBFS AC signal input, 12dB channel gain, AVDD = 1.8V | INxx differential DC-coupled input and –72dBFS AC signal input, 12dB channel gain, AVDD = 1.8V |  | 94 |  |  |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | Power Tune Mode: INxx differential AC-coupled input and –60dBFS AC signal input, 0dB channel gain, AVDD = 1.8V | Power Tune Mode: INxx differential AC-coupled input and –60dBFS AC signal input, 0dB channel gain, AVDD = 1.8V |  | 105 |  | dB |
| Power Tune Mode: INxx differential DC-coupled input and –60dBFS signal input, 0dB channel gain, AVDD = 1.8V | Power Tune Mode: INxx differential DC-coupled input and –60dBFS signal input, 0dB channel gain, AVDD = 1.8V |  | 102 |  |  |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | INxx differential AC-coupled input and –60dBFS AC signal input, 0dB channel gain, ADC_CH1_CM_TOL = 2'b01 | INxx differential AC-coupled input and –60dBFS AC signal input, 0dB channel gain, ADC_CH1_CM_TOL = 2'b01 |  | 117 |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | INxx single-ended AC-coupled input and –60dBFS AC signal input, 0dB channel gain | INxx single-ended AC-coupled input and –60dBFS AC signal input, 0dB channel gain |  | 110 |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | INxx single-ended DC-coupled input and –60dBFS AC signal input, 0dB channel gain | INxx single-ended DC-coupled input and –60dBFS AC signal input, 0dB channel gain |  | 104 |  | dB |
| INxx single-ended DC-coupled input and –72dBFS AC signal input, 12dB channel gain | INxx single-ended DC-coupled input and –72dBFS AC signal input, 12dB channel gain |  | 92 |  |  |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | INxx single-ended mux AC-coupled input and –60dBFS AC signal input, 0dB channel gain, 10kΩ input impedance | INxx single-ended mux AC-coupled input and –60dBFS AC signal input, 0dB channel gain, 10kΩ input impedance |  | 98 |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | INxx single-ended mux DC-coupled input and –60dBFS AC signal input, 0dB channel gain 10kΩ input impedance | INxx single-ended mux DC-coupled input and –60dBFS AC signal input, 0dB channel gain 10kΩ input impedance |  | 97 |  | dB |
| THD+N | Total harmonic distortion <sup>(2)</sup> | INxx differential AC-coupled input and –1dBFS AC signal input, 0dB channel gain | INxx differential AC-coupled input and –1dBFS AC signal input, 0dB channel gain |  | –98 |  | dB |
| INxx differential DC-coupled input and –1dBFS AC signal input, 0dB channel gain | INxx differential DC-coupled input and –1dBFS AC signal input, 0dB channel gain |  | –98 |  |  |  | dB |
| INxx differential DC-coupled input and –13dBFS AC signal input, 12dB channel gain | INxx differential DC-coupled input and –13dBFS AC signal input, 12dB channel gain |  | –96 |  |  |  | dB |
| THD+N | Total harmonic distortion <sup>(2)</sup> | INxx single-ended AC-coupled input and –1dBFS AC signal input, 0dB channel gain | INxx single-ended AC-coupled input and –1dBFS AC signal input, 0dB channel gain |  | –96 |  | dB |
| INxx single-ended DC-coupled input and –1dBFS AC signal input, 0dB channel gain | INxx single-ended DC-coupled input and –1dBFS AC signal input, 0dB channel gain |  | –86 |  |  |  | dB |
| INxx single-ended mux AC-coupled input and –1dBFS AC signal input, 0dB channel gain, 10kΩ input impedance | INxx single-ended mux AC-coupled input and –1dBFS AC signal input, 0dB channel gain, 10kΩ input impedance |  | –94 |  |  |  | dB |
| ADC OTHER PARAMETERS | ADC OTHER PARAMETERS | ADC OTHER PARAMETERS | ADC OTHER PARAMETERS | ADC OTHER PARAMETERS | ADC OTHER PARAMETERS | ADC OTHER PARAMETERS | ADC OTHER PARAMETERS |
|  | Input impedance | Input pins INxP or INxM, 5kΩ Input Impedance Mode | Input pins INxP or INxM, 5kΩ Input Impedance Mode |  | 5.5 |  | kΩ |
| Input pins INxP or INxM, 10kΩ Input Impedance Mode | Input pins INxP or INxM, 10kΩ Input Impedance Mode |  | 11 |  |  |  | kΩ |
| Input pins INxP or INxM, 40kΩ Input Impedance Mode | Input pins INxP or INxM, 40kΩ Input Impedance Mode |  | 44 |  |  |  | kΩ |
|  | Digital volume control range | Programmable 0.5dB steps | Programmable 0.5dB steps | –80 |  | 47 | dB |
|  | Input Signal Bandwidth | Upto 192KSPS FS Rate | Upto 192KSPS FS Rate |  | 0.46 |  | FS |
|  | >192KSPS | >192KSPS |  | 90 |  | kHz |  |
|  | Output data sample rate | Programmable | Programmable | 4 |  | 768 | kHz |
|  | Output data sample word length | Programmable | Programmable | 16 |  | 32 | Bits |
|  | Digital high-pass filter cutoff frequency | First-order IIR filter with programmable coefficients, –3dB point (default setting) | First-order IIR filter with programmable coefficients, –3dB point (default setting) |  | 1 |  | Hz |
|  | Interchannel isolation | –1dBFS AC signal line-in differential input to nonmeasurement channel | –1dBFS AC signal line-in differential input to nonmeasurement channel |  | –134 |  | dB |
|  | Interchannel gain mismatch | –6dBFS AC signal line-in differential input, 1kHz sinusoidal signal, 0dB channel gain | –6dBFS AC signal line-in differential input, 1kHz sinusoidal signal, 0dB channel gain |  | ±0.1 |  | dB |
|  | Interchannel phase mismatch | –6dBFS AC signal line-in differential input, 1kHz sinusoidal signal | –6dBFS AC signal line-in differential input, 1kHz sinusoidal signal |  | ±0.01 |  | Degrees |
| PSRR | Power-supply rejection ratio | 100mV<sub>PP</sub>, 1kHz sinusoidal signal on AVDD, differential input, 0dB channel gain | 100mV<sub>PP</sub>, 1kHz sinusoidal signal on AVDD, differential input, 0dB channel gain |  | 121 |  | dB |
| CMRR | Common-mode rejection ratio | Differential DC-coupled input, 0dB channel gain, –6dBFS AC input, 1kHz signal on both pins and measured level at output | Differential DC-coupled input, 0dB channel gain, –6dBFS AC input, 1kHz signal on both pins and measured level at output |  | 80 |  | dB |
| MICROPHONE BIAS | MICROPHONE BIAS | MICROPHONE BIAS | MICROPHONE BIAS | MICROPHONE BIAS | MICROPHONE BIAS | MICROPHONE BIAS | MICROPHONE BIAS |
|  | MICBIAS noise | Bandwidth = 20Hz to 20kHz, A-weighted, 1µF capacitor between MICBIAS and VSS (thermal pad) | Bandwidth = 20Hz to 20kHz, A-weighted, 1µF capacitor between MICBIAS and VSS (thermal pad) |  | 2 |  | µV<sub>RMS</sub> |
|  | MICBIAS voltage | Bypass to AVDD | Bypass to AVDD |  | AVDD |  | V |
|  | MICBIAS voltage | AVDD=1.8V | AVDD=1.8V |  | 1.375 |  | V |
|  | MICBIAS voltage | AVDD=3.3V | AVDD=3.3V |  | 2.75 |  | V |
| Analog Bypass to Line Out/Head Phone Amplifier | Analog Bypass to Line Out/Head Phone Amplifier | Analog Bypass to Line Out/Head Phone Amplifier | Analog Bypass to Line Out/Head Phone Amplifier | Analog Bypass to Line Out/Head Phone Amplifier | Analog Bypass to Line Out/Head Phone Amplifier | Analog Bypass to Line Out/Head Phone Amplifier | Analog Bypass to Line Out/Head Phone Amplifier |
|  | Input impedance | Input pins INxP or INxM, 4.4kΩ Input Impedance Mode   | Input pins INxP or INxM, 4.4kΩ Input Impedance Mode   |  | 4.4 |  | kΩ |
| Input pins INxP or INxM, 20kΩ Input Impedance Mode   | Input pins INxP or INxM, 20kΩ Input Impedance Mode   |  | 20 |  |  |  | kΩ |
|  | Differential Full Scale Output | AVDD=3.3V | AVDD=3.3V |  | 2 |  | Vrms |
|  | AVDD=1.8V | AVDD=1.8V |  | 1 |  | Vrms |  |
|  | Single Ended Full Scale Output | AVDD=3.3V | AVDD=3.3V |  | 1 |  | Vrms |
|  | Gain Error | AC-Coupled Input, -6dBFS input | AC-Coupled Input, -6dBFS input |  | ±0.1 |  | dB |
|  | Noise, A-Weighted | Idle Channel, AC-Coupled Input Shorted to Ground, Differential output | Idle Channel, AC-Coupled Input Shorted to Ground, Differential output |  | 3.5 |  | µV<sub>RMS</sub> |
|  | Noise, A-Weighted | Idle Channel, AC-Coupled Input Shorted to Ground, Single-ended output | Idle Channel, AC-Coupled Input Shorted to Ground, Single-ended output |  | 19.7 |  | µV<sub>RMS</sub> |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | Idle Channel, AC-Coupled Input Shorted to Ground, Differential output | Idle Channel, AC-Coupled Input Shorted to Ground, Differential output |  | 115 |  | dB |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | Idle Channel, AC-Coupled Input Shorted to Ground, Single-ended output | Idle Channel, AC-Coupled Input Shorted to Ground, Single-ended output |  | 95 |  | dB |
| THD+N | Total harmonic distortion <sup>(2)</sup> | IN1 differential AC-coupled Input and -1dBFS AC signal input, 0dB channel gain | IN1 differential AC-coupled Input and -1dBFS AC signal input, 0dB channel gain |  | –102 |  | dB |
| DAC Performance for Line Output/Head Phone Playback | DAC Performance for Line Output/Head Phone Playback | DAC Performance for Line Output/Head Phone Playback | DAC Performance for Line Output/Head Phone Playback | DAC Performance for Line Output/Head Phone Playback | DAC Performance for Line Output/Head Phone Playback | DAC Performance for Line Output/Head Phone Playback | DAC Performance for Line Output/Head Phone Playback |
|  | Full Scale Output Voltage | Differential output between OUTxP and OUTxM, AVDD=3.3V | Differential output between OUTxP and OUTxM, AVDD=3.3V |  | 2 |  | V<sub>RMS</sub> |
| Differential output between OUTxP and OUTxM, AVDD=1.8V | Differential output between OUTxP and OUTxM, AVDD=1.8V |  | 1 |  |  |  | V<sub>RMS</sub> |
| Single-ended output, AVDD=3.3V | Single-ended output, AVDD=3.3V |  | 1 |  |  |  | V<sub>RMS</sub> |
| Single-ended output, AVDD=1.8V | Single-ended output, AVDD=1.8V |  | 0.5 |  |  |  | V<sub>RMS</sub> |
| Pseudo-differential output between OUTxP and OUTxM, AVDD=3.3V | Pseudo-differential output between OUTxP and OUTxM, AVDD=3.3V |  | 1 |  |  |  | V<sub>RMS</sub> |
| Pseudo-differential output between OUTxP and OUTxM, AVDD=1.8V | Pseudo-differential output between OUTxP and OUTxM, AVDD=1.8V |  | 0.5 |  |  |  | V<sub>RMS</sub> |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | Differential output, 0dBFS signal, AVDD=3.3V | Differential output, 0dBFS signal, AVDD=3.3V |  | 120 |  | dB |
| Single-ended output, 0dBFS signal, AVDD=3.3V | Single-ended output, 0dBFS signal, AVDD=3.3V |  | 111 |  |  |  | dB |
| Pseudo-differential output, 0dBFS signal, AVDD=3.3V | Pseudo-differential output, 0dBFS signal, AVDD=3.3V |  | 112 |  |  |  | dB |
| Differential output, 0dBFS signal, AVDD=1.8V | Differential output, 0dBFS signal, AVDD=1.8V |  | 115 |  |  |  | dB |
| Single-ended output, 0dBFS signal, AVDD=1.8V | Single-ended output, 0dBFS signal, AVDD=1.8V |  | 105 |  |  |  | dB |
| Pseudo-differential output, 0dBFS signal, AVDD=1.8V | Pseudo-differential output, 0dBFS signal, AVDD=1.8V |  | 106 |  |  |  | dB |
| Differential output, 0dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> | Differential output, 0dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> |  | 117 |  |  |  | dB |
| Single-ended output, 0dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> | Single-ended output, 0dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> |  | 104 |  |  |  | dB |
| Pseudo-differential output, 0dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> | Pseudo-differential output, 0dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> |  | 109 |  |  |  | dB |
| Differential output, 0dBFS signal, AVDD=1.8V, Power Tune Mode <sup>(5)</sup> | Differential output, 0dBFS signal, AVDD=1.8V, Power Tune Mode <sup>(5)</sup> |  | 112 |  |  |  | dB |
| Single-ended output, 0dBFS signal, AVDD=1.8V, Power Tune Mode <sup>(5)</sup> | Single-ended output, 0dBFS signal, AVDD=1.8V, Power Tune Mode <sup>(5)</sup> |  | 100 |  |  |  | dB |
| Pseudo-differential output, 0dBFS Signal, AVDD=1.8V, Power Tune Mode <sup>(5)</sup> | Pseudo-differential output, 0dBFS Signal, AVDD=1.8V, Power Tune Mode <sup>(5)</sup> |  | 104 |  |  |  | dB |
| SNR | Signal-to-noise ratio, A-weighted <sup>(1)</sup> <sup>(2)</sup> | Differential-output, Receiver load, 0dBFS signal, AVDD=3.3V | Differential-output, Receiver load, 0dBFS signal, AVDD=3.3V |  | 118 |  | dB |
| Single-ended output, Headphone load, 0dBFS signal, AVDD=3.3V | Single-ended output, Headphone load, 0dBFS signal, AVDD=3.3V |  | 110 |  |  |  | dB |
| Pseudo-differential output, Receiver load, 0dBFS signal, AVDD=3.3V | Pseudo-differential output, Receiver load, 0dBFS signal, AVDD=3.3V |  | 112 |  |  |  | dB |
| Differential-output, Receiver load, 0dBFS signal, AVDD=1.8V | Differential-output, Receiver load, 0dBFS signal, AVDD=1.8V |  | 114 |  |  |  | dB |
| Single-ended output, Headphone load, 0dBFS signal, AVDD=1.8V | Single-ended output, Headphone load, 0dBFS signal, AVDD=1.8V |  | 105 |  |  |  | dB |
| Pseudo-differential output, Receiver load, 0dBFS signal, AVDD=1.8V | Pseudo-differential output, Receiver load, 0dBFS signal, AVDD=1.8V |  | 106 |  |  |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | Differential output, -60dBFS signal, AVDD=3.3V | Differential output, -60dBFS signal, AVDD=3.3V |  | 120 |  | dB |
| Single-ended output, -60dBFS signal, AVDD=3.3V | Single-ended output, -60dBFS signal, AVDD=3.3V |  | 111 |  |  |  | dB |
| Pseudo-differential output, -60dBFS signal, AVDD=3.3V | Pseudo-differential output, -60dBFS signal, AVDD=3.3V |  | 112 |  |  |  | dB |
| Differential output, -60dBFS signal, AVDD=1.8V | Differential output, -60dBFS signal, AVDD=1.8V |  | 115 |  |  |  | dB |
| Single-ended output, -60dBFS Signal, AVDD=1.8V | Single-ended output, -60dBFS Signal, AVDD=1.8V |  | 105 |  |  |  | dB |
| Pseudo-differential output, -60dBFS signal, AVDD=1.8V | Pseudo-differential output, -60dBFS signal, AVDD=1.8V |  | 107 |  |  |  | dB |
| Differential output, -60dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> | Differential output, -60dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> |  | 115 |  |  |  | dB |
| Single-ended output, -60dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> | Single-ended output, -60dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> |  | 104 |  |  |  | dB |
| Pseudo-differential output, -60dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> | Pseudo-differential output, -60dBFS signal, AVDD=3.3V, Power Tune Mode <sup>(5)</sup> |  | 109 |  |  |  | dB |
| Differential output, -60dBFS signal, AVDD=1.8V, Power Tune Mode <sup>(5)</sup> | Differential output, -60dBFS signal, AVDD=1.8V, Power Tune Mode <sup>(5)</sup> |  | 111 |  |  |  | dB |
| Single-ended output, -60dBFS signal, AVDD=1.8V, Power Tune Mode <sup>(5)</sup> | Single-ended output, -60dBFS signal, AVDD=1.8V, Power Tune Mode <sup>(5)</sup> |  | 100 |  |  |  | dB |
| Pseudo-differential output, -60dBFS signal, AVDD=1.8V, Power Tune Mode | Pseudo-differential output, -60dBFS signal, AVDD=1.8V, Power Tune Mode |  | 104 |  |  |  | dB |
| DR | Dynamic range, A-weighted <sup>(2)</sup> | Differential-output, Receiver load, -60dBFS signal, AVDD=3.3V | Differential-output, Receiver load, -60dBFS signal, AVDD=3.3V |  | 118 |  | dB |
| Single-ended output, Headphone load, -60dBFS signal, AVDD=3.3V | Single-ended output, Headphone load, -60dBFS signal, AVDD=3.3V |  | 111 |  |  |  | dB |
| Pseudo-differential output, Receiver load, -60dBFS signal, AVDD=3.3V | Pseudo-differential output, Receiver load, -60dBFS signal, AVDD=3.3V |  | 112 |  |  |  | dB |
| Differential-output, Receiver load, -60dBFS signal, AVDD=1.8V | Differential-output, Receiver load, -60dBFS signal, AVDD=1.8V |  | 114 |  |  |  | dB |
| Single-ended output, Headphone load, -60dBFS signal, AVDD=1.8V | Single-ended output, Headphone load, -60dBFS signal, AVDD=1.8V |  | 105 |  |  |  | dB |
| Pseudo-differential output, Receiver load, -60dBFS signal, AVDD=1.8V | Pseudo-differential output, Receiver load, -60dBFS signal, AVDD=1.8V |  | 107 |  |  |  | dB |
| THD+N | Total harmonic distortion <sup>(2)</sup> | Differential output, –1dBFS signal, AVDD= 3.3V | Differential output, –1dBFS signal, AVDD= 3.3V |  | –104 |  | dB |
| Differential output, –1dBFS signal, AVDD= 1.8V | Differential output, –1dBFS signal, AVDD= 1.8V |  | –95 |  |  |  | dB |
| Single-ended output, 0dBFS signal, Headphone load, AVDD=3.3V | Single-ended output, 0dBFS signal, Headphone load, AVDD=3.3V |  | –94 |  |  |  | dB |
|  | Headphone load range | Single-ended | Single-ended | 4 | 16 | 600 | Ω |
|  | Line-out load range | Single-ended | Single-ended | 600 |  |  | Ω |
|  | Headphone/Line-out Cap load | Single-ended | Single-ended | 0 |  | 2 | nF |
| DAC Channel OTHER PARAMETERS | DAC Channel OTHER PARAMETERS | DAC Channel OTHER PARAMETERS | DAC Channel OTHER PARAMETERS | DAC Channel OTHER PARAMETERS | DAC Channel OTHER PARAMETERS | DAC Channel OTHER PARAMETERS | DAC Channel OTHER PARAMETERS |
|  | Output Offset | 0 Input, Differential line-output | 0 Input, Differential line-output |  | ±0.5 |  | mV |
|  | Output Common Mode | Common Mode Level for OUTxP and OUTxM, AVDD = 1.8V (Register Configurable) | Common Mode Level for OUTxP and OUTxM, AVDD = 1.8V (Register Configurable) |  | 0.9 |  | V |
|  | Common Mode Level for OUTxP and OUTxM, AVDD = 3.3V (Register Configurable) | Common Mode Level for OUTxP and OUTxM, AVDD = 3.3V (Register Configurable) |  | 1.65 |  |  | V |
|  | Common Mode Error | DC Error in Common Mode Voltage | DC Error in Common Mode Voltage |  | ±20 |  | mV |
|  | Output Signal Bandwidth | Upto 192KSPS FS Rate | Upto 192KSPS FS Rate |  | 0.46 |  | FS |
|  | >192KSPS | >192KSPS |  | 90 |  | kHz |  |
|  | Input data sample rate | Programmable | Programmable | 4 |  | 768 | kHz |
|  | Input data sample word length | Programmable | Programmable | 16 |  | 32 | Bits |
|  | Digital high-pass filter cutoff frequency | First-order IIR filter with programmable coefficients, –3dB point (default setting) | First-order IIR filter with programmable coefficients, –3dB point (default setting) |  | 1 |  | Hz |
|  | Interchannel isolation | Differential output, –1dBFS input signal on nonmeasurement channel | Differential output, –1dBFS input signal on nonmeasurement channel |  | –134 |  | dB |
|  | Gain Error | Differential output, –6dBFS Input signal | Differential output, –6dBFS Input signal |  | ±0.1 |  | dB |
|  | Interchannel gain mismatch | Differential output, –6dBFS Input signal | Differential output, –6dBFS Input signal |  | ±0.1 |  | dB |
|  | Interchannel phase mismatch | Differential output, –6dBFS Input signal | Differential output, –6dBFS Input signal |  | ±0.01 |  | Degrees |
| PSRR | Power-supply rejection ratio | 100-mV<sub>PP</sub>, 1kHz sinusoidal signal on AVDD, differential input selected, 0dB channel gain | 100-mV<sub>PP</sub>, 1kHz sinusoidal signal on AVDD, differential input selected, 0dB channel gain |  | 120 |  | dB |
|  | Mute Attenuation |  |  |  | –130 |  | dB |
| P<sub>out</sub> | Output Power Delivery | Single-ended/Pseudo-differential headphone R<sub>L</sub>=16Ω, THD+N<0.1% | Single-ended/Pseudo-differential headphone R<sub>L</sub>=16Ω, THD+N<0.1% |  | 62.5 |  | mW |
| DIGITAL I/O | DIGITAL I/O | DIGITAL I/O | DIGITAL I/O | DIGITAL I/O | DIGITAL I/O | DIGITAL I/O | DIGITAL I/O |
| V<sub>IL</sub> | Low-level digital input logic voltage threshold | All digital pins except SDA and SCL, IOVDD 1.8V or 1.2V operation | All digital pins except SDA and SCL, IOVDD 1.8V or 1.2V operation | –0.3 |  | 0.35 × IOVDD | V |
| All digital pins except SDA and SCL, IOVDD 3.3V operation | All digital pins except SDA and SCL, IOVDD 3.3V operation | –0.3 |  | 0.8 |  |  | V |
| V<sub>IH</sub> | High-level digital input logic voltage threshold | All digital pins except SDA and SCL, IOVDD 1.8V or 1.2V operation | All digital pins except SDA and SCL, IOVDD 1.8V or 1.2V operation | 0.65 × IOVDD |  | IOVDD + 0.3 | V |
| All digital pins except SDA and SCL, IOVDD 3.3V operation | All digital pins except SDA and SCL, IOVDD 3.3V operation | 2 |  | IOVDD + 0.3 |  |  | V |
| V<sub>OL</sub> | Low-level digital output voltage | All digital pins except SDA and SCL, I<sub>OL</sub> = –2mA, IOVDD 1.8V or 1.2V operation | All digital pins except SDA and SCL, I<sub>OL</sub> = –2mA, IOVDD 1.8V or 1.2V operation |  |  | 0.45 | V |
| All digital pins except SDA and SCL, I<sub>OL</sub> = –2mA, IOVDD 3.3V operation | All digital pins except SDA and SCL, I<sub>OL</sub> = –2mA, IOVDD 3.3V operation |  |  | 0.4 |  |  | V |
| V<sub>OH</sub> | High-level digital output voltage | All digital pins except SDA and SCL, I<sub>OH</sub> = 2mA, IOVDD 1.8V or 1.2V operation | All digital pins except SDA and SCL, I<sub>OH</sub> = 2mA, IOVDD 1.8V or 1.2V operation | IOVDD – 0.45 |  |  | V |
| All digital pins except SDA and SCL, I<sub>OH</sub> = 2mA, IOVDD 3.3V operation | All digital pins except SDA and SCL, I<sub>OH</sub> = 2mA, IOVDD 3.3V operation | 2.4 |  |  |  |  | V |
| V<sub>IL(I2C)</sub> | Low-level digital input logic voltage threshold | SDA and SCL | SDA and SCL | –0.5 |  | 0.3 × IOVDD | V |
| V<sub>IH(I2C)</sub> | High-level digital input logic voltage threshold | SDA and SCL | SDA and SCL | 0.7 × IOVDD |  | IOVDD + 0.5 | V |
| V<sub>OL1(I2C)</sub> | Low-level digital output voltage | SDA, I<sub>OL(I2C)</sub> = –3mA, IOVDD 3.3V operation | SDA, I<sub>OL(I2C)</sub> = –3mA, IOVDD 3.3V operation |  |  | 0.4 | V |
| V<sub>OL2(I2C)</sub> | Low-level digital output voltage | SDA, I<sub>OL(I2C)</sub> = –2mA, IOVDD 1.8V or 1.2V operation | SDA, I<sub>OL(I2C)</sub> = –2mA, IOVDD 1.8V or 1.2V operation |  |  | 0.2 x IOVDD | V |
| I<sub>OL(I2C)</sub> | Low-level digital output current | SDA, V<sub>OL(I2C)</sub> = 0.4V, standard-mode or fast-mode | SDA, V<sub>OL(I2C)</sub> = 0.4V, standard-mode or fast-mode | 3 |  |  | mA |
| SDA, V<sub>OL(I2C)</sub> = 0.4V, fast-mode plus | SDA, V<sub>OL(I2C)</sub> = 0.4V, fast-mode plus | 20 |  |  |  |  | mA |
| I<sub>IL</sub> | Input logic-low leakage for digital inputs | All digital pins, Input = 0V | All digital pins, Input = 0V | –5 | 0.1 | 5 | µA |
| I<sub>IH</sub> | Input logic-high leakage for digital inputs | All digital pins, Input = IOVDD | All digital pins, Input = IOVDD | –5 | 0.1 | 5 | µA |
| C<sub>IN</sub> | Input capacitance for digital inputs | All digital pins | All digital pins |  | 5 |  | pF |
| R<sub>PD</sub> | Pulldown resistance for digital I/O pins when asserted on |  |  |  | 20 |  | kΩ |
| TYPICAL SUPPLY CURRENT CONSUMPTION | TYPICAL SUPPLY CURRENT CONSUMPTION | TYPICAL SUPPLY CURRENT CONSUMPTION | TYPICAL SUPPLY CURRENT CONSUMPTION | TYPICAL SUPPLY CURRENT CONSUMPTION | TYPICAL SUPPLY CURRENT CONSUMPTION | TYPICAL SUPPLY CURRENT CONSUMPTION | TYPICAL SUPPLY CURRENT CONSUMPTION |
| I<sub>AVDD</sub> | Current consumption in sleep mode (software shutdown mode) | All device external clocks stopped | All device external clocks stopped |  | 9 |  | µA |
| I<sub>IOVDD</sub> |  | 1 |  |  |  |  | µA |
| I<sub>AVDD</sub> | Current consumption with MICBIAS ON, 5mA load, ADC off | f<sub>S</sub> = 48kHz, BCLK = 256 × f<sub>S</sub> | f<sub>S</sub> = 48kHz, BCLK = 256 × f<sub>S</sub> |  | 1.5 |  | mA |
| I<sub>IOVDD</sub> |  | 0.02 |  |  |  |  | mA |
| I<sub>AVDD</sub> | Current consumption with ADC 2-channel operation, MICBIAS off, PLL on | f<sub>S</sub> = 16kHz, BCLK = 512 × f<sub>S</sub> | f<sub>S</sub> = 16kHz, BCLK = 512 × f<sub>S</sub> |  | 8.6 |  | mA |
| I<sub>IOVDD</sub> |  | 0.1 |  |  |  |  | mA |
| I<sub>AVDD</sub> | Current consumption with ADC 2-channel operation, MICBIAS off, PLL off | f<sub>S</sub> = 48kHz, BCLK = 512 × f<sub>S</sub> | f<sub>S</sub> = 48kHz, BCLK = 512 × f<sub>S</sub> |  | 5.7 |  | mA |
| I<sub>IOVDD</sub> |  | 0.3 |  |  |  |  | mA |
| I<sub>AVDD</sub> | Current consumption with ADC 2-channel operation, MICBIAS on, PLL off | f<sub>S</sub> = 48kHz, BCLK = 512 × f<sub>S</sub> | f<sub>S</sub> = 48kHz, BCLK = 512 × f<sub>S</sub> |  | 6.6 |  | mA |
| I<sub>IOVDD</sub> |  | 0.3 |  |  |  |  | mA |
| I<sub>AVDD</sub> | Current consumption with DAC to Headphone 2-channel operation, MICBIAS off, PLL on | f<sub>S</sub> = 16kHz, BCLK = 512 × f<sub>S</sub> | f<sub>S</sub> = 16kHz, BCLK = 512 × f<sub>S</sub> |  | 18.8 |  | mA |
| I<sub>IOVDD</sub> |  | 0.02 |  |  |  |  | mA |
| I<sub>AVDD</sub> | Current consumption with DAC to Headphone 2-channel operation, MICBIAS off, PLL off | f<sub>S</sub> = 48kHz, BCLK = 512 × f<sub>S</sub> | f<sub>S</sub> = 48kHz, BCLK = 512 × f<sub>S</sub> |  | 16 |  | mA |
| I<sub>IOVDD</sub> |  | 0.04 |  |  |  |  | mA |
| I<sub>AVDD</sub> | Current consumption with ADC 2-channel operation and DAC to Headphone 2-channel operation, MICBIAS on, PLL on | f<sub>S</sub> = 48kHz, BCLK = 512 × f<sub>S</sub> | f<sub>S</sub> = 48kHz, BCLK = 512 × f<sub>S</sub> |  | 28.5 |  | mA |
| I<sub>IOVDD</sub> |  | 0.3 |  |  |  |  | mA |
| I<sub>AVDD</sub> | Power Tune Mode <sup>(5)</sup> : Current consumption with ADC 2-channel operation, MICBIAS off, PLL off, AVDD=1.8V | f<sub>S</sub> = 48kHz, BCLK = 128 × f<sub>S</sub> | f<sub>S</sub> = 48kHz, BCLK = 128 × f<sub>S</sub> |  | 4.1 |  | mA |
| I<sub>AVDD</sub> | Power Tune Mode <sup>(5)</sup> : Current consumption with DAC to Lineout 2-channel single-ended operation, MICBIAS off, PLL off, AVDD=1.8V | f<sub>S</sub> = 48kHz, BCLK = 128 × f<sub>S</sub> | f<sub>S</sub> = 48kHz, BCLK = 128 × f<sub>S</sub> |  | 5.6 |  | mA |
| I<sub>AVDD</sub> | Power Tune Mode <sup>(5)</sup> : Current consumption with DAC to Lineout 2-channel operation, MICBIAS off, PLL on | f<sub>S</sub> = 48kHz, BCLK = 512 × f<sub>S</sub> | f<sub>S</sub> = 48kHz, BCLK = 512 × f<sub>S</sub> |  | 9.2 |  | mA |
| I<sub>IOVDD</sub> |  | 0.04 |  |  |  |  | mA |


(1)  Ratio of output level with 1kHz full-scale sine-wave input, to the output level with the AC signal input shorted to ground, measured A-weighted over a 20Hz to 20kHz bandwidth using an audio analyzer.

(2)  All performance measurements done with 20kHz low-pass filter and, where noted, an A-weighted filter. Failure to use such a filter can result in higher THD+N and lower SNR and dynamic range readings than shown in the Electrical Characteristics. The low-pass filter removes out-of-band noise, which, although not audible, can affect dynamic specification values.

(3)  ADC_CHx_FULLSCALE_VAL = 1'b1 and 10kΩ input impedance for High Swing Mode

(4)  ADC_CHx_BW_MODE = 1'b1 and 40kΩ input impedance for Wideband Mode

(5)  PWR_TUNE_CFG0 = 0xD4, PWR_TUNE_CFG1 = 0x96 and PLL_DIS = 1'b1 for Power Tune Mode


## 6.6  Timing Requirements: I<sup>2</sup>C Interface

At T<sub>A</sub> = 25°C, IOVDD = 3.3V or 1.8V or 1.2V (unless otherwise noted); see Figure 5-1 for timing diagram. Set the IOVDD_IO_MODE bit correctly for IOVDD 1.8V and 1.2V Operation. Refer Section 9.3 for more details.

|  |  | MIN | NOM | MAX | UNIT |
| --- | --- | --- | --- | --- | --- |
| STANDARD-MODE | STANDARD-MODE | STANDARD-MODE | STANDARD-MODE | STANDARD-MODE | STANDARD-MODE |
| f<sub>SCL</sub> | SCL clock frequency | 0 |  | 100 | kHz |
| t<sub>HD;STA</sub> | Hold time (repeated) START condition. After this period, the first clock pulse is generated. | 4 |  |  | μs |
| t<sub>LOW</sub> | Low period of the SCL clock | 4.7 |  |  | μs |
| t<sub>HIGH</sub> | High period of the SCL clock | 4 |  |  | μs |
| t<sub>SU;STA</sub> | Setup time for a repeated START condition | 4.7 |  |  | μs |
| t<sub>HD;DAT</sub> | Data hold time | 0 |  | 3.45 | μs |
| t<sub>SU;DAT</sub> | Data setup time | 250 |  |  | ns |
| t<sub>r</sub> | SDA and SCL rise time |  |  | 1000 | ns |
| t<sub>f</sub> | SDA and SCL fall time |  |  | 300 | ns |
| t<sub>SU;STO</sub> | Setup time for STOP condition | 4 |  |  | μs |
| t<sub>BUF</sub> | Bus free time between a STOP and START condition | 4.7 |  |  | μs |
| FAST-MODE | FAST-MODE | FAST-MODE | FAST-MODE | FAST-MODE | FAST-MODE |
| f<sub>SCL</sub> | SCL clock frequency | 0 |  | 400 | kHz |
| t<sub>HD;STA</sub> | Hold time (repeated) START condition. After this period, the first clock pulse is generated. | 0.6 |  |  | μs |
| t<sub>LOW</sub> | Low period of the SCL clock | 1.3 |  |  | μs |
| t<sub>HIGH</sub> | High period of the SCL clock | 0.6 |  |  | μs |
| t<sub>SU;STA</sub> | Setup time for a repeated START condition | 0.6 |  |  | μs |
| t<sub>HD;DAT</sub> | Data hold time | 0 |  | 0.9 | μs |
| t<sub>SU;DAT</sub> | Data setup time | 100 |  |  | ns |
| t<sub>r</sub> | SDA and SCL rise time | 20 |  | 300 | ns |
| t<sub>f</sub> | SDA and SCL fall time | 20 × (IOVDD / 5.5 V) |  | 300 | ns |
| t<sub>SU;STO</sub> | Setup time for STOP condition | 0.6 |  |  | μs |
| t<sub>BUF</sub> | Bus free time between a STOP and START condition | 1.3 |  |  | μs |
| FAST-MODE PLUS | FAST-MODE PLUS | FAST-MODE PLUS | FAST-MODE PLUS | FAST-MODE PLUS | FAST-MODE PLUS |
| f<sub>SCL</sub> | SCL clock frequency | 0 |  | 1000 | kHz |
| t<sub>HD;STA</sub> | Hold time (repeated) START condition. After this period, the first clock pulse is generated. | 0.26 |  |  | μs |
| t<sub>LOW</sub> | Low period of the SCL clock | 0.5 |  |  | μs |
| t<sub>HIGH</sub> | High period of the SCL clock | 0.26 |  |  | μs |
| t<sub>SU;STA</sub> | Setup time for a repeated START condition | 0.26 |  |  | μs |
| t<sub>HD;DAT</sub> | Data hold time | 0 |  |  | μs |
| t<sub>SU;DAT</sub> | Data setup time | 50 |  |  | ns |
| t<sub>r</sub> | SDA and SCL Rise Time |  |  | 120 | ns |
| t<sub>f</sub> | SDA and SCL Fall Time | 20 × (IOVDD / 5.5 V) |  | 120 | ns |
| t<sub>SU;STO</sub> | Setup time for STOP condition | 0.26 |  |  | μs |
| t<sub>BUF</sub> | Bus free time between a STOP and START condition | 0.5 |  |  | μs |


## 6.7  Switching Characteristics: I<sup>2</sup>C Interface

At T<sub>A</sub> = 25°C, IOVDD = 3.3V or 1.8V or 1.2V (unless otherwise noted); see Figure 5-1 for timing diagram. Set the IOVDD_IO_MODE bit correctly for IOVDD 1.8V and 1.2V Operation. Refer Section 9.3 for more details.

| PARAMETER | PARAMETER | TEST CONDITIONS | MIN | TYP | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| t<sub>d(SDA)</sub> | SCL to SDA delay | Standard-mode | 200 |  | 1250 | ns |
| Fast-mode | 200 |  | 850 | ns |  |  |
| Fast-mode plus |  |  | 400 | ns |  |  |


## 6.8  Timing Requirements: SPI Interface

At T<sub>A</sub> = 25°C, IOVDD = 3.3V or 1.8V or 1.2V and 20pF load on all outputs (unless otherwise noted); see Figure 5-2 for timing diagram. Set the IOVDD_IO_MODE bit correctly for IOVDD 1.8V and 1.2V Operation. Refer Section 9.3 for more details.

|  |  |  | MIN | NOM | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| t<sub>(SCLK)</sub> | SCLK period | SCLK period | 40 |  |  | ns |
| t<sub>H(SCLK)</sub> | SCLK high pulse duration | SCLK high pulse duration | 18 |  |  | ns |
| t<sub>L(SCLK)</sub> | SCLK low pulse duration | SCLK low pulse duration | 18 |  |  | ns |
| t<sub>LEAD</sub> | Enable lead time | Enable lead time | 16 |  |  | ns |
| t<sub>TRAIL</sub> | Enable trail time | Enable trail time | 16 |  |  | ns |
| t<sub>DSEQ</sub> | Sequential transfer delay | Sequential transfer delay | 20 |  |  | ns |
| t<sub>SU(PICO)</sub> | PICO data setup time | PICO data setup time | 8 |  |  | ns |
| t<sub>HLD(PICO)</sub> | PICO data hold time | PICO data hold time | 8 |  |  | ns |
| t<sub>r(SCLK)</sub> | SCLK rise time | 10% - 90% rise time |  |  | 6 | ns |
| t<sub>f(SCLK)</sub> | SCLK fall time | 90% - 10% fall time |  |  | 6 | ns |


## 6.9  Switching Characteristics: SPI Interface

At T<sub>A</sub> = 25°C, IOVDD = 3.3V or 1.8V or 1.2V and 20pF load on all outputs (unless otherwise noted); see Figure 5-2 for timing diagram. Set the IOVDD_IO_MODE bit correctly for IOVDD 1.8V and 1.2V Operation. Refer Section 9.3 for more details.

| PARAMETER | PARAMETER | TEST CONDITIONS | MIN | TYP | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| t<sub>a(POCI)</sub> | POCI access time | IOVDD = 1.2V |  |  | 18 | ns |
| IOVDD = 1.8V |  |  | 18 | ns |  |  |
| IOVDD = 3.3V |  |  | 14 | ns |  |  |
| t<sub>d(POCI)</sub> | SCLK to POCI delay | 50% of SCLK to 50% of POCI, IOVDD = 1.2V |  |  | 19 | ns |
| 50% of SCLK to 50% of POCI, IOVDD = 1.8V |  |  | 19 | ns |  |  |
| 50% of SCLK to 50% of POCI, IOVDD = 3.3V |  |  | 15 | ns |  |  |
| t<sub>dis(POCI)</sub> | POCI disable time | IOVDD = 1.2V |  |  | 18 | ns |
| IOVDD = 1.8V |  |  | 18 | ns |  |  |
| IOVDD = 3.3V |  |  | 14 | ns |  |  |


## 6.10  Timing Requirements: TDM, I<sup>2</sup>S or LJ Interface

At T<sub>A</sub> = 25°C, IOVDD = 3.3V or 1.8V or 1.2V and 20pF load on all outputs (unless otherwise noted); see Figure 5-3 for timing diagram. Set the IOVDD_IO_MODE bit correctly for IOVDD 1.8V and 1.2V Operation. Refer Section 9.3 for more details.

|  |  |  | MIN | NOM | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| t<sub>(BCLK)</sub> | BCLK period | BCLK period | 40 |  |  | ns |
| t<sub>H(BCLK)</sub> | BCLK high pulse duration <sup>(1)</sup> | BCLK high pulse duration <sup>(1)</sup> | 18 |  |  | ns |
| t<sub>L(BCLK)</sub> | BCLK low pulse duration <sup>(1)</sup> | BCLK low pulse duration <sup>(1)</sup> | 18 |  |  | ns |
| t<sub>SU(FSYNC)</sub> | FSYNC setup time | FSYNC setup time | 8 |  |  | ns |
| t<sub>HLD(FSYNC)</sub> | FSYNC hold time | FSYNC hold time | 8 |  |  | ns |
| t<sub>SU(DIN)</sub> | DIN setup time | DIN setup time | 8 |  |  | ns |
| t<sub>HLD(DIN)</sub> | DIN hold time | DIN hold time | 8 |  |  | ns |
| t<sub>r(BCLK)</sub> | BCLK rise time | 10% - 90% rise time |  |  | 10 | ns |
| t<sub>f(BCLK)</sub> | BCLK fall time | 90% - 10% fall time |  |  | 10 | ns |


(1)  To meet the timing specifications, the BCLK minimum high or low pulse duration must be higher than 25ns, if the DOUT data line is latched on the opposite BCLK edge polarity from the one used by the device to transmit the DOUT data.


## 6.11  Switching Characteristics: TDM, I<sup>2</sup>S or LJ Interface

At T<sub>A</sub> = 25°C, IOVDD = 3.3V or 1.8V or 1.2V and 20pF load on all outputs (unless otherwise noted); see Figure 5-3 for timing diagram. Set the IOVDD_IO_MODE bit correctly for IOVDD 1.8V and 1.2V Operation. Refer Section 9.3 for more details.

| PARAMETER | PARAMETER | TEST CONDITIONS | MIN | TYP | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| t<sub>d(DOUT-BCLK)</sub> | BCLK to DOUT delay | 50% of BCLK to 50% of DOUT, IOVDD = 1.2V |  |  | 18 | ns |
| 50% of BCLK to 50% of DOUT, IOVDD = 1.8V |  |  | 18 |  |  | ns |
| 50% of BCLK to 50% of DOUT, IOVDD = 3.3V |  |  | 14 |  |  | ns |
| t<sub>d(DOUT-FSYNC)</sub> | FSYNC to DOUT delay in TDM or LJ mode (for MSB data with TX_OFFSET = 0) | 50% of FSYNC to 50% of DOUT, IOVDD = 1.2V |  |  | 18 | ns |
| 50% of FSYNC to 50% of DOUT, IOVDD = 1.8V |  |  | 18 |  |  | ns |
| 50% of FSYNC to 50% of DOUT, IOVDD = 3.3V |  |  | 14 |  |  | ns |
| f<sub>(BCLK)</sub> | BCLK output clock frequency; controller mode <sup>(1)</sup> |  |  |  | 24.576 | MHz |
| t<sub>H(BCLK)</sub> | BCLK high pulse duration; controller mode | IOVDD = 1.2V | 14 |  |  | ns |
| IOVDD = 1.8V | 14 |  |  |  |  | ns |
| IOVDD = 3.3V | 14 |  |  |  |  | ns |
| t<sub>L(BCLK)</sub> | BCLK low pulse duration; controller mode | IOVDD = 1.2V | 14 |  |  | ns |
| IOVDD = 1.8V | 14 |  |  |  |  | ns |
| IOVDD = 3.3V | 14 |  |  |  |  | ns |
| t<sub>d(FSYNC)</sub> | BCLK to FSYNC delay; controller mode | 50% of BCLK to 50% of FSYNC, IOVDD = 1.2V |  |  | 18 | ns |
| 50% of BCLK to 50% of FSYNC, IOVDD = 1.8V |  |  | 18 |  |  | ns |
| 50% of BCLK to 50% of FSYNC, IOVDD = 3.3V |  |  | 14 |  |  | ns |
| t<sub>r(BCLK)</sub> | BCLK rise time; controller mode | 10% - 90% rise time, IOVDD = 1.2V |  |  | 10 | ns |
| 10% - 90% rise time, IOVDD = 1.8V |  |  | 10 |  |  | ns |
| 10% - 90% rise time, IOVDD = 3.3V |  |  | 10 |  |  | ns |
| t<sub>f(BCLK)</sub> | BCLK fall time; controller mode | 90% - 10% fall time, IOVDD = 1.2V |  |  | 8 | ns |
| 90% - 10% fall time, IOVDD = 1.8V |  |  | 8 |  |  | ns |
| 90% - 10% fall time, IOVDD = 3.3V |  |  | 8 |  |  | ns |


(1)  To meet the timing specifications, the BCLK output clock frequency must be lower than 18.5 MHz, if the DOUT data line is latched on the opposite BCLK edge polarity from the one used by the device to transmit DOUT data.


## 6.12  Timing Requirements: PDM Digital Microphone Interface

At T<sub>A</sub> = 25°C, IOVDD = 3.3V or 1.8V or 1.2V and 20pF load on all outputs (unless otherwise noted); see Figure 5-4 for timing diagram. Set the IOVDD_IO_MODE bit correctly for IOVDD 1.8V and 1.2V Operation. Refer Section 9.3 for more details.

|  |  |  | MIN | NOM | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| t<sub>SU(PDMDINx)</sub> | PDMDINx setup time | PDMDINx setup time | 30 |  |  | ns |
| t<sub>HLD(PDMDINx)</sub> | PDMDINx hold time | PDMDINx hold time | 0 |  |  | ns |


## 6.13  Switching Characteristics: PDM Digital Microphone Interface

At T<sub>A</sub> = 25°C, IOVDD = 3.3V or 1.8V or 1.2V and 20pF load on all outputs (unless otherwise noted); see Figure 5-4 for timing diagram. Set the IOVDD_IO_MODE bit correctly for IOVDD 1.8V and 1.2V Operation. Refer Section 9.3 for more details.

| PARAMETER | PARAMETER | TEST CONDITIONS | MIN | TYP | MAX | UNIT |
| --- | --- | --- | --- | --- | --- | --- |
| f<sub>(PDMCLK)</sub> | PDMCLK clock frequency |  | 0.768 |  | 6.144 | MHz |
| t<sub>H(PDMCLK)</sub> | PDMCLK high pulse duration |  | 72 |  |  | ns |
| t<sub>L(PDMCLK)</sub> | PDMCLK low pulse duration |  | 72 |  |  | ns |
| t<sub>r(PDMCLK)</sub> | PDMCLK rise time | 10% - 90% rise time |  |  | 18 | ns |
| t<sub>f(PDMCLK)</sub> | PDMCLK fall time | 90% - 10% fall time |  |  | 18 | ns |


## 6.14  Timing Diagrams

![TAC5212 I2C Interface Timing Diagram](https://www.ti.com/ods/images/SLASF23A/GUID-20231009-SS0I-300N-XD8N-ZDDD7TTRNTZR-low.svg) 

**Figure 6-1 I<sup>2</sup>C Interface Timing Diagram**

![TAC5212 SPI Interface Timing Diagram](https://www.ti.com/ods/images/SLASF23A/GUID-20231009-SS0I-6L8Q-MLMT-MCFKJHSC35WG-low.svg) 

**Figure 6-2 SPI Interface Timing Diagram**

![TAC5212 TDM (With BCLK_POL = 1), I2S, and LJ Interface Timing Diagram](https://www.ti.com/ods/images/SLASF23A/GUID-20231009-SS0I-FCBW-DTMP-2ZFP5RXVFKRC-low.svg) 

**Figure 6-3 TDM (With BCLK_POL = 1), I<sup>2</sup>S, and LJ Interface Timing Diagram**

![TAC5212 PDM Digital Microphone Interface Timing Diagram](https://www.ti.com/ods/images/SLASF23A/GUID-20231009-SS0I-3QDJ-N23S-374Z4CJLFZJL-low.svg) 

**Figure 6-4 PDM Digital Microphone Interface Timing Diagram**


## 6.15  Typical Characteristics

At T<sub>A</sub> = 25°C, AVDD = 3.3 V, IOVDD = 3.3 V, f<sub>IN</sub> = 1kHz sinusoidal signal, f<sub>S</sub> = 48kHz, 32-bit audio data, BCLK = 256 × f<sub>S</sub>, TDM target mode, PLL on, channel gain = 0dB, linear phase decimation/interpolation filters, 5kΩ input impedance setting, AC-coupled differential input with ADC_CHx_CM_TOL = 2'b00 or DC-coupled differential input with ADC_CHx_CM_TOL = 2'b10 as applicable, 1200Ω/600Ω line-out load in differential/single-ended configuration or 32Ω/16Ω receiver/headphone load as applicable, MICBIAS programmed to VREF and other default configurations; measured filter free with an Audio Precision with a 20Hz to 20kHz un-weighted bandwidth, unless otherwise noted

![TAC5212 ADC THD+N Level vs Input](https://www.ti.com/ods/images/SLASF23A/GUID-20241227-SS0I-6ZRL-UC9U-9MFAIFPMGEEB-low.svg)


| AC-coupled differential line input | AC-coupled differential line input | AC-coupled differential line input |
| --- | --- | --- |


**Figure 6-5 ADC THD+N Level vs Input**

![TAC5212 ADC THD+N Level vs Input](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-WRMG-DTO3-QMQ8OUYBJNPW-low.svg)


| AC-coupled single-ended mux line input with 10kΩ input impedance setting | AC-coupled single-ended mux line input with 10kΩ input impedance setting | AC-coupled single-ended mux line input with 10kΩ input impedance setting |
| --- | --- | --- |


**Figure 6-7 ADC THD+N Level vs Input**

![TAC5212 ADC A-weighted DR vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-UVIN-ZJJU-25TBD5GY97M4-low.svg)


| AC-coupled differential line input (-60dBFS) | AC-coupled differential line input (-60dBFS) | AC-coupled differential line input (-60dBFS) |
| --- | --- | --- |


**Figure 6-9 ADC A-weighted DR vs Frequency**

![TAC5212 ADC THD+N vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-DN8X-Z93A-KFBFLSZ1LN4H-low.svg)


| AC-coupled differential line input (-1dBFS) | AC-coupled differential line input (-1dBFS) | AC-coupled differential line input (-1dBFS) |
| --- | --- | --- |


**Figure 6-11 ADC THD+N vs Frequency**

![TAC5212 ADC Frequency Response](https://www.ti.com/ods/images/SLASF23A/GUID-20240930-SS0I-VIWO-3UE1-8XLX16QB08BT-low.svg)


| AC-coupled differential line input (-6dBFS) | AC-coupled differential line input (-6dBFS) | AC-coupled differential line input (-6dBFS) |
| --- | --- | --- |


**Figure 6-13 ADC Frequency Response**

![TAC5212 ADC FFT with –60dBFS Input](https://www.ti.com/ods/images/SLASF23A/GUID-20241227-SS0I-7FCI-XGG4-18S8UD4BVWUP-low.svg)


| AC-coupled differential line input | AC-coupled differential line input | AC-coupled differential line input |
| --- | --- | --- |


**Figure 6-15 ADC FFT with –60dBFS Input**

![TAC5212 ADC CMRR vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-M1NA-2SXH-LN6IQINIVDCB-low.svg)


| DC-coupled differential input with ADC_CHx_CM_TOL = 2'b10 (High CMRR mode) | DC-coupled differential input with ADC_CHx_CM_TOL = 2'b10 (High CMRR mode) | DC-coupled differential input with ADC_CHx_CM_TOL = 2'b10 (High CMRR mode) |
| --- | --- | --- |


**Figure 6-17 ADC CMRR vs Frequency**

![TAC5212 DAC THD+N Level vs Input](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-2K2L-9O0A-KPQ8MZZOHKS3-low.svg)


| Differential output | Differential output | Differential output |
| --- | --- | --- |


**Figure 6-19 DAC THD+N Level vs Input**

![TAC5212 DAC THD+N Level vs Input](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-NALT-ZK5T-UWBK4N2VH9DL-low.svg)


| Pseudo-differential output | Pseudo-differential output | Pseudo-differential output |
| --- | --- | --- |


**Figure 6-21 DAC THD+N Level vs Input**

![TAC5212 DAC THD+N Level vs output power](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-EXDP-ACTH-L1G3GTMF9T9Q-low.svg)


| Single-ended headphone output, 16Ω load | Single-ended headphone output, 16Ω load | Single-ended headphone output, 16Ω load |
| --- | --- | --- |


**Figure 6-23 DAC THD+N Level vs output power**

![TAC5212 DAC THD+N Level vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240927-SS0I-BUMD-BWXR-D1HCGZTWZ8PQ-low.svg)


| Differential output (-1dBFS input) | Differential output (-1dBFS input) | Differential output (-1dBFS input) |
| --- | --- | --- |


**Figure 6-25 DAC THD+N Level vs Frequency**

![TAC5212 DAC THD+N Level vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240927-SS0I-EW8S-4VZN-UR5TO0VWUZW3-low.svg)


| Differential receiver output, 32Ω load (-1dBFS input) | Differential receiver output, 32Ω load (-1dBFS input) | Differential receiver output, 32Ω load (-1dBFS input) |
| --- | --- | --- |


**Figure 6-27 DAC THD+N Level vs Frequency**

![TAC5212 DAC FFT with Idle Channel Input](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-MWF1-785B-FCMW37F3BV6M-low.svg)


| Differential output | Differential output | Differential output |
| --- | --- | --- |


**Figure 6-29 DAC FFT with Idle Channel Input**

![TAC5212 DAC FFT with -1dBFS Input](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-24KA-24FR-JMFA2XX06B1C-low.svg)


| Differential output | Differential output | Differential output |
| --- | --- | --- |


**Figure 6-31 DAC FFT with -1dBFS Input**

![TAC5212 DAC PSRR vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240927-SS0I-19O4-2CKX-CJFV3APURQ2V-low.svg)


| Single-ended output | Single-ended output | Single-ended output |
| --- | --- | --- |


**Figure 6-33 DAC PSRR vs Frequency**

![TAC5212 ADC THD+N Level vs Input](https://www.ti.com/ods/images/SLASF23A/GUID-20241227-SS0I-5EYK-A7EN-4YLA7AV10C6S-low.svg)


| AC-coupled single-ended line input | AC-coupled single-ended line input | AC-coupled single-ended line input |
| --- | --- | --- |


**Figure 6-6 ADC THD+N Level vs Input**

![TAC5212 ADC THD+N Level vs Input](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-82Q0-LBJ6-A2PZ0QNQHZW5-low.svg)


| AC-coupled differential line input, AVDD = 1.8V | AC-coupled differential line input, AVDD = 1.8V | AC-coupled differential line input, AVDD = 1.8V |
| --- | --- | --- |


**Figure 6-8 ADC THD+N Level vs Input**

![TAC5212 ADC A-weighted DR vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-WFQ3-04BR-WLNN2BLTFI0Y-low.svg)


| AC-coupled single-ended line input (-60dBFS) | AC-coupled single-ended line input (-60dBFS) | AC-coupled single-ended line input (-60dBFS) |
| --- | --- | --- |


**Figure 6-10 ADC A-weighted DR vs Frequency**

![TAC5212 ADC THD+N vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-P3AP-5Y7E-1JFC6ATT3FNI-low.svg)


| AC-coupled single-ended line input (-1dBFS) | AC-coupled single-ended line input (-1dBFS) | AC-coupled single-ended line input (-1dBFS) |
| --- | --- | --- |


**Figure 6-12 ADC THD+N vs Frequency**

![TAC5212 ADC FFT With Idle Channel Input](https://www.ti.com/ods/images/SLASF23A/GUID-20241227-SS0I-C53R-KY3J-X69WPM8J4VK7-low.svg)


| AC-coupled differential line input | AC-coupled differential line input | AC-coupled differential line input |
| --- | --- | --- |


**Figure 6-14 ADC FFT With Idle Channel Input**

![TAC5212 ADC FFT with -1dBFS Input](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-AZDI-GMZC-2YWB14Z29XOX-low.svg)


| AC-coupled differential line input | AC-coupled differential line input | AC-coupled differential line input |
| --- | --- | --- |


**Figure 6-16 ADC FFT with -1dBFS Input**

![TAC5212 ADC PSRR vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-ZXD0-RJKI-0KERSW1NHBPY-low.svg)


| AC-coupled differential line input | AC-coupled differential line input | AC-coupled differential line input |
| --- | --- | --- |


**Figure 6-18 ADC PSRR vs Frequency**

![TAC5212 DAC THD+N Level vs Input](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-9M3Y-RVZ1-IH4RHSB0V40S-low.svg)


| Single-ended output | Single-ended output | Single-ended output |
| --- | --- | --- |


**Figure 6-20 DAC THD+N Level vs Input**

![TAC5212 DAC THD+N Level vs output power](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-Q865-Y2KA-LHLTJL9JA8LC-low.svg)


| Differential receiver output, 32Ω load | Differential receiver output, 32Ω load | Differential receiver output, 32Ω load |
| --- | --- | --- |


**Figure 6-22 DAC THD+N Level vs output power**

![TAC5212 DAC THD+N Level vs output power](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-IDXI-E92I-H34UL09XKMT8-low.svg)


| Pseudo-differential headphone output, 16Ω load | Pseudo-differential headphone output, 16Ω load | Pseudo-differential headphone output, 16Ω load |
| --- | --- | --- |


**Figure 6-24 DAC THD+N Level vs output power**

![TAC5212 DAC THD+N Level vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240927-SS0I-2TON-4N4U-VLEXQOIFQ4C8-low.svg)


| Single-ended output (-1dBFS input) | Single-ended output (-1dBFS input) | Single-ended output (-1dBFS input) |
| --- | --- | --- |


**Figure 6-26 DAC THD+N Level vs Frequency**

![TAC5212 DAC THD+N Level vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240927-SS0I-BXBN-WAPO-WJBBYFC4ITBZ-low.svg)


| Single-ended headphone output, 16Ω load (-1dBFS input) | Single-ended headphone output, 16Ω load (-1dBFS input) | Single-ended headphone output, 16Ω load (-1dBFS input) |
| --- | --- | --- |


**Figure 6-28 DAC THD+N Level vs Frequency**

![TAC5212 DAC FFT with -60dBFS Input](https://www.ti.com/ods/images/SLASF23A/GUID-20240920-SS0I-4N5O-SG7D-XMPKTIN9UCR1-low.svg)


| Differential output | Differential output | Differential output |
| --- | --- | --- |


**Figure 6-30 DAC FFT with -60dBFS Input**

![TAC5212 DAC PSRR vs Frequency](https://www.ti.com/ods/images/SLASF23A/GUID-20240927-SS0I-F2O1-75HY-RD9DK03YN8JW-low.svg)


| Differential output | Differential output | Differential output |
| --- | --- | --- |


**Figure 6-32 DAC PSRR vs Frequency**

![TAC5212 DAC Frequency Response](https://www.ti.com/ods/images/SLASF23A/GUID-20241004-SS0I-BFGQ-V5WZ-48LY59I1JQUX-low.svg)


| Differential output, -6dBFS input with High-pass filter (HPF) disabled | Differential output, -6dBFS input with High-pass filter (HPF) disabled | Differential output, -6dBFS input with High-pass filter (HPF) disabled |
| --- | --- | --- |


**Figure 6-34 DAC Frequency Response**


# 7  Detailed Description


## 7.1  Overview

The TAC5212 is from a scalable family of audio converter devices. As part of the extended family of devices, the TAC5212 consists of a high-performance, low-power, flexible, stereo audio analog-to-digital converter (ADC) and audio digital-to-analog converter (DAC) with extensive feature integration. This device is intended for broad market applications such as ruggedized communication equipment, IP network cameras and phones, professional audio and multimedia applications. The high dynamic range of this device enables far-field audio recording and playback with high fidelity. This device integrates a host of features that reduce cost, board space, and power consumption in space-constrained system designs. Package, performance, and compatible configuration registers across extended families make this device well-suited for scalable system designs.

The TAC5212 consists of the following blocks:

-   2\-channel, multibit, high-performance delta-sigma (ΔΣ) ADCs
-   Configurable single-ended or differential audio inputs
-   Low-noise programmable microphone bias output
-   4\-channel, multibit, high-performance delta-sigma (ΔΣ) DACs
-   Configurable single-ended, differential, or pseudo-differential audio outputs
-   Over current diagnostics and protection for MICBIAS and analog outputs
-   Automatic gain controller (AGC) for ADC channels and Dynamic range controller (DRC) for DAC channels
-   Advanced thermal foldback and protection
-   Advanced battery guard and distortion limiter
-   Programmable decimation and interpolation filters with linear-phase, low-latency and ultra low-latency response options
-   Programmable channel gain, volume control, and biquad filters for each ADC and DAC channel
-   Programmable phase and gain calibration with fine resolution for each ADC channel
-   Programmable high-pass filter (HPF) and digital channel mixer for ADC and DAC channels
-   Incremental ADC support for DC measurement and low frequency signal monitoring/sensing applications
-   Up to 4 pulse density modulation (PDM) digital microphone interface with a high-performance decimation filter
-   Dual I<sup>2</sup>S or TDM interface with independent sample rate (synchronous)
-   Synchronous sample rate converter (SRC)
-   Integrated low-jitter, phase-locked loop (PLL) supporting a wide range of system clocks
-   Integrated digital and analog voltage regulators to support single-supply operation

Communication to the TAC5212 for configuring the control registers is supported using an I<sup>2</sup>C or SPI interface. The device supports a highly flexible audio serial interface \[time-division multiplexing (TDM), I<sup>2</sup>S, or left-justified (LJ)\] to transmit audio data seamlessly in the system across devices.

The TAC5212 can support multiple devices by sharing the common TDM bus across devices. Moreover, the device includes a daisy-chain feature as well. These features relax the shared TDM bus timing requirements and board design complexities when operating multiple devices for applications requiring high audio data bandwidth.

[Table 7-1](#SLAU3094791) lists the reference abbreviations used throughout this document to registers that control the device.

**Table 7-1 Abbreviations for Register References**


| REFERENCE | ABBREVIATION | DESCRIPTION | EXAMPLE |
| --- | --- | --- | --- |
| Page y, register z, bit k | Py_Rz_D[k] | Single data bit. The value of a single bit in a register. | Page 1, register 36, bit 0 = P1_R36_D[0] |
| Page y, register z, bits k-m | Py_Rz_D[k:m] | Range of data bits. A range of data bits (inclusive). | Page 1, register 36, bits 3-0 = P1_R36_D[3:0] |
| Page y, register z | Py_Rz | One entire register. All eight bits in the register as a unit. | Page 1, register 36 = P1_R36 |
| Page y, registers z-n | Py_Rz-Rn | Range of registers. A range of registers in the same page. | Page 1, registers 36, 37, 38 = P1_R36-R38 |


## 7.2  Functional Block Diagram

![TAC5212 Functional Block Diagram](https://www.ti.com/ods/images/SLASF23A/GUID-20221226-SS0I-RWJR-51B5-NBR4RJDXN1T4-low.svg) 

**Figure 7-1 Functional Block Diagram**


## 7.3  Feature Description


### 7.3.1  Serial Interfaces

This device has two serial interfaces: control and audio data. The control serial interface is used for device configuration. The audio data serial interface is used for transmitting audio data to the host device.


#### 7.3.1.1  Control Serial Interfaces

The device contains configuration registers and programmable coefficients that can be set to the desired values for a specific system and application use. All these registers can be accessed using either I<sup>2</sup>C or SPI communication to the device. For more information, see [Section 7.5](GUID-B2C25CAC-0666-4DF9-8C8D-C2F065103C06.html) and [Section 8](GUID-3BCC1C3C-9450-493A-B32D-B916DB06F8CA.html).


#### 7.3.1.2  Audio Serial Interfaces

Digital audio data flows between the host processor and the TAC5212 on the digital audio serial interface (ASI), or audio bus. This highly flexible ASI bus includes a TDM mode for multichannel operation, support for I<sup>2</sup>S or left-justified protocols format, programmable data length options, very flexible controller-target configurability for bus clock lines, and the ability to communicate with multiple devices within a system directly.

The TAC5212 supports up to two ASI Interfaces. Secondary ASI Clock and Data Pins can be configured by setting GPIO's. Frame Sync of two ASI's must be synchronous. See the [_TAX5X1X Synchronous Sample Rate Conversion_ application report](https://www.ti.com/lit/pdf/SLAAEH2) for more details on Secondary ASI.

The bus protocol TDM, I<sup>2</sup>S, or left-justified (LJ) format can be selected for primary ASI by using the PASI_FORMAT\[1:0\] (P0_R26_D\[7:6\]) register bits. As shown in [Table 7-2](#SBAS892ASIFMT) and [Table 7-3](#SBAS892ASIWL), these modes are all most significant byte (MSB)-first, pulse code modulation (PCM) data format, with the output channel data word-length programmable as 16, 20, 24, or 32 bits by configuring the PASI_WLEN\[1:0\] (P0_R26_D\[5:4\]) register bits.

**Table 7-2 Primary Audio Serial Interface Format**


| P0_R26_D[7:6] : PASI_FORMAT[1:0] | PRIMARY AUDIO SERIAL INTERFACE FORMAT |
| --- | --- |
| 00 (default) | Time-division multiplexing (TDM) mode |
| 01 | Inter IC sound (I<sup>2</sup>S) mode |
| 10 | Left-justified (LJ) mode |
| 11 | Reserved (do not use this setting) |


**Table 7-3 Primary Audio Serial Interface Data Word-Length**


| P0_R26_D[5:4] : PASI_WLEN[1:0] | PRIMARY AUDIO OUTPUT CHANNEL DATA WORD-LENGTH |
| --- | --- |
| 00 | Data word-length set to 16 bits |
| 01 | Data word-length set to 20 bits |
| 10 | Data word-length set to 24 bits |
| 11 (default) | Data word-length set to 32 bits |


The frame sync pin, FSYNC, is used in this audio bus protocol to define the beginning of a frame and has the same frequency as the output data sample rates. The bit clock pin, BCLK, is used to clock out the digital audio data across the serial bus. The number of bit-clock cycles in a frame must accommodate multiple device active output channels with the programmed data word length.

A frame consists of multiple time-division channel slots (up to 32) to allow all input/output channel audio data transmissions to be completed on the audio bus by a device or multiple devices sharing the same audio bus. The device supports up to eight input channels and eight output channels that can be configured on the primary ASI bus to place their audio data on bus slot 0 to slot 31. [Table 7-4](#SBAS892CSLOT) lists the output channel-1 slot configuration settings. In I<sup>2</sup>S and LJ mode, the slots are divided into two sets, left-channel slots, and right-channel slots, as described in [Section 7.3.1.2.2](GUID-58D05817-24DF-469D-8419-1D5597953439.html#GUID-58D05817-24DF-469D-8419-1D5597953439) and [Section 7.3.1.2.3](GUID-CC5BE8FC-2CAE-4B37-BDB6-0FED4C62345F.html#GUID-CC5BE8FC-2CAE-4B37-BDB6-0FED4C62345F).

**Table 7-4 Output Channel-1 Slot Assignment Settings**


| P0_R30_D[4:0] : PASI_TX_CH1_SLOT[4:0] | OUTPUT CHANNEL 1 SLOT ASSIGNMENT |
| --- | --- |
| 0 0000 = 0d (default) | Slot 0 for TDM or left slot 0 for I<sup>2</sup>S, LJ. |
| 0 0001 = 1d | Slot 1 for TDM or left slot 1 for LJ. |
| … | … |
| 0 1111 = 15d | Slot 15 for TDM or left slot 15 for LJ. |
| 1 0000 = 16d | Slot 16 for TDM or right slot 0 for I<sup>2</sup>S, LJ. |
| … | … |
| 1 1110 = 30d | Slot 30 for TDM or right slot 14 for LJ. |
| 1 1111 = 31d | Slot 31 for TDM or right slot 15 for LJ. |


Similarly, the slot assignment setting for output channel 2 to channel 8 can be done using the PASI_TX_CH2_SLOT_NUM (P0_R31_D\[4:0\]) to PASI_TX_CH8_SLOT_NUM (P0_R37) registers and for input channel 1 to channel 8 by using the PASI_RX_CH1_SLOT(P0_R40) to PAS_RX_CH8_SLOT(P0_R47_D\[4:0\]) registers, respectively.

The slot word length is the same as the primary ASI channel word length set for the device. The output channel data word length must be set to the same value for all TAC5212 devices if all devices share the same ASI bus in a system. The maximum number of slots possible for the ASI bus in a system is limited by the available bus bandwidth, which depends upon the BCLK frequency, output data sample rate used, and the channel data word length configured.

The device also includes a feature that offsets the start of the slot data transfer concerning the frame sync by up to 31 cycles of the bit clock. Offset can be configured independently for input and output data paths. [Table 7-5](#SBAS892OFFSET) and [Table 7-6](#TABLE_QKJ_3HV_WVB) lists the programmable offset configuration settings for transmission and receive paths respectively.

**Table 7-5 Programmable Offset Settings for the ASI Slot Start for transmission**


| P0_R28_D[4:0] : PASI_TX_OFFSET[4:0] | PROGRAMMABLE OFFSET SETTING FOR SLOT DATA TRANSMISSION START |
| --- | --- |
| 0 0000 = 0d (default) | The device follows the standard protocol timing without any offset. |
| 0 0001 = 1d | Slot start is offset by one BCLK cycle, as compared to standard protocol timing. For I<sup>2</sup>S or LJ, the left and right slot start is offset by one BCLK cycle, as compared to standard protocol timing. |
| ...... | ...... |
| 1 1110 = 30d | Slot start is offset by 30 BCLK cycles, as compared to standard protocol timing. For I<sup>2</sup>S or LJ, the left and right slot start is offset by 30 BCLK cycles, as compared to standard protocol timing. |
| 1 1111 = 31d | Slot start is offset by 31 BCLK cycles, as compared to standard protocol timing. For I<sup>2</sup>S or LJ, the left and right slot start is offset by 31 BCLK cycles, as compared to standard protocol timing. |


**Table 7-6 Programmable Offset Settings for the ASI Slot Start for Receive**


| P0_R38_D[4:0] : PASI_RX_OFFSET[4:0] | PROGRAMMABLE OFFSET SETTING FOR SLOT DATA RECEIVE START |
| --- | --- |
| 0 0000 = 0d (default) | The device follows the standard protocol timing without any offset. |
| 0 0001 = 1d | Slot start is offset by one BCLK cycle, as compared to standard protocol timing. For I<sup>2</sup>S or LJ, the left and right slot start is offset by one BCLK cycle, as compared to standard protocol timing. |
| ...... | ...... |
| 1 1110 = 30d | Slot start is offset by 30 BCLK cycles, as compared to standard protocol timing. For I<sup>2</sup>S or LJ, the left and right slot start is offset by 30 BCLK cycles, as compared to standard protocol timing. |
| 1 1111 = 31d | Slot start is offset by 31 BCLK cycles, as compared to standard protocol timing. For I<sup>2</sup>S or LJ, the left and right slot start is offset by 31 BCLK cycles, as compared to standard protocol timing. |


The device also features the ability to invert the polarity of the frame sync pin, FSYNC, used to transfer the audio data as compared to the default FSYNC polarity used in standard protocol timing. This feature can be set using the PASI_FSYNC_POL (P0_R26_D\[3\]) register bit. Similarly, the device can invert the polarity of the bit clock pin, BCLK, which can be set using the PASI_BCLK_POL (P0_R26_D\[2\]) register bit.

In addition, the word clock and bit clock can be independently configured in either controller or target mode, for flexible connectivity to a wide variety of processors. The word clock is used to define the beginning of a frame and may be programmed as either a pulse or a square-wave signal. The frequency of this clock corresponds to the maximum of the selected ADC and DAC sampling frequencies.


##### 7.3.1.2.1  Time Division Multiplexed Audio (TDM) Interface

In TDM mode, also known as DSP mode, the rising edge of FSYNC starts the data transfer with the slot 0 data first. Immediately after the slot 0 data transmission, the remaining slot data are transmitted in order. FSYNC and each data bit (except the MSB of slot 0 when TX_OFFSET equals 0) is transmitted on the rising edge of BCLK. [Figure 7-2](#SLAS892TDM1) to [Figure 7-5](#SLAS892TDM4) illustrate the protocol timing for TDM operation with various configurations for transmit DOUT line. The same protocol is applicable for the receive DIN line as well.

![TAC5212 TDM Mode Standard Protocol Timing (PASI_TX_OFFSET = 0)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-8216-G6PG-IPAEGDXY18YE-low.svg) 

**Figure 7-2 TDM Mode Standard Protocol Timing (PASI_TX_OFFSET = 0)**

![TAC5212 TDM Mode Protocol Timing (PASI_TX_OFFSET = 2)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-SQQW-Y6CH-5O9K8YW2VEXI-low.svg) 

**Figure 7-3 TDM Mode Protocol Timing (PASI_TX_OFFSET = 2)**

![TAC5212 TDM Mode Protocol Timing (No Idle BCLK Cycles, PASI_TX_OFFSET = 2)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-VJ3O-BQO5-926RW2Y6QKYR-low.svg) 

**Figure 7-4 TDM Mode Protocol Timing (No Idle BCLK Cycles, PASI_TX_OFFSET = 2)**

![TAC5212 TDM Mode Protocol Timing (PASI_TX_OFFSET = 0 and PASI_BCLK_POL = 1)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-NLD7-NH12-QQ9XPBB5N493-low.svg) 

**Figure 7-5 TDM Mode Protocol Timing (PASI_TX_OFFSET = 0 and PASI_BCLK_POL = 1)**

For proper operation of the audio bus in TDM mode, the number of bit clocks per frame must be greater than or equal to the number of active output channels times the programmed word length of the output channel data. The device supports FSYNC as a pulse with a 1-cycle-wide bit clockbut also supports multiples as well. For a higher BCLK frequency operation, using TDM mode with a PASI_TX_OFFSET value higher than 0 is recommended.


##### 7.3.1.2.2  Inter IC Sound (I<sup>2</sup>S) Interface

The standard I<sup>2</sup>S protocol is defined for only two channels: left and right. The device extends the same protocol timing for multichannel operation. In I<sup>2</sup>S mode, the MSB of the left slot 0 is transmitted on the falling edge of BCLK in the second cycle after the _falling_ edge of FSYNC. Immediately after the left slot 0 data transmission, the remaining left slot data are transmitted in order. The MSB of the right slot 0 is transmitted on the falling edge of BCLK in the second cycle after the _rising_ edge of FSYNC. Immediately after the right slot 0 data transmission, the remaining right slot data are transmitted in order. FSYNC and each data bit is transmitted on the falling edge of BCLK. [Figure 7-6](#SLAS892I2S1) to [Figure 7-9](#SLAS892I2S4) illustrate the protocol timing for I<sup>2</sup>S operation with various configurations for the transmit DOUT line. The same protocol is applicable for the receive DIN line as well.

![TAC5212 I2S Mode Standard Protocol Timing (PASI_TX_OFFSET = 0)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-50KZ-R16C-E3SJI95LN0DN-low.svg) 

**Figure 7-6 I<sup>2</sup>S Mode Standard Protocol Timing (PASI_TX_OFFSET = 0)**

![TAC5212 I2S Protocol Timing (PASI_TX_OFFSET = 1)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-B2UV-CQRK-NP9DPTI258BB-low.svg) 

**Figure 7-7 I<sup>2</sup>S Protocol Timing (PASI_TX_OFFSET = 1)**

![TAC5212 I2S Protocol Timing (No Idle BCLK Cycles, PASI_TX_OFFSET = 0)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-G0V4-DCE6-6Q05T7ACC1VJ-low.svg) 

**Figure 7-8 I<sup>2</sup>S Protocol Timing (No Idle BCLK Cycles, PASI_TX_OFFSET = 0)**

![TAC5212 I2S Protocol Timing (PASI_TX_OFFSET = 0 and PASI_BCLK_POL = 1)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-E2GP-NT58-057NHH5GDZ7K-low.svg) 

**Figure 7-9 I<sup>2</sup>S Protocol Timing (PASI_TX_OFFSET = 0 and PASI_BCLK_POL = 1)**

For proper operation of the audio bus in I<sup>2</sup>S mode, the number of bit clocks per frame must be greater than or equal to the number of active output channels (including left and right slots) times the programmed word length of the output channel data. The device FSYNC low pulse must be several BCLK cycles wide that is greater than or equal to the number of active left slots times the data word length configured. Similarly, the FSYNC high pulse must be several BCLK cycles wide that is greater than or equal to the number of active right slots times the data word length configured.


##### 7.3.1.2.3  Left-Justified (LJ) Interface

The standard LJ protocol is defined for only two channels: left and right. The device extends the same protocol timing for multichannel operation. In LJ mode, the MSB of the left slot 0 is transmitted in the same BCLK cycle after the _rising_ edge of FSYNC. Each subsequent data bit is transmitted on the falling edge of BCLK. Immediately after the left slot 0 data transmission, the remaining left slot data are transmitted in order. The MSB of the right slot 0 is transmitted in the same BCLK cycle after the _falling_ edge of FSYNC. Each subsequent data bit is transmitted on the falling edge of BCLK. Immediately after the right slot 0 data transmission, the remaining right slot data are transmitted in order. FSYNC is transmitted on the falling edge of BCLK. [Figure 7-10](#SLAS892LJ1) to [Figure 7-13](#SLAS892LJ4) illustrate the protocol timing for LJ operation with various configurations for the transmit DOUT line. The same protocol is applicable for the receive DIN line as well.

![TAC5212 LJ Mode Standard Protocol Timing (TX_OFFSET = 0)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-LCMR-R6I5-M1FY08KIJRXO-low.svg) 

**Figure 7-10 LJ Mode Standard Protocol Timing (TX_OFFSET = 0)**

![TAC5212 LJ Protocol Timing (TX_OFFSET = 2)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-MZDP-K3SF-1HS50K3DSTAV-low.svg) 

**Figure 7-11 LJ Protocol Timing (TX_OFFSET = 2)**

![TAC5212 LJ Protocol Timing (No Idle BCLK Cycles, TX_OFFSET = 0)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-MAR1-RTQP-ZI06W1UYWL5T-low.svg) 

**Figure 7-12 LJ Protocol Timing (No Idle BCLK Cycles, TX_OFFSET = 0)**

![TAC5212 LJ Protocol Timing (TX_OFFSET = 1 and BCLK_POL = 1)](https://www.ti.com/ods/images/SLASF23A/GUID-20241114-SS0I-NAM9-RIJQ-6CETED82ALPB-low.svg) 

**Figure 7-13 LJ Protocol Timing (TX_OFFSET = 1 and BCLK_POL = 1)**

For proper operation of the audio bus in LJ mode, the number of bit clocks per frame must be greater than or equal to the number of active output channels (including left and right slots) times the programmed word length of the output channel data. The device FSYNC high pulse must be several BCLK cycles wide that is greater than or equal to the number of active left slots times the data word length configured. Similarly, the FSYNC low pulse must be several BCLK cycles wide that is greater than or equal to the number of active right slots times the data word length configured. For a higher BCLK frequency operation, using LJ mode with a TX_OFFSET value higher than 0 is recommended.


#### 7.3.1.3  Using Multiple Devices With Shared Buses

The device has many supported features and flexible options that can be used in the system to seamlessly connect multiple TAC5212 devices by sharing a single common I<sup>2</sup>C or SPI control bus and an audio serial interface bus. This architecture enables multiple applications to be applied to a system that require a microphone or speaker array for beam-forming operation, audio conferencing, noise cancellation, and so forth. [Figure 7-14](#SLAS892BUS) shows a diagram of multiple TAC5212 devices in a configuration where the control and audio data buses are shared.

![TAC5212 Multiple TAC5212 Devices With Shared Control and Audio Data Buses](https://www.ti.com/ods/images/SLASF23A/GUID-20221226-SS0I-JMKD-SRPX-1QZVF9BNJTWJ-low.svg) 

**Figure 7-14 Multiple TAC5212 Devices With Shared Control and Audio Data Buses**

The TAC5212 consists of the following features to enable seamless connection and interaction of multiple devices using a shared bus:

-   Supports up to four pin-programmable I<sup>2</sup>C target addresses
-   I<sup>2</sup>C broadcast simultaneously writes to (or triggers) all TAC5212 devices
-   Supports up to 32 configuration input/output channel slots for the audio serial interface
-   Tri-state feature (with enable and disable) for the unused audio data slots of the device
-   Supports a bus-holder feature (with enable and disable) to keep the last driven value on the audio bus
-   The GPIOx, GPI1 or GPO1 pin can be configured as a secondary input/output data lane or as a secondary audio serial interface
-   The GPIOx, GPI1 or GPO1 pin can be used in a daisy-chain configuration of multiple TAC5212 devices
-   Supports one BCLK cycle data latching timing to relax the timing requirement for the high-speed interface
-   Programmable controller and target options for both primary and secondary audio serial interface
-   Ability to synchronize the multiple devices for the simultaneous sampling requirement across devices
-   Inter Channel Gain Alignment (ICGA) feature to align the DAC Channel gain across devices.

See the [_Multiple TAC5x1x Devices With a Shared TDM and I<sup>2</sup>C/SPI Bus_ application report](https://www.ti.com/lit/pdf/SBAA383) for further details.


### 7.3.2  Phase-Locked Loop (PLL) and Clock Generation

The device has a smart auto-configuration block to generate all necessary internal clocks required for the ADC and DAC modulators and the digital filter engine used for signal processing. This configuration is done by monitoring the frequency of the FSYNC and BCLK signals on the audio buses.

The device supports the various data sample rates (of the FSYNC signal frequency) and the BCLK to FSYNC ratio to configure all clock dividers, including the PLL configuration, internally without host programming. [Table 7-7](#SBAS892FS48) and [Table 7-8](#SBAS892FS44) list the supported FSYNC and BCLK frequencies.

**Table 7-7 Supported FSYNC (Multiples or Submultiples of 48 kHz) and BCLK Frequencies**


| FSYNC (4 kHz) | FSYNC (8 kHz) | FSYNC (16 kHz) | FSYNC (24 kHz) | FSYNC (32 kHz) | FSYNC (48 kHz) | FSYNC (96 kHz) | FSYNC (192 kHz) | FSYNC (384 kHz) | FSYNC (768 kHz) | BCLK (MHz) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | Reserved | Reserved | 0.256 | 0.384 | 0.512 | 0.768 | 1.536 | 3.072 | 6.144 | 12.288 |
| 24 | Reserved | Reserved | 0.384 | 0.576 | 0.768 | 1.152 | 2.304 | 4.608 | 9.216 | 18.432 |
| 32 | Reserved | 0.256 | 0.512 | 0.768 | 1.024 | 1.536 | 3.072 | 6.144 | 12.288 | 24.576 |
| 48 | Reserved | 0.384 | 0.768 | 1.152 | 1.536 | 2.304 | 4.608 | 9.216 | 18.432 | Reserved |
| 64 | 0.256 | 0.512 | 1.024 | 1.536 | 2.048 | 3.072 | 6.144 | 12.288 | 24.576 | Reserved |
| 96 | 0.384 | 0.768 | 1.536 | 2.304 | 3.072 | 4.608 | 9.216 | 18.432 | Reserved | Reserved |
| 128 | 0.512 | 1.024 | 2.048 | 3.072 | 4.096 | 6.144 | 12.288 | 24.576 | Reserved | Reserved |
| 192 | 0.768 | 1.536 | 3.072 | 4.608 | 6.144 | 9.216 | 18.432 | Reserved | Reserved | Reserved |
| 256 | 1.024 | 2.048 | 4.096 | 6.144 | 8.192 | 12.288 | 24.576 | Reserved | Reserved | Reserved |
| 384 | 1.536 | 3.072 | 6.144 | 9.216 | 12.288 | 18.432 | Reserved | Reserved | Reserved | Reserved |
| 512 | 2.048 | 4.096 | 8.192 | 12.288 | 16.384 | 24.576 | Reserved | Reserved | Reserved | Reserved |
| 1024 | 4.096 | 8.192 | 16.384 | 24.576 | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved |
| 2048 | 8.192 | 16.384 | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved |


**Table 7-8 Supported FSYNC (Multiples or Submultiples of 44.1 kHz) and BCLK Frequencies**


| FSYNC (7.35 kHz) | FSYNC (7.35 kHz) | FSYNC (14.7 kHz) | FSYNC (22.05 kHz) | FSYNC (29.4 kHz) | FSYNC (44.1 kHz) | FSYNC (88.2 kHz) | FSYNC (176.4 kHz) | FSYNC (352.8 kHz) | FSYNC (705.6 kHz) | BCLK (MHz) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | Reserved | Reserved | Reserved | 0.3528 | 0.4704 | 0.7056 | 1.4112 | 2.8224 | 5.6448 | 11.2896 |
| 24 | Reserved | Reserved | 0.3528 | 0.5292 | 0.7056 | 1.0584 | 2.1168 | 4.2336 | 8.4672 | 16.9344 |
| 32 | Reserved | Reserved | 0.4704 | 0.7056 | 0.9408 | 1.4112 | 2.8224 | 5.6448 | 11.2896 | 22.5792 |
| 48 | 0.3528 | 0.3528 | 0.7056 | 1.0584 | 1.4112 | 2.1168 | 4.2336 | 8.4672 | 16.9344 | Reserved |
| 64 | 0.4704 | 0.4704 | 0.9408 | 1.4112 | 1.8816 | 2.8224 | 5.6448 | 11.2896 | 22.5792 | Reserved |
| 96 | 0.7056 | 0.7056 | 1.4112 | 2.1168 | 2.8224 | 4.2336 | 8.4672 | 16.9344 | Reserved | Reserved |
| 128 | 0.9408 | 0.9408 | 1.8816 | 2.8224 | 3.7632 | 5.6448 | 11.2896 | 22.5792 | Reserved | Reserved |
| 192 | 1.4112 | 1.4112 | 2.8224 | 4.2336 | 5.6448 | 8.4672 | 16.9344 | Reserved | Reserved | Reserved |
| 256 | 1.8816 | 1.8816 | 3.7632 | 5.6448 | 7.5264 | 11.2896 | 22.5792 | Reserved | Reserved | Reserved |
| 384 | 2.8224 | 2.8224 | 5.6448 | 8.4672 | 11.2896 | 16.9344 | Reserved | Reserved | Reserved | Reserved |
| 512 | 3.7632 | 3.7632 | 7.5264 | 11.2896 | 15.0528 | 22.5792 | Reserved | Reserved | Reserved | Reserved |
| 1024 | 7.5264 | 7.5264 | 15.0528 | 22.5792 | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved |
| 2048 | 15.0528 | 15.0528 | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved | Reserved |


The TAC5212 also supports non-Audio sample rates beyond those listed in prior tables. Refer to [_Clocking Configuration of Device and Flexible Clocking For TAx5x1x Family_ application report](https://www.ti.com/lit/pdf/slaaeg6) for more details.

The TAC5212 sample rate can be configured using registers CLK_CFG0 (P0_R50) and CLK_CFG1 (P0_R51) for primary and secondary ASI respectively. CLK_DET_STS0 (P0_R62) and CLK_DET_STS1 (P0_R63) registers also capture the device auto detect result for the FSYNC frequency in auto detection mode for the primary and secondary ASI respectively. The registers CLK_DET_STS2 (P0_R64) and CLK_DET_STS3 (P0_R65) capture the BCLK to FSYNC ratio detected by the device in the auto detection mode for the selected ASI which is chosen to be the PLL reference through the CLK_SRC_SEL (P0_R52_D\[3:1\]) registers. If the device finds any unsupported combinations of FSYNC frequency and BCLK to FSYNC ratios, the device generates an ASI clock-error interrupt and shuts down various blocks of the device accordingly.

The TAC5212 also supports enabling channels while ADC or DAC channels are already in operation. This requires a pre-configuration before power to describe the maximum number of channels that can be enabled while in operation to ensure proper clock generation and use. This can be configured by using register DYN_PUPD_CFG (P0_R119). ADC_DYN_PUPD_EN (P0_R119_D\[7\]) and DAC_DYN_PUPD_EN (P0_R119_D\[5\]) bits can be used to independently enable ADC or DAC Channels' dynamic power up. Number of maximum channels supported for dynamic power-up and power-down can be configured using ADC_DYN_MAXCH_SEL (P0_R119_D\[6\]) and DAC_DYN_MAXCH_SEL (P0_R119_D\[4\]) bits.

The device uses an integrated, low-jitter, phase-locked loop (PLL) to generate internal clocks required for the modulators and digital filter engine, as well as other control blocks. The device also supports an option to use BCLK, GPIOx, or the GPI1 pin (as CCLK) as the audio clock source without using the PLL to reduce power consumption. However, the ADC performance may degrade based on jitter from the external clock source, and some processing features may not be supported if the external audio clock source frequency is not high enough. Therefore, TI recommends using the PLL for high-performance applications. More details and information on how to configure and use the device in low-power mode without using the PLL are discussed in the [_TAC5x1x Power Consumption Matrix Across Various Usage Scenarios_ application report](https://www.ti.com/lit/pdf/sbaa611).

The device also supports an audio bus controller mode operation using the GPIOx or GPI1 pin (as CCLK) as the reference input clock source and supports various flexible options and a wide variety of system clocks. More details and information on controller mode configuration and operation are discussed in the [_Clocking Configuration of Device and Flexible Clocking For TAx5x1x Family_ application report](https://www.ti.com/lit/pdf/slaaeg6).

The audio bus clock error detection and auto-detect feature automatically generates all internal clocks, but can be disabled using the IGNORE_CLK_ERR (P0_R4_D\[6\]) and CUSTOM_CLK_CFG (P0_R50_D\[0\]) register bits, respectively. In the system, this disable feature can be used to support custom clock frequencies that are not covered by the auto detect scheme. For such application use cases, care must be taken to ensure that the multiple clock dividers are all configured appropriately. TI recommends using the PPC3 GUI for device configuration settings; for more details see the [_TAC5212EVM-PDK Evaluation module_ user's guide](https://www.ti.com/lit/pdf/SBAU359) and the [PurePath™ console graphical development suite](http://www.ti.com/tool/PUREPATHCONSOLE). The [_Clocking Configuration of Device and Flexible Clocking For TAx5x1x Family_ application report](https://www.ti.com/lit/pdf/slaaeg6) also covers various aspects of the custom clock configurations. Refer [_Clock Error Configuration, Detection, and Modes Supported in TAx5x1x Family_ application report](https://www.ti.com/lit/pdf/slaaeg9) for more details about the clock detection module of the device.

When the PLL is turned off, the digital volume control and other features using programmable coeffients like biquads, mixer, AGC etc., except the high pass filter (HPF) are not applicable.


### 7.3.3  Input Channel Configurations

The TAC5212 consists of two pairs of analog input pins (INxP and INxM) that can be configured as differential inputs or single-ended inputs for the recording channel. The device supports simultaneous recording of up to two analog channels using the high-performance multichannel ADC. The input source for the analog pins can be from electret condenser analog microphones, microelectrical-mechanical system (MEMS) analog microphones, or line-in (auxiliary) inputs from the system board. Analog inputs support differential input, single-ended inputs (two pin and one-pin) with AC and DC coupling options. [Table 7-13](#SBAS892INSRC) shows the input source selection for the record channel 1.

**Table 7-9 Input Source Selection for the Record Channel**


| P0_R80_D[7:6] : ADC_CH1_INSRC[1:0] | INPUT CHANNEL 1 RECORD SOURCE SELECTION |
| --- | --- |
| 00 (default) | Analog differential input for channel 1 using IN1P and IN1M |
| 01 | Analog single-ended input for channel 1 using IN1P and IN1M (signal on one input pin and ground on other pin) |
| 10 | Analog single-ended input on IN1P |
| 11 | Analog single-ended Input on IN1M |


Similarly, the input source selection setting for input channel 2 can be configured using the ADC_CH2_INSRC\[1:0\] (P0_R85_D\[7:6\]) register bits.

Typically, voice or audio signal inputs are capacitively coupled (AC-coupled) to the device and the common-mode variation at the device input is limited to less than 100mVpp for differential inputs for best performance. However, for applications that cannot avoid large common-mode fluctuations or when needed to save board space, the device also supports options for increasing the common mode tolerance and for DC-coupled inputs. This configuration can be done independently for each channel by setting the input common mode tolerance in ADC_CH1_CM_TOL (P0_R80_D\[3:2\]) and ADC_CH2_CM_TOL (P0_R85_D\[3:2\]) register bits. [Table 7-10](#TABLE_Q3J_C4M_XDC) shows these options for Channel 1. Setting higher common mode tolerance offers improved CMRR performance at the expense of noise performance by a few decibels.

**Table 7-10 Common-Mode Tolerance Mode Selection for Record Channel**


| P0_R80_D[3:2] : ADC_CH1_CM_TOL[1:0] | CHANNEL 1 INPUT COMMON-MODE TOLERANCE |
| --- | --- |
| 00 (default) | AC-coupled input with common mode variance tolerance of 50mVpp for single-ended and 100mVpp for differential configuration |
| 01 | AC-coupled / DC-coupled input with common mode variance tolerance supported 500mVpp for single-ended and 1Vpp for differential configuration |
| 10 | AC-coupled / DC-coupled input with common mode variance tolerance supported rail to rail (supply to ground) (High CMRR tolerance mode) |
| 11 | Reserved (do not use this setting) |


**Table 7-11 Input Common Mode Tolerance for the Record Channel**


| P0_R80_D[3:2] : ADC_CH1_CM_TOL[1:0] | INPUT CHANNEL 1 COMMON MODE TOLERANCE |
| --- | --- |
| 00 (default) | AC-coupled input with common mode variance tolerance supported 50mVpp for single ended and 100mVpp for differential configuration |
| 01 | AC-coupled / DC-coupled input with common mode variance tolerance supported 500mVpp for single ended and 1Vpp for differential configuration |
| 10 | AC-coupled / DC-coupled input with common mode variance tolerance supported rail to rail (supply to ground) (High CMRR tolerance mode) |
| 11 | Reserved |


See [Figure 7-15](#X8373-SEAC) to [Figure 7-20](#FIG_ODW_MVT_4DC) for the various typical input configuration diagrams. For single-ended inputs, the INxM pin can be directly grounded in DC-coupled configuration, but the INxM pin must be grounded after the AC-coupling capacitor in the AC-coupled configuration. For the best dynamic range performance, the differential AC-coupled input setting should be used and the common-mode variation at the device input should be limited to less than 100mVpp. For more details, refer [_Analog Input Configurations, Mixing and Muxing of TAx5x1x Devices_ application report](https://www.ti.com/lit/pdf/slaaed3).

![TAC5212 Differential AC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b00 and ADC_CHx_CM_TOL set to 2'b00 or 2'b01 or 2'10)](https://www.ti.com/ods/images/SLASF23A/GUID-20241120-SS0I-Y8JI-4R8W-9M4ZTFB2E8CU-low.svg)

**Figure 7-15 Differential AC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b00 and ADC_CHx_CM_TOL set to 2'b00 or 2'b01 or 2'10)**

![TAC5212 Single-ended AC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b01 and ADC_CHx_CM_TOL set to 2'b00 or 2'b01 or 2'10)](https://www.ti.com/ods/images/SLASF23A/GUID-20231210-SS0I-5CDQ-D09W-FP7XHH0FZMB2-low.svg)

**Figure 7-17 Single-ended AC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b01 and ADC_CHx_CM_TOL set to 2'b00 or 2'b01 or 2'10)**

![TAC5212 Single-ended mux on INxP AC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b10 and ADC_CHx_CM_TOL set to 2'b00 or 2'b01 or 2'10)](https://www.ti.com/ods/images/SLASF23A/GUID-20241202-SS0I-6A74-62ON-N23YJHQ2F062-low.svg)

**Figure 7-19 Single-ended mux on INxP AC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b10 and ADC_CHx_CM_TOL set to 2'b00 or 2'b01 or 2'10)**

![TAC5212 Differential DC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b00 and ADC_CHx_CM_TOL set to 2'b01 or 2'10)](https://www.ti.com/ods/images/SLASF23A/GUID-20241120-SS0I-2E5I-2H7D-RBQJ83RA34AZ-low.svg)

**Figure 7-16 Differential DC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b00 and ADC_CHx_CM_TOL set to 2'b01 or 2'10)**

![TAC5212 Single-ended DC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b01 and ADC_CHx_CM_TOL set to 2'b01 or 2'10)](https://www.ti.com/ods/images/SLASF23A/GUID-20231210-SS0I-LQSR-R4FK-J4FPC18M6Q9N-low.svg)

**Figure 7-18 Single-ended DC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b01 and ADC_CHx_CM_TOL set to 2'b01 or 2'10)**

![TAC5212 Single-ended mux on INxP DC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b10 and ADC_CHx_CM_TOL set to 2'b01 or 2'10)](https://www.ti.com/ods/images/SLASF23A/GUID-20241120-SS0I-SNWD-IXCN-02NUS9AIWHF0-low.svg)

**Figure 7-20 Single-ended mux on INxP DC-Coupled Input Connection (ADC_CHx_INSRC set to 2'b10 and ADC_CHx_CM_TOL set to 2'b01 or 2'10)**

The device also allows for flexibility in choosing the typical input impedance on INxP or INxM from 5kΩ (default), 10kΩ, and 40kΩ based on the input source impedance selection. There can be a ±20% variation on the selected input impedance value. The higher input impedance results in slightly higher noise or lower dynamic range. [Table 7-12](#SBAS892INIMP) lists the configuration register settings for the input impedance for the record channel.

**Table 7-12 Input Impedance Selection for the Record Channel**


| P0_R80_D[5:4] : ADC_CH1_IMP[1:0] | CHANNEL 1 INPUT IMPEDANCE SELECTION |
| --- | --- |
| 00 (default) | Channel 1 input impedance typical value is 5 kΩ on INxP or INxM |
| 01 | Channel 1 input impedance typical value is 10 kΩ on INxP or INxM |
| 10 | Channel 1 input impedance typical value is 40 kΩ on INxP or INxM |
| 11 | Reserved (do not use this setting) |


Similarly, the input impedance selection setting for input channel 2 can be configured using the ADC_CH2_IMP\[1:0\] (P0_R85_D\[5:4\]).

Input impedance setting of 5 kΩ is not supported when the ADC inputs are configured for single ended mux (ADC_CHx_INSRC = 2'b10 or 2'b11) and also not supported in the high swing mode ([Section 7.3.5](GUID-65D36601-25C5-488F-88CA-9500225A899D.html)).

The value of the coupling capacitor in AC-coupled mode must be chosen so that the high-pass filter formed by the coupling capacitor and the input impedance do not affect the signal content. Before proper recording can begin, this coupling capacitor must be charged up to the common-mode voltage at power-up. To enable quick charging, the device has modes to speed up the charging of the coupling capacitor. The default value of the quick-charge timing is set for a coupling capacitor up to 1 µF. However, if a higher-value capacitor is used in the system, then the quick-charging timing can be increased by using the INCAP_QCHG (P0_R5_D\[7:6\]) register bits. For low distortion performance, use the low-voltage coefficient capacitors for AC coupling.

Additionally, if the application uses digital PDM microphones for the recording, GPIOx, GPI1 and GPO1 pins can be reconfigured in the device to support up to four channels for the digital microphone recording (when the analog channels are not used). The device can also support simultaneous recording on two analog and two digital microphone channels or one analog channel and three digital microphone channels. These combinations can be enabled using the INTF4_CFG (B0_P0_R19) register. More details on enabling the PDM channels are present [Section 7.3.7](GUID-7CBF3977-479E-482C-928D-DA8AC4F02FA6.html).

The TAC5212 also supports an incremental mode of ADC where analog input channels can be used for DC measurements. This can be configured by setting IADC_EN (P0_R81_D\[7\]). For more details on the incremental mode of ADC, refer [Section 7.3.8](GUID-3BC6ABC6-84B3-49D7-9269-FAF14A8553BA.html).


### 7.3.4  Output Channel Configurations

The device consists of two pairs of analog output pins (OUTxP and OUTxM) that can be configured as differential inputs or single-ended outputs for playback channels. The device supports simultaneous playback of up to four channels of single-ended outputs or up to two channel differential output using the high-performance multichannel DAC. [Table 7-13](#SBAS892INSRC) shows the input source selection for the playback channels.

**Table 7-13 Input Source Selection for the Playback Channel**


| P0_R100_D[7:5] : OUT1x_SRC[2:0] | OUT1P/OUT1M Input Source Selection |
| --- | --- |
| 000 | Output driver disabled |
| 001 (default) | DAC signal chain |
| 010 | Analog bypass signal chain |
| 011 | Mixing of DAC and Analog bypass signal chains |
| 100 | OUT1P for DAC and OUT1M for Analog bypass signal chain |
| 101 | OUT1P for Analog bypass and OUT1M for DAC signal chain. |
| 11x | Reserved. Do not use this setting. |


Similarly, the input source selection setting for output channel 2 can be configured using the OUT2x_SRC\[2:0\] (P0_R107_D\[7:5\]) register bits.

The TAC5212 supports up to 2\-channel differential output, up to 2\-channel pseudo-differential output, and up to 4\-channel single-ended output. Each of the output channels can be independently configured for differential or single-ended output.

[Table 7-14](#TABLE_GVL_F5D_5XB) shows the configuration modes for the output pins.

**Table 7-14 Output Pin Configuration for the Playback Channel**


| P0_R100_D[4:2] : OUT1x_CFG[2:0] | OUT1P/OUT1M Pin Configuration |
| --- | --- |
| 000 (default) | OUT1P/OUT1M as a differential pair |
| 001 | OUT1P and OUT1M as independent single-ended outputs |
| 010 | Mono single-ended output on OUT1P only |
| 011 | Mono single-ended output on OUT1M only |
| 100 | Pseudo-differential output with OUT1P as signal and OUT1M as VCOM |
| 101 | Pseudo differential output with OUT1P as signal, OUT1M as VCOM and OUT2M as VCOM sense (external common mode sense). |
| 110 | Pseudo-differential output with OUT1M as signal and OUT1P as VCOM |
| 111 | Reserved. Do not use this setting. |


Similarly, the output pin configuration for output channel 2 can be done using the OUT2x_CFG\[2:0\] (P0_R107_D\[4:2\]) register bits.

See [Figure 7-21](#X8373-SEAC) to [Figure 7-24](#FIG_GX3_PST_4DC) for the various typical output configuration diagrams.

![TAC5212 Differential Output Connection (OUT1x_CFG[2:0] = 3'b000)](https://www.ti.com/ods/images/SLASF23A/GUID-20250103-SS0I-H2CV-1OAH-929U7RIV0XS1-low.svg)

**Figure 7-21 Differential Output Connection (OUT1x_CFG\[2:0\] = 3'b000)**

![TAC5212 Psuedo-differential Output Connection with External Common-Mode Sense (OUT1x_CFG[2:0] = 3'b101)](https://www.ti.com/ods/images/SLASF23A/GUID-20250103-SS0I-8Z2W-Q8OJ-H1KKTZK25IVH-low.svg)

**Figure 7-23 Psuedo-differential Output Connection with External Common-Mode Sense (OUT1x_CFG\[2:0\] = 3'b101)**

![TAC5212 Mono Single-ended Output Connection on OUT1P (OUT1x_CFG[2:0] = 3'b010)](https://www.ti.com/ods/images/SLASF23A/GUID-20250103-SS0I-SXKA-Y5MS-IFEQA65QB8G0-low.svg)

**Figure 7-22 Mono Single-ended Output Connection on OUT1P (OUT1x_CFG\[2:0\] = 3'b010)**

![TAC5212 Stereo Single-ended Output Connection (OUT1x_CFG[2:0] = 3'b001)](https://www.ti.com/ods/images/SLASF23A/GUID-20250103-SS0I-WIAF-0NS9-D3KNO3YUH73D-low.svg)

**Figure 7-24 Stereo Single-ended Output Connection (OUT1x_CFG\[2:0\] = 3'b001)**

The TAC5212 can support a variety of loads including headphone, lineout, and receiver amplifiers. Load drive configurations are available for each pin independently. OUT1P_DRIVE\[1:0\] (P0_R101_D\[7:6\]) configures the load drive capability for the OUT1P pin. Similary, OUT1M_DRIVE\[1:0\], OUT2P_DRIVE\[1:0\], OUT2M_DRIVE\[1:0\] control the output drive for OUT1M, OUT2P and OUT2M respectively.


### 7.3.5  Reference Voltage

All audio data converters require a DC reference voltage. The TAC5212 achieves low-noise performance by internally generating a low-noise reference voltage. This reference voltage is generated using a band-gap circuit with high PSRR performance. This audio converter reference voltage must be filtered externally using a minimum 1µF capacitor connected from the VREF pin to the device ground (VSS).

The value of this reference voltage can be configured using the VREF_FSCALE (P0_R77_D\[1:0\]) register bits and must be set to an appropriate value based on the desired full-scale input for the device and the AVDD supply voltage available in the system. The default VREF value is set to 2.75V, which in turn supports a 2V<sub>RMS</sub> differential full-scale input to the device. The required minimum AVDD voltage for this mode is 3V. The TAC5212 also supports a high swing mode with 4V<sub>RMS</sub> differential swing which can be enabled by setting ADC_CHx_FULLSCALE_VAL (P0_R80_D\[1\] and P0_R85_D\[1\]) to 1'b1 for each channel independently. [Table 7-15](#SBAS892VREF) lists the various VREF settings supported along with the required AVDD range and the supported full-scale input signal for that configuration.

**Table 7-15 VREF Programmable Settings**


| P0_R77_D[1:0]: VREF_FSCALE[1:0] | VREF OUTPUT VOLTAGE | DIFFERENTIAL FULL-SCALE INPUT SUPPORTED | SINGLE-ENDED FULL-SCALE INPUT SUPPORTED | AVDD OPERATION MODE |
| --- | --- | --- | --- | --- |
| 00 (default) | 2.75V | 2V<sub>RMS</sub> (4 V<sub>RMS</sub> supported in high swing mode) | 1V<sub>RMS</sub> (2 V<sub>RMS</sub> supported in high swing mode) | AVDD 3.3V Operation |
| 01 | 2.5V | 1.818V<sub>RMS</sub> | 0.909V<sub>RMS</sub> | AVDD 3.3V Operation |
| 10 | 1.375V | 1V<sub>RMS</sub> | 0.5V<sub>RMS</sub> | AVDD 1.8V Operation |
| 11 | Reserved | Reserved | Reserved | Reserved |


To achieve low power consumption, this audio reference block is powered down during the sleep or software shutdown modes as described in [Section 7.4](GUID-650AF74C-19CE-467E-A008-FFFB8FDF95AF.html). When exiting sleep mode, the audio reference block should be powered up by setting SLEEP_EXIT_VREF_EN (P0_R2_D\[3\]) to 1'b1. An internal fast-charge scheme helps the VREF pin settle to its steady-state voltage after the settling time (which is a function of the decoupling capacitor on the VREF pin). This time is approximately equal to 3.5ms when using a 1μF decoupling capacitor. If a higher-value decoupling capacitor is used on the VREF pin, the fast-charge setting must be reconfigured using the VREF_QCHG (P0_R2_D\[5:4\]) register bits, which support options of 3.5ms (default), 10ms, 50ms, or 100ms.


### 7.3.6  Programmable Microphone Bias

The device integrates a built-in, low-noise microphone bias pin that can be used in the system for biasing electret-condenser microphones or providing the supply to the MEMS analog or digital microphone. The integrated bias amplifier supports up to 5mA of load current that can be used for multiple microphones and is designed to provide a combination of high PSRR, low noise, and programmable bias voltages to allow the biasing to be fine-tuned for specific microphone combinations.

When using this MICBIAS pin for biasing or supplying to multiple microphones, avoid any common impedance on the board layout for the MICBIAS connection to minimize coupling across microphones. [Table 7-16](#SBAS892MBIAS) shows the available microphone bias programmable options.

**Table 7-16 MICBIAS Programmable Settings**


| P0_R77_D[3:2] : MICBIAS_VAL[1:0] | P0_R77_D[1:0] : VREF_FSCALE[1:0] | MICBIAS OUTPUT VOLTAGE |
| --- | --- | --- |
| 00 (default) | 00 (default) | 2.75 V (same as the VREF output) |
| 01 | 2.5 V (same as the VREF output) |  |
| 10 | 1.375 V (same as the VREF output) |  |
| 11 | Reserved (do not use these settings) |  |
| 01 | 00 (default) | 1.375 V (0.5 times the VREF output) |
| 01 | 1.250 V (0.5 times the VREF output) |  |
| 10 or 11 | Reserved (do not use these settings) |  |
| 10 | XX | Reserved (do not use these settings) |
| 11 | XX | Same as AVDD |


The microphone bias output can be powered on or powered off (default) by configuring the MICBIAS_PDZ (P0_R120_D\[5\]) register bit. Additionally, the device provides an option to configure the GPIOx or GPI1 pin to directly control the microphone bias output powering on or off. This feature is useful to control the microphone directly without engaging the host for I<sup>2</sup>C or SPI communication. The MICBIAS_PDZ (P0_R120_D\[5\]) register bit value is ignored if the GPIOx or GPI1 pin is configured to set the microphone bias on or off.


### 7.3.7  Digital PDM Microphone Record Channel

In addition to supporting analog microphones, the TAC5212 also interfaces to digital pulse-density-modulation (PDM) microphones and uses high-order and high-performance decimation filters to generate pulse code modulation (PCM) output data that can be transmitted on the audio serial interface to the host. The device supports up to four digital microphone recording channels (when the analog channels are not used). The device can also support simultaneous recording on two analog and two digital microphone channels or one analog channel and three digital microphone channels.

The GPIOx, GPI1 and GPO1 pins can be configured for the PDM data lines (PDMDINx) and PDM Clock (PDMCLK) functions as per the [Table 7-70](GUID-152EFD75-23AB-4CCB-955F-8E025156BF7D.html#SBAS892GPIO) for the digital PDM microphone recording.

The device internally generates PDMCLK with a programmable frequency of either 6.144MHz, 3.072MHz, 1.536MHz, or 768kHz (for output data sample rates in multiples or submultiples of 48kHz) or 5.6448MHz, 2.8224MHz, 1.4112MHz, or 705.6kHz (for output data sample rates in multiples or submultiples of 44.1kHz) using the PDM_CLK_CFG\[1:0\] (P0_R53_D\[7:6\]) register bits. PDMCLK can be routed on the GPIOx and GPO1 pins using the respective configuration registers: GPIO1_CFG (P0_R10\[7:4\]), GPIO2_CFG (P0_R11\[7:4\]) and GPO1_CFG (P0_R12\[7:4\]). This clock can be connected to the external digital microphone device. [Figure 7-25](#SLAS892DMIC1) shows a connection diagram of the digital PDM microphones.

![TAC5212 Digital PDM Microphones Connection Diagram for the TAC5212](https://www.ti.com/ods/images/SLASF23A/GUID-20250103-SS0I-4UKI-N50G-FKIJME48HQZM-low.svg) 

**Figure 7-25 Digital PDM Microphones Connection Diagram for the TAC5212**

The single-bit output of the external digital microphone device can be connected to the GPI1 or GPIOx pin. The device supports two PDM data lines: PDMDIN1 and PDMDIN2 set through the registers PDM_DIN1_SEL (P0_R19_D\[3:2\]) and PDM_DIN2_SEL (P0_R19_D\[1:0\]). When using GPI1, make sure that the GPI1 function is enabled using the GPI1_CFG (P0_R13\[1\]). This single data line can be shared by two digital microphones to place their data on the opposite edge of PDMCLK. Internally, the device latches the steady value of the data on either the rising or falling edge of PDMCLK based on the configuration register bits set in PDMDIN1_EDGE (P0_R19_D\[4\]) and PDMDIN2_EDGE (P0_R19_D\[5\]). [Figure 7-26](#SLAS892DMIC2) shows the digital PDM microphone interface timing diagram.

![TAC5212 Digital PDM Microphone Protocol Timing Diagram](https://www.ti.com/ods/images/SLASF23A/GUID-DD505051-8067-425E-9213-BA287C83AD40-low.gif) 

**Figure 7-26 Digital PDM Microphone Protocol Timing Diagram**

When the digital microphone is used for recording, the analog blocks of the respective ADC channel are powered down and bypassed for power efficiency. Channel 3 and channel 4 support only the digital microphone interface. Use the PDM_CH1_SEL\[1:0\] (P0_R19_D\[7\]) and PDM_CH2_SEL\[1:0\] (P0_R19_D\[6\]) register bits to select the analog microphone or digital microphone for channel 1 to channel 2 respectively.


### 7.3.8  Incremental ADC (IADC) Mode

In the incremental ADC (IADC) mode user can convert the average value of the input, into a 24-bit code. This is useful for applications that need to sense a voltage rather than needing a continuous time domain capture.

The various configurations for the IADC mode can be set using IADC_CH_CFG (P0_R81) register. The IADC_MODE (P0_R81_D\[6:5\]) can be configured for single shot conversion or sequential conversion. In single shot conversion, the device enters into the conversion cycle when the user enables conversion. At the end of conversion, the IADC_ONESHOT_CONV_DONE_STS (P0_R81_D\[2\]) bit is set. The user can read the data register after this bit is set. In sequential conversion, the device keeps converting the input sequentially. The rate of conversion id dependent on the “SKIP”, “CONVERT” and “RESET” values set in the IADC_CFG (P0_R76) registers.

This operation has 3 distinct phases “SKIP”, “CONVERT” and “RESET”. In “SKIP” phase, the input is converted, however the output corresponding to the first “SKIP” number of cycles isn’t considered for final code generation. During “CONVERT” phase the ADC outputs are considered for final code generation. During “RESET” phase the various memory elements inside the ADC are reset.

The IADC inputs can also be configured as single-ended or differential using the ADC_CHx_CFG0 registers to configure the ADC_CHx_INSRC.

GPIOx or GPI1 pins can be used by the user to begin the IADC mode through the IADC_CONVST_GPIO (P0_R21_D\[5:4\]) register for ease of control. In this case the setting of IADC_EN (P0_R81_D\[7\] will be ignored.

For more details, refer the [_Configuring and using the IADC Mode in TAx5x1x device_ application report](https://www.ti.com/lit/pdf/).


### 7.3.9  Signal-Chain Processing

The TAC5212 signal chain is comprised of very low-noise, high-performance, and low-power analog blocks and highly flexible and programmable digital processing blocks. The high performance and flexibility combined with a compact package make the TAC5212 is optimized for a variety of end-equipments and applications that require multichannel audio capture and playback. [Section 7.3.9.1](GUID-10C94A4D-73A3-4FB2-872D-49E951914BAA.html) and [Section 7.3.9.2](GUID-AAD11B25-FF81-4260-AAA8-17B9699E1C28.html) describes key components in ADC and DAC signal chain further.


#### 7.3.9.1  ADC Signal-Chain

[Figure 7-27](#SLAS892SCHAIN) shows the key components of the record path signal chain.

![TAC5212 ADC Signal-Chain Processing Flowchart](https://www.ti.com/ods/images/SLASF23A/GUID-20230612-SS0I-D94Z-PFTW-BZPTJWHXRCJF-low.svg) 

**Figure 7-27 ADC Signal-Chain Processing Flowchart**

The front-end ADC is very low noise, with a 119dB dynamic range performance. This low-noise and low-distortion, multibit, delta-sigma ADC enables the TAC5212 to record a far-field audio signal with very high fidelity, both in quiet and loud environments. Moreover, the ADC architecture has inherent antialias filtering with a high rejection of out-of-band frequency noise around multiple modulator frequency components. Therefore, the device prevents noise from aliasing into the audio band during ADC sampling. Further on in the signal chain, an integrated, high-performance multistage digital decimation filter sharply cuts off any out-of-band frequency noise with high stop-band attenuation.

The device also has an integrated programmable biquad filter that allows for custom low-pass, high-pass, or any other desired frequency shaping. Thus, the overall signal chain architecture removes the requirement to add external components for antialiasing low-pass filtering and thus saves drastically on the external system component cost and board space. See the [_TAC5212 Integrated Analog Antialiasing Filter and Flexible Digital Filter_ application report](https://www.ti.com/lit/pdf/SBAA377) for further details.

The signal chain also consists of various highly programmable digital processing blocks such as phase calibration, gain calibration, high-pass filter, digital summer or mixer, biquad filters, synchronous sample rate converter, and volume control. The details of these processing blocks are discussed further in this section. The device also supports up to four digital PDM microphone recording channels when the analog recording channels are not used.

The desired input channels for recording can be enabled or disabled by using the CH_EN (P0_R118) register, and the output channels for the audio serial interface can be enabled or disabled by using the ASI_TX_CHx_CFG registers. In general, the device supports simultaneous power-up and power-down of all active channels for simultaneous recording. However, based on the application's needs, if some channels must be powered up or powered down dynamically when the other channel recording is on, then that use case is supported by setting the DYN_PUPD_CFG (P0_R119) register.

The device supports an input signal bandwidth up to 90kHz, which allows the high-frequency non-audio signal to be recorded by using a 216kHz (or higher) sample rate. Wide bandwidth mode can be enabled or disabled by setting ADC_CHx_BW_MODE bit (P0_R80_D\[0\] and P0_R85_D\[0\]). Wide bandwidth mode is supported only with the 40kΩ input impedance setting ([Table 7-12](GUID-65504B2E-DD3B-48A1-BDD8-74259F1F65A3.html#SBAS892INIMP)) and not supported for the high swing mode ([Section 7.3.5](GUID-65D36601-25C5-488F-88CA-9500225A899D.html)).

For sample rates of 48kHz or lower, the device supports all features and various programmable processing blocks. However, for sample rates higher than 48kHz, there are limitations in the number of simultaneous channel recordings and playback supported and the number of biquad filters and such. See the [_TAC5212 Sampling Rates and Programmable Processing Blocks Supported_ application report](https://www.ti.com/lit/pdf/SLAAED7) for further details.


##### 7.3.9.1.1  6 to 4 Input Select Multiplexer (6:4 MUX)

The device supports up to two analog and up to four digital microphone channels and can support the simultaneous recording on four channels at a given time. The ADC input signal chain consists of a 6:4 Multiplexer to enable these combinations:

1.  All 4 digital PDM channels.
2.  3 digital PDM channels and 1 analog channel.
3.  2 digital PDM channels and 2 analog channnels

These combinations can be enabled using the INTF4_CFG (B0_P0_R19) register. More details on enabling the PDM channes are present in [Section 7.3.7](GUID-7CBF3977-479E-482C-928D-DA8AC4F02FA6.html).


##### 7.3.9.1.2  Programmable Channel Gain and Digital Volume Control

The device has an independent programmable channel gain setting for each input channel that can be set to the appropriate value based on the maximum input signal expected in the system and the ADC VREF setting used (see the _[Section 7.3.5](GUID-65D36601-25C5-488F-88CA-9500225A899D.html#GUID-65D36601-25C5-488F-88CA-9500225A899D)_), which determines the ADC full-scale signal level.

The device has a programmable digital volume control with a range from –80dB to 47dB in steps of 0.5dB with the option to mute the channel recording. The digital volume control value can be changed dynamically while the ADC channel is powered up and recorded. During volume control changes, the soft ramp-up or ramp-down volume feature is used internally to avoid any audible artifacts. Soft-stepping can be entirely disabled using the ADC_DSP_DISABLE_SOFT_STEP (P0_R114_D\[1\]) register bit.

The digital volume control setting is independently available for each output channel, including the digital microphone record channel. However, the device also supports an option to gang up the volume control setting for all channels together using the channel 1 digital volume control setting, regardless if channel 1 is powered up or powered down. This gang-up can be enabled using the ADC_DSP_DVOL_GANG (P0_R114_D\[0\]) register bit.

[Table 7-44](#SBAS892DVOL) shows the programmable options available for the digital volume control.

**Table 7-17 Digital Volume Control (DVC) Programmable Settings**


| P0_R82_D[7:0] : ADC_CH1_DVOL[7:0] | DVC SETTING FOR OUTPUT CHANNEL 1 |
| --- | --- |
| 0000 0000 = 0d | Output channel 1 DVC is set to mute |
| 0000 0001 = 1d | Output channel 1 DVC is set to –80dB |
| 0000 0010 = 2d | Output channel 1 DVC is set to –79.5dB |
| 0000 0011 = 3d | Output channel 1 DVC is set to –79dB |
| … | … |
| 1010 0000 = 160d | Output channel 1 DVC is set to –0.5dB |
| 1010 0001 = 161d (default) | Output channel 1 DVC is set to 0dB |
| 1010 0010 = 162d | Output channel 1 DVC is set to 0.5dB |
| … | … |
| 1111 1101 = 253d | Output channel 1 DVC is set to 46dB |
| 1111 1110 = 254d | Output channel 1 DVC is set to 46.5dB |
| 1111 1111 = 255d | Output channel 1 DVC is set to 47dB |


Similarly, the digital volume control setting for output channel 2 to channel 4 can be configured using the CH2_DVOL (P0_R87) to CH4_DVOL (P0_R95) register bits, respectively.

The internal digital processing engine soft ramps up the volume from a muted level to the programmed volume level when the channel is powered up, and the internal digital processing engine soft ramps down the volume from a programmed volume to mute when the channel is powered down. This soft-stepping of volume is done to prevent abruptly powering up and powering down the record channel. This feature can also be entirely disabled using the ADC_DSP_DISABLE_SOFT_STEP (P0_R114_D\[1\]) register bit.

The programmble channel digital volume control feature is not applicable if the PLL is turned off. For setting channel attenuation, user can configure this by using the programmable high pass filter coefficients as described in [Section 8.2.4](GUID-7E0832F6-E72C-44C4-B49A-8B3CC9EE7401.html).


##### 7.3.9.1.3  Programmable Channel Gain Calibration

Along with the digital volume control, this device also provides programmable channel gain calibration. The gain of each channel can be finely calibrated or adjusted in steps of 0.1dB for a range of –0.8dB to 0.7dB gain error. This adjustment is useful when trying to match the gain across channels resulting from external components and microphone sensitivity. This feature, in combination with the regular digital volume control, allows the gains across all channels to be matched for a wide gain error range with a resolution of 0.1dB. [Table 7-45](#SBAS892GCAL) shows the programmable options available for the channel gain calibration.

**Table 7-18 Channel Gain Calibration Programmable Settings**


| P0_R83_D[7:4] : ADC_CH1_FGAIN[3:0] | CHANNEL GAIN CALIBRATION SETTING FOR INPUT CHANNEL 1 |
| --- | --- |
| 0000 = 0d | Input channel 1 gain calibration is set to –0.8dB |
| 0001 = 1d | Input channel 1 gain calibration is set to –0.7dB |
| … | … |
| 1000 = 8d (default) | Input channel 1 gain calibration is set to 0dB |
| … | … |
| 1110 = 14d | Input channel 1 gain calibration is set to 0.6dB |
| 1111 = 15d | Input channel 1 gain calibration is set to 0.7dB |


Similarly, the channel gain calibration setting for input channel 2 to channel 4 can be configured using the ADC_CH2_CFG3 (P0_R88) to ADC_CH4_CFG3 (P0_R96) register bits, respectively.


##### 7.3.9.1.4  Programmable Channel Phase Calibration

In addition to the gain calibration, the phase delay in each record channel can be finely calibrated or adjusted in steps of one modulator clock cycle for a cycle range of 1 to 63 for the phase error. The modulator clock for analog and digital microphones is set independantly. For analog microphones, it is the clock used for ADC MOD CLK, and is 3.072MHz (the output data sample rate is multiples or submultiples of 48kHz) or 2.8224MHz (the output data sample rate is multiples or submultiples of 44.1 kHz) in default configurations. For power savings, the ADC modulator clock can also be reduced to 1.536MHz (the output data sample rate is multiples or submultiples of 48kHz) or 1.4112MHz (the output data sample rate is multiples or submultiples of 44.1 kHz) by using ADC_CLK_BY2_MODE (B0_P78_D\[7\]) register bit. For the digital microphone use case, it is the clock used for PDM_CLK, and is also 3.072MHz (the output data sample rate is multiples or submultiples of 48kHz) or 2.8224MHz (the output data sample rate is multiples or submultiples of 44.1 kHz) in default configurations. User can configure the PDM_CLK using the PDM_CLK_CFG\[1:0\] (P0_R53_D\[7:6\]) register bits. The programmable channel phase calibration feature is very useful for many applications that must match the phase with fine resolution between each channel, including any phase mismatch across channels resulting from external components or microphones. [Table 7-19](#SBAS892PCAL) shows the available programmable options for channel phase calibration when operating with default modulator clocks.

**Table 7-19 Channel Phase Calibration Programmable Settings**


| P0_R84_D[7:2] : ADC_CH1_PCAL[5:0] | CHANNEL PHASE CALIBRATION SETTINGS FOR INPUT CHANNEL 1 |
| --- | --- |
| 00 0000 = 0d (default) | No phase calibration |
| 00 0001 = 1d | Phase calibration delay is set to one cycle of the modulator clock |
| … | … |
| 11 1111 = 63d | Phase calibration delay is set to 63 cycles of the modulator clock |


Similarly, the channel phase calibration setting for input channel 2 to channel 4 can be configured using the ADC_CH2_PCAL (P0_R89_D\[7:2\]) to ADC_CH4_PCAL (P0_R97_D\[7:2\]) register bits, respectively.

By default, the phase calibration is enabled for both analog and digital microphone channels. This can be changed to only analog or only digital microphones through the PCAL_ANA_DIG_SEL (P0_R84_D\[1:0\]) register bits. When using analog input and PDM input together for simulatneous conversion, there is a limit on the available phase calibration options for the analog channels when analog and PDM clocks are different. When using ADC MOD CLK = 1.536MHz or 1.4112MHz and PDM_CLK = 6.144MHz or 5.6448MHz, phase calibration delays of only up to 16 cycles of the modulator clock are supported for the analog channels. When using ADC MOD CLK = 3.072MHz or 2.8224 and PDM_CLK = 6.144MHz or 5.6448MHz, phase calibration delays of only up to 32 cycles of the modulator clock are supported for the analog channels. When using ADC MOD CLK = 1.536MHz or 1.4112MHz and PDM_CLK = 3.072MHz or 2.8224MHz also, phase calibration delays of only up to to 32 cycles of the modulator clock are supported for the analog channels.


##### 7.3.9.1.5  Programmable Digital High-Pass Filter

To remove the DC offset component and attenuate the undesired low-frequency noise content in the record data, the device supports a programmable high-pass filter (HPF). The HPF is not a channel-independent filter setting but is globally applicable for all ADC channels. This HPF is constructed using the first-order infinite impulse response (IIR) filter and is efficient enough to filter out possible DC components of the signal. [Table 7-46](#SBAS892HPF) shows the predefined –3dB cutoff frequencies available that can be set by using the ADC_DSP_HPF_SEL\[1:0\] register bits of P0_R114_D\[5:4\]. Additionally, to achieve a custom –3dB cutoff frequency for a specific application, the device also allows the first-order IIR filter coefficients to be programmed when the HPF_SEL\[1:0\] register bits are set to 2'b00. [Figure 7-28](#X8373HPF) illustrates the frequency response plot for the HPF filter.

**Table 7-20 HPF Programmable Settings**


| P0_R114_D[5:4] : ADC_DSP_HPF_SEL[1:0] | -3dB CUTOFF FREQUENCY SETTING | -3dB CUTOFF FREQUENCY AT 16kHz SAMPLE RATE | -3dB CUTOFF FREQUENCY AT 48-kHz SAMPLE RATE |
| --- | --- | --- | --- |
| 00 | Programmable 1st-order IIR filter | Programmable 1st-order IIR filter | Programmable 1st-order IIR filter |
| 01 (default) | 0.00002 × f<sub>S</sub> | 0.25 Hz | 1 Hz |
| 10 | 0.00025 × f<sub>S</sub> | 4 Hz | 12 Hz |
| 11 | 0.002 × f<sub>S</sub> | 32 Hz | 96 Hz |


![TAC5212 HPF Filter Frequency Response Plot](https://www.ti.com/ods/images/SLASF23A/GUID-3DA4891F-9467-4644-921B-98474D40A913-low.gif)

**Figure 7-28 HPF Filter Frequency Response Plot**

[Equation 3](#SLOS585586) gives the transfer function for the first-order programable IIR filter:

Equation 1. ![TAC5212](https://www.ti.com/ods/images/SLASF23A/GUID-467C00D0-DF25-47F8-AFD0-8FA0B6BCEFC3-low.gif)

The frequency response for this first-order programmable IIR filter with default coefficients is flat at a gain of 0 dB (all-pass filter). The host device can override the frequency response by programming the IIR coefficients in [Table 7-47](#SLOS5852326) to achieve the desired frequency response for high-pass filtering or any other desired filtering. If ADC_DSP_HPF_SEL\[1:0\] is set to 2'b00, the host device must write these coefficient values for the desired frequency response before powering-up any ADC channel for recording. [Table 7-47](#SLOS5852326) shows the filter coefficients for the first-order IIR filter. For additional details on configuring the programmable coefficients, refer [Section 8.2](GUID-F4463F91-42B0-400F-855C-8FAFD79871DA.html).

**Table 7-21 1st-Order IIR Filter Coefficients**


| FILTER | FILTER COEFFICIENT | DEFAULT COEFFICIENT VALUE | COEFFICIENT REGISTER MAPPING |
| --- | --- | --- | --- |
| Programmable 1st-order IIR filter (can be allocated to HPF or any other desired filter) | N<sub>0</sub> | 0x7FFFFFFF | P10_R120-R123 |
| N<sub>1</sub> | 0x00000000 | P10_R124-R127 |  |
| D<sub>1</sub> | 0x00000000 | P11_R8-R11 |  |


##### 7.3.9.1.6  Programmable Digital Biquad Filters

The device supports up to 12 programmable digital biquad filters available for ADC signal chain limited to 3/channel. These highly efficient filters achieve the desired frequency response. The TAC5212 also supports on-the-fly programmable Biquad filters for two-channel record use cases. In digital signal processing, a digital biquad filter is a second-order, recursive linear filter with two poles and two zeros. [Equation 4](#SLOS585587) gives the transfer function of each biquad filter:

Equation 2. ![TAC5212](https://www.ti.com/ods/images/SLASF23A/GUID-BC2B8BC9-15A8-4F51-BCDC-655425304DBE-low.gif)

The frequency response for the biquad filter section with default coefficients is flat at a gain of 0dB (all-pass filter). The host device can override the frequency response by programming the biquad coefficients to achieve the desired frequency response for low-pass, high-pass, or any other desired frequency shaping. The programmable coefficients for the biquads are located in the [Section 8.2.1](GUID-B11DF949-50E1-4A7B-8D25-46060A45456C.html) and [Section 8.2.2](GUID-DBA9A8BB-CD17-4AF0-BA78-9D3A14002D60.html). If biquad filtering is required, then the host device must write these coefficient values before powering up any ADC channels for recording. In two-channel use case, the TAC5212 also supports on-the-fly programmable filters. In this case, the device uses two banks of filters for one channel with a switch bit to perform the switch from one filter bank to the other. As described in [Table 7-48](#SBAS892BQA), these biquad filters can be allocated for each output channel based on the ADC_DSP_BQ_CFG\[1:0\] register setting of P0_R114_D\[3:2\]. By setting ADC_DSP_BQ_CFG\[1:0\] to 2'b00, the biquad filtering for all record channels is disabled and the host device can choose this setting if no additional filtering is required for the system application. See the [_TAC5x1x and TAC5x1x-Q1 Programmable Biquad Filters - Configuration and Applications_ application report](https://www.ti.com/lit/pdf/slaaeh6) for further details.

**Table 7-22 Biquad Filter Allocation to the Record Output Channel**


| ADC_DSP_BQ_CFG[1:0] = 2'b01 (1 Biquad per Channel) | ADC_DSP_BQ_CFG[1:0] = 2'b10 (Default) (2 Biquads per Channel) | ADC_DSP_BQ_CFG[1:0] = 2'b11 (3 Biquads per Channel) | RECORD OUTPUT CHANNEL ALLOCATION USING P0_R114_D[3:2] REGISTER SETTING |
| --- | --- | --- | --- |
| Biquad filter 1 | Allocated to output channel 1 | Allocated to output channel 1 | Allocated to output channel 1 |
| Biquad filter 2 | Allocated to output channel 2 | Allocated to output channel 2 | Allocated to output channel 2 |
| Biquad filter 3 | Allocated to output channel 3 | Allocated to output channel 3 | Allocated to output channel 3 |
| Biquad filter 4 | Allocated to output channel 4 | Allocated to output channel 4 | Allocated to output channel 4 |
| Biquad filter 5 | Not used | Allocated to output channel 1 | Allocated to output channel 1 |
| Biquad filter 6 | Not used | Allocated to output channel 2 | Allocated to output channel 2 |
| Biquad filter 7 | Not used | Allocated to output channel 3 | Allocated to output channel 3 |
| Biquad filter 8 | Not used | Allocated to output channel 4 | Allocated to output channel 4 |
| Biquad filter 9 | Not used | Not used | Allocated to output channel 1 |
| Biquad filter 10 | Not used | Not used | Allocated to output channel 2 |
| Biquad filter 11 | Not used | Not used | Allocated to output channel 3 |
| Biquad filter 12 | Not used | Not used | Allocated to output channel 4 |


[Table 7-49](#SBAS892BQRM) shows the biquad filter coefficients mapping to the register space.

**Table 7-23 Biquad Filter Coefficients Register Mapping**


| PROGRAMMABLE BIQUAD FILTER | BIQUAD FILTER COEFFICIENTS REGISTER MAPPING | PROGRAMMABLE BIQUAD FILTER | BIQUAD FILTER COEFFICIENTS REGISTER MAPPING |
| --- | --- | --- | --- |
| Biquad filter 1 | P8_R8-R27 | Biquad filter 7 | P9_R8-R27 |
| Biquad filter 2 | P8_R28-R47 | Biquad filter 8 | P9_R28-R47 |
| Biquad filter 3 | P8_R48-R67 | Biquad filter 9 | P9_R48-R67 |
| Biquad filter 4 | P8_R68-R87 | Biquad filter 10 | P9_R68-R87 |
| Biquad filter 5 | P8_R88-R107 | Biquad filter 11 | P9_R88-R107 |
| Biquad filter 6 | P8_R108-R127 | Biquad filter 12 | P9_R108-R127 |


##### 7.3.9.1.7  Programmable Channel Summer and Digital Mixer

For applications that require an even higher SNR than that supported for each channel, the device's digital summing mode can be used. In this mode, the digital record data are summed up across the channel with an equal weightage factor, which helps in reducing the effective record noise. The device supports a fully programmable mixer feature that can mix the various input channels with their custom programmable scale factor to generate the final output channels. [Figure 7-29](#X8373DMIX) shows a block diagram that describes the mixer 1 operation to generate output channel 1. The programmable coefficients for the mixer operation are located in the [Section 8.2.3](GUID-968E3853-E929-42BE-8695-26192C12B5F7.html). The co-efficient of programmable mixer range starts from 7FFFFFFF to FFFFFFFF(-1 to +1), where 7FFFFFFF = +1, FFFFFFFF = -1 and 00000000 = 0.

![TAC5212 Programmable Digital Mixer Block Diagram](https://www.ti.com/ods/images/SLASF23A/GUID-014EBA2A-1F30-4F74-9A49-A68A00CB9BB2-low.gif)

**Figure 7-29 Programmable Digital Mixer Block Diagram**

A similar mixer operation is performed by mixer 2, mixer 3, and mixer 4 to generate output channel 2, channel 3, and channel 4, respectively. TI recommends using the PPC3 GUI for configuring the programmable coefficients settings; for more details see the [_Mixer Configuration for TAC5x1x and TAC5x1x-Q1 CODECs_](https://www.ti.com/lit/pdf/SLAAER9) and the [PurePath™ console graphical development suite](http://www.ti.com/tool/PUREPATHCONSOLE). Additional details on the configurations can be found in the [_Using the TAx5x1x Programmable Digital Channel Mixer_ application report](https://www.ti.com/lit/pdf/SLAAER9).


##### 7.3.9.1.8  Configurable Digital Decimation Filters

The device record channel includes a high dynamic range and a built-in digital decimation filter to process the oversampled data from the multibit delta-sigma (ΔΣ) modulator to generate digital data at the same Nyquist sampling rate as the FSYNC rate. As illustrated in [Figure 7-27](GUID-10C94A4D-73A3-4FB2-872D-49E951914BAA.html#SLAS892SCHAIN), this decimation filter can also be used for processing the oversampled PDM stream from the digital microphone. The decimation filter can be chosen from four different types, depending on the required frequency response, group delay, power consumption, and phase linearity requirements for the target application. TThe selection of the decimation filter option can be done by configuring the ADC_DSP_DECI_FILT (P0_R114_D\[7:6\]) register bits. Low power filter can be configured by setting ADC_LOW_PWR_FILT (P0_R78_D\[2\]) bit. [Table 7-50](#SBAS892FILTSEL) shows the configuration register setting for the decimation filter mode selection for the record channel. This makes them suitable for a wide variety of audio applications.

**Table 7-24 Decimation Filter Mode Selection for the Record Channel**


| P0_R78_D[2] : ADC_LOW_PWR_FILT | P0_R114_D[7:6] : ADC_DSP_DECI_FILT[1:0] | DECIMATION FILTER MODE SELECTION |
| --- | --- | --- |
| 0 | 00 (default) | Linear phase filters are used for the decimation |
| 0 | 01 | Low latency filters are used for the decimation |
| 0 | 10 | Ultra-low latency filters are used for the decimation |
| 0 | 11 | Reserved (do not use this setting) |
| 1 | x | Low power filters are used for the decimation |


The following sections describe the filter response for the different latency options and samples rates.


##### 7.3.9.1.9  Automatic Gain Controller (AGC)

The device includes an automatic gain controller (AGC) for ADC recording. As shown in [Figure 7-68](#SBAS882AGCFIG), the AGC can be used to maintain a nominally constant output level when recording speech. Instead of manually setting the channel gain in AGC mode, the circuitry automatically adjusts the channel gain when the input signal becomes overly loud or very weak, such as when a person speaking into a microphone moves closer to or farther from the microphone. The AGC algorithm has several programmable parameters, including target level, maximum gain allowed, attack and release (or decay) time constants, and noise thresholds that allow the algorithm to be fine-tuned for any particular application. These are part of the programmable coefficients of the device for flexibility and can be configured using the registers in [Section 8.2.12](GUID-C773DC17-F5FB-41DD-A097-D59F18E48C99.html) and [Section 8.2.13](GUID-8F92EB72-85B7-454C-BDE5-E256D605E534.html).

![TAC5212 AGC Characteristics](https://www.ti.com/ods/images/SLASF23A/GUID-278960F3-B360-429D-850A-F843519C446D-low.gif) 

**Figure 7-68 AGC Characteristics**

The target level (AGC_LVL) represents the nominal approximate output level at which the AGC attempts to hold the ADC output signal level. The TAC5212 allows programming of different target levels. The target level is recommended to be set with enough margin to prevent clipping when loud sounds occur. For further details on the AGC various configurable parameter and application use, see [_Using the Automatic Gain Controller (AGC) in TAx5x1x Family_ application report](https://www.ti.com/lit/pdf/SBAA401). TI recommends using the PPC3 GUI for configuring the programmable coefficients settings; for more details see the [_TAC5212EVM-PDK Evaluation module_ user's guide](https://www.ti.com/lit/pdf/SBAU359) and the [PurePath™ console graphical development suite](http://www.ti.com/tool/PUREPATHCONSOLE).


##### 7.3.9.1.10  Voice Activity Detection (VAD)

The TAC5212 supports voice activity detection (VAD) mode as part of low power activity detection (LPAD) schemes. In this mode, the TAC5212 continuously monitors one of the input channels for voice detection. The device consumes low quiescent current from the AVDD supply in this mode. This feature can be enabled by setting VAD_EN (P0_R120_D\[2\]) to 1'b1. On detecting voice activity, the TAC5212 can alert the host through an interrupt or auto wake up and start recording based on the I<sup>2</sup>C programmed configuration. This alert can be configured through the LPAD_MODE (P1_R30_D\[7:6\]) register bits.

This feature is supported on both the analog and digital microphone interfaces. For lowest power VAD, the digital microphone interface is recommended. The input channel for the VAD can be selected by setting the LPAD_CH_SEL (P1_R30_D\[5:4\]) register bits to an appropriate value. See the [_How to use the Voice Activity Detection in the TAx511x and TAx521x_ application report](https://www.ti.com/lit/pdf/sbaa600) for further details.


##### 7.3.9.1.11  Ultrasonic Activity Detection (UAD)

The TAC5212 supports ultrasonic activity detection (UAD) mode as part of low power activity detection (LPAD) schemes. In this mode, the TAC5212 continuously monitors one of the input channels for signals in the ultrasonic frequency band. The device consumes low quiescent current from the AVDD supply in this mode. This feature can be enabled by setting UAD_EN (P0_R120_D\[3\]) to 1'b1. On detecting ultrasonic activity, the TAC5212 can alert the host through an interrupt or auto wake up and start recording based on the I<sup>2</sup>C programmed configuration. This alert can be configured through the LPAD_MODE (P1_R30_D\[7:6\]) register bits.

This feature is supported on both the analog and digital microphone interfaces. For lowest power UAD, the digital microphone interface is recommended. The input channel for the UAD can be selected by setting the LPAD_CH_SEL (P1_R30_D\[5:4\]) register bits to an appropriate value. See the [_How to use the Ultrasonic Activity Detection in the TAx511x and TAx521x_](https://www.ti.com/lit/pdf/SBAAEH4) for further details.


#### 7.3.9.2  DAC Signal-Chain

[Figure 7-69](#FIG_OD5_5H5_TXB) shows the key components of the playback signal chain.

![TAC5212 DAC Signal-Chain Processing Flowchart](https://www.ti.com/ods/images/SLASF23A/GUID-20230612-SS0I-BXC2-DWST-QKNKCNPNDLTK-low.svg) 

**Figure 7-69 DAC Signal-Chain Processing Flowchart**

The DAC signal chain offers a highly flexible low-noise playback path for low-noise and high-fidelity audio applications. This low-noise and low-distortion, multibit, delta-sigma DAC enables the TAC5212 to achieve 120dB dynamic range in very low power. Moreover, the DAC architecture has inherent antialias filtering with a high rejection of out-of-band frequency noise around multiple modulator frequency components. Therefore, the device prevents noise from aliasing into the audio band. Further on in the signal chain, an integrated, high-performance multistage digital interpolation filter sharply cuts off any out-of-band frequency noise with high stop-band attenuation.

The signal chain also consists of various highly programmable digital processing blocks such as biquad filters, phase calibration, gain calibration, high-pass filter, digital summer or mixer, synchronous sample rate converter, distortion limiter, thermal foldback, brownout prevention, and volume control. The details of these processing blocks are discussed further in this section. The device also supports up to four\-channel single-ended output modes and an analog bypass option from ADC input to DAC output.

The output channels for playback can be enabled or disabled by using the CH_EN (P0_R118) register, and the input channels for the audio serial interface can be enabled or disabled by using the PASI_RX_CHx_CFG or SASI_RX_CHx_CFG bits. The device supports simultaneous power-up and power-down of all active channels for simultaneous playback. However, based on the application needs, if some channels must be powered-up or powered-down dynamically when the other channel playback is on, then that use case is supported by setting the DYN_PUPD_CFG (P0_R119) register.

The device supports multiple data mixing options where up to 8 Input Channels from Main ASI, 2 Input Channels from Aux ASI, ADC loopback data, and tone generator can be mixed with flexible gain options for each path before playback on DAC output. By default, these mixers are disabled and channels are configured for only one channel of data. Mixers can be configured by setting ASI_DIN_Mixers programmable coefficient registers described in [Section 8.2.7](GUID-C97EEBC0-62A4-457B-8E8A-CEA36B8FF2BA.html).

The device supports an output signal bandwidth of up to 90kHz, which allows the high-frequency non-audio signal to be played by using a 216kHz (or higher) sample rate. Wideband mode can be enabled or disabled by using the DAC_CHx_BW_Mode bit (P0_R101_D\[0\], P0_R108_D\[0\]).

For sample rates of 48kHz or lower, the device supports all features and various programmable processing blocks. However, for sample rates higher than 48kHz, there are limitations in the number of simultaneous channel recordings and playback supported and the number of biquad filters and such. See the [_TAC5212 Sampling Rates and Programmable Processing Blocks Supported_ application report](https://www.ti.com/lit/pdf/SLAAED7) for further details.


##### 7.3.9.2.1  Programmable Channel Gain and Digital Volume Control

The device has an independent programmable channel gain setting for each output channel that can be set to the appropriate value based on the maximum input signal expected in the system, This can be done by configuring OUT1x_LVL_CTRL and OUT2x_LVL_CTRL bits. Coarse gain configuration from -12dB to +12dB is available with these controls in steps of 6dB.

The device has a programmable digital volume control with a range from –100dB to 27dB in steps of 0.5dB with the option to mute the channel recording. The digital volume control value can be changed dynamically while the DAC channel is powered-up and playing. During volume control changes, the soft ramp-up or ramp-down volume feature is used internally to avoid any audible artifacts. Soft-stepping can be entirely disabled using the DAC_DSP_DISABLE_SOFT_STEP (P0_R115_D\[1\]) register bit.

The digital volume control setting is independently available for each of the 4 single-ended output channels. In the case of 2\-Channel Differential DAC, only settings for DAC_CH1A and DAC_CH2A are applicable. The device also supports an option to gang up the volume control setting for all channels together using the channel 1A digital volume control setting, regardless if channel 1A is powered up or powered down. This gang-up can be enabled using the DAC_DSP_DVOL_GANG (P0_R115_D\[0\]) register bit.

[Table 7-44](#SBAS892DVOL) shows the programmable options available for the digital volume control.

**Table 7-44 Digital Volume Control (DVC) Programmable Settings**


| P0_R103_D[7:0] : DAC_CH1A_DVOL[7:0] | DVC SETTING FOR OUTPUT CHANNEL 1A |
| --- | --- |
| 0000 0000 = 0d | Output channel 1 DVC is set to mute |
| 0000 0001 = 1d | Output channel 1 DVC is set to –100dB |
| 0000 0010 = 2d | Output channel 1 DVC is set to –99.5dB |
| 0000 0011 = 3d | Output channel 1 DVC is set to –99dB |
| … | … |
| 1100 1000 = 200d | Output channel 1 DVC is set to –0.5dB |
| 1100 1001 = 201d (default) | Output channel 1 DVC is set to 0dB |
| 1100 1010 = 202d | Output channel 1 DVC is set to 0.5dB |
| … | … |
| 1111 1101 = 253d | Output channel 1 DVC is set to 26dB |
| 1111 1110 = 254d | Output channel 1 DVC is set to 26.5dB |
| 1111 1111 = 255d | Output channel 1 DVC is set to 27dB |


Similarly, the digital volume control setting for output channels 1B, 2A, and 2B can be configured using the CH1B_DVOL (P0_R103) to CH2B_DVOL (P0_R112) register bits, respectively.

The internal digital processing engine soft ramps up the volume from a muted level to the programmed volume level when the channel is powered up, and the internal digital processing engine soft ramps down the volume from a programmed volume to mute when the channel is powered down. This soft-stepping of volume is done to prevent abruptly powering up and powering down the playback channel which can cause audible artifacts. This feature can also be entirely disabled using the DAC_DSP_DISABLE_SOFT_STEP (P0_R115_D\[1\]) register bit.


##### 7.3.9.2.2  Programmable Channel Gain Calibration

Along with the digital volume control, this device also provides programmable channel gain calibration. The gain of each channel can be finely calibrated or adjusted in steps of 0.1dB for a range of –0.8dB to 0.7dB gain error. This adjustment is useful when trying to match the gain across channels resulting from trasnducer sensitivity and load impedance mismatch. This feature, in combination with the regular digital volume control, allows the gains across all channels to be matched for a wide gain error range with a resolution of 0.1dB. [Table 7-45](#SBAS892GCAL) shows the programmable options available for the channel gain calibration.

**Table 7-45 DAC Channel Gain Calibration Programmable Settings**


| P0_R104_D[7:4] : DAC_CH1A_FGAIN[3:0] | CHANNEL GAIN CALIBRATION SETTING FOR INPUT CHANNEL 1A |
| --- | --- |
| 0000 = 0d | Input channel 1 gain calibration is set to –0.8 dB |
| 0001 = 1d | Input channel 1 gain calibration is set to –0.7 dB |
| … | … |
| 1000 = 8d (default) | Input channel 1 gain calibration is set to 0 dB |
| … | … |
| 1110 = 14d | Input channel 1 gain calibration is set to 0.6 dB |
| 1111 = 15d | Input channel 1 gain calibration is set to 0.7 dB |


Similarly, the channel gain calibration setting for input channel 1B, 2A and 2B can be configured using the DAC_CH1B_CFG1 (P0_R106), DAC_CH2A_CFG1 (P0_R111), and DAC_CH2B_CFG1 (P0_R113) register bits, respectively.


##### 7.3.9.2.3  Programmable Digital High-Pass Filter

To remove the DC offset component and attenuate the undesired low-frequency noise content in the record data, the device supports a programmable high-pass filter (HPF). The HPF is not a channel-independent filter setting but is globally applicable for all DAC channels. This HPF is constructed using the first-order infinite impulse response (IIR) filter, and is efficient enough to filter out possible DC components of the signal. [Table 7-46](#SBAS892HPF) shows the predefined –3dB cutoff frequencies available that can be set by using the DAC_DSP_HPF_SEL\[1:0\] register bits of P0_R115. Additionally, to achieve a custom –3dB cutoff frequency for a specific application, the device also allows the first-order IIR filter coefficients to be programmed when the DAC_DSP_HPF_SEL\[1:0\] register bits are set to 2'b00. [Figure 7-70](#X8373HPF) illustrates a frequency response plot for the HPF filter.

**Table 7-46 HPF Programmable Settings**


| P0_R115_D[5:4] : DAC_DSP_HPF_SEL[1:0] | -3dB CUTOFF FREQUENCY SETTING | -3dB CUTOFF FREQUENCY AT 16kHz SAMPLE RATE | -3dB CUTOFF FREQUENCY AT 48-kHz SAMPLE RATE |
| --- | --- | --- | --- |
| 00 | Programmable 1st-order IIR filter | Programmable 1st-order IIR filter | Programmable 1st-order IIR filter |
| 01 (default) | 0.00002 × f<sub>S</sub> | 0.25 Hz | 1 Hz |
| 10 | 0.00025 × f<sub>S</sub> | 4 Hz | 12 Hz |
| 11 | 0.002 × f<sub>S</sub> | 32 Hz | 96 Hz |


![TAC5212 HPF Filter Frequency Response Plot](https://www.ti.com/ods/images/SLASF23A/GUID-3DA4891F-9467-4644-921B-98474D40A913-low.gif)

**Figure 7-70 HPF Filter Frequency Response Plot**

[Equation 3](#SLOS585586) gives the transfer function for the first-order programable IIR filter:

Equation 3. ![TAC5212](https://www.ti.com/ods/images/SLASF23A/GUID-467C00D0-DF25-47F8-AFD0-8FA0B6BCEFC3-low.gif)

The frequency response for this first-order programmable IIR filter with default coefficients is flat at a gain of 0dB (all-pass filter). The host device can override the frequency response by programming the IIR coefficients in [Table 7-47](#SLOS5852326) to achieve the desired frequency response for high-pass filtering or any other desired filtering. If DAC_DSP_HPF_SEL\[1:0\] are set to 2'b00, the host device must write these coefficients values for the desired frequency response before powering-up any DAC channel for playback. [Table 7-47](#SLOS5852326) shows the filter coefficients for the first-order IIR filter. For additional details on configuring the programmable coefficients, refer [Section 8.2](GUID-F4463F91-42B0-400F-855C-8FAFD79871DA.html).

**Table 7-47 1st-Order IIR Filter Coefficients**


| FILTER | FILTER COEFFICIENT | DEFAULT COEFFICIENT VALUE | COEFFICIENT REGISTER MAPPING |
| --- | --- | --- | --- |
| Programmable 1st-order IIR filter (can be allocated to HPF or any other desired filter) | N<sub>0</sub> | 0x7FFFFFFF | P17_R120-R124 |
| N<sub>1</sub> | 0x00000000 | P17_R125-R128 |  |
| D<sub>1</sub> | 0x00000000 | P18_R8-R11 |  |


##### 7.3.9.2.4  Programmable Digital Biquad Filters

The device supports up to 12 programmable digital biquad filters available for DAC signal chain limited to 3/channel. These highly efficient filters achieve the desired frequence response. The TAC5212 also supports on the fly programmable Biquad filters for two channel playback use case. In digital signal processing, a digital biquad filter is a second-order, recursive linear filter with two poles and two zeros. [Equation 4](GUID-4BE81801-C216-40FB-B383-91EA3B7186DD.html#SLOS585587) gives the transfer function of each biquad filter:

Equation 4. ![TAC5212](https://www.ti.com/ods/images/SLASF23A/GUID-BC2B8BC9-15A8-4F51-BCDC-655425304DBE-low.gif)

The frequency response for the biquad filter section with default coefficients is flat at a gain of 0dB (all-pass filter). The host device can override the frequency response by programming the biquad coefficients to achieve the desired frequency response for a low-pass, high-pass, or any other desired frequency shaping. The programmable coefficients for the biquads are located in the [Section 8.2.5](GUID-DC89FB5D-A003-4636-86EB-0537AB73613F.html) and [Section 8.2.6](GUID-011550A5-4BA4-40F9-8765-34DE44869AE3.html). If biquad filtering is required, then the host device must write these coefficients values before powering up any ADC channels for recording or DAC channels for playback. In two channel use case, the TAC5212 also supports on the fly programmable filters. In this case, the device uses two banks of filters for one channel with a switch bit to perform the switch from one filter bank to the other. As described in [Table 7-48](#SBAS892BQA), these biquad filters can be allocated for each output channel based on the DAC_DSP_BQ_CFG\[1:0\] register setting of P0_R115. By setting DAC_DSP_BQ_CFG\[1:0\] to 2'b00, the biquad filtering for all playback channels are disabled and the host device can choose this setting if no additional filtering is required for the system application. See the [_TAC5x1x and TAC5x1x-Q1 Programmable Biquad Filters - Configuration and Applications_ application report](https://www.ti.com/lit/pdf/slaaeh6) for further details.

**Table 7-48 Biquad Filter Allocation to the Record Output Channel**


| DAC_DSP_BQ_CFG[1:0] = 2'b01 (1 Biquad per Channel) | DAC_DSP_BQ_CFG[1:0] = 2'b10 (Default) (2 Biquads per Channel) | DAC_DSP_BQ_CFG[1:0] = 2'b11 (3 Biquads per Channel) | PLAYBACK OUTPUT CHANNEL ALLOCATION USING P0_R115_D[3:2] REGISTER SETTING |
| --- | --- | --- | --- |
| Biquad filter 1 | Allocated to output channel 1 | Allocated to output channel 1 | Allocated to output channel 1 |
| Biquad filter 2 | Allocated to output channel 2 | Allocated to output channel 2 | Allocated to output channel 2 |
| Biquad filter 3 | Allocated to output channel 3 | Allocated to output channel 3 | Allocated to output channel 3 |
| Biquad filter 4 | Allocated to output channel 4 | Allocated to output channel 4 | Allocated to output channel 4 |
| Biquad filter 5 | Not used | Allocated to output channel 1 | Allocated to output channel 1 |
| Biquad filter 6 | Not used | Allocated to output channel 2 | Allocated to output channel 2 |
| Biquad filter 7 | Not used | Allocated to output channel 3 | Allocated to output channel 3 |
| Biquad filter 8 | Not used | Allocated to output channel 4 | Allocated to output channel 4 |
| Biquad filter 9 | Not used | Not used | Allocated to output channel 1 |
| Biquad filter 10 | Not used | Not used | Allocated to output channel 2 |
| Biquad filter 11 | Not used | Not used | Allocated to output channel 3 |
| Biquad filter 12 | Not used | Not used | Allocated to output channel 4 |


[Table 7-49](#SBAS892BQRM) shows the biquad filter coefficients mapping to the register space.

**Table 7-49 Biquad Filter Coefficients Register Mapping**


| PROGRAMMABLE BIQUAD FILTER | BIQUAD FILTER COEFFICIENTS REGISTER MAPPING | PROGRAMMABLE BIQUAD FILTER | BIQUAD FILTER COEFFICIENTS REGISTER MAPPING |
| --- | --- | --- | --- |
| Biquad filter 1 | P16_R8-R27 | Biquad filter 7 | P17_R8-R27 |
| Biquad filter 2 | P16_R28-R47 | Biquad filter 8 | P17_R28-R47 |
| Biquad filter 3 | P16_R48-R67 | Biquad filter 9 | P17_R48-R67 |
| Biquad filter 4 | P16_R68-R87 | Biquad filter 10 | P17_R68-R87 |
| Biquad filter 5 | P16_R88-R107 | Biquad filter 11 | P17_R88-R107 |
| Biquad filter 6 | P16_R108-R127 | Biquad filter 12 | P17_R108-R127 |


##### 7.3.9.2.5  Programmable Digital Mixer

The device supports a fully programmable mixer feature that can mix the various input channels with their custom programmable scale factor to generate the final output channels. [Figure 7-29](GUID-45F8C7AC-D62B-4C4C-93AE-706E79597914.html#X8373DMIX) shows a block diagram that describes the mixer 1 operation to generate output channel 1. The programmable coefficients for the mixer operation are located in the section.

A similar mixer operation is performed by mixer 2, mixer 3, and mixer 4 to generate output channel 2, channel 3, and channel 4, respectively.


##### 7.3.9.2.6  Configurable Digital Interpolation Filters

The device playback channel includes a high dynamic range, built-in digital interpolation filter to process the input data stream to generate digital data stream for multibit delta-sigma (ΔΣ) modulator. The interpolation filter can be chosen from four different types, depending on the required frequency response, group delay, power consumption, and phase linearity requirements for the target application. The selection of the interpolation filter option can be done by configuring the DAC_DSP_INTX_FILT (P0_R115_D\[7:6\]) register bits. Low power filter can be configured by setting DAC_LOW_PWR_FILT (P0_R79_D\[2\]) bit. [Table 7-50](#SBAS892FILTSEL) shows the configuration register setting for the decimation filter mode selection for the record channel.

**Table 7-50 Interpolation Filter Mode Selection for the Playback Channel**


| P0_R79_D[2] : DAC_LOW_PWR_FILT | P0_R115_D[7:6] : DAC_DSP_INTX_FILT[1:0] | INTERPOLATION FILTER MODE SELECTION |
| --- | --- | --- |
| 0 | 00 (default) | Linear phase filters are used for the interpolation |
| 0 | 01 | Low latency filters are used for the interpolation |
| 0 | 10 | Ultra-low latency filters are used for the interpolation |
| 0 | 11 | Reserved (do not use this setting) |
| 1 | XX | Low power filters are used for the interpolation |


### 7.3.10  Interrupts, Status, and Digital I/O Pin Multiplexing

Certain events in the device require host processor intervention and can be used to trigger interrupts to the host processor. One such event is an audio serial interface (ASI) bus error. The device powers down the record channels if any faults are detected with the ASI bus error clocks, such as:

-   Invalid FSYNC frequency
-   Invalid BCLK to FSYNC ratio
-   Long pauses of the BCLK or FSYNC clocks

When an ASI bus clock error is detected, the device shuts down all the record and playback channels as quickly as possible. After all ASI bus clock errors are resolved, the device volume ramps back to its previous state to recover the audio. During an ASI bus clock error, the internal interrupt request (IRQ) interrupt signal asserts low if the clock error interrupt mask register bit INT_MASK0\[7\] (P1_R47_D\[7\]) is set low. The clock fault is also available for readback in the latched fault status register bit INT_LTCH0 (P1_R52), which is a read-only register. Reading the latched fault status register, INT_LTCH0, clears all latched fault status. The device can be additionally configured to route the internal IRQ interrupt signal on the GPIOx or GPO1 pins and also can be configured as open-drain outputs so that these pins can be wire-ANDed to the open-drain interrupt outputs of other devices.

The IRQ interrupt signal can either be configured as active low or active high polarity by setting the INT_POL (P0_R66_D\[7\]) register bit. This signal can also be configured as a single pulse or a series of pulses by programming the INT_EVENT\[1:0\] (P0_R66_D\[6:5\]) register bits. If the interrupts are configured as a series of pulses, the events trigger the start of pulses that stop when the latched fault status register is read to determine the cause of the interrupt.

The device also supports read-only live-status registers to determine if the channels are powered up or down and if the device is in sleep mode or not. These status registers are located in the DEV_STS0 (P0_R121) and DEV_STS1 (P0_R122) register bits.

The device has a multifunctional GPIOx, GPI1 and GPO1 pins that can be configured for a desired specific function. [Table 7-70](#SBAS892GPIO) lists all possible allocations of these multifunctional pins for the various features.

**Table 7-70 Multifunction Pin Assignments**


| ROW | PIN FUNCTION | GPIO1 | GPIO2 | GPO1 | GPI1 |
| --- | --- | --- | --- | --- | --- |
| — | — | GPIO1_CFG | GPIO2_CFG | GPO1_CFG | GPI1_CFG |
| — | — | P0_R10[7:4] | P0_R11[7:4] | P0_R12[7:4] | P0_R13[1] |
| A | Pin disabled | S <sup>(1)</sup> | S (default) | S (default) | S (default) |
| B | General-purpose output (GPO) | S | S | S | NS <sup>(2)</sup> |
| C | Interrupt output (IRQ) | S (default) | S | S | NS |
| D | Power down for all ADC channels | S | S | NS | S |
| E | Power down for all DAC channels | S | S | NS | S |
| F | PDM clock output (PDMCLK) | S | S | S | NS |
| G | MiCBIAS on/off input (BIASEN) | S | S | NS | S |
| H | General-purpose input (GPI) | S | S | NS | S |
| I | Controller clock input (CCLK) | S | S | S | S |
| J | ASI daisy-chain input | S | S | NS | S |
| K | PDM data input 1 (PDMDIN1) | S | S | NS | S |
| L | PDM data input 2 (PDMDIN2) | S | S | NS | S |
| M | ASI DOUT | S | S | S | NS |
| N | ASI BCLK | S | S | S | S |
| O | ASI FSYNC | S | S | S | S |
| P | General Purpose Clock Out | S | S | S | NS |
| Q | ASI daisy-chain output | S | S | S | NS |
| R | Incremental ADC Conversion Start | S | S | NS | S |


(1)  S means the feature mentioned in this row is _supported_ for the respective GPIO1, GPOx, or GPIx pin mentioned in this column.

(2)  NS means the feature mentioned in this row is _not supported_ for the respective GPIO1, GPOx, or GPIx pin mentioned in this column.

Each GPO1 or GPIOx pin can be independently set for the desired drive configurations setting using the GPIOx_DRV\[2:0\] or GPO1_DRV\[2:0\] register bits in P0_R10_D\[2:0\], P0_R11_D\[2:0\] and P0_R12_D\[2:0\] respectively. [Table 7-71](#SBAS892GPIODRV) lists the drive configuration settings.

**Table 7-71 GPIO or GPOx Pins Drive Configuration Settings**


| P0_R10_D[2:0] : GPIO1_DRV[2:0] | GPIO OUTPUT DRIVE CONFIGURATION SETTINGS FOR GPIO1 |
| --- | --- |
| 000 | The GPIO1 pin is set to high impedance (floated) |
| 001 | The GPIO1 pin is set to be driven active low or active high |
| 010 (default) | The GPIO1 pin is set to be driven active low or weak high (on-chip pullup) |
| 011 | The GPIO1 pin is set to be driven active low or Hi-Z (floated) |
| 100 | The GPIO1 pin is set to be driven weak low (on-chip pulldown) or active high |
| 101 | The GPIO1 pin is set to be driven Hi-Z (floated) or active high |
| 110 and 111 | Reserved (do not use these settings) |


When configured as a general-purpose output (GPO), the GPIOx or GPO1 pin values can be driven by writing the GPO_GPI_VAL (P0_R14) registers. The GPIO_MON bits (P0_R14_D\[3:1\]) can be used to readback the status of the GPIOx or GPI1 pin when configured as a general-purpose input (GPI).


### 7.3.11  Power Tune Mode

For low power applications, the TAC5212 offers options to configure the device in a power tune mode with typical power consumption 8mW for 2\-Ch recording and 11mW for 2\-Ch playback for a 1.8V supply. This mode can be configured by setting the PWR_TUNE_CFG0 (P0_R78) register to 0xD4 and PWR_TUNE_CFG1 (P0_R79) register to 0x96. For power savings, the ADC and DAC modulator clocks are set to run at 1.536MHz (the input and output data sample rates are multiples or submultiples of 48kHz) or 1.4112MHz (the input and output data sample rates are multiples or submultiples of 44.1kHz). In this mode, not all combinations of VREF voltages, common mode tolerance (ADC_CHx_CM_TOL) settings and input channel configuration (ADC_CHx_INSRC) settings are recommended. For more details refer the [_TAC5x1x Power Consumption Matrix Across Various Usage Scenarios_ application report](https://www.ti.com/lit/pdf/SBAA611) for the supported input impedance, VREF voltages, common mode tolerance (ADC_CHx_CM_TOL) settings and input channel configuration (ADC_CHx_INSRC) settings in this mode.


## 7.4  Device Functional Modes


### 7.4.1  Sleep Mode or Software Shutdown

In sleep mode or software shutdown mode, the device consumes very low quiescent current from the AVDD supply and, at the same time, allows the I<sup>2</sup>C or SPI communication to wake the device for active operation.

The device can also enter sleep mode when the host device sets the SLEEP_ENZ (P0_R2_D\[0\]) bit to 1'b0. If the SLEEP_ENZ bit is asserted low when the device is in active mode, the device ramps down the volume on the record and playback data, powers down the analog and digital blocks, and enters sleep mode. However, the device still continues to retain the last programmed value of the device configuration registers and programmable coefficients.

In sleep mode, do not perform any I<sup>2</sup>C or SPI transactions, except for exiting sleep mode in order to enter active mode. After entering sleep mode, wait at least 10ms before starting I<sup>2</sup>C or SPI transactions to exit sleep mode.


### 7.4.2  Active Mode

If the host device exits sleep mode by setting the SLEEP_ENZ bit to 1'b1, the device enters active mode. In active mode, I<sup>2</sup>C or SPI transactions can be done to configure and power-up the device for active operation. After entering active mode, wait at least 2ms before starting any I<sup>2</sup>C or SPI transactions in order to allow the device to complete the internal wake-up sequence.

Read and write operations to the programmable coefficient registers ([Section 8.2](GUID-F4463F91-42B0-400F-855C-8FAFD79871DA.html)), and to the channel configuration registers must be done 10ms after exiting sleep mode.

After configuring all other registers for the target application and system settings, configure the input channel enable registers, P0_R118 (CH_EN). Lastly, configure the device power-up register, P0_R120 (PWR_CFG). All the programmable coefficient values must be written before powering up the respective channel.

In active mode, the power-up and power-down status of various blocks is monitored by reading the read-only device status bits located in the P0_R121 (DEV_STS0) and P0_R122 (DEV_STS1) registers.


### 7.4.3  Software Reset

A software reset can be done any time by asserting the SW_RESET bit (P0_R1_D\[0\]), which is a self-clearing bit. This software reset immediately shuts down the device, and restores all device configuration registers and programmable coefficients to their default values.


## 7.5  Programming

The device contains configuration registers and programmable coefficients that can be set to the desired values for a specific system and application use. These registers are called _device control registers_ and are each eight bits in width, mapped using a page scheme.

Each page contains 128 configuration registers. All device configuration registers are stored in page 0, which is the default page setting at power up and after a software reset. All programmable coefficient registers are located in page 0, page 1, and page 3. The current page of the device can be switched to a new desired page by using the PAGE\[7:0\] bits located in register 0 of every page.


### 7.5.1  Control Serial Interfaces

The device control registers can be accessed using either I<sup>2</sup>C or SPI communication to the device.

By monitoring the SDA_PICO, SCL_SCLK, GPO1_POCI, and GPI1_CSZ device pins, which are the multiplexed pins for the I<sup>2</sup>C or SPI Interface, the device automatically detects whether the host device is using I<sup>2</sup>C or SPI communication to configure the device. For a given end application, the host device must always use either the I<sup>2</sup>C or SPI interface, but not both, to configure the device refer to the [Table 7-72](#TABLE_KRR_DZL_LCC).

**Table 7-72 I<sup>2</sup>C and SPI Address Configuration**

 

| ADDR Setting | Mode | Device Address (7-bit) | Device Address (8-bit) |
| --- | --- | --- | --- |
| Short to Ground | I<sup>2</sup>C | 0x50 | 0xA0 |
| Pull down 4.7KOhm to ground | I<sup>2</sup>C | 0x51 | 0xA2 |
| Pull up 22KOhm to AVDD | I<sup>2</sup>C | 0x52 | 0xA4 |
| Pull up 4.7KOhm to AVDD | I<sup>2</sup>C | 0x53 | 0xA6 |
| Short to AVDD | SPI | NA | NA |


#### 7.5.1.1  I<sup>2</sup>C Control Interface

The device supports the I<sup>2</sup>C control protocol as a target device, and is capable of operating in standard mode, fast mode, and fast mode plus. The I<sup>2</sup>C control protocol requires a 7-bit target address. The five most significant bits (MSBs) of the target address are fixed at 5'b10100 and cannot be changed. The two least significant bits (LSBs) are programmable and are controlled by the ADDR pin. Refer [Table 7-72](GUID-0C2608A6-D617-4095-ACC7-F483742E5C20.html#TABLE_KRR_DZL_LCC) for the four possible device addresses supported by TAC5212 in I<sup>2</sup>C mode. If the I2C_BRDCAST_EN (P0_R4_D\[1\]) bit is set to 1'b1, then the 7-bit I<sup>2</sup>C target address is fixed to 7'b1010000 in order to allow simultaneous I<sup>2</sup>C broadcast communication to all TAC5212 devices in the system.


##### 7.5.1.1.1  General I<sup>2</sup>C Operation

The I<sup>2</sup>C bus employs two signals, SDA (data) and SCL (clock), to communicate between integrated circuits in a system using serial data transmission. The address and data 8-bit bytes are transferred MSB first. In addition, each byte transferred on the bus is acknowledged by the receiving device with an acknowledge bit. Each transfer operation begins with the controller device driving a start condition on the bus and ends with the controller device driving a stop condition on the bus. The bus uses transitions on the data pin (SDA) while the clock is at logic high to indicate start and stop conditions. A high-to-low transition on SDA indicates a start, and a low-to-high transition indicates a stop. Normal data-bit transitions must occur within the low time of the clock period.

The controller device drives a start condition followed by the 7-bit target address and the read/write (R/W) bit to open communication with another device and then waits for an acknowledgment condition. The target device holds SDA low during the acknowledge clock period to indicate acknowledgment. When this occurs, the controller device transmits the next byte of the sequence. Each target device is addressed by a unique 7-bit target address plus the R/W bit (1 byte). All compatible devices share the same signals via a bidirectional bus using a wired-AND connection.

There is no limit on the number of bytes that can be transmitted between start and stop conditions. When the last word transfers, the controller device generates a stop condition to release the bus. [Figure 7-109](#SLASEA43288) shows a generic data transfer sequence.

![TAC5212 Typical I2C Sequence](https://www.ti.com/ods/images/SLASF23A/GUID-20241204-SS0I-NC5N-09B1-F7SMVZWBV150-low.svg) 

**Figure 7-109 Typical I<sup>2</sup>C Sequence**

In the system, use external pullup resistors for the SDA and SCL signals to set the logic high level for the bus. The SDA and SCL voltages must not exceed the device supply voltage, IOVDD.


##### 7.5.1.1.2  I<sup>2</sup>C Single-Byte and Multiple-Byte Transfers

The device I<sup>2</sup>C interface supports both single-byte and multiple-byte read/write operations for all registers. During multiple-byte read operations, the device responds with data, a byte at a time, starting at the register assigned, as long as the controller device continues to respond with acknowledges.

The device supports sequential I<sup>2</sup>C addressing. For write transactions, if a register is issued followed by data for that register and all the remaining registers that follow, a sequential I<sup>2</sup>C write transaction takes place. For I<sup>2</sup>C sequential write transactions, the register issued then serves as the starting point, and the amount of data subsequently transmitted, before a stop or start is transmitted, determines how many registers are written.


###### 7.5.1.1.2.1  I<sup>2</sup>C Single-Byte Write

As shown in [Figure 7-110](#SLASEA48912), a single-byte data write transfer begins with the controller device transmitting a start condition followed by the I<sup>2</sup>C device address and the read/write bit. The read/write bit determines the direction of the data transfer. For a write-data transfer, the read/write bit must be set to 0. After receiving the correct I<sup>2</sup>C target address and the read/write bit, the device responds with an acknowledge bit (ACK). Next, the controller device transmits the register byte corresponding to the device internal register address being accessed. After receiving the register byte, the device again responds with an acknowledge bit (ACK). Then, the controller transmits the byte of data to be written to the specified register. When finished, the target device responds with an acknowledge bit (ACK). Finally, the controller device transmits a stop condition to complete the single-byte data write transfer.

![TAC5212 I2C Single-Byte Write Transfer](https://www.ti.com/ods/images/SLASF23A/GUID-5EA2924A-8202-4775-9122-BD516F77FDE0-low.gif) 

**Figure 7-110 I<sup>2</sup>C Single-Byte Write Transfer**


###### 7.5.1.1.2.2  I<sup>2</sup>C Multiple-Byte Write

As shown in [Figure 7-111](#FIG_I1G_W3L_LCC), a multiple-byte data write transfer is identical to a single-byte data write transfer except that multiple data bytes are transmitted by the controller device to the target device. After receiving each data byte, the device responds with an acknowledge bit (ACK). Finally, the controller device transmits a stop condition after the last data-byte write transfer.

![TAC5212 I2C Multiple-Byte Write Transfer](https://www.ti.com/ods/images/SLASF23A/GUID-0DF569B2-E3CB-45C6-A6E1-A944BC13AE62-low.gif) 

**Figure 7-111 I<sup>2</sup>C Multiple-Byte Write Transfer**


###### 7.5.1.1.2.3  I<sup>2</sup>C Single-Byte Read

As shown in [Figure 7-110](#SLASEA46753), a single-byte data read transfer begins with the controller device transmitting a start condition followed by the I<sup>2</sup>C target address and the read/write bit. For the data read transfer, both a write followed by a read are done. Initially, a write is done to transfer the address byte of the internal register address to be read. As a result, the read/write bit is set to 0.

After receiving the target address and the read/write bit, the device responds with an acknowledge bit (ACK). The controller device then sends the internal register address byte, after which the device issues an acknowledge bit (ACK). The controller device transmits another start condition followed by the target address and the read/write bit again. This time, the read/write bit is set to 1, indicating a read transfer. Next, the device transmits the data byte from the register address being read. After receiving the data byte, the controller device transmits a not-acknowledge (NACK) followed by a stop condition to complete the single-byte data read transfer.

![TAC5212 I2C Single-Byte Read Transfer](https://www.ti.com/ods/images/SLASF23A/GUID-FD450CD0-5259-4445-A68A-E3052B742DC3-low.gif) 

**Figure 7-112 I<sup>2</sup>C Single-Byte Read Transfer**


###### 7.5.1.1.2.4  I<sup>2</sup>C Multiple-Byte Read

As shown in [Figure 7-113](#SLASEA4908), a multiple-byte data read transfer is identical to a single-byte data read transfer except that multiple data bytes are transmitted by the device to the controller device. With the exception of the last data byte, the controller device responds with an acknowledge bit after receiving each data byte. After receiving the last data byte, the controller device transmits a not-acknowledge (NACK) followed by a stop condition to complete the data read transfer.

![TAC5212 I2C Multiple-Byte Read Transfer](https://www.ti.com/ods/images/SLASF23A/GUID-2129A508-5C4A-49BA-B0EB-C39BA9967AEE-low.gif) 

**Figure 7-113 I<sup>2</sup>C Multiple-Byte Read Transfer**


#### 7.5.1.2  SPI Control Interface

The general SPI protocol allows full-duplex, synchronous, serial communication between a host processor (the controller) and peripheral devices. The SPI controller (in this case, the host processor) generates the synchronizing clock (driven on to SCLK) and initiates transmissions by taking the peripheral-select pin CSZ from high to low. The SPI peripheral devices (such as the TAC5212) depend on a controller device to start and synchronize transmissions. A transmission begins when initiated by an SPI controller. The byte from the SPI controller begins shifting in on the peripheral PICO pin under the control of the controller serial clock (driven onto SCLK). When the byte shifts in on the PICO pin, a byte shifts out on the POCI pin to the controller shift register.

Refer to [Table 7-73](#TABLE_F2G_3CM_LCC) to configure the device for SPI control. [Table 7-73](#TABLE_F2G_3CM_LCC) mentions the pin assignment for SPI mode of control.

**Table 7-73 Pin Assigments for SPI Control**


| Pin Number | Pin Name | Pin Name in SPI Mode | Description |
| --- | --- | --- | --- |
| 7 | SCL | SCLK | SPI serial bit clock |
| 8 | SDA | PICO | SPI peripheral input pin |
| 11 | GP01 | POCI | SPI peripheral output pin |
| 12 | GPI1 | CSZ | SPI chip select pin |


The TAC5212 supports a standard SPI control protocol with a clock polarity setting of 0 (typical microprocessor SPI control bit CPOL = 0) and a clock phase setting of 1 (typical microprocessor SPI control bit CPHA = 1). The CSZ pin can remain low between transmissions; however, the device only interprets the first eight bits transmitted after the falling edge of CSZ as a command byte, and the next eight bits as a data byte only if writing to a register. The device is entirely controlled by registers. Reading and writing these registers is accomplished by an 8-bit command sent to the PICO pin prior to the data for that register. [Table 7-74](#SLOS5859944) shows the command structure. The first seven bits specify the address of the register that is being written or read, from 0 to 127 (decimal). The command word ends with an R/W bit, which specifies the direction of data flow on the serial bus.

In the case of a register write, set the R/W bit to 0. A second byte of data is sent to the PICO pin and contains the data to be written to the register. A register read is accomplished in a similar fashion. The 8-bit command word sends the 7-bit register address, followed by the R/W bit equal to 1 to signify a register read. The 8-bit register data is then clocked out of the device on the POCI pin during the second eight SCLK clocks in the frame. The device supports sequential SPI addressing for a multiple-byte data write/read transfer until the CSZ pin is pulled high. A multiple-byte data write or read transfer is identical to a single-byte data write or read transfer, respectively, until all data byte transfers complete. The host device must keep the CSZ pin low during all data byte transfers. [Figure 7-114](#SLOS5854798) shows the single-byte write transfer and [Figure 7-115](#SLOS585145) shows the single-byte read transfer.

**Table 7-74 SPI Command Word**


| BIT 7 | BIT 6 | BIT 5 | BIT 4 | BIT 3 | BIT 2 | BIT 1 | BIT 0 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ADDR(6) | ADDR(5) | ADDR(4) | ADDR(3) | ADDR(2) | ADDR(1) | ADDR(0) | R/WZ |


![TAC5212 SPI Single-Byte Write Transfer](https://www.ti.com/ods/images/SLASF23A/GUID-20241127-SS0I-4PMZ-8R9P-BOVE7ZOJPL3N-low.svg) 

**Figure 7-114 SPI Single-Byte Write Transfer**

![TAC5212 SPI Single-Byte Read Transfer](https://www.ti.com/ods/images/SLASF23A/GUID-20241127-SS0I-GPAH-L987-1H1D17ROWBMU-low.svg) 

**Figure 7-115 SPI Single-Byte Read Transfer**


# 8  Register Maps

This section describes the control registers for the device in detail. All these registers are eight bits in width and allocated to device configuration and programmable coefficients settings. These registers are mapped internally using a page scheme that can be controlled using either I<sup>2</sup>C or SPI communication to the device. Each page contains 128 bytes of registers. All device configuration registers are stored in page 0, page 1 and page 3. Page 0 is the default page setting at power up (and after a software reset). The device current page can be switch to a new desired page by using the PAGE\[7:0\] bits located in register 0 of every page.

Do not read from or write to reserved pages or reserved registers. Write only default values for the reserved bits in the valid registers.

The procedure for register access across pages is:

-   Select page N (write data _N_ to register 0 regardless of the current page number)
-   Read or write data from or to valid registers in page N
-   Select the new page M (write data _M_ to register 0 regardless of the current page number)
-   Read or write data from or to valid registers in page M
-   Repeat as needed


## 8.1  Device Configuration Registers

This section describes the device configuration registers for Page 0, Page 1 and Page 3 of the device. [Table 8-1](#TABLE_RRS_JJ3_PDC) lists the access codes for the device registers.

**Table 8-1 Access Type Codes**


| Access Type | Code | Description |
| --- | --- | --- |
| Read Type | Read Type | Read Type |
| R | R | Read |
| R-W | R/W | Read or write |
| Write Type | Write Type | Write Type |
| W | W | Write |


### 8.1.1  Book0_P0 Registers

[Table 8-2](#BOOK0_P0_B0_P0_TABLE_1_TABLE) lists the memory-mapped registers for the Book0_P0 registers. All register offset addresses not listed in [Table 8-2](#BOOK0_P0_B0_P0_TABLE_1_TABLE) should be considered as reserved locations and the register contents should not be modified.

**Table 8-2 BOOK0_P0 Registers**


| Address | Acronym | Register Name | Reset Value | Section |
| --- | --- | --- | --- | --- |
| 0x0 | PAGE_CFG | Device page register | 0x00 | Section 8.1.1.1 |
| 0x1 | SW_RESET | Software reset register | 0x00 | Section 8.1.1.2 |
| 0x2 | DEV_MISC_CFG | Device miscellaneous configuration register | 0x00 | Section 8.1.1.3 |
| 0x3 | AVDD_IOVDD_STS | Supply status Register | 0x00 | Section 8.1.1.4 |
| 0x4 | MISC_CFG | Miscellaneous configuration register | 0x00 | Section 8.1.1.5 |
| 0x5 | MISC_CFG1 | Miscellaneous configuration register 1 | 0x15 | Section 8.1.1.6 |
| 0x6 | DAC_CFG_A0 | DAC de-pop configuration register | 0x35 | Section 8.1.1.7 |
| 0x7 | MISC_CFG0 | Miscellaneous configuration register 0 | 0x00 | Section 8.1.1.8 |
| 0xA | GPIO1_CFG0 | GPIO1 configuration register 0 | 0x32 | Section 8.1.1.9 |
| 0xB | GPIO2_CFG0 | GPIO2 configuration register 0 | 0x00 | Section 8.1.1.10 |
| 0xC | GPO1_CFG0 | GPO1 configuration register 0 | 0x00 | Section 8.1.1.11 |
| 0xD | GPI_CFG | GPI1 configuration register 0 | 0x00 | Section 8.1.1.12 |
| 0xE | GPO_GPI_VAL | GPIO, GPO output value register | 0x00 | Section 8.1.1.13 |
| 0xF | INTF_CFG0 | Interface configuration register 0 | 0x00 | Section 8.1.1.14 |
| 0x10 | INTF_CFG1 | Interface configuration register 1 | 0x52 | Section 8.1.1.15 |
| 0x11 | INTF_CFG2 | Interface configuration register 2 | 0x80 | Section 8.1.1.16 |
| 0x12 | INTF_CFG3 | Interface configuration register 3 | 0x00 | Section 8.1.1.17 |
| 0x13 | INTF_CFG4 | Interface configuration register 4 | 0x00 | Section 8.1.1.18 |
| 0x14 | INTF_CFG5 | Interface configuration register 5 | 0x00 | Section 8.1.1.19 |
| 0x15 | INTF_CFG6 | Interface configuration register 6 | 0x00 | Section 8.1.1.20 |
| 0x18 | ASI_CFG0 | ASI configuration register 0 | 0x40 | Section 8.1.1.21 |
| 0x19 | ASI_CFG1 | ASI configuration register 1 | 0x00 | Section 8.1.1.22 |
| 0x1A | PASI_CFG0 | Primary ASI configuration register 0 | 0x30 | Section 8.1.1.23 |
| 0x1B | PASI_TX_CFG0 | PASI TX configuration register 0 | 0x00 | Section 8.1.1.24 |
| 0x1C | PASI_TX_CFG1 | PASI TX configuration register 1 | 0x00 | Section 8.1.1.25 |
| 0x1D | PASI_TX_CFG2 | PASI TX configuration register 2 | 0x00 | Section 8.1.1.26 |
| 0x1E | PASI_TX_CH1_CFG | PASI TX Channel 1 configuration register | 0x20 | Section 8.1.1.27 |
| 0x1F | PASI_TX_CH2_CFG | PASI TX Channel 2 configuration register | 0x21 | Section 8.1.1.28 |
| 0x20 | PASI_TX_CH3_CFG | PASI TX Channel 3 configuration register | 0x02 | Section 8.1.1.29 |
| 0x21 | PASI_TX_CH4_CFG | PASI TX Channel 4 configuration register | 0x03 | Section 8.1.1.30 |
| 0x22 | PASI_TX_CH5_CFG | PASI TX Channel 5 configuration register | 0x04 | Section 8.1.1.31 |
| 0x23 | PASI_TX_CH6_CFG | PASI TX Channel 6 configuration register | 0x05 | Section 8.1.1.32 |
| 0x24 | PASI_TX_CH7_CFG | PASI TX Channel 7 configuration register | 0x06 | Section 8.1.1.33 |
| 0x25 | PASI_TX_CH8_CFG | PASI TX Channel 8 configuration register | 0x07 | Section 8.1.1.34 |
| 0x26 | PASI_RX_CFG0 | PASI RX configuration register 0 | 0x00 | Section 8.1.1.35 |
| 0x27 | PASI_RX_CFG1 | PASI RX configuration register 1 | 0x00 | Section 8.1.1.36 |
| 0x28 | PASI_RX_CH1_CFG | PASI RX Channel 1 configuration register | 0x20 | Section 8.1.1.37 |
| 0x29 | PASI_RX_CH2_CFG | PASI RX Channel 2 configuration register | 0x21 | Section 8.1.1.38 |
| 0x2A | PASI_RX_CH3_CFG | PASI RX Channel 3 configuration register | 0x02 | Section 8.1.1.39 |
| 0x2B | PASI_RX_CH4_CFG | PASI RX Channel 4 configuration register | 0x03 | Section 8.1.1.40 |
| 0x2C | PASI_RX_CH5_CFG | PASI RX Channel 5 configuration register | 0x04 | Section 8.1.1.41 |
| 0x2D | PASI_RX_CH6_CFG | PASI RX Channel 6 configuration register | 0x05 | Section 8.1.1.42 |
| 0x2E | PASI_RX_CH7_CFG | PASI RX Channel 7 configuration register | 0x06 | Section 8.1.1.43 |
| 0x2F | PASI_RX_CH8_CFG | PASI RX Channel 8 configuration register | 0x07 | Section 8.1.1.44 |
| 0x32 | CLK_CFG0 | Clock configuration register 0 | 0x00 | Section 8.1.1.45 |
| 0x33 | CLK_CFG1 | Clock configuration register 1 | 0x00 | Section 8.1.1.46 |
| 0x34 | CLK_CFG2 | Clock configuration register 2 | 0x40 | Section 8.1.1.47 |
| 0x35 | CNT_CLK_CFG0 | Controller mode clock configuration register 0 | 0x00 | Section 8.1.1.48 |
| 0x36 | CNT_CLK_CFG1 | Controller mode clock configuration register 1 | 0x00 | Section 8.1.1.49 |
| 0x37 | CNT_CLK_CFG2 | Controller mode clock configuration register 2 | 0x20 | Section 8.1.1.50 |
| 0x38 | CNT_CLK_CFG3 | Controller mode clock configuration register 3 | 0x00 | Section 8.1.1.51 |
| 0x39 | CNT_CLK_CFG4 | Controller mode clock configuration register 4 | 0x00 | Section 8.1.1.52 |
| 0x3A | CNT_CLK_CFG5 | Controller mode clock configuration register 5 | 0x00 | Section 8.1.1.53 |
| 0x3B | CNT_CLK_CFG6 | Controller mode clock configuration register 6 | 0x00 | Section 8.1.1.54 |
| 0x3C | CLK_ERR_STS0 | Clock error and status register 0 | 0x00 | Section 8.1.1.55 |
| 0x3D | CLK_ERR_STS1 | Clock error and status register 1 | 0x00 | Section 8.1.1.56 |
| 0x3E | CLK_DET_STS0 | Clock ratio detection register 0 | 0x00 | Section 8.1.1.57 |
| 0x3F | CLK_DET_STS1 | Clock ratio detection register 1 | 0x00 | Section 8.1.1.58 |
| 0x40 | CLK_DET_STS2 | Clock ratio detection register 2 | 0x00 | Section 8.1.1.59 |
| 0x41 | CLK_DET_STS3 | Clock ratio detection register 3 | 0x00 | Section 8.1.1.60 |
| 0x42 | INT_CFG | Interrupt configuration register | 0x00 | Section 8.1.1.61 |
| 0x43 | DAC_FLT_CFG | Interrupt configuration register | 0x54 | Section 8.1.1.62 |
| 0x4B | ADC_DAC_MISC_CFG | ADC overload response configuration register | 0x00 | Section 8.1.1.63 |
| 0x4C | IADC_CFG | IADC configuration register | 0x5C | Section 8.1.1.64 |
| 0x4D | VREF_MICBIAS_CFG | VREF and MICBIAS configuration register | 0x00 | Section 8.1.1.65 |
| 0x4E | PWR_TUNE_CFG0 | Power tune configuration register 0 | 0x00 | Section 8.1.1.66 |
| 0x4F | PWR_TUNE_CFG1 | Power tune configuration register 1 | 0x00 | Section 8.1.1.67 |
| 0x50 | ADC_CH1_CFG0 | ADC Channel 1 configuration register 0 | 0x00 | Section 8.1.1.68 |
| 0x51 | IADC_CH_CFG | IADC Channel configuration register | 0x00 | Section 8.1.1.69 |
| 0x52 | ADC_CH1_CFG2 | ADC Channel 1 configuration register 2 | 0xA1 | Section 8.1.1.70 |
| 0x53 | ADC_CH1_CFG3 | ADC Channel 1 configuration register 3 | 0x80 | Section 8.1.1.71 |
| 0x54 | ADC_CH1_CFG4 | ADC Channel 1 configuration register 4 | 0x00 | Section 8.1.1.72 |
| 0x55 | ADC_CH2_CFG0 | ADC Channel 2 configuration register 0 | 0x00 | Section 8.1.1.73 |
| 0x57 | ADC_CH2_CFG2 | Channel 2 configuration register 2 | 0xA1 | Section 8.1.1.74 |
| 0x58 | ADC_CH2_CFG3 | ADC Channel 2 configuration register 3 | 0x80 | Section 8.1.1.75 |
| 0x59 | ADC_CH2_CFG4 | ADC Channel 2 configuration register 4 | 0x00 | Section 8.1.1.76 |
| 0x5A | ADC_CH3_CFG0 | ADC Channel 3 configuration register 0 | 0x00 | Section 8.1.1.77 |
| 0x5B | ADC_CH3_CFG2 | ADC Channel 3 configuration register 2 | 0xA1 | Section 8.1.1.78 |
| 0x5C | ADC_CH3_CFG3 | ADC Channel 3 configuration register 3 | 0x80 | Section 8.1.1.79 |
| 0x5D | ADC_CH3_CFG4 | ADC Channel 3 configuration register 4 | 0x00 | Section 8.1.1.80 |
| 0x5E | ADC_CH4_CFG0 | ADC Channel 4 configuration register 0 | 0x00 | Section 8.1.1.81 |
| 0x5F | ADC_CH4_CFG2 | Channel 4 configuration register 2 | 0xA1 | Section 8.1.1.82 |
| 0x60 | ADC_CH4_CFG3 | ADC Channel 4 configuration register 3 | 0x80 | Section 8.1.1.83 |
| 0x61 | ADC_CH4_CFG4 | ADC Channel 4 configuration register 4 | 0x00 | Section 8.1.1.84 |
| 0x62 | ADC_CFG1 | ADC configuration register 1 | 0x00 | Section 8.1.1.85 |
| 0x64 | OUT1x_CFG0 | Channel OUT1x configuration register 0 | 0x20 | Section 8.1.1.86 |
| 0x65 | OUT1x_CFG1 | Channel OUT1x configuration register 1 | 0x20 | Section 8.1.1.87 |
| 0x66 | OUT1x_CFG2 | Channel OUT2x configuration register 2 | 0x20 | Section 8.1.1.88 |
| 0x67 | DAC_CH1A_CFG0 | DAC Channel 1A configuration register 0 | 0xC9 | Section 8.1.1.89 |
| 0x68 | DAC_CH1A_CFG1 | DAC Channel 1A configuration register 1 | 0x80 | Section 8.1.1.90 |
| 0x69 | DAC_CH1B_CFG0 | DAC Channel 1B configuration register 0 | 0xC9 | Section 8.1.1.91 |
| 0x6A | DAC_CH1B_CFG1 | DAC Channel 1B configuration register 1 | 0x80 | Section 8.1.1.92 |
| 0x6B | OUT2x_CFG0 | Channel OUT2x configuration register 0 | 0x20 | Section 8.1.1.93 |
| 0x6C | OUT2x_CFG1 | Channel OUT2x configuration register 1 | 0x20 | Section 8.1.1.94 |
| 0x6D | OUT2x_CFG2 | Channel OUT2x configuration register 2 | 0x20 | Section 8.1.1.95 |
| 0x6E | DAC_CH2A_CFG0 | DAC Channel 2A configuration register 0 | 0xC9 | Section 8.1.1.96 |
| 0x6F | DAC_CH2A_CFG1 | DAC Channel 2A configuration register 1 | 0x80 | Section 8.1.1.97 |
| 0x70 | DAC_CH2B_CFG0 | DAC Channel 2B configuration register 0 | 0xC9 | Section 8.1.1.98 |
| 0x71 | DAC_CH2B_CFG1 | DAC Channel 2B configuration register 1 | 0x80 | Section 8.1.1.99 |
| 0x72 | DSP_CFG0 | DSP configuration register 0 | 0x18 | Section 8.1.1.100 |
| 0x73 | DSP_CFG1 | DSP configuration register 0 | 0x18 | Section 8.1.1.101 |
| 0x76 | CH_EN | Channel enable configuration register | 0xCC | Section 8.1.1.102 |
| 0x77 | DYN_PUPD_CFG | Power up configuration register | 0x00 | Section 8.1.1.103 |
| 0x78 | PWR_CFG | Power up configuration register | 0x00 | Section 8.1.1.104 |
| 0x79 | DEV_STS0 | Device status value register 0 | 0x00 | Section 8.1.1.105 |
| 0x7A | DEV_STS1 | Device status value register 1 | 0x80 | Section 8.1.1.106 |
| 0x7E | I2C_CKSUM | I<sup>2</sup>C checksum register | 0x00 | Section 8.1.1.107 |


## 8.1.1.1 PAGE_CFG Register (Address = 0x0) \[Reset = 0x00\]

PAGE_CFG is shown in [Table 8-3](#BOOK0_P0_B0_P0_B0_P0_PAGE_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

The device memory map is divided into pages. This register sets the page.

**Table 8-3 PAGE_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | PAGE[7:0] | R/W | 00000000b | These bits set the device page. 0d = Page 0 1d = Page 1 2d to 254d = Page 2 to page 254 respectively 255d = Page 255 |


## 8.1.1.2 SW_RESET Register (Address = 0x1) \[Reset = 0x00\]

SW_RESET is shown in [Table 8-4](#BOOK0_P0_B0_P0_B0_P0_SW_RESET_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the software reset register. Asserting a software reset places all register values in their default power-on-reset (POR) state.

**Table 8-4 SW_RESET Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-1 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 0 | SW_RESET | R/W | 0b | Software reset. This bit is self clearing. 0d = Do not reset 1d = Reset all registers to their reset values |


## 8.1.1.3 DEV_MISC_CFG Register (Address = 0x2) \[Reset = 0x00\]

DEV_MISC_CFG is shown in [Table 8-5](#BOOK0_P0_B0_P0_B0_P0_DEV_MISC_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register configures miscellaneous device registers.

**Table 8-5 DEV_MISC_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 5-4 | VREF_QCHG[1:0] | R/W | 00b | The duration of the quick-charge for the VREF external capacitor is set using an internal series impedance of 200Ω. 0d = VREF quick-charge duration of 3.5 ms (typical) 1d = VREF quick-charge duration of 10 ms (typical) 2d = VREF quick-charge duration of 50 ms (typical) 3d = VREF quick-charge duration of 100 ms (typical) |
| 3 | SLEEP_EXIT_VREF_EN | R/W | 0b | Sleep mode exit configuration 0d = Only DREG Enabled 1d = DREG and VREF enabled |
| 2 | AVDD_MODE | R/W | 0b | AVDD mode configuration. 0d = Internal AREG regulator is used (Should be used for AVDD 3.3V Operation) 1d = AVDD 1.8V used directly for AREG (Strictly use this setting for AVDD 1.8V Operation) |
| 1 | IOVDD_IO_MODE | R/W | 0b | IOVDD mode configuration. 0d = IOVDD at 3.3V / 1.8V / 1.2V (speed limitation applicable for 1.8V and 1.2V Operation) 1d = IOVDD at 1.8V / 1.2V only (no speed limitation - Strictly don't use this setting for IOVDD 3.3V Operation). |
| 0 | SLEEP_ENZ | R/W | 0b | Sleep mode setting. 0d = Device is in sleep mode 1d = Device is not in sleep mode |


## 8.1.1.4 AVDD_IOVDD_STS Register (Address = 0x3) \[Reset = 0x00\]

AVDD_IOVDD_STS is shown in [Table 8-6](#BOOK0_P0_B0_P0_B0_P0_AVDD_IOVDD_STS_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register contains status of the supply detection and brown-out.

**Table 8-6 AVDD_IOVDD_STS Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | AVDD_MODE_STS | R | 0b | AVDD mode status flag register. 0d = AVDD_MODE as per configured 1d = AVDD 3.3V Operation (AVDD_MODE forced to 0d) |
| 6 | IOVDD_IO_MODE_STS | R | 0b | IOVDD mode status flag register. 0d = IOVDD_MODE as per configured 1d = IOVDD 3.3V Operation (IOVDD_IO_MODE forced to 0d) |
| 5-2 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 1 | BRWNOUT_SHDN_STS | R | 0b | Brownout shutdown status 0d = No brownout shutdown 1d = Brownout shutdown |
| 0 | BRWNOUT_SHDN_EXIT_SLEEP | R/W | 0b | Brownout shutdown sleep exit config 0d = Stay in sleep mode 1d = Exit sleep mode |


## 8.1.1.5 MISC_CFG Register (Address = 0x4) \[Reset = 0x00\]

MISC_CFG is shown in [Table 8-7](#BOOK0_P0_B0_P0_B0_P0_MISC_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register configures miscellaneous configuration registers.

**Table 8-7 MISC_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6 | IGNORE_CLK_ERR | R/W | 0b | Clock error detection action 0b = Clock error enabled 1b = Clock error disabled |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | I2C_BRDCAST_EN | R/W | 0b | I<sup>2</sup>C broadcast addressing setting. 0d = I<sup>2</sup>C broadcast mode disabled 1d = I<sup>2</sup>C broadcast mode enabled; the I<sup>2</sup>C target address is fixed with pin-controlled LSB bits as '0' |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.6 MISC_CFG1 Register (Address = 0x5) \[Reset = 0x15\]

MISC_CFG1 is shown in [Table 8-8](#BOOK0_P0_B0_P0_B0_P0_MISC_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register configures the miscellaneous configuration register 1.

**Table 8-8 MISC_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | INCAP_QCHG[1:0] | R/W | 00b | The duration of the quick-charge for the external AC-coupling capacitor is set using an internal series impedance of 800Ω. 0d = INxP, INxM quick-charge duration of 2.5 ms (typical) 1d = INxP, INxM quick-charge duration of 12.5 ms (typical) 2d = INxP, INxM quick-charge duration of 25 ms (typical) 3d = INxP, INxM quick-charge duration of 50 ms (typical) |
| 5-4 | SHDN_CFG[1:0] | R/W | 01b | Shutdown configuration. 0d = DREG is powered down immediately after IOVDD is deasserted 1d = DREG remains active to enable a clean shut down until a time-out (DREG_KA_TIME) is reached; after the time-out period, DREG is forced to power off 2d = DREG remains active until the device cleanly shuts down 3d = Reserved; Don't use |
| 3-2 | DREG_KA_TIME[1:0] | R/W | 01b | These bits set how long DREG remains active after IOVDD is deasserted. 0d = DREG remains active for 30 ms (typical) 1d = DREG remains active for 25 ms (typical) 2d = DREG remains active for 10 ms (typical) 3d = DREG remains active for 5 ms (typical) |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.1.7 DAC_CFG_A0 Register (Address = 0x6) \[Reset = 0x35\]

DAC_CFG_A0 is shown in [Table 8-9](#BOOK0_P0_B0_P0_B0_P0_DAC_CFG_A0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register configures the device DAC de-pop.

**Table 8-9 DAC_CFG_A0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RSERIES_DE_POP_INT[1:0] | R/W | 00b | HP Amp series resistor select config. 0d = 1K 1d = 0.5K 2d = 0.33K 3d = 0.25k |
| 5-4 | RSERIES_DE_POP_MID[1:0] | R/W | 11b | HP Amp series resistor select config. 0d = 1K 1d = 0.5K 2d = 0.33K 3d = 0.25k |
| 3-0 | PWR_UP_TIME_DE_POP[3:0] | R/W | 0101b | HP Amp external cap charging time config. 0d = 2ms 1d = 4ms 2d = 8ms 3d = 16ms 4d = 50ms 5d = 100ms 6d = 250ms 7d = 500ms 8d = 1s 9d = 5s 10d-15d = Reserved |


## 8.1.1.8 MISC_CFG0 Register (Address = 0x7) \[Reset = 0x00\]

MISC_CFG0 is shown in [Table 8-10](#BOOK0_P0_B0_P0_B0_P0_MISC_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register configures the miscellaneous configuration register 0.

**Table 8-10 MISC_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | DAC_ST_W_CAP_DIS | R/W | 0b | DAC start with dc blocking capacitor discharge sequence. 0d = disable 1d = enable |
| 6 | DAC_DLYD_PWRUP | R/W | 0b | DAC power up delayed config. 0d = disable 1d = enable (Delay power-up by based on DAC_DLYD_PWRUP_TIME config) |
| 5 | DAC_DLYD_PWRUP_TIME | R/W | 0b | DAC power up delayed time config. 0d = 64-128ms 1d = 256-512ms |
| 4 | HW_RESET_ON_CLK_STOP_EN | R/W | 0b | Assertion of Hard Reset when clock selected by CLK_SRC_SEL is not available for 2ms config 0d = disable 1d = enable |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.1.9 GPIO1_CFG0 Register (Address = 0xA) \[Reset = 0x32\]

GPIO1_CFG0 is shown in [Table 8-11](#BOOK0_P0_B0_P0_B0_P0_GPIO1_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the GPIO1 configuration register 0.

**Table 8-11 GPIO1_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | GPIO1_CFG[3:0] | R/W | 0011b | GPIO1 configuration. 0d = GPIO1 is disabled 1d = GPIO1 is configured as a general-purpose input (GPI) or any other input function 2d = GPIO1 is configured as a general-purpose output (GPO) 3d = GPIO1 is configured as a chip interrupt output (IRQ) 4d = GPIO1 is configured as a PDM clock output (PDMCLK) 5d = GPIO1 is configured as primary ASI DOUT 6d = GPIO1 is configured as primary ASI DOUT2 7d = GPIO1 is configured as secondary ASI DOUT 8d = GPIO1 is configured as secondary ASI DOUT2 9d = GPIO1 is configured as secondary ASI BCLK output 10d = GPIO1 is configured as secondary ASI FSYNC output 11d = GPIO1 is configured as general purpose CLKOUT 12d = GPIO1 is configured as PASI DOUT and SASI DOUT muxed 13d = GPIO1 is configured as DAISY_OUT for DIN Daisy 14d to 15d = Reserved |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2-0 | GPIO1_DRV[2:0] | R/W | 010b | GPIO1 output drive configuration. (Not valid if GPIO1_CFG configured as I<sup>2</sup>S out) 0d = Hi-Z output 1d = Drive active low and active high 2d = Drive active low and weak high 3d = Drive active low and Hi-Z 4d = Drive weak low and active high 5d = Drive Hi-Z and active high 6d to 7d = Reserved; Don't use |


## 8.1.1.10 GPIO2_CFG0 Register (Address = 0xB) \[Reset = 0x00\]

GPIO2_CFG0 is shown in [Table 8-12](#BOOK0_P0_B0_P0_B0_P0_GPIO2_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the GPIO2 configuration register 0.

**Table 8-12 GPIO2_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | GPIO2_CFG[3:0] | R/W | 0000b | GPIO2 configuration. 0d = GPIO2 is disabled 1d = GPIO2 is configured as a general-purpose input (GPI) or any other input function 2d = GPIO2 is configured as a general-purpose output (GPO) 3d = GPIO2 is configured as a chip interrupt output (IRQ) 4d = GPIO2 is configured as a PDM clock output (PDMCLK) 5d = GPIO2 is configured as primary ASI DOUT 6d = GPIO2 is configured as primary ASI DOUT2 7d = GPIO2 is configured as secondary ASI DOUT 8d = GPIO2 is configured as secondary ASI DOUT2 9d = GPIO2 is configured as secondary ASI BCLK output 10d = GPIO2 is configured as secondary ASI FSYNC output 11d = GPIO2 is configured as general purpose CLKOUT 12d = GPIO2 is configured as PASI DOUT and SASI DOUT muxed 13d = GPIO2 is configured as DAISY_OUT for DIN Daisy 14d to 15d = Reserved |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2-0 | GPIO2_DRV[2:0] | R/W | 000b | GPIO2 output drive configuration. (Not valid if GPIO2_CFG configured as I<sup>2</sup>S out) 0d = Hi-Z output 1d = Drive active low and active high 2d = Drive active low and weak high 3d = Drive active low and Hi-Z 4d = Drive weak low and active high 5d = Drive Hi-Z and active high 6d to 7d = Reserved; Don't use |


## 8.1.1.11 GPO1_CFG0 Register (Address = 0xC) \[Reset = 0x00\]

GPO1_CFG0 is shown in [Table 8-13](#BOOK0_P0_B0_P0_B0_P0_GPO1_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the GPO1 configuration register 0.

**Table 8-13 GPO1_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | GPO1_CFG[3:0] | R/W | 0000b | GPO1 configuration. (For SPI mode, this pin act as POCI and the below configuration settings are not applicable) (Always buskeeper en is not supported when used as DOUT) 0d = GPO1 is disabled 1d = Reserved 2d = GPO1 is configured as a general-purpose output (GPO) 3d = GPO1 is configured as a chip interrupt output (IRQ) 4d = GPO1 is configured as a PDM clock output (PDMCLK) 5d = GPO1 is configured as primary ASI DOUT 6d = GPO1 is configured as primary ASI DOUT2 7d = GPO1 is configured as secondary ASI DOUT 8d = GPO1 is configured as secondary ASI DOUT2 9d = GPO1 is configured as secondary ASI BCLK output 10d = GPO1 is configured as secondary ASI FSYNC output 11d = GPO1 is configured as general purpose CLKOUT 12d = GPO1 is configured as PASI DOUT and SASI DOUT muxed 13d = GPO1 is configured as DAISY_OUT for DIN Daisy 14d to 15d = Reserved |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2-0 | GPO1_DRV[2:0] | R/W | 000b | GPO1 output drive configuration. (Not valid if GPO1_CFG configured as I<sup>2</sup>S out) (For SPI mode, this pin act as CSZ and the below configuration settings are not applicable) 0d = Hi-Z output 1d = Drive active low and active high 2d = Drive active low and weak high 3d = Drive active low and Hi-Z 4d = Drive weak low and active high 5d = Drive Hi-Z and active high 6d to 7d = Reserved; Don't use |


## 8.1.1.12 GPI_CFG Register (Address = 0xD) \[Reset = 0x00\]

GPI_CFG is shown in [Table 8-14](#BOOK0_P0_B0_P0_B0_P0_GPI_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the GPI1 configuration register 0.

**Table 8-14 GPI_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-2 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 1 | GPI1_CFG | R/W | 0b | GPI1 configuration. (For SPI mode, this pin act as CSZ and the below configuration settings are not applicable) 0d = GPI1 is disabled 1d = GPI1 is configured as a general-purpose input (GPI) or any other input function |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.13 GPO_GPI_VAL Register (Address = 0xE) \[Reset = 0x00\]

GPO_GPI_VAL is shown in [Table 8-15](#BOOK0_P0_B0_P0_B0_P0_GPO_GPI_VAL_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the GPIO and GPO output value register.

**Table 8-15 GPO_GPI_VAL Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | GPIO1_VAL | R/W | 0b | GPIO1 output value when configured as a GPO. 0d = Drive the output with a value of 0 1d = Drive the output with a value of 1 |
| 6 | GPIO2_VAL | R/W | 0b | GPIO2 output value when configured as a GPO. 0d = Drive the output with a value of 0 1d = Drive the output with a value of 1 |
| 5 | GPO1_VAL | R/W | 0b | GPO1 output value when configured as a GPO. 0d = Drive the output with a value of 0 1d = Drive the output with a value of 1 |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | GPIO1_MON | R | 0b | GPIO1 monitor value when configured as a GPI. 0d = Input monitor value 0 1d = Input monitor value 1 |
| 2 | GPIO2_MON | R | 0b | GPIO2 monitor value when configured as a GPI. 0d = Input monitor value 0 1d = Input monitor value 1 |
| 1 | GPI1_MON | R | 0b | GPI1 monitor value when configured as a GPI. 0d = Input monitor value 0 1d = Input monitor value 1 |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.14 INTF_CFG0 Register (Address = 0xF) \[Reset = 0x00\]

INTF_CFG0 is shown in [Table 8-16](#BOOK0_P0_B0_P0_B0_P0_INTF_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the interface configuration register 0.

**Table 8-16 INTF_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | CCLK_SEL[1:0] | R/W | 00b | CCLK select configuration. 0d = CCLK is disabled 1d = GPIO1 2d = GPIO2 3d = GPI1 |
| 4-2 | PASI_DIN2_SEL[2:0] | R/W | 000b | Primary ASI DIN2 select configuration. 0d = Primary ASI DIN2 is disabled 1d = GPIO1 2d = GPIO2 3d = GPI1 4d = DOUT 5d = Primary ASI DIN 6d to 7d = Reserved |
| 1 | PASI_BCLK_SEL | R/W | 0b | Primary ASI BCLK select configuration. 0d = Primary ASI BCLK is BCLK 1d = Primary ASI BCLK is Secondary ASI BCLK |
| 0 | PASI_FSYNC_SEL | R/W | 0b | Primary ASI FSYNC select configuration. 0d = Primary ASI FSYNC is FSYNC 1d = Primary ASI FSYNC is Secondary ASI FSYNC |


## 8.1.1.15 INTF_CFG1 Register (Address = 0x10) \[Reset = 0x52\]

INTF_CFG1 is shown in [Table 8-17](#BOOK0_P0_B0_P0_B0_P0_INTF_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the interface configuration register 1.

**Table 8-17 INTF_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DOUT_SEL[3:0] | R/W | 0101b | DOUT select configuration. 0d = DOUT is disabled 1d = DOUT is configured as input 2d = DOUT is configured as a general-purpose output (GPO) 3d = DOUT is configured as a chip interrupt output (IRQ) 4d = DOUT is configured as a PDM clock output (PDMCLK) 5d = DOUT is configured as primary ASI DOUT 6d = DOUT is configured as primary ASI DOUT2 7d = DOUT is configured as secondary ASI DOUT 8d = DOUT is configured as secondary ASI DOUT2 9d = DOUT is configured as secondary ASI BCLK output 10d = DOUT is configured as secondary ASI FSYNC output 11d = DOUT is configured as general purpose CLKOUT 12d = DOUT is configured as PASI DOUT and SASI DOUT muxed 13d = DOUT is configured as DAISY_OUT for DIN Daisy 14d = DOUT is configured as DIN (LOOPBACK) 15d = Reserved |
| 3 | DOUT_VAL | R/W | 0b | DOUT output value when configured as a GPO. 0d = Drive the output with a value of 0 1d = Drive the output with a value of 1 |
| 2-0 | DOUT_DRV[2:0] | R/W | 010b | DOUT output drive configuration. 0d = Hi-Z output 1d = Drive active low and active high 2d = Drive active low and weak high 3d = Drive active low and Hi-Z 4d = Drive weak low and active high 5d = Drive Hi-Z and active high 6d to 7d = Reserved; Don't use |


## 8.1.1.16 INTF_CFG2 Register (Address = 0x11) \[Reset = 0x80\]

INTF_CFG2 is shown in [Table 8-18](#BOOK0_P0_B0_P0_B0_P0_INTF_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the interface configuration register 2.

**Table 8-18 INTF_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PASI_DIN_EN | R/W | 1b | Primary ASI DIN enable configuration. 0d = Primary ASI DIN is disabled 1d = Primary ASI DIN is enabled |
| 6-4 | SASI_FSYNC_SEL[2:0] | R/W | 000b | Secondary ASI FSYNC select configuration. 0d = Secondary ASI disabled 1d = GPIO1 2d = GPIO2 3d = GPI1 4d = Reserved 5d = Primary ASI FSYNC 6d to 7d = Reserved |
| 3-1 | SASI_BCLK_SEL[2:0] | R/W | 000b | Secondary ASI BCLK select configuration. 0d = Secondary ASI disabled 1d = GPIO1 2d = GPIO2 3d = GPI1 4d = Reserved 5d = Primary ASI BCLK 6d to 7d = Reserved |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.17 INTF_CFG3 Register (Address = 0x12) \[Reset = 0x00\]

INTF_CFG3 is shown in [Table 8-19](#BOOK0_P0_B0_P0_B0_P0_INTF_CFG3_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the interface configuration register 3.

**Table 8-19 INTF_CFG3 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-5 | SASI_DIN_SEL[2:0] | R/W | 000b | Secondary ASI DIN select configuration. 0d = Secondary ASI DIN is disabled 1d = GPIO1 2d = GPIO2 3d = GPI1 4d = DOUT 5d = Primary ASI DIN 6d to 7d = Reserved |
| 4-2 | SASI_DIN2_SEL[2:0] | R/W | 000b | Secondary ASI DIN2 select configuration. 0d = Secondary ASI DIN2 is disabled 1d = GPIO1 2d = GPIO2 3d = GPI1 4d = DOUT 5d = Primary ASI DIN 6d to 7d = Reserved |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.1.18 INTF_CFG4 Register (Address = 0x13) \[Reset = 0x00\]

INTF_CFG4 is shown in [Table 8-20](#BOOK0_P0_B0_P0_B0_P0_INTF_CFG4_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the interface configuration register 4.

**Table 8-20 INTF_CFG4 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PDM_CH1_SEL | R/W | 0b | PDM select configuration for channel 1 of record path. 0d = Channel 1 is analog (ADC) type on the record path 1d = Channel 1 is digital (PDM) type on the record path |
| 6 | PDM_CH2_SEL | R/W | 0b | PDM select configuration for channel 2 of record path. 0d = Channel 2 is analog (ADC) type on the record path 1d = Channel 2 is digital (PDM) type on the record path |
| 5 | PDMDIN1_EDGE | R/W | 0b | PDMCLK latching edge used for channel 1 and channel 2 data. 0d = Channel 1 data are latched on the negative edge, channel 2 data are latched on the positive edge 1d = Channel 1 data are latched on the positive edge, channel 2 data are latched on the negative edge |
| 4 | PDMDIN2_EDGE | R/W | 0b | PDMCLK latching edge used for channel 3 and channel 4 data. 0d = Channel 3 data are latched on the negative edge, channel 4 data are latched on the positive edge 1d = Channel 3 data are latched on the positive edge, channel 4 data are latched on the negative edge |
| 3-2 | PDM_DIN1_SEL[1:0] | R/W | 00b | PDM data channels 1 and 2 select configuration. 0d = PDM data channels 1 and 2 are disabled 1d = GPIO1 2d = GPIO2 3d = GPI1 |
| 1-0 | PDM_DIN2_SEL[1:0] | R/W | 00b | PDM data channels 3 and 4 select configuration. 0d = PDM data channels 3 and 4 are disabled 1d = GPIO1 2d = GPIO2 3d = GPI1 |


## 8.1.1.19 INTF_CFG5 Register (Address = 0x14) \[Reset = 0x00\]

INTF_CFG5 is shown in [Table 8-21](#BOOK0_P0_B0_P0_B0_P0_INTF_CFG5_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the interface configuration register 5.

**Table 8-21 INTF_CFG5 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PDM_DIN_SEL_OVRD | R/W | 0b | PDM data channels (1 and 2)/(3 and 4) select configuration override. 0d = No Override 1d = PDM_DIN1/2_SEL if configured as GPI1 will be overridden as DIN |
| 6 | DOUT_WITH_DIN | R/W | 0b | DOUT used as both ASI OUT and ASI IN 0d = DOUT based on DOUT_SEL 1d = DOUT used as both ASI OUT and ASI DIN |
| 5-4 | PD_ADC_GPIO[1:0] | R/W | 00b | Power down ADC using GPIO select configuration.(ADC powered down if any one of the PD_ADC_GPIO/ADC_PDZ is configured power down) 0d = Power down ADC using GPIO is disabled 1d = Power down ADC using GPIO1 2d = Power down ADC using GPIO2 3d = Power down ADC using GPI1 |
| 3-2 | PD_DAC_GPIO[1:0] | R/W | 00b | Power down DAC using GPIO select configuration.(DAC powered down if any one of the PD_DAC_GPIO/DAC_PDZ is configured power down) 0d = Power down DAC using GPIO is disabled 1d = Power down DAC using GPIO1 2d = Power down DAC using GPIO2 3d = Power down DAC using GPI1 |
| 1 | PLIM_GPIO | R/W | 0b | PLIM using GPIO1 configuration. 0d = PLIM using GPIO1 is disabled 1d = PLIM using GPIO1 |
| 0 | GPA_GPIO | R/W | 0b | GPA using GPIO1 configuration. 0d = GPA using GPIO1 is disabled 1d = GPA using GPIO1 |


## 8.1.1.20 INTF_CFG6 Register (Address = 0x15) \[Reset = 0x00\]

INTF_CFG6 is shown in [Table 8-22](#BOOK0_P0_B0_P0_B0_P0_INTF_CFG6_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the interface configuration register 6.

**Table 8-22 INTF_CFG6 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | EN_MBIAS_GPIO[1:0] | R/W | 00b | Enable MICBIAS using GPIO select configuration. 0d = Enable MICBIAS using GPIO is disabled 1d = Enable MICBIAS using GPIO1 2d = Enable MICBIAS using GPIO2 3d = Enable MICBIAS using GPI1 |
| 5-4 | IADC_CONVST_GPIO[1:0] | R/W | 00b | IADC conversion start using GPIO select configuration. 0d = Enable IADC using GPIO is disabled 1d = Enable IADC using GPIO1 2d = Enable IADC using GPIO2 3d = Enable IADC using GPI1 |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.21 ASI_CFG0 Register (Address = 0x18) \[Reset = 0x40\]

ASI_CFG0 is shown in [Table 8-23](#BOOK0_P0_B0_P0_B0_P0_ASI_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the ASI configuration register 0.

**Table 8-23 ASI_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PASI_DIS | R/W | 0b | Disable or enable primary ASI (PASI). 0d = Primary ASI enabled 1d = Primary ASI disabled |
| 6 | SASI_DIS | R/W | 1b | Disable or enable secondary ASI (SASI). 0d = Secondary ASI enabled 1d = Secondary ASI disabled |
| 5 | SASI_CFG_GANG | R/W | 0b | All configurations of secondary ASI ganged with primary ASI. 0d = Secondary ASI has independent configurations 1d = Secondary ASI configurations same as primary ASI |
| 4-3 | DAISY_EN[1:0] | R/W | 00b | Daisy chain feature enable (Only 1 ASI with 1 DOUT AND DIN available) 0d = Daisy chain disabled 1d = PASI daisy chain enabled (Secondary ASI not available) 2d = SASI daisy chain enabled (Primary ASI not available) 3d = Reserved; Don't use |
| 2-0 | DAISY_IN_SEL[2:0] | R/W | 000b | Daisy input select configuration. 0d = Daisy input disabled 1d = GPIO1 2d = GPIO2 3d = GPI1 4d = Reserved 5d = DIN 6d to 7d = Reserved |


## 8.1.1.22 ASI_CFG1 Register (Address = 0x19) \[Reset = 0x00\]

ASI_CFG1 is shown in [Table 8-24](#BOOK0_P0_B0_P0_B0_P0_ASI_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the ASI configuration register 1.

**Table 8-24 ASI_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | ASI_DOUT_CFG[1:0] | R/W | 00b | ASI data output configuration. 0d = 1 data output for Primary ASI and 1 data output for Secondary ASI 1d = 2 data outputs for Primary ASI 2d = 2 data outputs for Secondary ASI 3d = Reserved; Don't use |
| 5-4 | ASI_DIN_CFG[1:0] | R/W | 00b | ASI data input configuration. 0d = 1 data input for Primary ASI and 1 data input for Secondary ASI 1d = 2 data inputs for Primary ASI 2d = 2 data inputs for Secondary ASI 3d = Reserved; Don't use |
| 3 | DAISY_DIR | R/W | 0b | Daisy direction configuration. 0d = ASI DOUT daisy 1d = ASI DIN daisy |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.23 PASI_CFG0 Register (Address = 0x1A) \[Reset = 0x30\]

PASI_CFG0 is shown in [Table 8-25](#BOOK0_P0_B0_P0_B0_P0_PASI_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the ASI configuration register 0.

**Table 8-25 PASI_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | PASI_FORMAT[1:0] | R/W | 00b | Primary ASI protocol format. 0d = TDM mode 1d = I<sup>2</sup>S mode 2d = LJ (left-justified) mode 3d = Reserved; Don't use |
| 5-4 | PASI_WLEN[1:0] | R/W | 11b | Primary ASI word or slot length. 0d = 16 bits (Recommended this setting to be used with 10kΩ input impedance configuration) 1d = 20 bits 2d = 24 bits 3d = 32 bits |
| 3 | PASI_FSYNC_POL | R/W | 0b | ASI FSYNC polarity (for PASI protocol only). 0d = Default polarity as per standard protocol 1d = Inverted polarity with respect to standard protocol |
| 2 | PASI_BCLK_POL | R/W | 0b | ASI BCLK polarity (for PASI protocol only). 0d = Default polarity as per standard protocol 1d = Inverted polarity with respect to standard protocol |
| 1 | PASI_BUS_ERR | R/W | 0b | ASI bus error detection. 0d = Enable bus error detection 1d = Disable bus error detection |
| 0 | PASI_BUS_ERR_RCOV | R/W | 0b | ASI bus error auto resume. 0d = Enable auto resume after bus error recovery 1d = Disable auto resume after bus error recovery and remain powered down until host configures the device |


## 8.1.1.24 PASI_TX_CFG0 Register (Address = 0x1B) \[Reset = 0x00\]

PASI_TX_CFG0 is shown in [Table 8-26](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX configuration register 0.

**Table 8-26 PASI_TX_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PASI_TX_EDGE | R/W | 0b | Primary ASI data output (on the primary and secondary data pin) transmit edge. 0d = Default edge as per the protocol configuration setting in PASI_BCLK_POL 1d = Inverted following edge (half cycle delay) with respect to the default edge setting |
| 6 | PASI_TX_FILL | R/W | 0b | Primary ASI data output (on the primary and secondary data pin) for any unused cycles 0d = Always transmit 0 for unused cycles 1d = Always use Hi-Z for unused cycles |
| 5 | PASI_TX_LSB | R/W | 0b | Primary ASI data output (on the primary and secondary data pin) for LSB transmissions. 0d = Transmit the LSB for a full cycle 1d = Transmit the LSB for the first half cycle and Hi-Z for the second half cycle |
| 4-3 | PASI_TX_KEEPER[1:0] | R/W | 00b | Primary ASI data output (on the primary and secondary data pin) bus keeper. 0d = Bus keeper is always disabled 1d = Bus keeper is always enabled 2d = Bus keeper is enabled during LSB transmissions only for one cycle 3d = Bus keeper is enabled during LSB transmissions only for one and half cycles |
| 2 | PASI_TX_USE_INT_FSYNC | R/W | 0b | Primary ASI uses internal FSYNC for output data generation in Controller mode configuration as applicable. 0d = Use external FSYNC for ASI protocol data generation 1d = Use internal FSYNC for ASI protocol data generation |
| 1 | PASI_TX_USE_INT_BCLK | R/W | 0b | Primary ASI uses internal BCLK for output data generation in Controller mode configuration. 0d = Use external BCLK for ASI protocol data generation 1d = Use internal BCLK for ASI protocol data generation |
| 0 | PASI_TDM_PULSE_WIDTH | R/W | 0b | Primary ASI fsync pulse width in TDM format. (Valid for Controller mode) 0d = Fsync pulse is 1 bclk period wide 1d = Fsync pulse is 2 bclk period wide |


## 8.1.1.25 PASI_TX_CFG1 Register (Address = 0x1C) \[Reset = 0x00\]

PASI_TX_CFG1 is shown in [Table 8-27](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX configuration register 1.

**Table 8-27 PASI_TX_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-5 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 4-0 | PASI_TX_OFFSET[4:0] | R/W | 00000b | Primary ASI output data MSB slot 0 offset (on the primary and secondary data pin). 0d = ASI data MSB location has no offset and is as per standard protocol 1d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of one BCLK cycle with respect to standard protocol 2d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of two BCLK cycles with respect to standard protocol 3d to 30d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset assigned as per configuration 31d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of 31 BCLK cycles with respect to standard protocol |


## 8.1.1.26 PASI_TX_CFG2 Register (Address = 0x1D) \[Reset = 0x00\]

PASI_TX_CFG2 is shown in [Table 8-28](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX configuration register 2.

**Table 8-28 PASI_TX_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PASI_TX_CH8_SEL | R/W | 0b | Primary ASI output channel 8 select. 0d = Primary ASI channel 8 output is on DOUT 1d = Primary ASI channel 8 output is on DOUT2 |
| 6 | PASI_TX_CH7_SEL | R/W | 0b | Primary ASI output channel 7 select. 0d = Primary ASI channel 7 output is on DOUT 1d = Primary ASI channel 7 output is on DOUT2 |
| 5 | PASI_TX_CH6_SEL | R/W | 0b | Primary ASI output channel 6 select. 0d = Primary ASI channel 6 output is on DOUT 1d = Primary ASI channel 6 output is on DOUT2 |
| 4 | PASI_TX_CH5_SEL | R/W | 0b | Primary ASI output channel 5 select. 0d = Primary ASI channel 5 output is on DOUT 1d = Primary ASI channel 5 output is on DOUT2 |
| 3 | PASI_TX_CH4_SEL | R/W | 0b | Primary ASI output channel 4 select. 0d = Primary ASI channel 4 output is on DOUT 1d = Primary ASI channel 4 output is on DOUT2 |
| 2 | PASI_TX_CH3_SEL | R/W | 0b | Primary ASI output channel 3 select. 0d = Primary ASI channel 3 output is on DOUT 1d = Primary ASI channel 3 output is on DOUT2 |
| 1 | PASI_TX_CH2_SEL | R/W | 0b | Primary ASI output channel 2 select. 0d = Primary ASI channel 2 output is on DOUT 1d = Primary ASI channel 2 output is on DOUT2 |
| 0 | PASI_TX_CH1_SEL | R/W | 0b | Primary ASI output channel 1 select. 0d = Primary ASI channel 1 output is on DOUT 1d = Primary ASI channel 1 output is on DOUT2 |


## 8.1.1.27 PASI_TX_CH1_CFG Register (Address = 0x1E) \[Reset = 0x20\]

PASI_TX_CH1_CFG is shown in [Table 8-29](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CH1_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX Channel 1 configuration register.

**Table 8-29 PASI_TX_CH1_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 5 | PASI_TX_CH1_CFG | R/W | 1b | Primary ASI output channel 1 configuration. 0d = Primary ASI channel 1 output is in a tri-state condition 1d = Primary ASI channel 1 output corresponds to ADC/PDM Channel 1 data |
| 4-0 | PASI_TX_CH1_SLOT_NUM[4:0] | R/W | 00000b | Primary ASI output channel 1 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.28 PASI_TX_CH2_CFG Register (Address = 0x1F) \[Reset = 0x21\]

PASI_TX_CH2_CFG is shown in [Table 8-30](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CH2_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX Channel 2 configuration register.

**Table 8-30 PASI_TX_CH2_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 5 | PASI_TX_CH2_CFG | R/W | 1b | Primary ASI output channel 2 configuration. 0d = Primary ASI channel 2 output is in a tri-state condition 1d = Primary ASI channel 2 output corresponds to ADC/PDM Channel 2 data |
| 4-0 | PASI_TX_CH2_SLOT_NUM[4:0] | R/W | 00001b | Primary ASI output channel 2 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.29 PASI_TX_CH3_CFG Register (Address = 0x20) \[Reset = 0x02\]

PASI_TX_CH3_CFG is shown in [Table 8-31](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CH3_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX Channel 3 configuration register.

**Table 8-31 PASI_TX_CH3_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | PASI_TX_CH3_CFG[1:0] | R/W | 00b | Primary ASI output channel 3 configuration. 0d = Primary ASI channel 3 output is in a tri-state condition 1d = Primary ASI channel 3 output corresponds to PDM Channel 3 data 2d = Primary ASI channel 3 output corresponds to VBAT data 3d = Reserved |
| 4-0 | PASI_TX_CH3_SLOT_NUM[4:0] | R/W | 00010b | Primary ASI output channel 3 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.30 PASI_TX_CH4_CFG Register (Address = 0x21) \[Reset = 0x03\]

PASI_TX_CH4_CFG is shown in [Table 8-32](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CH4_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX Channel 4 configuration register.

**Table 8-32 PASI_TX_CH4_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | PASI_TX_CH4_CFG[1:0] | R/W | 00b | Primary ASI output channel 4 configuration. 0d = Primary ASI channel 4 output is in a tri-state condition 1d = Primary ASI channel 4 output corresponds to PDM Channel 4 data 2d = Primary ASI channel 4 output corresponds to TEMP data 3d = Reserved |
| 4-0 | PASI_TX_CH4_SLOT_NUM[4:0] | R/W | 00011b | Primary ASI output channel 4 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.31 PASI_TX_CH5_CFG Register (Address = 0x22) \[Reset = 0x04\]

PASI_TX_CH5_CFG is shown in [Table 8-33](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CH5_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX Channel 5 configuration register.

**Table 8-33 PASI_TX_CH5_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | PASI_TX_CH5_CFG[1:0] | R/W | 00b | Primary ASI output channel 5 configuration. 0d = Primary ASI channel 5 output is in a tri-state condition 1d = Primary ASI channel 5 output corresponds to ASI Input Channel 1 loopback data 2d = Primary ASI channel 5 output corresponds to echo reference Channel 1 data 3d = Reserved |
| 4-0 | PASI_TX_CH5_SLOT_NUM[4:0] | R/W | 00100b | Primary ASI output channel 5 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.32 PASI_TX_CH6_CFG Register (Address = 0x23) \[Reset = 0x05\]

PASI_TX_CH6_CFG is shown in [Table 8-34](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CH6_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX Channel 6 configuration register.

**Table 8-34 PASI_TX_CH6_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | PASI_TX_CH6_CFG[1:0] | R/W | 00b | Primary ASI output channel 6 configuration. 0d = Primary ASI channel 6 output is in a tri-state condition 1d = Primary ASI channel 6 output corresponds to ASI Input Channel 2 loopback data 2d = Primary ASI channel 6 output corresponds to echo reference Channel 2 data 3d = Reserved |
| 4-0 | PASI_TX_CH6_SLOT_NUM[4:0] | R/W | 00101b | Primary ASI output channel 6 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.33 PASI_TX_CH7_CFG Register (Address = 0x24) \[Reset = 0x06\]

PASI_TX_CH7_CFG is shown in [Table 8-35](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CH7_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX Channel 7 configuration register.

**Table 8-35 PASI_TX_CH7_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | PASI_TX_CH7_CFG[1:0] | R/W | 00b | Primary ASI output channel 7 configuration. 0d = Primary ASI channel 7 output is in a tri-state condition 1d = Primary ASI channel 7 output corresponds to {VBAT_WLby2, TEMP_WLby2} 2d = Primary ASI channel 7 output corresponds to {echo_ref_ch1, echo_ref_ch2} 3d = Reserved |
| 4-0 | PASI_TX_CH7_SLOT_NUM[4:0] | R/W | 00110b | Primary ASI output channel 7 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.34 PASI_TX_CH8_CFG Register (Address = 0x25) \[Reset = 0x07\]

PASI_TX_CH8_CFG is shown in [Table 8-36](#BOOK0_P0_B0_P0_B0_P0_PASI_TX_CH8_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI TX Channel 8 configuration register.

**Table 8-36 PASI_TX_CH8_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 5 | PASI_TX_CH8_CFG | R/W | 0b | Primary ASI output channel 8 configuration. 0d = Primary ASI channel 8 output is in a tri-state condition 1d = Primary ASI channel 8 output corresponds to ICLA data |
| 4-0 | PASI_TX_CH8_SLOT_NUM[4:0] | R/W | 00111b | Primary ASI output channel 8 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.35 PASI_RX_CFG0 Register (Address = 0x26) \[Reset = 0x00\]

PASI_RX_CFG0 is shown in [Table 8-37](#BOOK0_P0_B0_P0_B0_P0_PASI_RX_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI RX configuration register 0.

**Table 8-37 PASI_RX_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PASI_RX_EDGE | R/W | 0b | Primary ASI data input (on the primary and secondary data pin) receive edge. 0d = Default edge as per the protocol configuration setting in PASI_BCLK_POL 1d = Inverted following edge (half cycle delay) with respect to the default edge setting |
| 6 | PASI_RX_USE_INT_FSYNC | R/W | 0b | Primary ASI uses internal FSYNC for input data latching in Controller mode configuration as applicable. 0d = Use external FSYNC for ASI protocol data latching 1d = Use internal FSYNC for ASI protocol data latching |
| 5 | PASI_RX_USE_INT_BCLK | R/W | 0b | Primary ASI uses internal BCLK for input data latching in Controller mode configuration. 0d = Use external BCLK for ASI protocol data latching 1d = Use internal BCLK for ASI protocol data latching |
| 4-0 | PASI_RX_OFFSET[4:0] | R/W | 00000b | Primary ASI data input MSB slot 0 offset (on the primary and secondary data pin). 0d = ASI data MSB location has no offset and is as per standard protocol 1d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of one BCLK cycle with respect to standard protocol 2d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of two BCLK cycles with respect to standard protocol 3d to 30d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset assigned as per configuration 31d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of 31 BCLK cycles with respect to standard protocol |


## 8.1.1.36 PASI_RX_CFG1 Register (Address = 0x27) \[Reset = 0x00\]

PASI_RX_CFG1 is shown in [Table 8-38](#BOOK0_P0_B0_P0_B0_P0_PASI_RX_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI RX configuration register 1.

**Table 8-38 PASI_RX_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PASI_RX_CH8_SEL | R/W | 0b | Primary ASI input channel 8 select. 0d = Primary ASI channel 8 input is on DIN 1d = Primary ASI channel 8 input is on DIN2 |
| 6 | PASI_RX_CH7_SEL | R/W | 0b | Primary ASI input channel 7 select. 0d = Primary ASI channel 7 input is on DIN 1d = Primary ASI channel 7 input is on DIN2 |
| 5 | PASI_RX_CH6_SEL | R/W | 0b | Primary ASI input channel 6 select. 0d = Primary ASI channel 6 input is on DIN 1d = Primary ASI channel 6 input is on DIN2 |
| 4 | PASI_RX_CH5_SEL | R/W | 0b | Primary ASI input channel 5 select. 0d = Primary ASI channel 5 input is on DIN 1d = Primary ASI channel 5 input is on DIN2 |
| 3 | PASI_RX_CH4_SEL | R/W | 0b | Primary ASI input channel 4 select. 0d = Primary ASI channel 4 input is on DIN 1d = Primary ASI channel 4 input is on DIN2 |
| 2 | PASI_RX_CH3_SEL | R/W | 0b | Primary ASI input channel 3 select. 0d = Primary ASI channel 3 input is on DIN 1d = Primary ASI channel 3 input is on DIN2 |
| 1 | PASI_RX_CH2_SEL | R/W | 0b | Primary ASI input channel 2 select. 0d = Primary ASI channel 2 input is on DIN 1d = Primary ASI channel 2 input is on DIN2 |
| 0 | PASI_RX_CH1_SEL | R/W | 0b | Primary ASI input channel 1 select. 0d = Primary ASI channel 1 input is on DIN 1d = Primary ASI channel 1 input is on DIN2 |


## 8.1.1.37 PASI_RX_CH1_CFG Register (Address = 0x28) \[Reset = 0x20\]

PASI_RX_CH1_CFG is shown in [Table 8-39](#BOOK0_P0_B0_P0_B0_P0_PASI_RX_CH1_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI RX Channel 1 configuration register.

**Table 8-39 PASI_RX_CH1_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 5 | PASI_RX_CH1_CFG | R/W | 1b | Primary ASI input channel 1 configuration. 0d = Primary ASI channel 1 input is disabled 1d = Primary ASI channel 1 input corresponds to DAC Channel 1 data |
| 4-0 | PASI_RX_CH1_SLOT_NUM[4:0] | R/W | 00000b | Primary ASI input channel 1 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.38 PASI_RX_CH2_CFG Register (Address = 0x29) \[Reset = 0x21\]

PASI_RX_CH2_CFG is shown in [Table 8-40](#BOOK0_P0_B0_P0_B0_P0_PASI_RX_CH2_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI RX Channel 2 configuration register.

**Table 8-40 PASI_RX_CH2_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 5 | PASI_RX_CH2_CFG | R/W | 1b | Primary ASI input channel 2 configuration. 0d = Primary ASI channel 2 input is disabled 1d = Primary ASI channel 2 input corresponds to DAC Channel 2 data |
| 4-0 | PASI_RX_CH2_SLOT_NUM[4:0] | R/W | 00001b | Primary ASI input channel 2 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.39 PASI_RX_CH3_CFG Register (Address = 0x2A) \[Reset = 0x02\]

PASI_RX_CH3_CFG is shown in [Table 8-41](#BOOK0_P0_B0_P0_B0_P0_PASI_RX_CH3_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI RX Channel 3 configuration register.

**Table 8-41 PASI_RX_CH3_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 5 | PASI_RX_CH3_CFG | R/W | 0b | Primary ASI input channel 3 configuration. 0d = Primary ASI channel 3 input is disabled 1d = Primary ASI channel 3 input corresponds to DAC Channel 3 data |
| 4-0 | PASI_RX_CH3_SLOT_NUM[4:0] | R/W | 00010b | Primary ASI input channel 3 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.40 PASI_RX_CH4_CFG Register (Address = 0x2B) \[Reset = 0x03\]

PASI_RX_CH4_CFG is shown in [Table 8-42](#BOOK0_P0_B0_P0_B0_P0_PASI_RX_CH4_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI RX Channel 4 configuration register.

**Table 8-42 PASI_RX_CH4_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 5 | PASI_RX_CH4_CFG | R/W | 0b | Primary ASI input channel 4 configuration. 0d = Primary ASI channel 4 input is disabled 1d = Primary ASI channel 4 input corresponds to DAC Channel 4 data |
| 4-0 | PASI_RX_CH4_SLOT_NUM[4:0] | R/W | 00011b | Primary ASI input channel 4 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.41 PASI_RX_CH5_CFG Register (Address = 0x2C) \[Reset = 0x04\]

PASI_RX_CH5_CFG is shown in [Table 8-43](#BOOK0_P0_B0_P0_B0_P0_PASI_RX_CH5_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI RX Channel 5 configuration register.

**Table 8-43 PASI_RX_CH5_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | PASI_RX_CH5_CFG[1:0] | R/W | 00b | Primary ASI input channel 5 configuration. 0d = Primary ASI channel 5 input is disabled 1d = Primary ASI channel 5 input corresponds to DAC Channel 5 data 2d = Primary ASI channel 5 input corresponds to ADC Channel 1 output loopback 3d = Reserved |
| 4-0 | PASI_RX_CH5_SLOT_NUM[4:0] | R/W | 00100b | Primary ASI input channel 5 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.42 PASI_RX_CH6_CFG Register (Address = 0x2D) \[Reset = 0x05\]

PASI_RX_CH6_CFG is shown in [Table 8-44](#BOOK0_P0_B0_P0_B0_P0_PASI_RX_CH6_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI RX Channel 6 configuration register.

**Table 8-44 PASI_RX_CH6_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | PASI_RX_CH6_CFG[1:0] | R/W | 00b | Primary ASI input channel 6 configuration. 0d = Primary ASI channel 6 input is disabled 1d = Primary ASI channel 6 input corresponds to DAC Channel 6 data 2d = Primary ASI channel 6 input corresponds to ADC Channel 2 output loopback 3d = Primary ASI channel 6 input corresponds to ICLA device 1 data |
| 4-0 | PASI_RX_CH6_SLOT_NUM[4:0] | R/W | 00101b | Primary ASI input channel 6 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.43 PASI_RX_CH7_CFG Register (Address = 0x2E) \[Reset = 0x06\]

PASI_RX_CH7_CFG is shown in [Table 8-45](#BOOK0_P0_B0_P0_B0_P0_PASI_RX_CH7_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI RX Channel 7 configuration register.

**Table 8-45 PASI_RX_CH7_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | PASI_RX_CH7_CFG[1:0] | R/W | 00b | Primary ASI input channel 7 configuration. 0d = Primary ASI channel 7 input is disabled 1d = Primary ASI channel 7 input corresponds to DAC Channel 7 data 2d = Primary ASI channel 7 input corresponds to ADC Channel 3 output loopback 3d = Primary ASI channel 7 input corresponds to ICLA device 2 data |
| 4-0 | PASI_RX_CH7_SLOT_NUM[4:0] | R/W | 00110b | Primary ASI input channel 7 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.44 PASI_RX_CH8_CFG Register (Address = 0x2F) \[Reset = 0x07\]

PASI_RX_CH8_CFG is shown in [Table 8-46](#BOOK0_P0_B0_P0_B0_P0_PASI_RX_CH8_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the PASI RX Channel 8 configuration register.

**Table 8-46 PASI_RX_CH8_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | PASI_RX_CH8_CFG[1:0] | R/W | 00b | Primary ASI input channel 8 configuration. 0d = Primary ASI channel 8 input is disabled 1d = Primary ASI channel 8 input corresponds to DAC Channel 8 data 2d = Primary ASI channel 8 input corresponds to ADC Channel 4 output loopback 3d = Primary ASI channel 8 input corresponds to ICLA device 3 data |
| 4-0 | PASI_RX_CH8_SLOT_NUM[4:0] | R/W | 00111b | Primary ASI input channel 8 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.1.45 CLK_CFG0 Register (Address = 0x32) \[Reset = 0x00\]

CLK_CFG0 is shown in [Table 8-47](#BOOK0_P0_B0_P0_B0_P0_CLK_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the clock configuration register 0.

**Table 8-47 CLK_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-2 | PASI_SAMP_RATE[5:0] | R/W | 000000b | Primary ASI sample rate configuration. -Typical (Allowed Range) 0d = Primary ASI sampling rate auto detected in the device 1d = 768000 (670320-791040) 2d = 614400 (536256-632832) 3d = 512000 (446880-527360) 4d = 438857 (383040-452022) 5d = 384000 (335160-395520) 6d = 341333 (297920-351573) 7d = 307200 (268128-316416) 8d = 256000 (223440-263680) 9d = 219429 (191520-226011) 10d = 192000 (167580-197760) 11d = 170667 (148960-175786) 12d = 153600 (134064-158208) 13d = 128000 (111720-131840) 14d = 109714 (95760-113005) 15d = 96000 (83790-98880) 16d = 85333 (74480-87893) 17d = 76800 (67032-79104) 18d = 64000 (55860-65920) 19d = 54857 (47880-56502) 20d = 48000 (41895-49440) 21d = 42667 (37240-43946) 22d = 38400 (33516-39552) 23d = 32000 (27930-32960) 24d = 27429 (23940-28251) 25d = 24000 (20947-24720) 26d = 21333 (18620-21973) 27d = 19200 (16758-19776) 28d = 16000 (13965-16480) 29d = 13714 (11970-14125) 30d = 12000 (10473-12360) 31d = 10667 (9310-10986) 32d = 9600 (8379-9888) 33d = 8000 (6982-8240) 34d = 6857 (5985-7062) 35d = 6000 (5236-6180) 36d = 5333 (4655-5493) 37d = 4800 (4189-4944) 38d = 4000 (3491-4120) 39d = 3429 (2992-3531) 40d = 3000 (2618-3090) 41d-63d = Reserved |
| 1 | PASI_FS_RATE_NO_LIM | R/W | 0b | Limit sampling rate to standard audio sample rates only. 0d = Standard audio rates with 1% tolerance supported using auto mode 1d = Standard audio rates with 5% tolerance supported using auto mode |
| 0 | CUSTOM_CLK_CFG | R/W | 0b | Custom clock configuration enable, all dividers and mux selects need to be manually configured. 0d = Auto clock configuration 1d = Custom clock configuration |


## 8.1.1.46 CLK_CFG1 Register (Address = 0x33) \[Reset = 0x00\]

CLK_CFG1 is shown in [Table 8-48](#BOOK0_P0_B0_P0_B0_P0_CLK_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the clock configuration register 1.

**Table 8-48 CLK_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-2 | SASI_SAMP_RATE[5:0] | R/W | 000000b | Secondary ASI sample rate configuration. -Typical (Range) 0d = Secondary ASI sampling rate auto detected in the device 1d = 768000 (670320-791040) 2d = 614400 (536256-632832) 3d = 512000 (446880-527360) 4d = 438857 (383040-452022) 5d = 384000 (335160-395520) 6d = 341333 (297920-351573) 7d = 307200 (268128-316416) 8d = 256000 (223440-263680) 9d = 219429 (191520-226011) 10d = 192000 (167580-197760) 11d = 170667 (148960-175786) 12d = 153600 (134064-158208) 13d = 128000 (111720-131840) 14d = 109714 (95760-113005) 15d = 96000 (83790-98880) 16d = 85333 (74480-87893) 17d = 76800 (67032-79104) 18d = 64000 (55860-65920) 19d = 54857 (47880-56502) 20d = 48000 (41895-49440) 21d = 42667 (37240-43946) 22d = 38400 (33516-39552) 23d = 32000 (27930-32960) 24d = 27429 (23940-28251) 25d = 24000 (20947-24720) 26d = 21333 (18620-21973) 27d = 19200 (16758-19776) 28d = 16000 (13965-16480) 29d = 13714 (11970-14125) 30d = 12000 (10473-12360) 31d = 10667 (9310-10986) 32d = 9600 (8379-9888) 33d = 8000 (6982-8240) 34d = 6857 (5985-7062) 35d = 6000 (5236-6180) 36d = 5333 (4655-5493) 37d = 4800 (4189-4944) 38d = 4000 (3491-4120) 39d = 3429 (2992-3531) 40d = 3000 (2618-3090) 41d-63d = Reserved |
| 1 | SASI_FS_RATE_NO_LIM | R/W | 0b | Limit sampling rate to standard audio sample rates only. 0d = Standard audio rates with 1% tolerance supported using auto mode 1d = Standard audio rates with 5% tolerance supported using auto mode |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.47 CLK_CFG2 Register (Address = 0x34) \[Reset = 0x40\]

CLK_CFG2 is shown in [Table 8-49](#BOOK0_P0_B0_P0_B0_P0_CLK_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the clock configuration register 2.

**Table 8-49 CLK_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PLL_DIS | R/W | 0b | Custom/Auto clock mode PLL setting. 0d = PLL is always enabled in custom clk mode/PLL is enabled based on DSP MIPS requirement in auto clock mode 1d = PLL is disabled |
| 6 | AUTO_PLL_FR_ALLOW | R/W | 1b | Allow the PLL to operate in fractional mode of operation. 0d = PLL fractional mode disabled 1d = PLL fractional mode allowed |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3-1 | CLK_SRC_SEL[2:0] | R/W | 000b | Input clock source select. 0d = Primary ASI BCLK is the input clock source 1d = CCLK synchronized with Primary ASI FSYNC is the input clock source 2d = Secondary ASI BCLK is the input clock source 3d = CCLK synchronized with Secondary ASI FSYNC is the input clock source 4d = Fixed CCLK frequency (used only in controller mode configuration) 5d = Internal oscillator clock is the input clock source (only supported in custom clock configuration) 6d to 7d = Reserved |
| 0 | RATIO_CLK_EDGE | R/W | 0b | Edge selection for clock source ratio detection. 0d = Use rising edge of clock source to check ratio with primary or secondary FSYNC 1d = Use falling edge of clock source to check ratio with primary or secondary FSYNC |


## 8.1.1.48 CNT_CLK_CFG0 Register (Address = 0x35) \[Reset = 0x00\]

CNT_CLK_CFG0 is shown in [Table 8-50](#BOOK0_P0_B0_P0_B0_P0_CNT_CLK_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the controller mode clock configuration register 0.

**Table 8-50 CNT_CLK_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | PDM_CLK_CFG[1:0] | R/W | 00b | PDM_CLK configuration. 0d = PDM_CLK is 2.8224 MHz or 3.072 MHz 1d = PDM_CLK is 1.4112 MHz or 1.536 MHz 2d = PDM_CLK is 705.6 kHz or 768 kHz 3d = PDM_CLK is 5.6448 MHz or 6.144 MHz |
| 5-0 | CCLK_FS_RATIO_MSB[5:0] | R/W | 000000b | Most significant bits for selecting the ratio between CCLK and primary/secondary ASI FSYNC with which CCLK is synchronized. 0d = Auto detect the ratio (assumption is CCLK is synchronized with primary/secondary FSYNC) 1d to 16383d = Ratio as per configuration |


## 8.1.1.49 CNT_CLK_CFG1 Register (Address = 0x36) \[Reset = 0x00\]

CNT_CLK_CFG1 is shown in [Table 8-51](#BOOK0_P0_B0_P0_B0_P0_CNT_CLK_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the controller mode clock configuration register 1.

**Table 8-51 CNT_CLK_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | CCLK_FS_RATIO_LSB[7:0] | R/W | 00000000b | Select the ratio between CCLK and primary/secondary ASI FSYNC with which CCLK is synchronized. 0d = Auto detect the ratio (assumption is CCLK is synchronized with primary/secondary FSYNC) 1d to 16383d = Ratio as per configuration |


## 8.1.1.50 CNT_CLK_CFG2 Register (Address = 0x37) \[Reset = 0x20\]

CNT_CLK_CFG2 is shown in [Table 8-52](#BOOK0_P0_B0_P0_B0_P0_CNT_CLK_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the controller mode clock configuration register 2.

**Table 8-52 CNT_CLK_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-5 | CCLK_FREQ_SEL[2:0] | R/W | 001b | These bits select the CCLK input frequency (used only in controller mode configuration). 0d = 12 MHz 1d = 12.288 MHz 2d = 13 MHz 3d = 16 MHz 4d = 19.2 MHz 5d = 19.68 MHz 6d = 24 MHz 7d = 24.576 MHz |
| 4 | PASI_CNT_CFG | R/W | 0b | Primary ASI controller or target configuration 0d = Primary ASI in target configuration 1d = Primary ASI in controller configuration |
| 3 | SASI_CNT_CFG | R/W | 0b | Secondary ASI controller or target configuration 0d = Secondary ASI in target configuration 1d = Secondary ASI in controller configuration |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | FS_MODE | R/W | 0b | Sample rate setting (valid when the device is in controller mode). This is applicable for both PASI and SASI. 0d = sampling rate is a multiple (or submultiple) of 48 kHz 1d = sampling rate is a multiple (or submultiple) of 44.1 kHz |


## 8.1.1.51 CNT_CLK_CFG3 Register (Address = 0x38) \[Reset = 0x00\]

CNT_CLK_CFG3 is shown in [Table 8-53](#BOOK0_P0_B0_P0_B0_P0_CNT_CLK_CFG3_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the controller mode clock configuration register 3.

**Table 8-53 CNT_CLK_CFG3 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PASI_USE_INT_BCLK_FOR_FSYNC | R/W | 0b | Use internal BCLK for FSYNC generation in PASI during controller mode configuration. 0d = Use external BCLK for FSYNC generation 1d = Use internal BCLK for FSYNC generation |
| 6 | PASI_INV_BCLK_FOR_FSYNC | R/W | 0b | Invert PASI BCLK polarity only for PASI FSYNC generation in controller mode configuration. 0d = Do not invert PASI BCLK polarity for PASI FSYNC generation 1d = Invert PASI BCLK polarity for PASI FSYNC generation |
| 5-0 | PASI_BCLK_FS_RATIO_MSB[5:0] | R/W | 000000b | MSB bits for primary ASI BCLK to FSYNC ratio in controller mode. |


## 8.1.1.52 CNT_CLK_CFG4 Register (Address = 0x39) \[Reset = 0x00\]

CNT_CLK_CFG4 is shown in [Table 8-54](#BOOK0_P0_B0_P0_B0_P0_CNT_CLK_CFG4_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the controller mode clock configuration register 4.

**Table 8-54 CNT_CLK_CFG4 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | PASI_BCLK_FS_RATIO_LSB[7:0] | R/W | 00000000b | LSB byte for primary ASI BCLK to FSYNC ratio in controller mode. |


## 8.1.1.53 CNT_CLK_CFG5 Register (Address = 0x3A) \[Reset = 0x00\]

CNT_CLK_CFG5 is shown in [Table 8-55](#BOOK0_P0_B0_P0_B0_P0_CNT_CLK_CFG5_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the controller mode clock configuration register 5.

**Table 8-55 CNT_CLK_CFG5 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | SASI_USE_INT_BCLK_FOR_FSYNC | R/W | 0b | Use internal BCLK for FSYNC generation in SASI during controller mode configuration. 0d = Use external BCLK for FSYNC generation 1d = Use internal BCLK for FSYNC generation |
| 6 | SASI_INV_BCLK_FOR_FSYNC | R/W | 0b | Invert SASI BCLK polarity only for SASI FSYNC generation in controller mode configuration. 0d = Do not invert SASI BCLK polarity for SASI FSYNC generation 1d = Invert SASI BCLK polarity for SASI FSYNC generation |
| 5-0 | SASI_BCLK_FS_RATIO_MSB[5:0] | R/W | 000000b | MSB bits for secondary ASI BCLK to FSYNC ratio in controller mode. |


## 8.1.1.54 CNT_CLK_CFG6 Register (Address = 0x3B) \[Reset = 0x00\]

CNT_CLK_CFG6 is shown in [Table 8-56](#BOOK0_P0_B0_P0_B0_P0_CNT_CLK_CFG6_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the controller mode clock configuration register 6.

**Table 8-56 CNT_CLK_CFG6 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | SASI_BCLK_FS_RATIO_LSB[7:0] | R/W | 00000000b | LSB byte for secondary ASI BCLK to FSYNC ratio in controller mode. |


## 8.1.1.55 CLK_ERR_STS0 Register (Address = 0x3C) \[Reset = 0x00\]

CLK_ERR_STS0 is shown in [Table 8-57](#BOOK0_P0_B0_P0_B0_P0_CLK_ERR_STS0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the clock error and status register 0.

**Table 8-57 CLK_ERR_STS0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | DSP_CLK_ERR | R | 0b | Flag indicating ratio error between FSYNC and selected clock source. 0d = No ratio error 1d = Ratio error between primary or secondary ASI FSYNC and selected clock source |
| 6 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | SRC_RATIO_ERR | R | 0b | Flag indicating that SRC m:n ratio is unsupported. (not valid for custom m/n ratio config). 0d = m:n ratio supported 1d = Unsupported m:n ratio error |
| 3 | DEM_RATE_ERR | R | 0b | Flag indicating that clock configuration does not allow valid DEM rate. 0d = No DEM clock rate error 1d = DEM clock rate error in selected clock configuration |
| 2 | PDM_CLK_ERR | R | 0b | Flag indicating that clock configuration does not allow valid PDM clock generation. 0d = No PDM clock generation error 1d = PDM clock generation error in selected clock configuration |
| 1 | RESET_ON_CLK_STOP_DET_STS | R | 0b | Flag indicating that audio clock source stopped for at least 1ms. 0d = No audio clock source error 1d = Audio clock source stopped for at least 1ms |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.56 CLK_ERR_STS1 Register (Address = 0x3D) \[Reset = 0x00\]

CLK_ERR_STS1 is shown in [Table 8-58](#BOOK0_P0_B0_P0_B0_P0_CLK_ERR_STS1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the clock error and status register 1.

**Table 8-58 CLK_ERR_STS1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PASI_BCLK_FS_RATIO_ERR | R | 0b | Flag indicating PASI bclk fsync ratio error. 0d = No PASI bclk fsync ratio error 1d = PASI bclk fsync ratio error in selected clock configuration |
| 6 | SASI_BCLK_FS_RATIO_ERR | R | 0b | Flag indicating SASI bclk fsync ratio error. 0d = No SASI bclk fsync ratio error 1d = SASI bclk fsync ratio error in selected clock configuration |
| 5 | CCLK_FS_RATIO_ERR | R | 0b | Flag indicating CCLK fsync ratio error. 0d = No CCLK fsync ratio error 1d = CCLK fsync ratio error |
| 4 | PASI_FS_ERR | R | 0b | Flag indicating PASI FS rate change or halt error. 0d = No PASI FS error 1d = PASI FS rate change or halt detected |
| 3 | SASI_FS_ERR | R | 0b | Flag indicating SASI FS rate change or halt error. 0d = No SASI FS error 1d = SASI FS rate change or halt detected |
| 2-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.1.57 CLK_DET_STS0 Register (Address = 0x3E) \[Reset = 0x00\]

CLK_DET_STS0 is shown in [Table 8-59](#BOOK0_P0_B0_P0_B0_P0_CLK_DET_STS0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the clock ratio detection register 0.

**Table 8-59 CLK_DET_STS0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-2 | PASI_SAMP_RATE_STS[5:0] | R | 000000b | Primary ASI Sample rate detected status. 0d = Reserved 1d = 768000 (670320-791040) 2d = 614400 (536256-632832) 3d = 512000 (446880-527360) 4d = 438857 (383040-452022) 5d = 384000 (335160-395520) 6d = 341333 (297920-351573) 7d = 307200 (268128-316416) 8d = 256000 (223440-263680) 9d = 219429 (191520-226011) 10d = 192000 (167580-197760) 11d = 170667 (148960-175786) 12d = 153600 (134064-158208) 13d = 128000 (111720-131840) 14d = 109714 (95760-113005) 15d = 96000 (83790-98880) 16d = 85333 (74480-87893) 17d = 76800 (67032-79104) 18d = 64000 (55860-65920) 19d = 54857 (47880-56502) 20d = 48000 (41895-49440) 21d = 42667 (37240-43946) 22d = 38400 (33516-39552) 23d = 32000 (27930-32960) 24d = 27429 (23940-28251) 25d = 24000 (20947-24720) 26d = 21333 (18620-21973) 27d = 19200 (16758-19776) 28d = 16000 (13965-16480) 29d = 13714 (11970-14125) 30d = 12000 (10473-12360) 31d = 10667 (9310-10986) 32d = 9600 (8379-9888) 33d = 8000 (6982-8240) 34d = 6857 (5985-7062) 35d = 6000 (5236-6180) 36d = 5333 (4655-5493) 37d = 4800 (4189-4944) 38d = 4000 (3491-4120) 39d = 3429 (2992-3531) 40d = 3000 (2618-3090) 41d-63d = Reserved |
| 1-0 | PLL_MODE_STS[1:0] | R | 00b | PLL usage status. 0d = PLL used in integer mode 1d = PLL used in fractional mode 2d = PLL not used 3d = Reserved |


## 8.1.1.58 CLK_DET_STS1 Register (Address = 0x3F) \[Reset = 0x00\]

CLK_DET_STS1 is shown in [Table 8-60](#BOOK0_P0_B0_P0_B0_P0_CLK_DET_STS1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the clock ratio detection register 1.

**Table 8-60 CLK_DET_STS1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-2 | SASI_SAMP_RATE_STS[5:0] | R | 000000b | Secondary ASI Sample rate detected status. 0d = Reserved 1d = 768000 (670320-791040) 2d = 614400 (536256-632832) 3d = 512000 (446880-527360) 4d = 438857 (383040-452022) 5d = 384000 (335160-395520) 6d = 341333 (297920-351573) 7d = 307200 (268128-316416) 8d = 256000 (223440-263680) 9d = 219429 (191520-226011) 10d = 192000 (167580-197760) 11d = 170667 (148960-175786) 12d = 153600 (134064-158208) 13d = 128000 (111720-131840) 14d = 109714 (95760-113005) 15d = 96000 (83790-98880) 16d = 85333 (74480-87893) 17d = 76800 (67032-79104) 18d = 64000 (55860-65920) 19d = 54857 (47880-56502) 20d = 48000 (41895-49440) 21d = 42667 (37240-43946) 22d = 38400 (33516-39552) 23d = 32000 (27930-32960) 24d = 27429 (23940-28251) 25d = 24000 (20947-24720) 26d = 21333 (18620-21973) 27d = 19200 (16758-19776) 28d = 16000 (13965-16480) 29d = 13714 (11970-14125) 30d = 12000 (10473-12360) 31d = 10667 (9310-10986) 32d = 9600 (8379-9888) 33d = 8000 (6982-8240) 34d = 6857 (5985-7062) 35d = 6000 (5236-6180) 36d = 5333 (4655-5493) 37d = 4800 (4189-4944) 38d = 4000 (3491-4120) 39d = 3429 (2992-3531) 40d = 3000 (2618-3090) 41d-63d = Reserved |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.1.59 CLK_DET_STS2 Register (Address = 0x40) \[Reset = 0x00\]

CLK_DET_STS2 is shown in [Table 8-61](#BOOK0_P0_B0_P0_B0_P0_CLK_DET_STS2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the clock ratio detection register 2.

**Table 8-61 CLK_DET_STS2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 5-0 | FS_CLKSRC_RATIO_DET_MSB_STS[5:0] | R | 000000b | MSB bits for primary ASI or secondary ASI FSYNC to clock source ratio detected. |


## 8.1.1.60 CLK_DET_STS3 Register (Address = 0x41) \[Reset = 0x00\]

CLK_DET_STS3 is shown in [Table 8-62](#BOOK0_P0_B0_P0_B0_P0_CLK_DET_STS3_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the clock ratio detection register 3.

**Table 8-62 CLK_DET_STS3 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | FS_CLKSRC_RATIO_DET_LSB_STS[7:0] | R | 00000000b | LSB byte for primary ASI or secondary ASI FSYNC to clock source ratio detected. |


## 8.1.1.61 INT_CFG Register (Address = 0x42) \[Reset = 0x00\]

INT_CFG is shown in [Table 8-63](#BOOK0_P0_B0_P0_B0_P0_INT_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the interrupt configuration register.

**Table 8-63 INT_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | INT_POL | R/W | 0b | Interrupt polarity. 0b = Active low (IRQZ) 1b = Active high (IRQ) |
| 6-5 | INT_EVENT[1:0] | R/W | 00b | Interrupt event configuration. 0d = INT asserts on any unmasked latched interrupts event 1d = INT asserts on any unmasked live interrupts event 2d = INT asserts for 2 ms (typical) for every 4-ms (typical) duration on any unmasked latched interrupts event 3d = INT asserts for 2 ms (typical) one time on each pulse for any unmasked interrupts event |
| 4-3 | PD_ON_FLT_CFG[1:0] | R/W | 00b | Power down configuration during fault for chx and micbias. 0d = Faults are not considered for power down 1d = Only unmasked faults are considered for power down 2d = All faults are considered for power down 3d = Reserved |
| 2 | LTCH_READ_CFG | R/W | 0b | Interrupt latch registers readback configuration. 0b = All interrupts can be read through the LTCH registers 1b = Only unmasked interrupts can be read through the LTCH registers |
| 1 | PD_ON_FLT_RCV_CFG | R/W | 0b | Configuration for Power down ADC channels on fault 0b = Auto recovery, ADC channels are re-powered up when fault goes away 1b = Manual recovery, ADC channels are not re-powered up when fault goes away |
| 0 | LTCH_CLR_ON_READ | R/W | 0b | Cfgn for clearing LTCH register bits 0 = LTCH reg bits are cleared on reg read only if live status is zero 1 = LTCH reg bits are cleared on reg read irrespective of live status |


## 8.1.1.62 DAC_FLT_CFG Register (Address = 0x43) \[Reset = 0x54\]

DAC_FLT_CFG is shown in [Table 8-64](#BOOK0_P0_B0_P0_B0_P0_DAC_FLT_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the interrupt configuration register.

**Table 8-64 DAC_FLT_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | DAC_PD_ON_FLT_CFG[1:0] | R/W | 10b | Power down configuration during fault for DAC . 0d = Faults are not considered for power down 1d = Only unmasked faults are considered for power down 2d = All faults are considered for power down 3d = Reserved |
| 4 | DAC_PD_ON_FLT_RCV_CFG | R/W | 1b | Configuration for Power down DAC channels on fault 0b = Auto recovery, DAC channels are re-powered up when fault goes away 1b = Manual recovery, DAC channels are not re-powered up when fault goes away |
| 3 | OUT_CHx_PD_FLT_STS | R | 0b | Status for PD on OUTxx faults 0d = No DAC Channel is Powered Down due to fault/s 1d = Some DAC Channel is Powered Down due to fault/s |
| 2 | DAC_DIS_PD_W_PU | R/W | 1b | Disable power down on DRVR VG fault while powering up DAC 0b = Power down DAC on DRVR VG fault while power up 1b = Disable power down DAC on DRVR VG fault while power up |
| 1 | DAC_FLT_DET_DIS | R/W | 0b | DAC vg_fault/sc_fault detect config 0b = enable 1b = disable |
| 0 | AREG_SC_FLAG_DET_DIS | R/W | 0b | AREG short circuit detect config 0b = enable 1b = disable |


## 8.1.1.63 ADC_DAC_MISC_CFG Register (Address = 0x4B) \[Reset = 0x00\]

ADC_DAC_MISC_CFG is shown in [Table 8-65](#BOOK0_P0_B0_P0_B0_P0_ADC_DAC_MISC_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the ADC overload response configuration register. It gives option to mute the ADC channel in overload recovery phase to avoid audible artifacts. Overload recovery phase is protection mechanism for inputs like step input where there is abrupt change in level.

**Table 8-65 ADC_DAC_MISC_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | ADC_CH1_MUTE_ON_OVRLD | R/W | 0b | Mute ADC channel 1 while ADC1 is in Overload Recovery Phase 0b = Disable 1b = Enable |
| 3 | ADC_CH2_MUTE_ON_OVRLD | R/W | 0b | Mute ADC channel 2 while ADC2 is in Overload Recovery Phase 0b = Disable 1b = Enable |
| 2-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.1.64 IADC_CFG Register (Address = 0x4C) \[Reset = 0x5C\]

IADC_CFG is shown in [Table 8-66](#BOOK0_P0_B0_P0_B0_P0_IADC_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the IADC configuration register.

**Table 8-66 IADC_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | IADC_NSKIP_SEL[1:0] | R/W | 01b | IADC NSKIP configuration. 0d = 384 mod clks 1d = 576 mod clks 2d = 896 mod clks 3d = 1024 mod clks 4d = 2048 mod clks 5d = 4096 mod clks 6d-7d = Reserved |
| 5-4 | IADC_NRESET_SEL[1:0] | R/W | 01b | IADC NRESET configuration. 0d = 50 mod clks 1d = 75 mod clks 2d = 100 mod clks 3d = 150 mod clks |
| 3-2 | IADC_OSR_SEL[1:0] | R/W | 11b | IADC OSR select configuration. 0d = 32 1d = 64 2d = 96 3d = 128 |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.1.65 VREF_MICBIAS_CFG Register (Address = 0x4D) \[Reset = 0x00\]

VREF_MICBIAS_CFG is shown in [Table 8-67](#BOOK0_P0_B0_P0_B0_P0_VREF_MICBIAS_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the configuration register for VREF and MICBIAS.

**Table 8-67 VREF_MICBIAS_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-5 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 4 | MICBIAS_LDO_GAIN | R/W | 0b | MICBIAS Output Gain Setting 0d = LDO gain = 1 1d = LDO gain = 1.096 |
| 3-2 | MICBIAS_VAL[1:0] | R/W | 00b | MICBIAS Output Setting 0d = Microphone Bias is set to VREF 1d = Microphone Bias is set to VREF/2 (Valid only for VREF_FSCALE 0 or 1 setting) 2d = Reserved 3d = Microphone Bias output is bypassed to AVDD |
| 1-0 | VREF_FSCALE[1:0] | R/W | 00b | VREF/Full-Scale Setting (Need to configure this based on AVDD min voltage used) 0d = VREF set to 2.75 V to support 2 V<sub>RMS</sub> for Differential Input or 1 V<sub>RMS</sub> for Single-Ended Input 1d = VREF set to 2.5 V to support 1.818 V<sub>RMS</sub> for Differential Input or 0.909 V<sub>RMS</sub> for Single-Ended Input 2d = VREF set to 1.375 V to support 1 V<sub>RMS</sub> for Differential Input or 0.5 V<sub>RMS</sub> for Single-Ended Input 3d = Reserved |


## 8.1.1.66 PWR_TUNE_CFG0 Register (Address = 0x4E) \[Reset = 0x00\]

PWR_TUNE_CFG0 is shown in [Table 8-68](#BOOK0_P0_B0_P0_B0_P0_PWR_TUNE_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for power tune configuration.

**Table 8-68 PWR_TUNE_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | ADC_CLK_BY2_MODE | R/W | 0b | ADC MOD CLK select configuration. 0d = MOD CLK 3.072MHz or 2.8224MHz 1d = MOD CLK 1.536MHz or 1.4112MHz |
| 6 | ADC_CIC_ORDER | R/W | 0b | ADC CIC order configuration. 0d = 5th order CIC 1d = 4th order CIC |
| 5 | ADC_FIR_BYPASS | R/W | 0b | ADC FIR bypass configuration. 0d = Bypass disable 1d = Bypass enable |
| 4 | ADC_DEM_RATE_OVRD | R/W | 0b | ADC DEM rate override configuration. 0d = Default 1d = 2x |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | ADC_LOW_PWR_FILT | R/W | 0b | Low Power filter configuration for ADC 0d = Disable 1d = Enable |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.1.67 PWR_TUNE_CFG1 Register (Address = 0x4F) \[Reset = 0x00\]

PWR_TUNE_CFG1 is shown in [Table 8-69](#BOOK0_P0_B0_P0_B0_P0_PWR_TUNE_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register for power tune configuration.

**Table 8-69 PWR_TUNE_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | DAC_CLK_BY2_MODE | R/W | 0b | DAC MOD CLK select configuration. 0d = MOD CLK 3MHz 1d = MOD CLK 1.5MHz |
| 6 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | DAC_DEM_RATE_OVRD | R/W | 0b | DAC DEM rate override configuration. 0d = Default 1d = 2x |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | DAC_LOW_PWR_FILT | R/W | 0b | Low Power Filter configuration for DAC 0d = Disable 1d = Enable |
| 1 | DAC_POWER_SCAL | R/W | 0b | DAC IREF select configuration. 0d = Vref/R 1d = Vref/2R |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.68 ADC_CH1_CFG0 Register (Address = 0x50) \[Reset = 0x00\]

ADC_CH1_CFG0 is shown in [Table 8-70](#BOOK0_P0_B0_P0_B0_P0_ADC_CH1_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for ADC channel 1.

**Table 8-70 ADC_CH1_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | ADC_CH1_INSRC[1:0] | R/W | 00b | ADC Channel 1 input configuration. 0d = Analog differential input 1d = Analog single-ended input 2d = Analog single-ended mux INP1 input 3d = Analog single-ended mux INM1 input |
| 5-4 | ADC_CH1_IMP[1:0] | R/W | 00b | ADC Channel 1 input impedance (applicable for the analog input). 0d = Typical 5kΩ input impedance (For 4 Vrms case it will be 10kΩ) 1d = Typical 10kΩ input impedance 2d = Typical 40kΩ input impedance 3d = Reserved |
| 3-2 | ADC_CH1_CM_TOL[1:0] | R/W | 00b | ADC Channel 1 input coupling (applicable for the analog input). 0d = AC-coupled input with common mode variance tolerance supported 50 mVpp for single ended and 100 mVpp for differential configuration 1d = AC-coupled / DC-coupled input with common mode variance tolerance supported 500 mVpp for single ended and 1 Vpp for differential configuration 2d = AC-coupled / DC-coupled input with common mode variance tolerance supported rail to rail (supply to ground) (High CMRR tolerance mode) 3d = Reserved |
| 1 | ADC_CH1_FULLSCALE_VAL | R/W | 0b | ADC Channel 1 Full-scale value for VREF=2.75 V (applicable for the analog input). 0d = 2 Vrms differential ( 1 Vrms for single ended operation) 1d = 4 Vrms differential ( 2 Vrms for single ended operation) (For AC-coupled configuration external biasing is required for input common mode, this mode supported with common mode variance tolerance rail to rail) (only 2.75 VREF supported, only supported in audio band-width mode) |
| 0 | ADC_CH1_BW_MODE | R/W | 0b | ADC Channel 1 band-width selection. coupling (applicable for the analog input). 0d = audio band-width (24 kHz mode) 1d = wide band-width (96 kHz mode) (Supported only for 40kΩ input impedance case) |


## 8.1.1.69 IADC_CH_CFG Register (Address = 0x51) \[Reset = 0x00\]

IADC_CH_CFG is shown in [Table 8-71](#BOOK0_P0_B0_P0_B0_P0_IADC_CH_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register for ADC channels in IADC mode.

**Table 8-71 IADC_CH_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | IADC_EN | R/W | 0b | IADC enable configuration. 0d = IADC disabled 1d = IADC enabled |
| 6-5 | IADC_MODE[1:0] | R/W | 00b | IADC mode configuration. (for single channel mode channel select is controlled by ADC_INSRC SE_MUX config) 0d = One-shot single channel 1d = One-shot multi channel 2d = Sequential single channel 3d = Sequential multi channel |
| 4 | IADC_CONVST_ONESHOT | R/W | 0b | IADC conversion start one short configuration. 0d = No conversion 1d = Start one shot conversion |
| 3 | IADC_STOP_SEQ_CONV | R/W | 0b | IADC stop sequential conversion configuration. 0d = Sequential conversion running 1d = Stop sequential conversion |
| 2 | IADC_ONESHOT_CONV_DONE_STS | R | 0b | IADC one shot conversion done configuration. 0d = Conversion not done 1d = One shot conversion done |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.70 ADC_CH1_CFG2 Register (Address = 0x52) \[Reset = 0xA1\]

ADC_CH1_CFG2 is shown in [Table 8-72](#BOOK0_P0_B0_P0_B0_P0_ADC_CH1_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 2 for ADC channel 1.

**Table 8-72 ADC_CH1_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | ADC_CH1_DVOL[7:0] | R/W | 10100001b | Channel 1 digital volume control. 0d = Digital volume is muted 1d = Digital volume control is set to -80 dB 2d = Digital volume control is set to -79.5 dB 3d to 160d = Digital volume control is set as per configuration 161d = Digital volume control is set to 0 dB 162d = Digital volume control is set to 0.5 dB 163d to 253d = Digital volume control is set as per configuration 254d = Digital volume control is set to 46.5 dB 255d = Digital volume control is set to 47 dB |


## 8.1.1.71 ADC_CH1_CFG3 Register (Address = 0x53) \[Reset = 0x80\]

ADC_CH1_CFG3 is shown in [Table 8-73](#BOOK0_P0_B0_P0_B0_P0_ADC_CH1_CFG3_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 3 for ADC channel 1.

**Table 8-73 ADC_CH1_CFG3 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | ADC_CH1_FGAIN[3:0] | R/W | 1000b | ADC channel 1 fine gain calibration. 0d = Fine gain is set to -0.8 dB 1d = Fine gain is set to -0.7 dB 2d = Fine gain is set to -0.6 dB 3d to 7d = Fine gain is set as per configuration 8d = Fine gain is set to 0 dB 9d = Fine gain is set to 0.1 dB 10d to 13d = Fine gain is set as per configuration 14d = Fine gain is set to 0.6 dB 15d = Fine gain is set to 0.7 dB |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.72 ADC_CH1_CFG4 Register (Address = 0x54) \[Reset = 0x00\]

ADC_CH1_CFG4 is shown in [Table 8-74](#BOOK0_P0_B0_P0_B0_P0_ADC_CH1_CFG4_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 4 for ADC channel 1.

**Table 8-74 ADC_CH1_CFG4 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-2 | ADC_CH1_PCAL[5:0] | R/W | 000000b | ADC channel 1 phase calibration with modulator clock resolution. 0d = No phase calibration 1d = Phase calibration delay is set to one cycle of the modulator clock 2d = Phase calibration delay is set to two cycles of the modulator clock 3d to 62d = Phase calibration delay as per configuration 63d = Phase calibration delay is set to 63 cycles of the modulator clock |
| 1-0 | PCAL_ANA_DIG_SEL[1:0] | R/W | 00b | PCAL support configuration. 0d = Pcal for both Ana-Dig supported 1d = Pcal for only Ana 2d = Pcal for only Dig 3d = Reserved |


## 8.1.1.73 ADC_CH2_CFG0 Register (Address = 0x55) \[Reset = 0x00\]

ADC_CH2_CFG0 is shown in [Table 8-75](#BOOK0_P0_B0_P0_B0_P0_ADC_CH2_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for ADC channel 2.

**Table 8-75 ADC_CH2_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | ADC_CH2_INSRC[1:0] | R/W | 00b | ADC Channel 2 input configuration. 0d = Analog differential input 1d = Analog single-ended input 2d = Analog single-ended mux INP2 input 3d = Analog single-ended mux INM2 input |
| 5-4 | ADC_CH2_IMP[1:0] | R/W | 00b | ADC Channel 2 input impedance (applicable for the analog input). 0d = Typical 5kΩ input impedance (For 4 Vrms case it will be 10kΩ) 1d = Typical 10kΩ input impedance 2d = Typical 40kΩ input impedance 3d = Reserved |
| 3-2 | ADC_CH2_CM_TOL[1:0] | R/W | 00b | ADC Channel 2 input coupling (applicable for the analog input). 0d = AC-coupled input with common mode variance tolerance supported 50 mVpp for single ended and 100 mVpp for differential configuration 1d = AC-coupled / DC-coupled input with common mode variance tolerance supported 500 mVpp for single ended and 1 Vpp for differential configuration 2d = AC-coupled / DC-coupled input with common mode variance tolerance supported rail to rail (supply to ground) (High CMRR tolerance mode) 3d = Reserved |
| 1 | ADC_CH2_FULLSCALE_VAL | R/W | 0b | ADC Channel 2 Full-scale value for VREF=2.75 V (applicable for the analog input). 0d = 2 Vrms differential ( 1 Vrms for single ended operation) 1d = 4 Vrms differential ( 2 Vrms for single ended operation) (For AC-coupled configuration external biasing is required for input common mode, this mode supported with common mode variance tolerance rail to rail) (only 2.75 VREF supported, only supported in audio band-width mode) |
| 0 | ADC_CH2_BW_MODE | R/W | 0b | ADC Channel 2 band-width selection. coupling (applicable for the analog input). 0d = audio band-width (24 kHz mode) 1d = wide band-width (96 kHz mode) (Supported only for 40kΩ input impedance case) |


## 8.1.1.74 ADC_CH2_CFG2 Register (Address = 0x57) \[Reset = 0xA1\]

ADC_CH2_CFG2 is shown in [Table 8-76](#BOOK0_P0_B0_P0_B0_P0_ADC_CH2_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 2 for channel 2.

**Table 8-76 ADC_CH2_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | ADC_CH2_DVOL[7:0] | R/W | 10100001b | Channel 1 digital volume control. 0d = Digital volume is muted 1d = Digital volume control is set to -80 dB 2d = Digital volume control is set to -79.5 dB 3d to 160d = Digital volume control is set as per configuration 161d = Digital volume control is set to 0 dB 162d = Digital volume control is set to 0.5 dB 163d to 253d = Digital volume control is set as per configuration 254d = Digital volume control is set to 46.5 dB 255d = Digital volume control is set to 47 dB |


## 8.1.1.75 ADC_CH2_CFG3 Register (Address = 0x58) \[Reset = 0x80\]

ADC_CH2_CFG3 is shown in [Table 8-77](#BOOK0_P0_B0_P0_B0_P0_ADC_CH2_CFG3_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 3 for ADC Channel 2.

**Table 8-77 ADC_CH2_CFG3 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | ADC_CH2_FGAIN[3:0] | R/W | 1000b | ADC Channel 2 fine gain calibration. 0d = Fine gain is set to -0.8 dB 1d = Fine gain is set to -0.7 dB 2d = Fine gain is set to -0.6 dB 3d to 7d = Fine gain is set as per configuration 8d = Fine gain is set to 0 dB 9d = Fine gain is set to 0.1 dB 10d to 13d = Fine gain is set as per configuration 14d = Fine gain is set to 0.6 dB 15d = Fine gain is set to 0.7 dB |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.76 ADC_CH2_CFG4 Register (Address = 0x59) \[Reset = 0x00\]

ADC_CH2_CFG4 is shown in [Table 8-78](#BOOK0_P0_B0_P0_B0_P0_ADC_CH2_CFG4_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 4 for ADC Channel 2.

**Table 8-78 ADC_CH2_CFG4 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-2 | ADC_CH2_PCAL[5:0] | R/W | 000000b | ADC Channel 2 phase calibration with modulator clock resolution. 0d = No phase calibration 1d = Phase calibration delay is set to one cycle of the modulator clock 2d = Phase calibration delay is set to two cycles of the modulator clock 3d to 62d = Phase calibration delay as per configuration 63d = Phase calibration delay is set to 63 cycles of the modulator clock |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.77 ADC_CH3_CFG0 Register (Address = 0x5A) \[Reset = 0x00\]

ADC_CH3_CFG0 is shown in [Table 8-79](#BOOK0_P0_B0_P0_B0_P0_ADC_CH3_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for ADC channel 3.

**Table 8-79 ADC_CH3_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | ADC_CH3_CLONE | R/W | 0b | ADC Channel 3 input configuration. 0d = clone disabled 1d = Channel 3 Digital Filter Input is generated same as Channel 1 Digital Filter Input (Cloned Input) |
| 6-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.78 ADC_CH3_CFG2 Register (Address = 0x5B) \[Reset = 0xA1\]

ADC_CH3_CFG2 is shown in [Table 8-80](#BOOK0_P0_B0_P0_B0_P0_ADC_CH3_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 2 for ADC channel 3.

**Table 8-80 ADC_CH3_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | ADC_CH3_DVOL[7:0] | R/W | 10100001b | Channel 3 digital volume control. 0d = Digital volume is muted 1d = Digital volume control is set to -80 dB 2d = Digital volume control is set to -79.5 dB 3d to 160d = Digital volume control is set as per configuration 161d = Digital volume control is set to 0 dB 162d = Digital volume control is set to 0.5 dB 163d to 253d = Digital volume control is set as per configuration 254d = Digital volume control is set to 46.5 dB 255d = Digital volume control is set to 47 dB |


## 8.1.1.79 ADC_CH3_CFG3 Register (Address = 0x5C) \[Reset = 0x80\]

ADC_CH3_CFG3 is shown in [Table 8-81](#BOOK0_P0_B0_P0_B0_P0_ADC_CH3_CFG3_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 3 for ADC channel 3.

**Table 8-81 ADC_CH3_CFG3 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | ADC_CH3_FGAIN[3:0] | R/W | 1000b | ADC channel 3 fine gain calibration. 0d = Fine gain is set to -0.8 dB 1d = Fine gain is set to -0.7 dB 2d = Fine gain is set to -0.6 dB 3d to 7d = Fine gain is set as per configuration 8d = Fine gain is set to 0 dB 9d = Fine gain is set to 0.1 dB 10d to 13d = Fine gain is set as per configuration 14d = Fine gain is set to 0.6 dB 15d = Fine gain is set to 0.7 dB |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.80 ADC_CH3_CFG4 Register (Address = 0x5D) \[Reset = 0x00\]

ADC_CH3_CFG4 is shown in [Table 8-82](#BOOK0_P0_B0_P0_B0_P0_ADC_CH3_CFG4_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 4 for ADC channel 3.

**Table 8-82 ADC_CH3_CFG4 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-2 | ADC_CH3_PCAL[5:0] | R/W | 000000b | ADC channel 3 phase calibration with modulator clock resolution. 0d = No phase calibration 1d = Phase calibration delay is set to one cycle of the modulator clock 2d = Phase calibration delay is set to two cycles of the modulator clock 3d to 62d = Phase calibration delay as per configuration 63d = Phase calibration delay is set to 63 cycles of the modulator clock |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.81 ADC_CH4_CFG0 Register (Address = 0x5E) \[Reset = 0x00\]

ADC_CH4_CFG0 is shown in [Table 8-83](#BOOK0_P0_B0_P0_B0_P0_ADC_CH4_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for ADC Channel 4.

**Table 8-83 ADC_CH4_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | ADC_CH4_CLONE | R/W | 0b | ADC Channel 4 input configuration. 0d = clone disabled 1d = Channel 4 Digital Filter Input is generated same as Channel 2 Digital Filter Input (Cloned Input) |
| 6-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.82 ADC_CH4_CFG2 Register (Address = 0x5F) \[Reset = 0xA1\]

ADC_CH4_CFG2 is shown in [Table 8-84](#BOOK0_P0_B0_P0_B0_P0_ADC_CH4_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 2 for channel 4.

**Table 8-84 ADC_CH4_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | ADC_CH4_DVOL[7:0] | R/W | 10100001b | Channel 4 digital volume control. 0d = Digital volume is muted 1d = Digital volume control is set to -80 dB 2d = Digital volume control is set to -79.5 dB 3d to 160d = Digital volume control is set as per configuration 161d = Digital volume control is set to 0 dB 162d = Digital volume control is set to 0.5 dB 163d to 253d = Digital volume control is set as per configuration 254d = Digital volume control is set to 46.5 dB 255d = Digital volume control is set to 47 dB |


## 8.1.1.83 ADC_CH4_CFG3 Register (Address = 0x60) \[Reset = 0x80\]

ADC_CH4_CFG3 is shown in [Table 8-85](#BOOK0_P0_B0_P0_B0_P0_ADC_CH4_CFG3_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 3 for ADC Channel 4.

**Table 8-85 ADC_CH4_CFG3 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | ADC_CH4_FGAIN[3:0] | R/W | 1000b | ADC Channel 4 fine gain calibration. 0d = Fine gain is set to -0.8 dB 1d = Fine gain is set to -0.7 dB 2d = Fine gain is set to -0.6 dB 3d to 7d = Fine gain is set as per configuration 8d = Fine gain is set to 0 dB 9d = Fine gain is set to 0.1 dB 10d to 13d = Fine gain is set as per configuration 14d = Fine gain is set to 0.6 dB 15d = Fine gain is set to 0.7 dB |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.84 ADC_CH4_CFG4 Register (Address = 0x61) \[Reset = 0x00\]

ADC_CH4_CFG4 is shown in [Table 8-86](#BOOK0_P0_B0_P0_B0_P0_ADC_CH4_CFG4_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 4 for ADC Channel 4.

**Table 8-86 ADC_CH4_CFG4 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-2 | ADC_CH4_PCAL[5:0] | R/W | 000000b | ADC Channel 4 phase calibration with modulator clock resolution. 0d = No phase calibration 1d = Phase calibration delay is set to one cycle of the modulator clock 2d = Phase calibration delay is set to two cycles of the modulator clock 3d to 62d = Phase calibration delay as per configuration 63d = Phase calibration delay is set to 63 cycles of the modulator clock |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.85 ADC_CFG1 Register (Address = 0x62) \[Reset = 0x00\]

ADC_CFG1 is shown in [Table 8-87](#BOOK0_P0_B0_P0_B0_P0_ADC_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 1 for the ADC.

**Table 8-87 ADC_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 5-4 | ADC_PINCM_TRIM[1:0] | R/W | 00b | Bit to tweak the Input common mode voltage of the ADC channel in AC coupled mode. Connects the following resistor from input pin to AVDD to have slight adjustments (increments) to the common mode voltage 01 = 500k 10 = 250k 11 = Reserved |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | ADC_DATA_INVERT | R/W | 0b | Bit to Invert ADC Data |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.86 OUT1x_CFG0 Register (Address = 0x64) \[Reset = 0x20\]

OUT1x_CFG0 is shown in [Table 8-88](#BOOK0_P0_B0_P0_B0_P0_OUT1X_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for Channel OUT1x.

**Table 8-88 OUT1x_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-5 | OUT1x_SRC[2:0] | R/W | 001b | OUT1x Source Configuration. 0d = Reserved; Don't use 1d = Input from DAC signal chain 2d = Input from Analog bypass path 3d = Input from both DAC signal chain and Analog bypass path 4d = Independent input from both DAC signal chain and Analog bypass path (DAC -> OUT1P , IN1P -> OUT1M) 5d = Independent input from both DAC signal chain and Analog bypass path (IN1M -> OUT1P, DAC -> OUT1M) 6d-7d = Reserved; Don't use |
| 4-2 | OUT1x_CFG[2:0] | R/W | 000b | OUT1x DAC / Analog Bypass Routing Configuration. (Don't use if OUT1x_SRC configured 4d or 5d) 0d = Differential (DAC1AP + DAC1BP / IN1M -> OUT1P ; DAC1AM + DAC1BM / IN1P -> OUT1M) 1d = Stereo single-ended (DAC1A / IN1M -> OUT1P ; DAC1B / IN1P -> OUT1M) 2d = Mono single-ended with output at OUT1P only (DAC1A + DAC1B / IN1M-> OUT1P) 3d = Mono single-ended with output at OUT1M only (DAC1A + DAC1B / IN1P -> OUT1M) 4d = Pseudo differential with OUT1M as VCOM (DAC1A, DAC1B / IN1M -> OUT1P, VCOM -> OUT1M) 5d = Pseudo differential with OUT1M as VCOM and OUT2M for external sensing (DAC1A, DAC1B / IN1M -> OUT1P, VCOM -> OUT1M) 6d = Pseudo differential with OUT1P as VCOM (IN1P -> OUT1M, VCOM -> OUT1P) 7d = Reserved; Don't use |
| 1 | OUT1x_VCOM | R/W | 0b | Channel OUT1x VCOM configuration. 0d = 0.6 * Vref (for 1.375V VREF mode alone as 0.654*Vref) 1d = AVDD by 2 |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.87 OUT1x_CFG1 Register (Address = 0x65) \[Reset = 0x20\]

OUT1x_CFG1 is shown in [Table 8-89](#BOOK0_P0_B0_P0_B0_P0_OUT1X_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 1 for Channel OUT1x.

**Table 8-89 OUT1x_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | OUT1P_DRIVE[1:0] | R/W | 00b | Channel OUT1P drive configuration. 0d = Line out driver with minimum 300Ω single ended impedance 1d = Headphone driver with minimum 16Ω single ended impedance 2d = To drive minimum of 4Ω single ended impedance 3d = For higher DR/SNR for FD receiver loads |
| 5-3 | OUT1P_LVL_CTRL[2:0] | R/W | 100b | Channel OUT1P level control configuration. 0d = Reserved; Don't use 1d = Reserved; Don't use 2d = 12 dB (only valid in bypass only mode configured in OUT1x_SRC{B0_P0_R100}) 3d = 6 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT1x_SRC{B0_P0_R100}) 4d = 0 dB 5d = -6 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT1x_SRC{B0_P0_R100}) 6d = -12 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT1x_SRC{B0_P0_R100} and AIN1M_BYP_IMP configured 4.4kΩ ) 7d = Reserved; Don't use |
| 2 | AIN1M_BYP_IMP | R/W | 0b | AIN1M Analog Bypass input impedance. 0d = 4.4kΩ 1d = 20kΩ |
| 1 | AIN1x_BYP_CFG | R/W | 0b | IN1x Analog Bypass input config. 0d = FD / Pseudo Diff 1d = SE |
| 0 | DAC_CH1_BW_MODE | R/W | 0b | DAC Channel 1 band-width selection. 0d = audio band-width (24 kHz mode) 1d = wide band-width (96 kHz mode) |


## 8.1.1.88 OUT1x_CFG2 Register (Address = 0x66) \[Reset = 0x20\]

OUT1x_CFG2 is shown in [Table 8-90](#BOOK0_P0_B0_P0_B0_P0_OUT1X_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 2 for Channel OUT2x.

**Table 8-90 OUT1x_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | OUT1M_DRIVE[1:0] | R/W | 00b | Channel OUT1M drive configuration. 0d = Line out driver with minimum 300Ω single ended impedance 1d = Headphone driver with minimum 16Ω single ended impedance 2d = To drive minimum of 4Ω single ended impedance 3d = For higher DR/SNR for FD receiver loads |
| 5-3 | OUT1M_LVL_CTRL[2:0] | R/W | 100b | Channel OUT1M level control configuration. 0d = Reserved; Don't use 1d = Reserved; Don't use 2d = 12 dB (only valid in bypass only mode configured in OUT1x_SRC{B0_P0_R100}) 3d = 6 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT1x_SRC{B0_P0_R100}) 4d = 0 dB 5d = -6 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT1x_SRC{B0_P0_R100}) 6d = -12 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT1x_SRC{B0_P0_R100} and AIN1M_BYP_IMP configured 4.4kΩ) 7d = Reserved; Don't use |
| 2 | AIN1P_BYP_IMP | R/W | 0b | AIN1P Analog Bypass input impedance. 0d = 4.4kΩ 1d = 20kΩ |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | DAC_CH1_CM_TOL | R/W | 0b | DAC Channel 1 input coupling (applicable for the analog input). 0d = AC-coupled input 1d = AC-coupled / DC-coupled input |


## 8.1.1.89 DAC_CH1A_CFG0 Register (Address = 0x67) \[Reset = 0xC9\]

DAC_CH1A_CFG0 is shown in [Table 8-91](#BOOK0_P0_B0_P0_B0_P0_DAC_CH1A_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for DAC channel 1A.

**Table 8-91 DAC_CH1A_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DAC_CH1A_DVOL[7:0] | R/W | 11001001b | Channel 1A digital volume control. 0d = Digital Volume is muted 1d = Digital Volume Control set to -100 dB 2d = Digital Volume Control set to -99.5 dB 3d to 200d = Digital Volume Control set to as per configuration 201d = Digital Volume Control set to 0 dB 202d = Digital Volume Control set to +0.5 dB 203d to 253d = Digital Volume Control set to as per configuration 254d = Digital Volume Control set to +26.5 dB 255d = Digital Volume Control set to +27 dB |


## 8.1.1.90 DAC_CH1A_CFG1 Register (Address = 0x68) \[Reset = 0x80\]

DAC_CH1A_CFG1 is shown in [Table 8-92](#BOOK0_P0_B0_P0_B0_P0_DAC_CH1A_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 1 for DAC channel 1A.

**Table 8-92 DAC_CH1A_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DAC_CH1A_FGAIN[3:0] | R/W | 1000b | DAC channel 1A fine gain calibration. 0d = Fine gain is set to -0.8 dB 1d = Fine gain is set to -0.7 dB 2d = Fine gain is set to -0.6 dB 3d to 7d = Fine gain is set as per configuration 8d = Fine gain is set to 0 dB 9d = Fine gain is set to 0.1 dB 10d to 13d = Fine gain is set as per configuration 14d = Fine gain is set to 0.6 dB 15d = Fine gain is set to 0.7 dB |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.91 DAC_CH1B_CFG0 Register (Address = 0x69) \[Reset = 0xC9\]

DAC_CH1B_CFG0 is shown in [Table 8-93](#BOOK0_P0_B0_P0_B0_P0_DAC_CH1B_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for DAC channel 1B.

**Table 8-93 DAC_CH1B_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DAC_CH1B_DVOL[7:0] | R/W | 11001001b | Channel 1B digital volume control. 0d = Digital Volume is muted 1d = Digital Volume Control set to -100 dB 2d = Digital Volume Control set to -99.5 dB 3d to 200d = Digital Volume Control set to as per configuration 201d = Digital Volume Control set to 0 dB 202d = Digital Volume Control set to +0.5 dB 203d to 253d = Digital Volume Control set to as per configuration 254d = Digital Volume Control set to +26.5 dB 255d = Digital Volume Control set to +27 dB |


## 8.1.1.92 DAC_CH1B_CFG1 Register (Address = 0x6A) \[Reset = 0x80\]

DAC_CH1B_CFG1 is shown in [Table 8-94](#BOOK0_P0_B0_P0_B0_P0_DAC_CH1B_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 1 for DAC channel 1B.

**Table 8-94 DAC_CH1B_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DAC_CH1B_FGAIN[3:0] | R/W | 1000b | DAC channel 1B fine gain calibration. 0d = Fine gain is set to -0.8 dB 1d = Fine gain is set to -0.7 dB 2d = Fine gain is set to -0.6 dB 3d to 7d = Fine gain is set as per configuration 8d = Fine gain is set to 0 dB 9d = Fine gain is set to 0.1 dB 10d to 13d = Fine gain is set as per configuration 14d = Fine gain is set to 0.6 dB 15d = Fine gain is set to 0.7 dB |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.93 OUT2x_CFG0 Register (Address = 0x6B) \[Reset = 0x20\]

OUT2x_CFG0 is shown in [Table 8-95](#BOOK0_P0_B0_P0_B0_P0_OUT2X_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for Channel OUT2x.

**Table 8-95 OUT2x_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-5 | OUT2x_SRC[2:0] | R/W | 001b | OUT2x Source Configuration. 0d = Reserved; Don't use 1d = Input from DAC signal chain 2d = Input from Analog bypass path 3d = Input from both DAC signal chain and Analog bypass path 4d = Independent input from both DAC signal chain and Analog bypass path (DAC -> OUT2P , IN2P -> OUT2M) 5d = Independent input from both DAC signal chain and Analog bypass path (IN2M -> OUT2P, DAC -> OUT2M) 6d-7d = Reserved; Don't use |
| 4-2 | OUT2x_CFG[2:0] | R/W | 000b | OUT2x DAC / Analog Bypass Routing Configuration. (Don't use if OUT1x_SRC configured 4d or 5d) 0d = Differential (DAC2AP + DAC2BP / IN2M -> OUT2P ; DAC2AM + DAC2BM / IN2P -> OUT2M) 1d = Stereo single-ended (DAC2A / IN2M -> OUT2P ; DAC2B / IN2P -> OUT2M) 2d = Mono single-ended with output at OUT2P only (DAC2A + DAC2B / IN2M-> OUT2P) 3d = Mono single-ended with output at OUT2M only (DAC2A + DAC2B / IN2P -> OUT2M) 4d = Pseudo differential with OUT2M as VCOM (DAC2A, DAC2B / IN2M -> OUT2P, VCOM -> OUT2M) 5d =Reserved; Don't use 6d = Pseudo differential with OUT2P as VCOM (IN2P -> OUT2M, VCOM -> OUT2P) 7d = Reserved; Don't use |
| 1 | OUT2x_VCOM | R/W | 0b | Channel OUT2x VCOM configuration. 0d = 0.6 * Vref (for 1.375V VREF mode alone as 0.654*Vref) 2d = AVDD by 2 |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.94 OUT2x_CFG1 Register (Address = 0x6C) \[Reset = 0x20\]

OUT2x_CFG1 is shown in [Table 8-96](#BOOK0_P0_B0_P0_B0_P0_OUT2X_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 1 for Channel OUT2x.

**Table 8-96 OUT2x_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | OUT2P_DRIVE[1:0] | R/W | 00b | Channel OUT2P drive configuration. 0d = Line out driver with minimum 300Ω single ended impedance 1d = Headphone driver with minimum 16Ω single ended impedance 2d = To drive minimum of 4Ω single ended impedance 3d = For higher DR/SNR for FD receiver loads |
| 5-3 | OUT2P_LVL_CTRL[2:0] | R/W | 100b | Channel OUT2P level control configuration. 0d = Reserved; Don't use 1d = Reserved; Don't use 2d = 12 dB (only valid in bypass only mode configured in OUT2x_SRC{B0_P0_R107}) 3d = 6 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT2x_SRC{B0_P0_R107}) 4d = 0 dB 5d = -6 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT2x_SRC{B0_P0_R107}) 6d = -12 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT2x_SRC{B0_P0_R107} and AIN1M_BYP_IMP configured 4.4kΩ) 7d = Reserved; Don't use |
| 2 | AIN2M_BYP_IMP | R/W | 0b | AIN2M Analog Bypass input impedance. 0d = 4.4kΩ 1d = 20kΩ |
| 1 | AIN2x_BYP_CFG | R/W | 0b | IN2x Analog Bypass input config. 0d = FD / Pseudo Diff 1d = SE |
| 0 | DAC_CH2_BW_MODE | R/W | 0b | DAC Channel 2 band-width selection. 0d = audio band-width (24 kHz mode) 1d = wide band-width (96 kHz mode) |


## 8.1.1.95 OUT2x_CFG2 Register (Address = 0x6D) \[Reset = 0x20\]

OUT2x_CFG2 is shown in [Table 8-97](#BOOK0_P0_B0_P0_B0_P0_OUT2X_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 2 for Channel OUT2x.

**Table 8-97 OUT2x_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | OUT2M_DRIVE[1:0] | R/W | 00b | Channel OUT2M drive configuration. 0d = Line out driver with minimum 300Ω single ended impedance 1d = Headphone driver with minimum 16Ω single ended impedance 2d = To drive minimum of 4Ω single ended impedance 3d = For higher DR/SNR for FD receiver loads |
| 5-3 | OUT2M_LVL_CTRL[2:0] | R/W | 100b | Channel OUT2M level control configuration. 0d = Reserved; Don't use 1d = Reserved; Don't use 2d = 12 dB (only valid in bypass only mode configured in OUT2x_SRC{B0_P0_R107}) 3d = 6 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT2x_SRC{B0_P0_R107}) 4d = 0 dB 5d = -6 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT2x_SRC{B0_P0_R107}) 6d = -12 dB (only valid if ana bypass mode or ana-dig mix mode configured in OUT2x_SRC{B0_P0_R107} and AIN1M_BYP_IMP configured 4.4kΩ) 7d = Reserved; Don't use |
| 2 | AIN2P_BYP_IMP | R/W | 0b | AIN2P Analog Bypass input impedance. 0d = 4.4kΩ 1d = 20kΩ |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | DAC_CH2_CM_TOL | R/W | 0b | DAC Channel 2 input coupling (applicable for the analog input). 0d = AC-coupled input 1d = AC-coupled / DC-coupled input |


## 8.1.1.96 DAC_CH2A_CFG0 Register (Address = 0x6E) \[Reset = 0xC9\]

DAC_CH2A_CFG0 is shown in [Table 8-98](#BOOK0_P0_B0_P0_B0_P0_DAC_CH2A_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for DAC channel 2A.

**Table 8-98 DAC_CH2A_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DAC_CH2A_DVOL[7:0] | R/W | 11001001b | Channel 2A digital volume control. 0d = Digital Volume is muted 1d = Digital Volume Control set to -100 dB 2d = Digital Volume Control set to -99.5 dB 3d to 200d = Digital Volume Control set to as per configuration 201d = Digital Volume Control set to 0 dB 202d = Digital Volume Control set to +0.5 dB 203d to 253d = Digital Volume Control set to as per configuration 254d = Digital Volume Control set to +26.5 dB 255d = Digital Volume Control set to +27 dB |


## 8.1.1.97 DAC_CH2A_CFG1 Register (Address = 0x6F) \[Reset = 0x80\]

DAC_CH2A_CFG1 is shown in [Table 8-99](#BOOK0_P0_B0_P0_B0_P0_DAC_CH2A_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 1 for DAC channel 2A.

**Table 8-99 DAC_CH2A_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DAC_CH2A_FGAIN[3:0] | R/W | 1000b | DAC channel 2A fine gain calibration. 0d = Fine gain is set to -0.8 dB 1d = Fine gain is set to -0.7 dB 2d = Fine gain is set to -0.6 dB 3d to 7d = Fine gain is set as per configuration 8d = Fine gain is set to 0 dB 9d = Fine gain is set to 0.1 dB 10d to 13d = Fine gain is set as per configuration 14d = Fine gain is set to 0.6 dB 15d = Fine gain is set to 0.7 dB |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.98 DAC_CH2B_CFG0 Register (Address = 0x70) \[Reset = 0xC9\]

DAC_CH2B_CFG0 is shown in [Table 8-100](#BOOK0_P0_B0_P0_B0_P0_DAC_CH2B_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 0 for DAC channel 2B.

**Table 8-100 DAC_CH2B_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DAC_CH2B_DVOL[7:0] | R/W | 11001001b | Channel 2B digital volume control. 0d = Digital Volume is muted 1d = Digital Volume Control set to -100 dB 2d = Digital Volume Control set to -99.5 dB 3d to 200d = Digital Volume Control set to as per configuration 201d = Digital Volume Control set to 0 dB 202d = Digital Volume Control set to +0.5 dB 203d to 253d = Digital Volume Control set to as per configuration 254d = Digital Volume Control set to +26.5 dB 255d = Digital Volume Control set to +27 dB |


## 8.1.1.99 DAC_CH2B_CFG1 Register (Address = 0x71) \[Reset = 0x80\]

DAC_CH2B_CFG1 is shown in [Table 8-101](#BOOK0_P0_B0_P0_B0_P0_DAC_CH2B_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is configuration register 1 for DAC channel 2B.

**Table 8-101 DAC_CH2B_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DAC_CH2B_FGAIN[3:0] | R/W | 1000b | DAC channel 2B fine gain calibration. 0d = Fine gain is set to -0.8 dB 1d = Fine gain is set to -0.7 dB 2d = Fine gain is set to -0.6 dB 3d to 7d = Fine gain is set as per configuration 8d = Fine gain is set to 0 dB 9d = Fine gain is set to 0.1 dB 10d to 13d = Fine gain is set as per configuration 14d = Fine gain is set to 0.6 dB 15d = Fine gain is set to 0.7 dB |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.1.100 DSP_CFG0 Register (Address = 0x72) \[Reset = 0x18\]

DSP_CFG0 is shown in [Table 8-102](#BOOK0_P0_B0_P0_B0_P0_DSP_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the digital signal processor (DSP) configuration register 0.

**Table 8-102 DSP_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | ADC_DSP_DECI_FILT[1:0] | R/W | 00b | ADC channel decimation filter response. 0d = Linear phase 1d = Low latency 2d = Ultra-low latency 3d = Reserved; Don't use |
| 5-4 | ADC_DSP_HPF_SEL[1:0] | R/W | 01b | ADC channel high-pass filter (HPF) selection. 0d = Programmable first-order IIR filter for a custom HPF with default coefficient values in P10_R120-127 and P11_R8-11 set as the all-pass filter 1d = HPF with a cutoff of 0.00002 x f<sub>S</sub> (1 Hz at f<sub>S</sub> = 48 kHz) is selected 2d = HPF with a cutoff of 0.00025 x f<sub>S</sub> (12 Hz at f<sub>S</sub> = 48 kHz) is selected 3d = HPF with a cutoff of 0.002 x f<sub>S</sub> (96 Hz at f<sub>S</sub> = 48 kHz) is selected |
| 3-2 | ADC_DSP_BQ_CFG[1:0] | R/W | 10b | Number of biquads per ADC channel configuration. 0d = No biquads per channel; biquads are all disabled 1d = 1 biquad per channel 2d = 2 biquads per channel 3d = 3 biquads per channel |
| 1 | ADC_DSP_DISABLE_SOFT_STEP | R/W | 0b | ADC Soft-stepping disable during DVOL change, mute, and unmute. 0d = Soft-stepping enabled 1d = Soft-stepping disabled |
| 0 | ADC_DSP_DVOL_GANG | R/W | 0b | DVOL control ganged across ADC channels. 0d = Each channel has its own DVOL CTRL settings as programmed in the ADC_CHx_DVOL bits 1d = All active channels must use the channel 1 DVOL setting (ADC_CH1_DVOL) irrespective of whether channel 1 is turned on or not |


## 8.1.1.101 DSP_CFG1 Register (Address = 0x73) \[Reset = 0x18\]

DSP_CFG1 is shown in [Table 8-103](#BOOK0_P0_B0_P0_B0_P0_DSP_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the digital signal processor (DSP) configuration register 0.

**Table 8-103 DSP_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | DAC_DSP_INTX_FILT[1:0] | R/W | 00b | DAC channel decimation filter response. 0d = Linear phase 1d = Low latency 2d = Ultra-low latency 3d = Reserved; Don't use |
| 5-4 | DAC_DSP_HPF_SEL[1:0] | R/W | 01b | DAC channel high-pass filter (HPF) selection. 0d = Programmable first-order IIR filter for a custom HPF with default coefficient values in P17_R120-127 and P18_R8-11 set as the all-pass filter 1d = HPF with a cutoff of 0.00002 x f<sub>S</sub> (1 Hz at f<sub>S</sub> = 48 kHz) is selected 2d = HPF with a cutoff of 0.00025 x f<sub>S</sub> (12 Hz at f<sub>S</sub> = 48 kHz) is selected 3d = HPF with a cutoff of 0.002 x f<sub>S</sub> (96 Hz at f<sub>S</sub> = 48 kHz) is selected |
| 3-2 | DAC_DSP_BQ_CFG[1:0] | R/W | 10b | Number of biquads per DAC channel configuration. 0d = No biquads per channel; biquads are all disabled 1d = 1 biquad per channel 2d = 2 biquads per channel 3d = 3 biquads per channel |
| 1 | DAC_DSP_DISABLE_SOFT_STEP | R/W | 0b | DAC Soft-stepping disable during DVOL change, mute, and unmute. 0d = Soft-stepping enabled 1d = Soft-stepping disabled |
| 0 | DAC_DSP_DVOL_GANG | R/W | 0b | DVOL control ganged across DAC channels. 0d = Each DAC channel has its own DVOL CTRL settings as programmed in the DAC_CHx_DVOL bits 1d = All active channels must use the channel 1 DVOL setting (DAC_CH1_DVOL) irrespective of whether channel 1 is turned on or not |


## 8.1.1.102 CH_EN Register (Address = 0x76) \[Reset = 0xCC\]

CH_EN is shown in [Table 8-104](#BOOK0_P0_B0_P0_B0_P0_CH_EN_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the channel enable configuration register.

**Table 8-104 CH_EN Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | IN_CH1_EN | R/W | 1b | Input channel 1 enable setting. 0d = Input channel 1 is disabled 1d = Input channel 1 is enabled |
| 6 | IN_CH2_EN | R/W | 1b | Input channel 2 enable setting. 0d = Input channel 2 is disabled 1d = Input channel 2 is enabled |
| 5 | IN_CH3_EN | R/W | 0b | Input channel 3 enable setting. 0d = Input channel 3 is disabled 1d = Input channel 3 is enabled |
| 4 | IN_CH4_EN | R/W | 0b | Input channel 4 enable setting. 0d = Input channel 4 is disabled 1d = Input channel 4 is enabled |
| 3 | OUT_CH1_EN | R/W | 1b | Output channel 1 enable setting. 0d = Output channel 1 is disabled 1d = Output channel 1 is enabled |
| 2 | OUT_CH2_EN | R/W | 1b | Output channel 2 enable setting. 0d = Output channel 2 is disabled 1d = Output channel 2 is enabled |
| 1 | OUT_CH3_EN | R/W | 0b | Output channel 3 enable setting. 0d = Output channel 3 is disabled 1d = Output channel 3 is enabled |
| 0 | OUT_CH4_EN | R/W | 0b | Output channel 4 enable setting. 0d = Output channel 4 is disabled 1d = Output channel 4 is enabled |


## 8.1.1.103 DYN_PUPD_CFG Register (Address = 0x77) \[Reset = 0x00\]

DYN_PUPD_CFG is shown in [Table 8-105](#BOOK0_P0_B0_P0_B0_P0_DYN_PUPD_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the power-up configuration register.

**Table 8-105 DYN_PUPD_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | ADC_DYN_PUPD_EN | R/W | 0b | Dynamic channel power-up, power-down enable for record path. 0d = Channel power-up, power-down is not supported if any channel recording is on 1d = Channel can be powered up or down individually, even if channel recording is on |
| 6 | ADC_DYN_MAXCH_SEL | R/W | 0b | Dynamic mode maximum channel select configuration for record path. 0d = Channel 1 and channel 2 are used with dynamic channel power-up, power-down feature enabled 1d = Channel 1 to channel 4 are used with dynamic channel power-up, power-down feature enabled |
| 5 | DAC_DYN_PUPD_EN | R/W | 0b | Dynamic channel power-up, power-down enable for playback path. 0d = Channel power-up, power-down is not supported if any channel playback is on 1d = Channel can be powered up or down individually, even if channel playback is on |
| 4 | DAC_DYN_MAXCH_SEL | R/W | 0b | Dynamic mode maximum channel select configuration for playback path. 0d = Channel 1 and channel 2 are used with dynamic channel power-up, power-down feature enabled 1d = Channel 1 to channel 4 are used with dynamic channel power-up, power-down feature enabled |
| 3 | DYN_PUPD_ADC_PDM_DIFF_CLK | R/W | 0b | Dynamic power-up power-down with different adc mod clock and pdm clock configuration. 0d = Same ADC MOD CLK and PDM CLK in dynamic pupd 1d = Different ADC MOD CLK and PDM CLK in dynamic pupd |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | ADC_CH_SWAP | R/W | 0b | ADC channel swap enable configuration. 1d = No swap 1d = ADC channel 1 and 2 are swapped |
| 0 | DAC_CH_SWAP | R/W | 0b | DAC channel swap enable configuration. 1d = No swap 1d = DAC channel 1 and 2 are swapped |


## 8.1.1.104 PWR_CFG Register (Address = 0x78) \[Reset = 0x00\]

PWR_CFG is shown in [Table 8-106](#BOOK0_P0_B0_P0_B0_P0_PWR_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the power-up configuration register.

**Table 8-106 PWR_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | ADC_PDZ | R/W | 0b | Power control for ADC and PDM channels. 0d = Power down all ADC and PDM channels 1d = Power up all enabled ADC and PDM channels |
| 6 | DAC_PDZ | R/W | 0b | Power control for DAC channels. 0d = Power down all DAC channels 1d = Power up all enabled DAC channels |
| 5 | MICBIAS_PDZ | R/W | 0b | Power control for MICBIAS. 0d = Power down MICBIAS 1d = Power up MICBIAS |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | UAD_EN | R/W | 0b | Enable ultrasound activity detection (UAD) algorithm. 0d = UAD is disabled 1d = UAD is enabled |
| 2 | VAD_EN | R/W | 0b | Enable voice activity detection (VAD) algorithm. 0d = VAD is disabled 1d = VAD is enabled |
| 1 | UAG_EN | R/W | 0b | Enable ultrasound activity detection (UAG) algorithm. 0d = UAG is disabled 1d = UAG is enabled |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.1.105 DEV_STS0 Register (Address = 0x79) \[Reset = 0x00\]

DEV_STS0 is shown in [Table 8-107](#BOOK0_P0_B0_P0_B0_P0_DEV_STS0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the device status value register 0.

**Table 8-107 DEV_STS0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | IN_CH1_STATUS | R | 0b | ADC or PDM channel 1 power status. 0d = ADC or PDM channel is powered down 1d = ADC or PDM channel is powered up |
| 6 | IN_CH2_STATUS | R | 0b | ADC or PDM channel 2 power status. 0d = ADC or PDM channel is powered down 1d = ADC or PDM channel is powered up |
| 5 | IN_CH3_STATUS | R | 0b | ADC or PDM channel 1 power status. 0d = ADC or PDM channel is powered down 1d = ADC or PDM channel is powered up |
| 4 | IN_CH4_STATUS | R | 0b | ADC or PDM channel 2 power status. 0d = ADC or PDM channel is powered down 1d = ADC or PDM channel is powered up |
| 3 | OUT_CH1_STATUS | R | 0b | DAC channel 1 power status. 0d = DAC channel is powered down 1d = DAC channel is powered up |
| 2 | OUT_CH2_STATUS | R | 0b | DAC channel 2 power status. 0d = DAC channel is powered down 1d = DAC channel is powered up |
| 1 | OUT_CH3_STATUS | R | 0b | DAC channel 3 power status. 0d = DAC channel is powered down 1d = DAC channel is powered up |
| 0 | OUT_CH4_STATUS | R | 0b | DAC channel 4 power status. 0d = DAC channel is powered down 1d = DAC channel is powered up |


## 8.1.1.106 DEV_STS1 Register (Address = 0x7A) \[Reset = 0x80\]

DEV_STS1 is shown in [Table 8-108](#BOOK0_P0_B0_P0_B0_P0_DEV_STS1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register is the device status value register 1.

**Table 8-108 DEV_STS1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-5 | MODE_STS[2:0] | R | 100b | Device mode status. 0-3d = Reserved 4d = Device is in sleep mode or software shutdown mode 5d = Reserved 6d = Device is in active mode with all record and playback channels turned off 7d = Device is in active mode with at least one record or playback channel turned on |
| 4 | PLL_STS | R | 0b | PLL status. 0d = PLL is not enabled 1d = PLL is enabled |
| 3 | MICBIAS_STS | R | 0b | MICBIAS status. 0d = MICBIAS is disabled 1d = MICBIAS is enabled |
| 2 | BOOST_STS | R | 0b | Boost status. 0d = Boost is disabled 1d = Boost is enabled |
| 1 | CHx_PD_FLT_STS | R | 0b | Status for PD on INxx Analog inputs faults 0d = No ADC Channel is Powered Down due to fault/s on Analog inputs INxx 1d = Some ADC Channel is Powered Down due to fault/s on Analog inputs INxx |
| 0 | ALL_CHx_PD_FLT_STS | R | 0b | Status for PD on Micbias faults 0d = No ADC Channel is Powered Down due to fault/s related to Micbias 1d = All ADC Channels are Powered Down due to fault/s related to Micbias |


## 8.1.1.107 I2C_CKSUM Register (Address = 0x7E) \[Reset = 0x00\]

I2C_CKSUM is shown in [Table 8-109](#BOOK0_P0_B0_P0_B0_P0_I2C_CKSUM_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_P0_B0_P0_TABLE_1_TABLE).

This register returns the I<sup>2</sup>C transactions checksum value.

**Table 8-109 I2C_CKSUM Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | I2C_CKSUM[7:0] | R/W | 00000000b | These bits return the I<sup>2</sup>C transactions checksum value. Writing to this register resets the checksum to the written value. This register is updated on writes to other registers on all pages. |


### 8.1.2  B0_P1 Registers

[Table 8-110](#B0_P1_B0_P1_TABLE_1_TABLE) lists the memory-mapped registers for the B0_P1 registers. All register offset addresses not listed in [Table 8-110](#B0_P1_B0_P1_TABLE_1_TABLE) should be considered as reserved locations and the register contents should not be modified.

**Table 8-110 B0_P1 Registers**


| Address | Acronym | Register Name | Reset Value | Section |
| --- | --- | --- | --- | --- |
| 0x0 | PAGE_CFG | Device page register | 0x00 | Section 8.1.2.1 |
| 0x3 | DSP_CFG0 | DSP configuration register 0 | 0x00 | Section 8.1.2.2 |
| 0xD | CLK_CFG0 | Clock configuration register 0 | 0x00 | Section 8.1.2.3 |
| 0xE | CHANNEL_CFG1 | ADC channel configuration register | 0x00 | Section 8.1.2.4 |
| 0xF | CHANNEL_CFG2 | DAC channel configuration register | 0x00 | Section 8.1.2.5 |
| 0x17 | SRC_CFG0 | SRC configuration register 1 | 0x00 | Section 8.1.2.6 |
| 0x18 | SRC_CFG1 | SRC configuration register 2 | 0x00 | Section 8.1.2.7 |
| 0x19 | JACK_DET_CFG0 | Jack Detection configuration register 0 | 0x00 | Section 8.1.2.8 |
| 0x1A | JACK_DET_CFG1 | Jack Detection configuration register 1 | 0x00 | Section 8.1.2.9 |
| 0x1B | JACK_DET_CFG2 | Jack Detection configuration register 2 | 0x00 | Section 8.1.2.10 |
| 0x1C | JACK_DET_CFG3 | Jack Detection configuration register 3 | 0x00 | Section 8.1.2.11 |
| 0x1E | LPAD_CFG1 | Low power activity detection configuration register | 0x20 | Section 8.1.2.12 |
| 0x1F | LPSG_CFG1 | Low power signal generation configuration register 1 | 0x80 | Section 8.1.2.13 |
| 0x20 | LPAD_LPSG_CFG1 | Low power activity detection and Low power signal generation common configuration register 1 | 0x00 | Section 8.1.2.14 |
| 0x23 | LIMITER_CFG | Limiter configuration register | 0x00 | Section 8.1.2.15 |
| 0x24 | AGC_DRC_CFG | AGC and DRC configuration register | 0x00 | Section 8.1.2.16 |
| 0x2B | PLIM_CFG0 | PLIM configuration register 0 | 0x00 | Section 8.1.2.17 |
| 0x2C | MIXER_CFG0 | MIXER configuration register 0 | 0x00 | Section 8.1.2.18 |
| 0x2D | MISC_CFG0 | Miscellaneous configuration register 0 | 0x00 | Section 8.1.2.19 |
| 0x2E | BRWNOUT | Brownout configuration register | 0xBF | Section 8.1.2.20 |
| 0x2F | INT_MASK0 | Interrupt mask register 0 | 0xFF | Section 8.1.2.21 |
| 0x32 | INT_MASK4 | Interrupt mask register 4 | 0x00 | Section 8.1.2.22 |
| 0x33 | INT_MASK5 | Interrupt mask register 5 | 0x30 | Section 8.1.2.23 |
| 0x34 | INT_LTCH0 | Latched interrupt readback register 0 | 0x00 | Section 8.1.2.24 |
| 0x38 | OUT_CH1_LTCH | Channel 1 output DC faults diagnostics latched status register | 0x00 | Section 8.1.2.25 |
| 0x39 | OUT_CH2_LTCH | Channel 2 output DC faults diagnostics latched status register | 0x00 | Section 8.1.2.26 |
| 0x3A | INT_LTCH1 | Latched interrupt readback register 1 | 0x00 | Section 8.1.2.27 |
| 0x3B | INT_LTCH2 | Latched interrupt readback register 2 | 0x00 | Section 8.1.2.28 |
| 0x3C | INT_LIVE0 | Live Interrupt readback register 0 | 0x00 | Section 8.1.2.29 |
| 0x40 | OUT_CH1_LIVE | Channel 1 output DC faults diagnostics live status register | 0x00 | Section 8.1.2.30 |
| 0x41 | OUT_CH2_LIVE | Channel 2 output DC faults diagnostics live status register | 0x00 | Section 8.1.2.31 |
| 0x42 | INT_LIVE1 | Live interrupt readback register 1 | 0x00 | Section 8.1.2.32 |
| 0x43 | INT_LIVE2 | Live interrupt readback register 2 | 0x00 | Section 8.1.2.33 |
| 0x4E | DIAG_CFG8 | Input diagnostics configuration register 8 | 0xBA | Section 8.1.2.34 |
| 0x4F | DIAG_CFG9 | Input diagnostics configuration register 9 | 0x4B | Section 8.1.2.35 |
| 0x53 | DIAG_CFG13 | Input diagnostics configuration register 13 | 0x00 | Section 8.1.2.36 |
| 0x54 | DIAG_CFG14 | Input diagnostics configuration register 14 | 0x48 | Section 8.1.2.37 |
| 0x55 | DIAGDATA_CFG | Input diagnostics data configuration register | 0x00 | Section 8.1.2.38 |
| 0x58 | DIAG_MON_MSB_MBIAS | Diagnostics SAR MICBIAS monitor data MSB byte | 0x00 | Section 8.1.2.39 |
| 0x59 | DIAG_MON_LSB_MBIAS | Diagnostics SAR MICBIAS monitor data LSB nibble | 0x01 | Section 8.1.2.40 |
| 0x62 | DIAG_MON_MSB_OUT1P | Diagnostics SAR OUT1P monitor data MSB byte | 0x00 | Section 8.1.2.41 |
| 0x63 | DIAG_MON_LSB_OUT1P | Diagnostics SAR OUT1P monitor data LSB nibble | 0x06 | Section 8.1.2.42 |
| 0x64 | DIAG_MON_MSB_OUT1M | Diagnostics SAR OUT1M monitor data MSB byte | 0x00 | Section 8.1.2.43 |
| 0x65 | DIAG_MON_LSB_OUT1M | Diagnostics SAR OUT1M monitor data LSB nibble | 0x07 | Section 8.1.2.44 |
| 0x66 | DIAG_MON_MSB_OUT2P | Diagnostics SAR OUT2P monitor data MSB byte | 0x00 | Section 8.1.2.45 |
| 0x67 | DIAG_MON_LSB_OUT2P | Diagnostics SAR OUT2P monitor data LSB nibble | 0x08 | Section 8.1.2.46 |
| 0x68 | DIAG_MON_MSB_OUT2M | Diagnostics SAR OUT2M monitor data MSB byte | 0x00 | Section 8.1.2.47 |
| 0x69 | DIAG_MON_LSB_OUT2M | Diagnostics SAR OUT2M monitor data LSB nibble | 0x09 | Section 8.1.2.48 |
| 0x6A | DIAG_MON_MSB_TEMP | Diagnostics SAR Temperature monitor data MSB byte | 0x00 | Section 8.1.2.49 |
| 0x6B | DIAG_MON_LSB_TEMP | Diagnostics SAR Temperature monitor data LSB nibble | 0x0A | Section 8.1.2.50 |
| 0x6C | DIAG_MON_MSB_MBIAS_LOAD | Diagnostics SAR MICBIAS LOAD Current monitor data MSB byte | 0x00 | Section 8.1.2.51 |
| 0x6D | DIAG_MON_LSB_MBIAS_LOAD | Diagnostics SAR MICBIAS LOAD Current monitor data LSB nibble | 0x0B | Section 8.1.2.52 |
| 0x6E | DIAG_MON_MSB_AVDD | Diagnostics SAR AVDD monitor data MSB byte | 0x00 | Section 8.1.2.53 |
| 0x6F | DIAG_MON_LSB_AVDD | Diagnostics SAR AVDD monitor data LSB nibble | 0x0C | Section 8.1.2.54 |
| 0x70 | DIAG_MON_MSB_GPA | Diagnostics SAR GPA monitor data MSB byte | 0x00 | Section 8.1.2.55 |
| 0x71 | DIAG_MON_LSB_GPA | Diagnostics SAR GPA monitor data LSB nibble register | 0x0D | Section 8.1.2.56 |


## 8.1.2.1 PAGE_CFG Register (Address = 0x0) \[Reset = 0x00\]

PAGE_CFG is shown in [Table 8-111](#B0_P1_B0_P1_B0_P1_PAGE_CFG_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

The device memory map is divided into pages. This register sets the page.

**Table 8-111 PAGE_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | PAGE[7:0] | R/W | 00000000b | These bits set the device page. 0d = Page 0 1d = Page 1 2d to 254d = Page 2 to page 254 respectively 255d = Page 255 |


## 8.1.2.2 DSP_CFG0 Register (Address = 0x3) \[Reset = 0x00\]

DSP_CFG0 is shown in [Table 8-112](#B0_P1_B0_P1_B0_P1_DSP_CFG0_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the configuration register for on-the-fly filter updates.

**Table 8-112 DSP_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | EN_BQ_OTF_CHG | R/W | 0b | Enable run-time changes to Biquad settings. 0d = Disable on the fly biquad changes 1d = Enable on the fly biquad changes |


## 8.1.2.3 CLK_CFG0 Register (Address = 0xD) \[Reset = 0x00\]

CLK_CFG0 is shown in [Table 8-113](#B0_P1_B0_P1_B0_P1_CLK_CFG0_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the Clock configuration register 0.

**Table 8-113 CLK_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | CNT_TGT_CFG_OVR_PASI | R/W | 0b | ASI controller target Config Override Register 0d = controller-target Config as per PASI_CNT_CFG bit. 1d = Override the standard behavior of the PASI_CNT_CFG. In this case the clock auto detect feature is not available. PASI_CNT_CFG = 0 : BCLK is input but FSYNC is output. PASI_CNT_CFG = 1 : BCLK is output but FSYNC in input. |
| 6 | CNT_TGT_CFG_OVR_SASI | R/W | 0b | ASI controller target Config Override Register 0d = controller-target Config as per SASI_CNT_CFG bit. 1d = Override the standard behavior of the SASI_CNT_CFG. In this case the clock auto detect feature is not available. SASI_CNT_CFG = 0 : BCLK is input but FSYNC is output. SASI_CNT_CFG = 1 : BCLK is output but FSYNC in input. |
| 5-3 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 2 | PASI_USE_INT_FSYNC | R/W | 0b | For Primary use internal FSYNC in controller mode configuration. 0d = Use external FSYNC 1d = Use internal FSYNC |
| 1 | SASI_USE_INT_FSYNC | R/W | 0b | For Secondary use internal FSYNC in controller mode configuration. 0d = Use external FSYNC 1d = Use internal FSYNC |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.4 CHANNEL_CFG1 Register (Address = 0xE) \[Reset = 0x00\]

CHANNEL_CFG1 is shown in [Table 8-114](#B0_P1_B0_P1_B0_P1_CHANNEL_CFG1_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the ADC channel dynamic power-on or off configuration register.

**Table 8-114 CHANNEL_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | FORCE_DYN_MODE_CUST_MAX_CH | R/W | 0b | ADC Force dynamic mode custom max channel 0d = In Dynamic, Max channel is based on ADC_DYN_MAXCH_SEL 1d = In Dynamic mode, max channel is custom as DYN_MODE_CUST_MAX_CH |
| 6-3 | DYN_MODE_CUST_MAX_CH[3:0] | R/W | 0000b | ADC Dynamic mode custom max channel configuration [3]->CH4_EN [2]->CH3_EN [1]->CH2_EN [0]->CH1_EN |
| 2-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.2.5 CHANNEL_CFG2 Register (Address = 0xF) \[Reset = 0x00\]

CHANNEL_CFG2 is shown in [Table 8-115](#B0_P1_B0_P1_B0_P1_CHANNEL_CFG2_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the DAC channel dynamic power-on or off configuration register.

**Table 8-115 CHANNEL_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | DAC_FORCE_DYN_MODE_CUST_MAX_CH | R/W | 0b | DAC Force dynamic mode custom max channel 0d = In Dynamic, Max channel is based on DAC_DYN_MAXCH_SEL 1d = In Dynamic mode, max channel is custom as per DAC_DYN_MODE_CUST_MAX_CH |
| 6-3 | DAC_DYN_MODE_CUST_MAX_CH[3:0] | R/W | 0000b | DAC Dynamic mode custom max channel configuration ([3]->CH4_EN, [2]->CH3_EN, [1]->CH2_EN, [0]->CH1_EN) [3]->CH4_EN [2]->CH3_EN [1]->CH2_EN [0]->CH1_EN |
| 2-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.2.6 SRC_CFG0 Register (Address = 0x17) \[Reset = 0x00\]

SRC_CFG0 is shown in [Table 8-116](#B0_P1_B0_P1_B0_P1_SRC_CFG0_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is configuration register 1 for SRC.

**Table 8-116 SRC_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | SRC_EN | R/W | 0b | SRC enable config 0b = SRC disable 1b = SRC enable |
| 6 | DIS_AUTO_SRC_DET | R/W | 0b | SRC auto detect config 0b = SRC auto detect enabled 1b = SRC auto detect disabled |
| 5-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.2.7 SRC_CFG1 Register (Address = 0x18) \[Reset = 0x00\]

SRC_CFG1 is shown in [Table 8-117](#B0_P1_B0_P1_B0_P1_SRC_CFG1_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is configuration register 2 for SRC.

**Table 8-117 SRC_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | MAIN_FS_CUSTOM_CFG | R/W | 0b | Main Fs custom config 0b = Main Fs is auto inferred 1b = Main Fs need to be selected from MAIN_FS_SELECT_CFG |
| 6 | MAIN_FS_SELECT_CFG | R/W | 0b | Main Fs select config 0b = PASI Fs shall be used as Main Fs 1b = SASI Fs shall be used as Main Fs |
| 5-3 | MAIN_AUX_RATIO_M_CUSTOM_CFG[2:0] | R/W | 000b | Main and Aux Fs Ratio m:n config 0d = m is auto inferred 1d = 1 2d = 2 3d = 3 4d = 4 5d = Reserved 6d = 6 7d = Reserved |
| 2-0 | MAIN_AUX_RATIO_N_CUSTOM_CFG[2:0] | R/W | 000b | Main and Aux Fs Ratio m:n config 0d = n is auto inferred 1d = 1 2d = 2 3d = 3 4d = 4 5d = Reserved 6d = 6 7d = Reserved |


## 8.1.2.8 JACK_DET_CFG0 Register (Address = 0x19) \[Reset = 0x00\]

JACK_DET_CFG0 is shown in [Table 8-118](#B0_P1_B0_P1_B0_P1_JACK_DET_CFG0_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the Jack Detection configuration register 0.

**Table 8-118 JACK_DET_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | JACK_DET_MONITOR_FREQ[1:0] | R/W | 00b | Headset Detection Pulse Frequency 0d = 0.5 Hz 1d = 1 Hz 2d = 7.5 Hz 3d = 15 Hz |
| 5 | JACK_DET_PULSE_WIDTH | R/W | 0b | Detector Pulse High Width 0d = 4ms (MICBIAS PIN Cap = 1 uF) 1d = 32ms (MICBIAS PIN Cap = 10 uF) |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2-1 | HPDET_CLOCK_SEL[1:0] | R/W | 00b | Headphone Detection Clock Time period Select 0d = 1ms 1d = 2ms 2d = 4ms 3d = Reserved |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.9 JACK_DET_CFG1 Register (Address = 0x1A) \[Reset = 0x00\]

JACK_DET_CFG1 is shown in [Table 8-119](#B0_P1_B0_P1_B0_P1_JACK_DET_CFG1_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the Jack Detection configuration register 1.

**Table 8-119 JACK_DET_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6 | JACK_DET_COMP_CTRL2 | R/W | 0b | Hook Press Threshold Control in Fixed External Resistance case, controls the choice of Lowest Microphone impedance to be supported or Highest Hook button Impedance to be supported 0d = Minimum Microphone resistance supported, R_Mic = 800 Ωs and Max Hook button impedance supported, R_Hook = 320 Ωs for AC coupled Headphones R26<3> = 0 (else, when R26<3> = 1, R_hook = 150 Ωs) 1d = Max Hook button impedance supported, R_hook = 680 Ωs and Minimum Microphone resistance supported, R_Mic = 1350 Ωs for AC coupled Headphones R26<3> = 0 (else, when R26<3> = 1, R_Mic = 1750 Ωs) |
| 5-4 | JACK_DET_COMP_CTRL3[1:0] | R/W | 00b | Hook Pressed Jack Insertion support, valid only for External Resistor Type P0_R25_D4 = 0 else Don't care. 0d = supports minimum Hook button impedance of 150 Ωs for Hook Pressed Jack Insertion detection 1d = supports minimum Hook button impedance of 100 Ωs for Hook Pressed Jack Insertion detection 2d = supports minimum Hook button impedance of 50 Ωs for Hook Pressed Jack Insertion detection 3d = Reserved |
| 3 | HPDET_COUPLING | R/W | 0b | Headphone detect coupling 0d = AC coupled 1d = DC coupled |
| 2 | HPDET_USE_2x_CURR | R/W | 0b | Headset detect current sel config 0d = 2x current for headphone detection disabled 1d = 2x current for headphone detection enabled |
| 1 | JACK_DET_EN | R/W | 0b | Headset Detection Enable 0d = Headset Detection Disabled 1d = Headset Detection Enabled |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.10 JACK_DET_CFG2 Register (Address = 0x1B) \[Reset = 0x00\]

JACK_DET_CFG2 is shown in [Table 8-120](#B0_P1_B0_P1_B0_P1_JACK_DET_CFG2_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the Jack Detection configuration register 2.

**Table 8-120 JACK_DET_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6 | HPDET_DEB | R/W | 0b | Headphone Detection Debounce Programmability 0d = No Debounce 1d = Debounce of 3 detections |
| 5-3 | JACK_DET_DEB_INSERT[2:0] | R/W | 000b | Headset Insert Detection Debounce Programmability 0d = Debounce Time = 16ms 1d = Debounce Time = 32ms 2d = Debounce Time = 64ms 3d = Debounce Time = 128ms 4d = Debounce Time = 256ms 5d = Debounce Time = 512ms 6d = Reserved 7d = No Debounce |
| 2 | JACK_DET_DEB_REMOVAL | R/W | 0b | Headset Removal Detection Debounce Programmability 0d = Debounce of 5 detections 1d = Debounce of 3 detections |
| 1-0 | JACK_DET_DEB_HOOK_PRESS[1:0] | R/W | 00b | Hook Press Debounce config 0d = No Debounce 1d = No Debounce 2d = Debounce of 2 detections 3d = Debounce of 3 detections |


## 8.1.2.11 JACK_DET_CFG3 Register (Address = 0x1C) \[Reset = 0x00\]

JACK_DET_CFG3 is shown in [Table 8-121](#B0_P1_B0_P1_B0_P1_JACK_DET_CFG3_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the Jack Detection configuration register 3.

**Table 8-121 JACK_DET_CFG3 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | JACK_TYPE_FLAG[1:0] | R | 00b | Headset Jack type flag 0d = Jack is not inserted 1d = Jack is inserted without Microphone 2d = Reserved. Do not use 3d = Jack is inserted with Microphone |
| 5-4 | HEADSET_TYPE_DET[1:0] | R | 00b | Headset type 0d = Headset is not inserted 1d = Jack is inserted with mono-HS (RIGHT) 2d = Jack is inserted with mono-HS (LEFT) 3d = Jack is inserted with stereo-HS |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.2.12 LPAD_CFG1 Register (Address = 0x1E) \[Reset = 0x20\]

LPAD_CFG1 is shown in [Table 8-122](#B0_P1_B0_P1_B0_P1_LPAD_CFG1_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the voice activity detection or ultrasonic activity detection configuration register 1.

**Table 8-122 LPAD_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | LPAD_MODE[1:0] | R/W | 00b | Auto ADC power up / power down configuration selection. 0d = User initiated ADC power-up and ADC power-down 1d = VAD/UAD interrupt based ADC power up and ADC power down 2d = VAD/UAD interrupt based ADC power up but user initiated ADC power down 3d = Reserved |
| 5-4 | LPAD_CH_SEL[1:0] | R/W | 10b | VAD channel select. 0d = Channel 1 is monitored for VAD/UAD activity 1d = Channel 2 is monitored for VAD/UAD activity 2d = Channel 3 is monitored for VAD/UAD activity 3d = Channel 4 is monitored for VAD/UAD activity |
| 3 | LPAD_SDOUT_INT_CFG | R/W | 0b | SDOUT interrupt configuration. 0d = SDOUT pin is not enabled for interrupt function 1d = SDOUT pin is enabled to support interrupt output when channel data in not being recorded |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | LPAD_PD_DET_EN | R/W | 0b | Enable ASI output data during VAD/UAD activity. 0d = VAD/UAD processing is not enabled during ADC recording 1d = VAD/UAD processing is enabled during ADC recording and VAD interrupts are generated as configured |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.13 LPSG_CFG1 Register (Address = 0x1F) \[Reset = 0x80\]

LPSG_CFG1 is shown in [Table 8-123](#B0_P1_B0_P1_B0_P1_LPSG_CFG1_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is configuration register 1 for Ultrasonic signal generation.

**Table 8-123 LPSG_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | LPSG_CH_SEL[1:0] | R/W | 10b | LPSG channel select.- UAG 0d = UAG activity is generated on channel 1 1d = UAG activity is generated on channel 2 2d = UAG activity is generated on channel 3 3d = UAG activity is generated on channel 4 |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.2.14 LPAD_LPSG_CFG1 Register (Address = 0x20) \[Reset = 0x00\]

LPAD_LPSG_CFG1 is shown in [Table 8-124](#B0_P1_B0_P1_B0_P1_LPAD_LPSG_CFG1_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is configuration register 1 for VAD/UAD/UAG.

**Table 8-124 LPAD_LPSG_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | LPAD_LPSG_CLK_CFG[1:0] | R/W | 00b | Clock select for VAD/UAD/UAG 0d = VAD/UAD/UAG processing using internal oscillator clock 1d = VAD/UAD/UAG processing using external clock on BCLK input 2d = VAD/UAD/UAG processing using external clock on CCLK input 3d = Custom clock configuration based on CNT_CFG, CLK_SRC and CLKGEN_CFG registers in page 0 |
| 5-4 | LPAD_LPSG_EXT_CLK_CFG[1:0] | R/W | 00b | Clock configuration using external clock for VAD/UAD/UAG 0d = External clock is 24.576 MHz 1d = Reserved 2d = External clock is 12.288 MHz 3d = External clock is 18.432 MHz |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | LPAD_PH1_EN | R/W | 0b | Enable LPAD Phase 1 detection through Jack Detection comparator. 0d = LPAD phase 1 disabled 1d = LPAD phase 1 enabled |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.2.15 LIMITER_CFG Register (Address = 0x23) \[Reset = 0x00\]

LIMITER_CFG is shown in [Table 8-125](#B0_P1_B0_P1_B0_P1_LIMITER_CFG_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is configuration register for Limiter.

**Table 8-125 LIMITER_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | LIMITER_INP_SEL[1:0] | R/W | 00b | Limiter input select config 0d = max(dacin_ch0, dacin_ch1) 1d = dacin_ch1 2d = dacin_ch0 3d = avg(dacin_ch0, dacin_ch1) |
| 5-4 | LIMITER_OUT_SEL[1:0] | R/W | 00b | Limiter output select config 0d = applied on both 1d = dacin_ch1 2d = dacin_ch0 3d = applied none |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.2.16 AGC_DRC_CFG Register (Address = 0x24) \[Reset = 0x00\]

AGC_DRC_CFG is shown in [Table 8-126](#B0_P1_B0_P1_B0_P1_AGC_DRC_CFG_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is configuration register for AGC and DRC.

**Table 8-126 AGC_DRC_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | AGC_CH1_EN | R/W | 0b | AGC Channel 1 enable config 0d = disable 1d = enable |
| 6 | AGC_CH2_EN | R/W | 0b | AGC Channel 2 enable config 0d = disable 1d = enable |
| 5 | AGC_CH3_EN | R/W | 0b | AGC Channel 3 enable config 0d = disable 1d = enable |
| 4 | AGC_CH4_EN | R/W | 0b | AGC Channel 4 enable config 0d = disable 1d = enable |
| 3 | DRC_CH1_EN | R/W | 0b | DRC Channel 1 enable config 0d = disable 1d = enable |
| 2 | DRC_CH2_EN | R/W | 0b | DRC Channel 2 enable config 0d = disable 1d = enable |
| 1 | DRC_CH3_EN | R/W | 0b | DRC Channel 3 enable config 0d = disable 1d = enable |
| 0 | DRC_CH4_EN | R/W | 0b | DRC Channel 4 enable config 0d = disable 1d = enable |


## 8.1.2.17 PLIM_CFG0 Register (Address = 0x2B) \[Reset = 0x00\]

PLIM_CFG0 is shown in [Table 8-127](#B0_P1_B0_P1_B0_P1_PLIM_CFG0_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is configuration register 0 for PLIM.

**Table 8-127 PLIM_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | EN_PLIM | R/W | 0b | Enable PLIM 0d = Disable 1d = Enable |
| 6-4 | PLIM_ATTN_VAL[2:0] | R/W | 000b | PLIM attenuation factor 0d = 0dB 1d = -6dB 2d = -12dB 3d = -18dB 4d = -24dB 5d = -30dB 6d = -36dB 7d = -42dB |
| 3 | PLIM_BY_SAR_GPA | R/W | 0b | PLIM attenuation value source 0d = Plimit attenuation based on GPIO and reg_plimi_attn_val 1d = Plimit attenuation based on GPA Analog voltage. LUT will map SAR ADC data to Attenuation factor |
| 2 | PLIM_RECOVERY | R/W | 0b | PLIM attenuation recovery 0d = Plimit func doesn't recover. It stays at same attenuation level or can apply more attenuation if required 1d = Plimit func recovers (reduces the attenuation) if "gpio_val=0" or "sar_adc_gpa" data suggest that Battery Voltage has recovered then we can reduce the attenuation being applied |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.2.18 MIXER_CFG0 Register (Address = 0x2C) \[Reset = 0x00\]

MIXER_CFG0 is shown in [Table 8-128](#B0_P1_B0_P1_B0_P1_MIXER_CFG0_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the MIXER configuration register 0.

**Table 8-128 MIXER_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | EN_DAC_ASI_MIXER | R/W | 0b | Enable DAC ASI Mixer 0b = Disabled 1b = Enabled |
| 6 | EN_SIDE_CHAIN_MIXER | R/W | 0b | Enable Side Chain Mixer 0b = Disabled 1b = Enabled |
| 5 | EN_ADC_CHANNEL_MIXER | R/W | 0b | Enable ADC Channel Mixer 0b = Disabled 1b = Enabled |
| 4 | EN_LOOPBACK_MIXER | R/W | 0b | Enable Loopback Mixer 0b = Disabled 1b = Enabled |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.2.19 MISC_CFG0 Register (Address = 0x2D) \[Reset = 0x00\]

MISC_CFG0 is shown in [Table 8-129](#B0_P1_B0_P1_B0_P1_MISC_CFG0_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the miscellaneous configuration register 0.

**Table 8-129 MISC_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | EN_DISTORTION | R/W | 0b | Distortion Limiter enable config 0b = Distortion Limiter disable 1b = Distortion Limiter enable |
| 6 | EN_BOP | R/W | 0b | BOP enable config 0b = BOP disable 1b = BOP enable |
| 5 | EN_THERMAL_FOLDBACK | R/W | 0b | Thermal Foldback enable config 0b = Thermal Foldback disable 1b = Thermal Foldback enable |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | DAC_SIGNAL_GENERATOR_1_ENABLE | R/W | 0b | DAC signal generator 1 enable config 0b = Signal generator disabled 1b = Signal generator enabled |
| 2 | DAC_SIGNAL_GENERATOR_2_ENABLE | R/W | 0b | DAC signal generator 2 enable config 0b = Signal generator disabled 1b = Signal generator enabled |
| 1 | DSP_AVDD_SEL | R/W | 0b | SAR data source select for DSP Limiter, BOP, DRC 0b = Reserved 1b = SAR AVDD data to DSP |
| 0 | BRWNOUT_EN | R/W | 0b | Brownout enable config 0b = Brownout disable 1b = Brownout enable |


## 8.1.2.20 BRWNOUT Register (Address = 0x2E) \[Reset = 0xBF\]

BRWNOUT is shown in [Table 8-130](#B0_P1_B0_P1_B0_P1_BRWNOUT_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the brownout configuration register.

**Table 8-130 BRWNOUT Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | BRWNOUT_THRS[7:0] | R/W | 10111111b | Threshold for brownout shutdown Default = 7.8V ((IF P1_R45_D1->DSP_AVDD_SEL=1) = 2.7V) Nd = ((0.9´(N*16)/4095)-0´211764)x17) (V) ((IF P1_R45_D1->DSP_AVDD_SEL=1) = ((0.9´(N*16)/4095)-0´225)x6 (V)) |


## 8.1.2.21 INT_MASK0 Register (Address = 0x2F) \[Reset = 0xFF\]

INT_MASK0 is shown in [Table 8-131](#B0_P1_B0_P1_B0_P1_INT_MASK0_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the interrupt mask register 0.

**Table 8-131 INT_MASK0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | INT_MASK0 | R/W | 1b | Clock error interrupt mask. 0b = Don't Mask 1b = Mask |
| 6 | INT_MASK0 | R/W | 1b | PLL Lock interrupt mask. 0b = Don't Mask 1b = Mask |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.22 INT_MASK4 Register (Address = 0x32) \[Reset = 0x00\]

INT_MASK4 is shown in [Table 8-132](#B0_P1_B0_P1_B0_P1_INT_MASK4_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the interrupt mask register 4.

**Table 8-132 INT_MASK4 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 5 | INT_MASK4 | R/W | 0b | OUT Short Circuit Fault Interrupt Mask. 0b = Don't Mask 1b = Mask |
| 4 | INT_MASK4 | R/W | 0b | DRVR Virtual Ground Fault Interrupt Mask. 0b = Don't Mask 1b = Mask |
| 3 | INT_MASK4 | R/W | 0b | Headset insert detection interrupt mask. 0b = Don't Mask 1b = Mask |
| 2 | INT_MASK4 | R/W | 0b | Headset remove detection interrupt mask. 0b = Don't Mask 1b = Mask |
| 1 | INT_MASK4 | R/W | 0b | Headset detection hook(button) interrupt mask. 0b = Don't Mask 1b = Mask |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.23 INT_MASK5 Register (Address = 0x33) \[Reset = 0x30\]

INT_MASK5 is shown in [Table 8-133](#B0_P1_B0_P1_B0_P1_INT_MASK5_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the interrupt mask register 5.

**Table 8-133 INT_MASK5 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | INT_MASK5 | R/W | 0b | GPA up threshold fault mask. 0b = Don't Mask 1b = Mask |
| 6 | INT_MASK5 | R/W | 0b | GPA low threshold fault mask. 0b = Don't Mask 1b = Mask |
| 5 | INT_MASK5 | R/W | 1b | VAD power up detect interrupt mask. 0b = Don't Mask 1b = Mask |
| 4 | INT_MASK5 | R/W | 1b | VAD power down detect interrupt mask. 0b = Don't Mask 1b = Mask |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.24 INT_LTCH0 Register (Address = 0x34) \[Reset = 0x00\]

INT_LTCH0 is shown in [Table 8-134](#B0_P1_B0_P1_B0_P1_INT_LTCH0_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the latched interrupt readback register 0.

**Table 8-134 INT_LTCH0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | INT_LTCH0 | R | 0b | Interrupt due to clock error (self clearing bit). 0b = No interrupt 1b = Interrupt |
| 6 | INT_LTCH0 | R | 0b | Interrupt due to PLL Lock (self clearing bit) 0b = No interrupt 1b = Interrupt |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.25 OUT_CH1_LTCH Register (Address = 0x38) \[Reset = 0x00\]

OUT_CH1_LTCH is shown in [Table 8-135](#B0_P1_B0_P1_B0_P1_OUT_CH1_LTCH_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the latched status register for channel 1 output DC faults diagnostics.

**Table 8-135 OUT_CH1_LTCH Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | OUT_CH1_LTCH | R | 0b | OUT1P Short Circuit Fault (self clearing bit). 0b = No short circuit fault 1b = Short circuit fault |
| 6 | OUT_CH1_LTCH | R | 0b | OUT1M Short Circuit Fault (self clearing bit). 0b = No short circuit fault 1b = Short circuit fault |
| 5 | OUT_CH1_LTCH | R | 0b | Channel 1 DRVRP Virtual Ground Fault (self clearing bit). 0b = No virtual ground fault 1b = Virtual ground fault |
| 4 | OUT_CH1_LTCH | R | 0b | Channel 1 DRVRM Virtual Ground Fault (self clearing bit). 0b = No virtual ground fault 1b = Virtual ground fault |
| 3 | MASK_ADC_CH1_OVRLD_FLAG | R/W | 0b | ADC CH1 OVRLD fault mask. 0b = Don't Mask 1b = Mask |
| 2 | MASK_ADC_CH2_OVRLD_FLAG | R/W | 0b | ADC CH2 OVRLD fault mask. 0b = Don't Mask 1b = Mask |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.2.26 OUT_CH2_LTCH Register (Address = 0x39) \[Reset = 0x00\]

OUT_CH2_LTCH is shown in [Table 8-136](#B0_P1_B0_P1_B0_P1_OUT_CH2_LTCH_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the latched status register for channel 2 output DC faults diagnostics.

**Table 8-136 OUT_CH2_LTCH Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | OUT_CH2_LTCH | R | 0b | OUT2P Short Circuit Fault (self clearing bit). 0b = No short circuit fault 1b = Short circuit fault |
| 6 | OUT_CH2_LTCH | R | 0b | OUT2M Short Circuit Fault (self clearing bit). 0b = No short circuit fault 1b = Short circuit fault |
| 5 | OUT_CH2_LTCH | R | 0b | Channel 2 DRVRP Virtual Ground Fault (self clearing bit). 0b = No virtual ground fault 1b = Virtual ground fault |
| 4 | OUT_CH2_LTCH | R | 0b | Channel 2 DRVRM Virtual Ground Fault (self clearing bit). 0b = No virtual ground fault 1b = Virtual ground fault |
| 3-2 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 1 | MASK_AREG_SC_FLAG | R/W | 0b | AREG SC fault mask. 0b = Don't Mask 1b = Mask |
| 0 | AREG_SC_FLAG_LTCH | R | 0b | AREG SC fault (self clearing bit). 0b = No AREG short circuit fault 1b = AREG short circuit fault |


## 8.1.2.27 INT_LTCH1 Register (Address = 0x3A) \[Reset = 0x00\]

INT_LTCH1 is shown in [Table 8-137](#B0_P1_B0_P1_B0_P1_INT_LTCH1_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the register 1 for latched interrupt readback.

**Table 8-137 INT_LTCH1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | INT_LTCH1 | R | 0b | Interrupt due to Headset Insert Detection (self clearing bit). 0b = No interrupt 1b = Interrupt |
| 2 | INT_LTCH1 | R | 0b | Interrupt due to Headset Remove Detection (self clearing bit). 0b = No interrupt 1b = Interrupt |
| 1 | INT_LTCH1 | R | 0b | Interrupt due to Headset hook(button) (self clearing bit). 0b = No interrupt 1b = Interrupt |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.28 INT_LTCH2 Register (Address = 0x3B) \[Reset = 0x00\]

INT_LTCH2 is shown in [Table 8-138](#B0_P1_B0_P1_B0_P1_INT_LTCH2_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the register 2 for latched interrupt readback.

**Table 8-138 INT_LTCH2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | INT_LTCH2 | R | 0b | Interrupt due to GPA up threshold fault (self clearing bit). 0b = No interrupt 1b = Interrupt |
| 6 | INT_LTCH2 | R | 0b | Interrupt due to GPA low threshold fault (self clearing bit) 0b = No interrupt 1b = Interrupt |
| 5 | INT_LTCH2 | R | 0b | Interrupt due to VAD power up detect (self clearing bit). 0b = No interrupt 1b = Interrupt |
| 4 | INT_LTCH2 | R | 0b | Interrupt due to VAD power down detect (self clearing bit). 0b = No interrupt 1b = Interrupt |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.29 INT_LIVE0 Register (Address = 0x3C) \[Reset = 0x00\]

INT_LIVE0 is shown in [Table 8-139](#B0_P1_B0_P1_B0_P1_INT_LIVE0_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the register 0 for live interrupt readback.

**Table 8-139 INT_LIVE0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | INT_LIVE0 | R | 0b | Interrupt due to clock error . 0b = No interrupt 1b = Interrupt |
| 6 | INT_LIVE0 | R | 0b | Interrupt due to PLL Lock 0b = No interrupt 1b = Interrupt |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.30 OUT_CH1_LIVE Register (Address = 0x40) \[Reset = 0x00\]

OUT_CH1_LIVE is shown in [Table 8-140](#B0_P1_B0_P1_B0_P1_OUT_CH1_LIVE_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the live status register for channel 1 output DC faults diagnostics.

**Table 8-140 OUT_CH1_LIVE Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | OUT_CH1_LIVE | R | 0b | OUT1P Short Circuit Fault . 0b = No short circuit fault 1b = Short circuit fault |
| 6 | OUT_CH1_LIVE | R | 0b | OUT1M Short Circuit Fault . 0b = No short circuit fault 1b = Short circuit fault |
| 5 | OUT_CH1_LIVE | R | 0b | Channel 1 DRVRP Virtual Ground Fault . 0b = No virtual ground fault 1b = Virtual ground fault |
| 4 | OUT_CH1_LIVE | R | 0b | Channel 1 DRVRM Virtual Ground Fault . 0b = No virtual ground fault 1b = Virtual ground fault |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.2.31 OUT_CH2_LIVE Register (Address = 0x41) \[Reset = 0x00\]

OUT_CH2_LIVE is shown in [Table 8-141](#B0_P1_B0_P1_B0_P1_OUT_CH2_LIVE_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the live status register for channel 2 output DC faults diagnostics.

**Table 8-141 OUT_CH2_LIVE Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | OUT_CH2_LIVE | R | 0b | OUT2P Short Circuit Fault . 0b = No short circuit fault 1b = Short circuit fault |
| 6 | OUT_CH2_LIVE | R | 0b | OUT2M Short Circuit Fault . 0b = No short circuit fault 1b = Short circuit fault |
| 5 | OUT_CH2_LIVE | R | 0b | Channel 2 DRVRP Virtual Ground Fault . 0b = No virtual ground fault 1b = Virtual ground fault |
| 4 | OUT_CH2_LIVE | R | 0b | Channel 2 DRVRM Virtual Ground Fault . 0b = No virtual ground fault 1b = Virtual ground fault |
| 3-1 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 0 | AREG_SC_FLAG_LIVE | R | 0b | AREG SC fault . 0b = No AREG short circuit fault 1b = AREG short circuit fault |


## 8.1.2.32 INT_LIVE1 Register (Address = 0x42) \[Reset = 0x00\]

INT_LIVE1 is shown in [Table 8-142](#B0_P1_B0_P1_B0_P1_INT_LIVE1_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the register 1 for live interrupt readback.

**Table 8-142 INT_LIVE1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | INT_LIVE1 | R | 0b | Interrupt due to Headset Insert Detection . 0b = No interrupt 1b = Interrupt |
| 2 | INT_LIVE1 | R | 0b | Interrupt due to Headset Remove Detection . 0b = No interrupt 1b = Interrupt |
| 1 | INT_LIVE1 | R | 0b | Interrupt due to Headset hook(button) . 0b = No interrupt 1b = Interrupt |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.33 INT_LIVE2 Register (Address = 0x43) \[Reset = 0x00\]

INT_LIVE2 is shown in [Table 8-143](#B0_P1_B0_P1_B0_P1_INT_LIVE2_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the register 2 for live interrupt readback.

**Table 8-143 INT_LIVE2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | INT_LIVE2 | R | 0b | Interrupt due to GPA up threshold fault . 0b = No interrupt 1b = Interrupt |
| 6 | INT_LIVE2 | R | 0b | Interrupt due to GPA low threshold fault 0b = No interrupt 1b = Interrupt |
| 5 | INT_LIVE2 | R | 0b | Interrupt due to VAD power up detect . 0b = No interrupt 1b = Interrupt |
| 4 | INT_LIVE2 | R | 0b | Interrupt due to VAD power down detect . 0b = No interrupt 1b = Interrupt |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.34 DIAG_CFG8 Register (Address = 0x4E) \[Reset = 0xBA\]

DIAG_CFG8 is shown in [Table 8-144](#B0_P1_B0_P1_B0_P1_DIAG_CFG8_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the input diagnostics configuration register 8.

**Table 8-144 DIAG_CFG8 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | GPA_UP_THRS_FLT_THRES[7:0] | R/W | 10111010b | General Purpose Analog High Threshold Default = ~ 2.6V nd = ((0.9´(N*16)/4095)-0´225)x6 (V) |


## 8.1.2.35 DIAG_CFG9 Register (Address = 0x4F) \[Reset = 0x4B\]

DIAG_CFG9 is shown in [Table 8-145](#B0_P1_B0_P1_B0_P1_DIAG_CFG9_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the input diagnostics configuration register 9.

**Table 8-145 DIAG_CFG9 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | GPA_LOW_THRS_FLT_THRES[7:0] | R/W | 01001011b | General Purpose Analog Low Threshold Default = ~ 0.2V nd = ((0.9´(N*16)/4095)-0´225)x6 (V) |


## 8.1.2.36 DIAG_CFG13 Register (Address = 0x53) \[Reset = 0x00\]

DIAG_CFG13 is shown in [Table 8-146](#B0_P1_B0_P1_B0_P1_DIAG_CFG13_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the input diagnostics configuration register 13.

**Table 8-146 DIAG_CFG13 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 2 | DIAG_EN_AVDD | R/W | 0b | AVDD channel enable for Diagnostics 0b = Diagnostic Disabled 1b = Diagnostic Enabled |
| 1 | DIAG_EN_GPA | R/W | 0b | GPA channel enable for Diagnostics 0b = Diagnostic Disabled 1b = Diagnostic Enabled |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.37 DIAG_CFG14 Register (Address = 0x54) \[Reset = 0x48\]

DIAG_CFG14 is shown in [Table 8-147](#B0_P1_B0_P1_B0_P1_DIAG_CFG14_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This is the input diagnostics configuration register 14.

**Table 8-147 DIAG_CFG14 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | AVDD_FILT_SEL[1:0] | R/W | 10b | AVDD filter select 0d = 3.5MHz 1d = 200kHz 2d = 100kHz 3d = No filter |
| 4 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 3-2 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 1 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.2.38 DIAGDATA_CFG Register (Address = 0x55) \[Reset = 0x00\]

DIAGDATA_CFG is shown in [Table 8-148](#B0_P1_B0_P1_B0_P1_DIAGDATA_CFG_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the input diagnostics data configuration register.

**Table 8-148 DIAGDATA_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 3 | IADC_DATA_IN_DIAG_REGS | R/W | 0b | IADC channel data in diagnostics channel data registers 0b= Disabled 1b= Enabled |
| 2 | HOLD_IADC_DATA | R/W | 0b | Hold IADC data update during register readback 0b= Data update is not held, Data register is continuously updated 1b= Data update is held, Data register readback can be done |
| 1 | OVRD_TEMP_DATA | R/W | 0b | Override TEMP data 0b= Override Disabled 1b= Override Enabled |
| 0 | HOLD_SAR_DATA | R/W | 0b | Hold SAR data update during register readback 0b= Data update is not held, Data register is continuously updated 1b= Data update is held, Data register readback can be done |


## 8.1.2.39 DIAG_MON_MSB_MBIAS Register (Address = 0x58) \[Reset = 0x00\]

DIAG_MON_MSB_MBIAS is shown in [Table 8-149](#B0_P1_B0_P1_B0_P1_DIAG_MON_MSB_MBIAS_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR MICBIAS monitor data MSB byte register.

**Table 8-149 DIAG_MON_MSB_MBIAS Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DIAG_MON_MSB_MBIAS[7:0] | R | 00000000b | Diagnostic SAR Monitor Data MSB Byte |


## 8.1.2.40 DIAG_MON_LSB_MBIAS Register (Address = 0x59) \[Reset = 0x01\]

DIAG_MON_LSB_MBIAS is shown in [Table 8-150](#B0_P1_B0_P1_B0_P1_DIAG_MON_LSB_MBIAS_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR MICBIAS monitor data LSB nibble.

**Table 8-150 DIAG_MON_LSB_MBIAS Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DIAG_MON_LSB_MBIAS[3:0] | R | 0000b | Diagnostic SAR Monitor Data LSB Nibble |
| 3-0 | Channel[3:0] | R | 0001b | Channel ID |


## 8.1.2.41 DIAG_MON_MSB_OUT1P Register (Address = 0x62) \[Reset = 0x00\]

DIAG_MON_MSB_OUT1P is shown in [Table 8-151](#B0_P1_B0_P1_B0_P1_DIAG_MON_MSB_OUT1P_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR OUT1P monitor data MSB byte register.

**Table 8-151 DIAG_MON_MSB_OUT1P Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DIAG_MON_MSB_OUT_CH1P[7:0] | R | 00000000b | Diagnostic SAR Monitor Data MSB Byte |


## 8.1.2.42 DIAG_MON_LSB_OUT1P Register (Address = 0x63) \[Reset = 0x06\]

DIAG_MON_LSB_OUT1P is shown in [Table 8-152](#B0_P1_B0_P1_B0_P1_DIAG_MON_LSB_OUT1P_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR OUT1P monitor data LSB nibble register.

**Table 8-152 DIAG_MON_LSB_OUT1P Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DIAG_MON_LSB_OUT_CH1P[3:0] | R | 0000b | Diagnostic SAR Monitor Data LSB Nibble |
| 3-0 | Channel[3:0] | R | 0110b | Channel ID |


## 8.1.2.43 DIAG_MON_MSB_OUT1M Register (Address = 0x64) \[Reset = 0x00\]

DIAG_MON_MSB_OUT1M is shown in [Table 8-153](#B0_P1_B0_P1_B0_P1_DIAG_MON_MSB_OUT1M_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR OUT1M monitor data MSB byte register.

**Table 8-153 DIAG_MON_MSB_OUT1M Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DIAG_MON_MSB_OUT_CH1N[7:0] | R | 00000000b | Diagnostic SAR Monitor Data MSB Byte |


## 8.1.2.44 DIAG_MON_LSB_OUT1M Register (Address = 0x65) \[Reset = 0x07\]

DIAG_MON_LSB_OUT1M is shown in [Table 8-154](#B0_P1_B0_P1_B0_P1_DIAG_MON_LSB_OUT1M_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR OUT1M monitor data LSB nibble register.

**Table 8-154 DIAG_MON_LSB_OUT1M Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DIAG_MON_LSB_OUT_CH1N[3:0] | R | 0000b | Diagnostic SAR Monitor Data LSB Nibble |
| 3-0 | Channel[3:0] | R | 0111b | Channel ID |


## 8.1.2.45 DIAG_MON_MSB_OUT2P Register (Address = 0x66) \[Reset = 0x00\]

DIAG_MON_MSB_OUT2P is shown in [Table 8-155](#B0_P1_B0_P1_B0_P1_DIAG_MON_MSB_OUT2P_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR OUT2P monitor data MSB byte register.

**Table 8-155 DIAG_MON_MSB_OUT2P Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DIAG_MON_MSB_OUT_CH2P[7:0] | R | 00000000b | Diagnostic SAR Monitor Data MSB Byte |


## 8.1.2.46 DIAG_MON_LSB_OUT2P Register (Address = 0x67) \[Reset = 0x08\]

DIAG_MON_LSB_OUT2P is shown in [Table 8-156](#B0_P1_B0_P1_B0_P1_DIAG_MON_LSB_OUT2P_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR OUT2P monitor data LSB nibble register.

**Table 8-156 DIAG_MON_LSB_OUT2P Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DIAG_MON_LSB_OUT_CH2P[3:0] | R | 0000b | Diagnostic SAR Monitor Data LSB Nibble |
| 3-0 | Channel[3:0] | R | 1000b | Channel ID |


## 8.1.2.47 DIAG_MON_MSB_OUT2M Register (Address = 0x68) \[Reset = 0x00\]

DIAG_MON_MSB_OUT2M is shown in [Table 8-157](#B0_P1_B0_P1_B0_P1_DIAG_MON_MSB_OUT2M_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR OUT2M monitor data MSB byte register.

**Table 8-157 DIAG_MON_MSB_OUT2M Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DIAG_MON_MSB_OUT_CH2N[7:0] | R | 00000000b | Diagnostic SAR Monitor Data MSB Byte |


## 8.1.2.48 DIAG_MON_LSB_OUT2M Register (Address = 0x69) \[Reset = 0x09\]

DIAG_MON_LSB_OUT2M is shown in [Table 8-158](#B0_P1_B0_P1_B0_P1_DIAG_MON_LSB_OUT2M_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR OUT2M monitor data LSB nibble register.

**Table 8-158 DIAG_MON_LSB_OUT2M Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DIAG_MON_LSB_OUT_CH2N[3:0] | R | 0000b | Diagnostic SAR Monitor Data LSB Nibble |
| 3-0 | Channel[3:0] | R | 1001b | Channel ID |


## 8.1.2.49 DIAG_MON_MSB_TEMP Register (Address = 0x6A) \[Reset = 0x00\]

DIAG_MON_MSB_TEMP is shown in [Table 8-159](#B0_P1_B0_P1_B0_P1_DIAG_MON_MSB_TEMP_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR Temperature monitor data MSB byte register.

**Table 8-159 DIAG_MON_MSB_TEMP Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DIAG_MON_MSB_TEMP[7:0] | R | 00000000b | Diagnostic SAR Monitor Data MSB Byte |


## 8.1.2.50 DIAG_MON_LSB_TEMP Register (Address = 0x6B) \[Reset = 0x0A\]

DIAG_MON_LSB_TEMP is shown in [Table 8-160](#B0_P1_B0_P1_B0_P1_DIAG_MON_LSB_TEMP_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR Temperature monitor data LSB nibble register.

**Table 8-160 DIAG_MON_LSB_TEMP Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DIAG_MON_LSB_TEMP[3:0] | R | 0000b | Diagnostic SAR Monitor Data LSB Nibble |
| 3-0 | Channel[3:0] | R | 1010b | Channel ID |


## 8.1.2.51 DIAG_MON_MSB_MBIAS_LOAD Register (Address = 0x6C) \[Reset = 0x00\]

DIAG_MON_MSB_MBIAS_LOAD is shown in [Table 8-161](#B0_P1_B0_P1_B0_P1_DIAG_MON_MSB_MBIAS_LOAD_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostics SAR MICBIAS LOAD Current monitor data MSB byte register.

**Table 8-161 DIAG_MON_MSB_MBIAS_LOAD Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DIAG_MON_MSB_MBIAS_LOAD[7:0] | R | 00000000b | Diagnostic SAR Monitor Data MSB Byte |


## 8.1.2.52 DIAG_MON_LSB_MBIAS_LOAD Register (Address = 0x6D) \[Reset = 0x0B\]

DIAG_MON_LSB_MBIAS_LOAD is shown in [Table 8-162](#B0_P1_B0_P1_B0_P1_DIAG_MON_LSB_MBIAS_LOAD_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostic SAR MICBIAS LOAD Current monitor data LSB nibble register.

**Table 8-162 DIAG_MON_LSB_MBIAS_LOAD Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DIAG_MON_LSB_MBIAS_LOAD[3:0] | R | 0000b | Diagnostic SAR Monitor Data LSB Nibble |
| 3-0 | Channel[3:0] | R | 1011b | Channel ID |


## 8.1.2.53 DIAG_MON_MSB_AVDD Register (Address = 0x6E) \[Reset = 0x00\]

DIAG_MON_MSB_AVDD is shown in [Table 8-163](#B0_P1_B0_P1_B0_P1_DIAG_MON_MSB_AVDD_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostic SAR AVDD monitor data MSB byte register.

**Table 8-163 DIAG_MON_MSB_AVDD Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DIAG_MON_MSB_AVDD[7:0] | R | 00000000b | Diagnostic SAR Monitor Data MSB Byte |


## 8.1.2.54 DIAG_MON_LSB_AVDD Register (Address = 0x6F) \[Reset = 0x0C\]

DIAG_MON_LSB_AVDD is shown in [Table 8-164](#B0_P1_B0_P1_B0_P1_DIAG_MON_LSB_AVDD_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostic SAR AVDD monitor data LSB nibble register

**Table 8-164 DIAG_MON_LSB_AVDD Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DIAG_MON_LSB_AVDD[3:0] | R | 0000b | Diagnostic SAR Monitor Data LSB Nibble |
| 3-0 | Channel[3:0] | R | 1100b | Channel ID |


## 8.1.2.55 DIAG_MON_MSB_GPA Register (Address = 0x70) \[Reset = 0x00\]

DIAG_MON_MSB_GPA is shown in [Table 8-165](#B0_P1_B0_P1_B0_P1_DIAG_MON_MSB_GPA_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostic SAR GPA monitor data MSB byte register.

**Table 8-165 DIAG_MON_MSB_GPA Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | DIAG_MON_MSB_GPA[7:0] | R | 00000000b | Diagnostic SAR Monitor Data MSB Byte |


## 8.1.2.56 DIAG_MON_LSB_GPA Register (Address = 0x71) \[Reset = 0x0D\]

DIAG_MON_LSB_GPA is shown in [Table 8-166](#B0_P1_B0_P1_B0_P1_DIAG_MON_LSB_GPA_TABLE_TABLE).

Return to the [Summary Table](#B0_P1_B0_P1_TABLE_1_TABLE).

This register is the diagnostic SAR GPA monitor data LSB nibble register.

**Table 8-166 DIAG_MON_LSB_GPA Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-4 | DIAG_MON_LSB_GPA[3:0] | R | 0000b | Diagnostic SAR Monitor Data LSB Nibble |
| 3-0 | Channel[3:0] | R | 1101b | Channel ID |


### 8.1.3  Book0_Page3 Registers

[Table 8-167](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE) lists the memory-mapped registers for the Book0_Page3 registers. All register offset addresses not listed in [Table 8-167](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE) should be considered as reserved locations and the register contents should not be modified.

**Table 8-167 BOOK0_PAGE3 Registers**


| Address | Acronym | Register Name | Reset Value | Section |
| --- | --- | --- | --- | --- |
| 0x0 | PAGE_CFG | Device page register | 0x00 | Section 8.1.3.1 |
| 0x1A | SASI_CFG0 | Secondary ASI configuration register 0 | 0x30 | Section 8.1.3.2 |
| 0x1B | SASI_TX_CFG0 | SASI TX configuration register 0 | 0x00 | Section 8.1.3.3 |
| 0x1C | SASI_TX_CFG1 | SASI TX configuration register 1 | 0x00 | Section 8.1.3.4 |
| 0x1D | SASI_TX_CFG2 | SASI TX configuration register 2 | 0x00 | Section 8.1.3.5 |
| 0x1E | SASI_TX_CH1_CFG | SASI TX Channel 1 configuration register | 0x00 | Section 8.1.3.6 |
| 0x1F | SASI_TX_CH2_CFG | SASI TX Channel 2 configuration register | 0x01 | Section 8.1.3.7 |
| 0x20 | SASI_TX_CH3_CFG | SASI TX Channel 3 configuration register | 0x02 | Section 8.1.3.8 |
| 0x21 | SASI_TX_CH4_CFG | SASI TX Channel 4 configuration register | 0x03 | Section 8.1.3.9 |
| 0x22 | SASI_TX_CH5_CFG | SASI TX Channel 5 configuration register | 0x04 | Section 8.1.3.10 |
| 0x23 | SASI_TX_CH6_CFG | SASI TX Channel 6 configuration register | 0x05 | Section 8.1.3.11 |
| 0x24 | SASI_TX_CH7_CFG | SASI TX Channel 7 configuration register | 0x06 | Section 8.1.3.12 |
| 0x25 | SASI_TX_CH8_CFG | SASI TX Channel 8 configuration register | 0x07 | Section 8.1.3.13 |
| 0x26 | SASI_RX_CFG0 | SASI RX configuration register 0 | 0x00 | Section 8.1.3.14 |
| 0x27 | SASI_RX_CFG1 | SASI RX configuration register 1 | 0x00 | Section 8.1.3.15 |
| 0x28 | SASI_RX_CH1_CFG | SASI RX Channel 1 configuration register | 0x00 | Section 8.1.3.16 |
| 0x29 | SASI_RX_CH2_CFG | SASI RX Channel 2 configuration register | 0x01 | Section 8.1.3.17 |
| 0x2A | SASI_RX_CH3_CFG | SASI RX Channel 3 configuration register | 0x02 | Section 8.1.3.18 |
| 0x2B | SASI_RX_CH4_CFG | SASI RX Channel 4 configuration register | 0x03 | Section 8.1.3.19 |
| 0x2C | SASI_RX_CH5_CFG | SASI RX Channel 5 configuration register | 0x04 | Section 8.1.3.20 |
| 0x2D | SASI_RX_CH6_CFG | SASI RX Channel 6 configuration register | 0x05 | Section 8.1.3.21 |
| 0x2E | SASI_RX_CH7_CFG | SASI RX Channel 7 configuration register | 0x06 | Section 8.1.3.22 |
| 0x2F | SASI_RX_CH8_CFG | SASI RX Channel 8 configuration register | 0x07 | Section 8.1.3.23 |
| 0x32 | CLK_CFG12 | Clock configuration register 12 | 0x00 | Section 8.1.3.24 |
| 0x33 | CLK_CFG13 | Clock configuration register 13 | 0x00 | Section 8.1.3.25 |
| 0x34 | CLK_CFG14 | Clock configuration register 14 | 0x10 | Section 8.1.3.26 |
| 0x35 | CLK_CFG15 | Clock configuration register 15 | 0x01 | Section 8.1.3.27 |
| 0x36 | CLK_CFG16 | Clock configuration register 16 | 0x00 | Section 8.1.3.28 |
| 0x37 | CLK_CFG17 | Clock configuration register 17 | 0x00 | Section 8.1.3.29 |
| 0x38 | CLK_CFG18 | Clock configuration register 18 | 0x08 | Section 8.1.3.30 |
| 0x39 | CLK_CFG19 | Clock configuration register 19 | 0x20 | Section 8.1.3.31 |
| 0x3A | CLK_CFG20 | Clock configuration register 20 | 0x04 | Section 8.1.3.32 |
| 0x3B | CLK_CFG21 | Clock configuration register 21 | 0x00 | Section 8.1.3.33 |
| 0x3C | CLK_CFG22 | Clock configuration register 22 | 0x01 | Section 8.1.3.34 |
| 0x3D | CLK_CFG23 | Clock configuration register 23 | 0x01 | Section 8.1.3.35 |
| 0x3E | CLK_CFG24 | Clock configuration register 24 | 0x01 | Section 8.1.3.36 |
| 0x44 | CLK_CFG30 | Clock configuration register 30 | 0x00 | Section 8.1.3.37 |
| 0x45 | CLK_CFG31 | Clock configuration register 31 | 0x00 | Section 8.1.3.38 |
| 0x46 | CLKOUT_CFG1 | CLKOUT configuration register 1 | 0x00 | Section 8.1.3.39 |
| 0x47 | CLKOUT_CFG2 | CLKOUT configuration register 2 | 0x01 | Section 8.1.3.40 |
| 0x49 | SARCLK_CFG1 | SAR clock configuration register 1 | 0x00 | Section 8.1.3.41 |
| 0x5B | ADC_OVRLD_FLAG | ADC overload flag register | 0x00 | Section 8.1.3.42 |


## 8.1.3.1 PAGE_CFG Register (Address = 0x0) \[Reset = 0x00\]

PAGE_CFG is shown in [Table 8-168](#BOOK0_PAGE3_B0_P3_B0_P3_PAGE_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

The device memory map is divided into pages. This register sets the page.

**Table 8-168 PAGE_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | PAGE[7:0] | R/W | 00000000b | These bits set the device page. 0d = Page 0 1d = Page 1 2d to 254d = Page 2 to page 254 respectively 255d = Page 255 |


## 8.1.3.2 SASI_CFG0 Register (Address = 0x1A) \[Reset = 0x30\]

SASI_CFG0 is shown in [Table 8-169](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the ASI configuration register 0.

**Table 8-169 SASI_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | SASI_FORMAT[1:0] | R/W | 00b | Secondary ASI protocol format. 0d = TDM mode 1d = I<sup>2</sup>S mode 2d = LJ (left-justified) mode 3d = Reserved; Don't use |
| 5-4 | SASI_WLEN[1:0] | R/W | 11b | Secondary ASI word or slot length. 0d = 16 bits (Recommended this setting to be used with 10kandx3A9;# input impedance configuration) 1d = 20 bits 2d = 24 bits 3d = 32 bits |
| 3 | SASI_FSYNC_POL | R/W | 0b | ASI FSYNC polarity (for SASI protocol only). 0d = Default polarity as per standard protocol 1d = Inverted polarity with respect to standard protocol |
| 2 | SASI_BCLK_POL | R/W | 0b | ASI BCLK polarity (for SASI protocol only). 0d = Default polarity as per standard protocol 1d = Inverted polarity with respect to standard protocol |
| 1 | SASI_BUS_ERR | R/W | 0b | ASI bus error detection. 0d = Enable bus error detection 1d = Disable bus error detection |
| 0 | SASI_BUS_ERR_RCOV | R/W | 0b | ASI bus error auto resume. 0d = Enable auto resume after bus error recovery 1d = Disable auto resume after bus error recovery and remain powered down until host configures the device |


## 8.1.3.3 SASI_TX_CFG0 Register (Address = 0x1B) \[Reset = 0x00\]

SASI_TX_CFG0 is shown in [Table 8-170](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX configuration register 0.

**Table 8-170 SASI_TX_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | SASI_TX_EDGE | R/W | 0b | Secondary ASI data output (on the primary and secondary data pin) transmit edge. 0d = Default edge as per the protocol configuration setting in SASI_BCLK_POL 1d = Inverted following edge (half cycle delay) with respect to the default edge setting |
| 6 | SASI_TX_FILL | R/W | 0b | Secondary ASI data output (on the primary and secondary data pin) for any unused cycles 0d = Always transmit 0 for unused cycles 1d = Always use Hi-Z for unused cycles |
| 5 | SASI_TX_LSB | R/W | 0b | Secondary ASI data output (on the primary and secondary data pin) for LSB transmissions. 0d = Transmit the LSB for a full cycle 1d = Transmit the LSB for the first half cycle and Hi-Z for the second half cycle |
| 4-3 | SASI_TX_KEEPER[1:0] | R/W | 00b | Secondary ASI data output (on the primary and secondary data pin) bus keeper. 0d = Bus keeper is always disabled 1d = Bus keeper is always enabled 2d = Bus keeper is enabled during LSB transmissions only for one cycle 3d = Bus keeper is enabled during LSB transmissions only for one and half cycles |
| 2 | SASI_TX_USE_INT_FSYNC | R/W | 0b | Secondary ASI uses internal FSYNC for output data generation in controller mode configuration as applicable. 0d = Use external FSYNC for ASI protocol data generation 1d = Use internal FSYNC for ASI protocol data generation |
| 1 | SASI_TX_USE_INT_BCLK | R/W | 0b | Secondary ASI uses internal BCLK for output data generation in controller mode configuration. 0d = Use external BCLK for ASI protocol data generation 1d = Use internal BCLK for ASI protocol data generation |
| 0 | SASI_TDM_PULSE_WIDTH | R/W | 0b | Secondary ASI fsync pulse width in TDM format. 0d = Fsync pulse is 1 bclk period wide 1d = Fsync pulse is 2 bclk period wide |


## 8.1.3.4 SASI_TX_CFG1 Register (Address = 0x1C) \[Reset = 0x00\]

SASI_TX_CFG1 is shown in [Table 8-171](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX configuration register 1.

**Table 8-171 SASI_TX_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-5 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 4-0 | SASI_TX_OFFSET[4:0] | R/W | 00000b | Secondary ASI output data MSB slot 0 offset (on the primary and secondary data pin). 0d = ASI data MSB location has no offset and is as per standard protocol 1d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of one BCLK cycle with respect to standard protocol 2d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of two BCLK cycles with respect to standard protocol 3d to 30d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset assigned as per configuration 31d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of 31 BCLK cycles with respect to standard protocol |


## 8.1.3.5 SASI_TX_CFG2 Register (Address = 0x1D) \[Reset = 0x00\]

SASI_TX_CFG2 is shown in [Table 8-172](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX configuration register 2.

**Table 8-172 SASI_TX_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | SASI_TX_CH8_SEL | R/W | 0b | Secondary ASI output channel 8 select. 0d = Secondary ASI channel 8 output is on DOUT 1d = Secondary ASI channel 8 output is on DOUT2 |
| 6 | SASI_TX_CH7_SEL | R/W | 0b | Secondary ASI output channel 7 select. 0d = Secondary ASI channel 7 output is on DOUT 1d = Secondary ASI channel 7 output is on DOUT2 |
| 5 | SASI_TX_CH6_SEL | R/W | 0b | Secondary ASI output channel 6 select. 0d = Secondary ASI channel 6 output is on DOUT 1d = Secondary ASI channel 6 output is on DOUT2 |
| 4 | SASI_TX_CH5_SEL | R/W | 0b | Secondary ASI output channel 5 select. 0d = Secondary ASI channel 5 output is on DOUT 1d = Secondary ASI channel 5 output is on DOUT2 |
| 3 | SASI_TX_CH4_SEL | R/W | 0b | Secondary ASI output channel 4 select. 0d = Secondary ASI channel 4 output is on DOUT 1d = Secondary ASI channel 4 output is on DOUT2 |
| 2 | SASI_TX_CH3_SEL | R/W | 0b | Secondary ASI output channel 3 select. 0d = Secondary ASI channel 3 output is on DOUT 1d = Secondary ASI channel 3 output is on DOUT2 |
| 1 | SASI_TX_CH2_SEL | R/W | 0b | Secondary ASI output channel 2 select. 0d = Secondary ASI channel 2 output is on DOUT 1d = Secondary ASI channel 2 output is on DOUT2 |
| 0 | SASI_TX_CH1_SEL | R/W | 0b | Secondary ASI output channel 1 select. 0d = Secondary ASI channel 1 output is on DOUT 1d = Secondary ASI channel 1 output is on DOUT2 |


## 8.1.3.6 SASI_TX_CH1_CFG Register (Address = 0x1E) \[Reset = 0x00\]

SASI_TX_CH1_CFG is shown in [Table 8-173](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CH1_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX Channel 1 configuration register.

**Table 8-173 SASI_TX_CH1_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 5 | SASI_TX_CH1_CFG | R/W | 0b | Secondary ASI output channel 1 configuration. 0d = Secondary ASI channel 1 output is in a tri-state condition 1d = Secondary ASI channel 1 output corresponds to ADC Channel 1 data |
| 4-0 | SASI_TX_CH1_SLOT_NUM[4:0] | R/W | 00000b | Secondary ASI output channel 1 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.7 SASI_TX_CH2_CFG Register (Address = 0x1F) \[Reset = 0x01\]

SASI_TX_CH2_CFG is shown in [Table 8-174](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CH2_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX Channel 2 configuration register.

**Table 8-174 SASI_TX_CH2_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 5 | SASI_TX_CH2_CFG | R/W | 0b | Secondary ASI output channel 2 configuration. 0d = Secondary ASI channel 2 output is in a tri-state condition 1d = Secondary ASI channel 2 output corresponds to ADC Channel 2 data |
| 4-0 | SASI_TX_CH2_SLOT_NUM[4:0] | R/W | 00001b | Secondary ASI output channel 2 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.8 SASI_TX_CH3_CFG Register (Address = 0x20) \[Reset = 0x02\]

SASI_TX_CH3_CFG is shown in [Table 8-175](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CH3_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX Channel 3 configuration register.

**Table 8-175 SASI_TX_CH3_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | SASI_TX_CH3_CFG[1:0] | R/W | 00b | Secondary ASI output channel 3 configuration. 0d = Secondary ASI channel 3 output is in a tri-state condition 1d = Secondary ASI channel 3 output corresponds to ADC Channel 3 data 2d = Reserved 3d = Reserved |
| 4-0 | SASI_TX_CH3_SLOT_NUM[4:0] | R/W | 00010b | Secondary ASI output channel 3 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.9 SASI_TX_CH4_CFG Register (Address = 0x21) \[Reset = 0x03\]

SASI_TX_CH4_CFG is shown in [Table 8-176](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CH4_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX Channel 4 configuration register.

**Table 8-176 SASI_TX_CH4_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | SASI_TX_CH4_CFG[1:0] | R/W | 00b | Secondary ASI output channel 4 configuration. 0d = Secondary ASI channel 4 output is in a tri-state condition 1d = Secondary ASI channel 4 output corresponds to ADC Channel 4 data 2d = Secondary ASI channel 4 output corresponds to TEMP data 3d = Reserved |
| 4-0 | SASI_TX_CH4_SLOT_NUM[4:0] | R/W | 00011b | Secondary ASI output channel 4 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.10 SASI_TX_CH5_CFG Register (Address = 0x22) \[Reset = 0x04\]

SASI_TX_CH5_CFG is shown in [Table 8-177](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CH5_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX Channel 5 configuration register.

**Table 8-177 SASI_TX_CH5_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | SASI_TX_CH5_CFG[1:0] | R/W | 00b | Secondary ASI output channel 5 configuration. 0d = Secondary ASI channel 5 output is in a tri-state condition 1d = Secondary ASI channel 5 output corresponds to ASI Input Channel 1 loopback data 2d = Secondary ASI channel 5 output corresponds to echo reference channel 1 data 3d = Reserved |
| 4-0 | SASI_TX_CH5_SLOT_NUM[4:0] | R/W | 00100b | Secondary ASI output channel 5 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.11 SASI_TX_CH6_CFG Register (Address = 0x23) \[Reset = 0x05\]

SASI_TX_CH6_CFG is shown in [Table 8-178](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CH6_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX Channel 6 configuration register.

**Table 8-178 SASI_TX_CH6_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | SASI_TX_CH6_CFG[1:0] | R/W | 00b | Secondary ASI output channel 6 configuration. 0d = Secondary ASI channel 6 output is in a tri-state condition 1d = Secondary ASI channel 6 output corresponds to ASI Input Channel 2 loopback data 2d = Secondary ASI channel 6 output corresponds to echo reference channel 2 data 3d = Reserved |
| 4-0 | SASI_TX_CH6_SLOT_NUM[4:0] | R/W | 00101b | Secondary ASI output channel 6 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.12 SASI_TX_CH7_CFG Register (Address = 0x24) \[Reset = 0x06\]

SASI_TX_CH7_CFG is shown in [Table 8-179](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CH7_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX Channel 7 configuration register.

**Table 8-179 SASI_TX_CH7_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | SASI_TX_CH7_CFG[1:0] | R/W | 00b | Secondary ASI output channel 7 configuration. 0d = Secondary ASI channel 7 output is in a tri-state condition 1d = Reserved 2d = Secondary ASI channel 7 output corresponds to {echo_ref_ch1_wlby2, echo_ref_ch2_wlby2} 3d = Reserved |
| 4-0 | SASI_TX_CH7_SLOT_NUM[4:0] | R/W | 00110b | Secondary ASI output channel 7 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.13 SASI_TX_CH8_CFG Register (Address = 0x25) \[Reset = 0x07\]

SASI_TX_CH8_CFG is shown in [Table 8-180](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_TX_CH8_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI TX Channel 8 configuration register.

**Table 8-180 SASI_TX_CH8_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 5 | SASI_TX_CH8_CFG | R/W | 0b | Secondary ASI output channel 8 configuration. 0d = Secondary ASI channel 8 output is in a tri-state condition 1d = Secondary ASI channel 8 output corresponds to ICLA data |
| 4-0 | SASI_TX_CH8_SLOT_NUM[4:0] | R/W | 00111b | Secondary ASI output channel 8 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.14 SASI_RX_CFG0 Register (Address = 0x26) \[Reset = 0x00\]

SASI_RX_CFG0 is shown in [Table 8-181](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_RX_CFG0_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI RX configuration register 0.

**Table 8-181 SASI_RX_CFG0 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | SASI_RX_EDGE | R/W | 0b | Secondary ASI data input (on the primary and secondary data pin) receive edge. 0d = Default edge as per the protocol configuration setting in bit 2 (BCLK_POL) 1d = Inverted following edge (half cycle delay) with respect to the default edge setting |
| 6 | SASI_RX_USE_INT_FSYNC | R/W | 0b | Secondary ASI uses internal FSYNC for input data latching in controller mode configuration as applicable. 0d = Use external FSYNC for ASI protocol data latching 1d = Use internal FSYNC for ASI protocol data latching |
| 5 | SASI_RX_USE_INT_BCLK | R/W | 0b | Secondary ASI uses internal BCLK for input data latching in controller mode configuration. 0d = Use external BCLK for ASI protocol data latching 1d = Use internal BCLK for ASI protocol data latching |
| 4-0 | SASI_RX_OFFSET[4:0] | R/W | 00000b | Secondary ASI data input MSB slot 0 offset (on the primary and secondary data pin). 0d = ASI data MSB location has no offset and is as per standard protocol 1d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of one BCLK cycle with respect to standard protocol 2d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of two BCLK cycles with respect to standard protocol 3d to 30d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset assigned as per configuration 31d = ASI data MSB location (TDM mode is slot 0 or I<sup>2</sup>S, LJ mode is the left and right slot 0) offset of 31 BCLK cycles with respect to standard protocol |


## 8.1.3.15 SASI_RX_CFG1 Register (Address = 0x27) \[Reset = 0x00\]

SASI_RX_CFG1 is shown in [Table 8-182](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_RX_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI RX configuration register 1.

**Table 8-182 SASI_RX_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | SASI_RX_CH8_SEL | R/W | 0b | Secondary ASI input channel 8 select. 0d = Secondary ASI channel 8 input is on DIN 1d = Secondary ASI channel 8 input is on DIN2 |
| 6 | SASI_RX_CH7_SEL | R/W | 0b | Secondary ASI input channel 7 select. 0d = Secondary ASI channel 7 input is on DIN 1d = Secondary ASI channel 7 input is on DIN2 |
| 5 | SASI_RX_CH6_SEL | R/W | 0b | Secondary ASI input channel 6 select. 0d = Secondary ASI channel 6 input is on DIN 1d = Secondary ASI channel 6 input is on DIN2 |
| 4 | SASI_RX_CH5_SEL | R/W | 0b | Secondary ASI input channel 5 select. 0d = Secondary ASI channel 5 input is on DIN 1d = Secondary ASI channel 5 input is on DIN2 |
| 3 | SASI_RX_CH4_SEL | R/W | 0b | Secondary ASI input channel 4 select. 0d = Secondary ASI channel 4 input is on DIN 1d = Secondary ASI channel 4 input is on DIN2 |
| 2 | SASI_RX_CH3_SEL | R/W | 0b | Secondary ASI input channel 3 select. 0d = Secondary ASI channel 3 input is on DIN 1d = Secondary ASI channel 3 input is on DIN2 |
| 1 | SASI_RX_CH2_SEL | R/W | 0b | Secondary ASI input channel 2 select. 0d = Secondary ASI channel 2 input is on DIN 1d = Secondary ASI channel 2 input is on DIN2 |
| 0 | SASI_RX_CH1_SEL | R/W | 0b | Secondary ASI input channel 1 select. 0d = Secondary ASI channel 1 input is on DIN 1d = Secondary ASI channel 1 input is on DIN2 |


## 8.1.3.16 SASI_RX_CH1_CFG Register (Address = 0x28) \[Reset = 0x00\]

SASI_RX_CH1_CFG is shown in [Table 8-183](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_RX_CH1_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI RX Channel 1 configuration register.

**Table 8-183 SASI_RX_CH1_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 5 | SASI_RX_CH1_CFG | R/W | 0b | Secondary ASI input channel 1 configuration. 0d = Secondary ASI channel 1 input is disabled 1d = Secondary ASI channel 1 input corresponds to DAC Channel 1 data |
| 4-0 | SASI_RX_CH1_SLOT_NUM[4:0] | R/W | 00000b | Secondary ASI input channel 1 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.17 SASI_RX_CH2_CFG Register (Address = 0x29) \[Reset = 0x01\]

SASI_RX_CH2_CFG is shown in [Table 8-184](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_RX_CH2_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI RX Channel 2 configuration register.

**Table 8-184 SASI_RX_CH2_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 5 | SASI_RX_CH2_CFG | R/W | 0b | Secondary ASI input channel 2 configuration. 0d = Secondary ASI channel 2 input is disabled 1d = Secondary ASI channel 2 input corresponds to DAC Channel 2 data |
| 4-0 | SASI_RX_CH2_SLOT_NUM[4:0] | R/W | 00001b | Secondary ASI input channel 2 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.18 SASI_RX_CH3_CFG Register (Address = 0x2A) \[Reset = 0x02\]

SASI_RX_CH3_CFG is shown in [Table 8-185](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_RX_CH3_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI RX Channel 3 configuration register.

**Table 8-185 SASI_RX_CH3_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 5 | SASI_RX_CH3_CFG | R/W | 0b | Secondary ASI input channel 3 configuration. 0d = Secondary ASI channel 3 input is disabled 1d = Secondary ASI channel 3 input corresponds to DAC Channel 3 data |
| 4-0 | SASI_RX_CH3_SLOT_NUM[4:0] | R/W | 00010b | Secondary ASI input channel 3 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.19 SASI_RX_CH4_CFG Register (Address = 0x2B) \[Reset = 0x03\]

SASI_RX_CH4_CFG is shown in [Table 8-186](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_RX_CH4_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI RX Channel 4 configuration register.

**Table 8-186 SASI_RX_CH4_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 5 | SASI_RX_CH4_CFG | R/W | 0b | Secondary ASI input channel 4 configuration. 0d = Secondary ASI channel 4 input is disabled 1d = Secondary ASI channel 4 input corresponds to DAC Channel 4 data |
| 4-0 | SASI_RX_CH4_SLOT_NUM[4:0] | R/W | 00011b | Secondary ASI input channel 4 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.20 SASI_RX_CH5_CFG Register (Address = 0x2C) \[Reset = 0x04\]

SASI_RX_CH5_CFG is shown in [Table 8-187](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_RX_CH5_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI RX Channel 5 configuration register.

**Table 8-187 SASI_RX_CH5_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | SASI_RX_CH5_CFG[1:0] | R/W | 00b | Secondary ASI input channel 5 configuration. 0d = Secondary ASI channel 5 input is disabled 1d = Secondary ASI channel 5 input corresponds to DAC Channel 5 data 2d = Secondary ASI channel 5 input corresponds to ADC Channel 1 output loopback 3d = Reserved |
| 4-0 | SASI_RX_CH5_SLOT_NUM[4:0] | R/W | 00100b | Secondary ASI input channel 5 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.21 SASI_RX_CH6_CFG Register (Address = 0x2D) \[Reset = 0x05\]

SASI_RX_CH6_CFG is shown in [Table 8-188](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_RX_CH6_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI RX Channel 6 configuration register.

**Table 8-188 SASI_RX_CH6_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | SASI_RX_CH6_CFG[1:0] | R/W | 00b | Secondary ASI input channel 6 configuration. 0d = Secondary ASI channel 6 input is disabled 1d = Secondary ASI channel 6 input corresponds to DAC Channel 6 data 2d = Secondary ASI channel 6 input corresponds to ADC Channel 2 output loopback 3d = Secondary ASI channel 6 input corresponds to ICLA device 1 data |
| 4-0 | SASI_RX_CH6_SLOT_NUM[4:0] | R/W | 00101b | Secondary ASI input channel 6 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.22 SASI_RX_CH7_CFG Register (Address = 0x2E) \[Reset = 0x06\]

SASI_RX_CH7_CFG is shown in [Table 8-189](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_RX_CH7_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI RX Channel 7 configuration register.

**Table 8-189 SASI_RX_CH7_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | SASI_RX_CH7_CFG[1:0] | R/W | 00b | Secondary ASI input channel 7 configuration. 0d = Secondary ASI channel 7 input is disabled 1d = Secondary ASI channel 7 input corresponds to DAC Channel 7 data 2d = Secondary ASI channel 7 input corresponds to ADC Channel 3 output loopback 3d = Secondary ASI channel 7 input corresponds to ICLA device 2 data |
| 4-0 | SASI_RX_CH7_SLOT_NUM[4:0] | R/W | 00110b | Secondary ASI input channel 7 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.23 SASI_RX_CH8_CFG Register (Address = 0x2F) \[Reset = 0x07\]

SASI_RX_CH8_CFG is shown in [Table 8-190](#BOOK0_PAGE3_B0_P3_B0_P3_SASI_RX_CH8_CFG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SASI RX Channel 8 configuration register.

**Table 8-190 SASI_RX_CH8_CFG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-5 | SASI_RX_CH8_CFG[1:0] | R/W | 00b | Secondary ASI input channel 8 configuration. 0d = Secondary ASI channel 8 input is disabled 1d = Secondary ASI channel 8 input corresponds to DAC Channel 8 data 2d = Secondary ASI channel 8 input corresponds to ADC Channel 4 output loopback 3d = Secondary ASI channel 8 input corresponds to ICLA device 3 data |
| 4-0 | SASI_RX_CH8_SLOT_NUM[4:0] | R/W | 00111b | Secondary ASI input channel 8 slot assignment. 0d = TDM is slot 0 or I<sup>2</sup>S, LJ is left slot 0 1d = TDM is slot 1 or I<sup>2</sup>S, LJ is left slot 1 2d to 14d = Slot assigned as per configuration 15d = TDM is slot 15 or I<sup>2</sup>S, LJ is left slot 15 16d = TDM is slot 16 or I<sup>2</sup>S, LJ is right slot 0 17d = TDM is slot 17 or I<sup>2</sup>S, LJ is right slot 1 18d to 30d = Slot assigned as per configuration 31d = TDM is slot 31 or I<sup>2</sup>S, LJ is right slot 15 |


## 8.1.3.24 CLK_CFG12 Register (Address = 0x32) \[Reset = 0x00\]

CLK_CFG12 is shown in [Table 8-191](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG12_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 12.

**Table 8-191 CLK_CFG12 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | PDIV_CLKSRC_SEL[1:0] | R/W | 00b | Source clock selection for PLL PDIV Divider. 0d = PLL_PDIV_IN_CLK is Primary ASI BCLK 1d = PLL_PDIV_IN_CLK is Secondary ASI BCLK 2d = PLL_PDIV_IN_CLK is CCLK 3d = PLL_PDIV_IN_CLK is internal Oscillator Clock (only supported in custom clock configuration) |
| 5-3 | PASI_BCLK_DIV_CLK_SEL[2:0] | R/W | 000b | Primary ASI BCLK divider clock source selection. 0d = Primary ASI BCLK divider clock source is PLL output 1d = Reserved 2d = Primary ASI BCLK divider clock source is secondary ASI BCLK 3d = Primary ASI BCLK divider clock source is CCLK 4d = Primary ASI BCLK divider clock source is internal oscillator clock (only supported in custom clock configuration) 5d = Primary ASI BCLK divider clock source is DSP clock 6d to 7d = Reserved |
| 2-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.3.25 CLK_CFG13 Register (Address = 0x33) \[Reset = 0x00\]

CLK_CFG13 is shown in [Table 8-192](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG13_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 13.

**Table 8-192 CLK_CFG13 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6-4 | SASI_BCLK_DIV_CLK_SEL[2:0] | R/W | 000b | Secondary ASI BCLK divider clock source selection. 0d = Secondary ASI BCLK divider clock source is PLL output 1d = Secondary ASI BCLK divider clock source is primary ASI BCLK 2d = Reserved 3d = Secondary ASI BCLK divider clock source is CCLK 4d = Secondary ASI BCLK divider clock source is internal oscillator clock (only supported in custom clock configuration) 5d = Secondary ASI BCLK divider clock source is DSP clock 6d to 7d = Reserved |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.1.3.26 CLK_CFG14 Register (Address = 0x34) \[Reset = 0x10\]

CLK_CFG14 is shown in [Table 8-193](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG14_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 14.

**Table 8-193 CLK_CFG14 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | DIG_NM_DIV_CLK_SRC_SEL[1:0] | R/W | 00b | Source clock selection for DIG NMDIV CLK clock. 0d = DIG NM divider input clock is Primary ASI BCLK 1d = DIG NM divider input clock is Secondary ASI BCLK 2d = DIG NM divider input clock is CCLK 3d = DIG NM divider input clock is internal oscillator clock (only supported in custom clock configuration) |
| 5-4 | ANA_NM_DIV_CLK_SRC_SEL[1:0] | R/W | 01b | Source clock selection for NMDIV CLK clock. 0d = NM divider input clock is PLL Output 1d = NM divider input clock is PLL Output 2d = NM divider input clock is DIG NM Divider Clock Source 3d = NM divider input clock is Primary ASI BCLK (Low Jitter Path) |
| 3-2 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.3.27 CLK_CFG15 Register (Address = 0x35) \[Reset = 0x01\]

CLK_CFG15 is shown in [Table 8-194](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG15_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 15.

**Table 8-194 CLK_CFG15 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | PLL_PDIV[7:0] | R/W | 00000001b | PLL pre-scaler P-divider value (Don't care when auto detection is enabled) 0d = PLL PDIV value is 256 1d = PLL PDIV value is 1 2d = PLL PDIV value is 2 3d to 254d = PLL PDIV value is as per configuration 255d = PLL PDIV value is 255 |


## 8.1.3.28 CLK_CFG16 Register (Address = 0x36) \[Reset = 0x00\]

CLK_CFG16 is shown in [Table 8-195](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG16_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 16.

**Table 8-195 CLK_CFG16 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | PLL_JMUL_MSB | R/W | 0b | PLL integer portion J-multiplier value MSB bit. (Don't care when auto detection is enabled) |
| 6 | PLL_DIV_CLK_DIG_BY_2 | R/W | 0b | PLL DIV clock divide by 2 configuration 0d = No divide/2 inside PLL 1d = PLL does a divide/2 |
| 5-0 | PLL_DMUL_MSB[5:0] | R/W | 000000b | PLL fractional portion D-multiplier value MSB bits. (Don't care when auto detection is enabled) |


## 8.1.3.29 CLK_CFG17 Register (Address = 0x37) \[Reset = 0x00\]

CLK_CFG17 is shown in [Table 8-196](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG17_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 17.

**Table 8-196 CLK_CFG17 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | PLL_DMUL_LSB[7:0] | R/W | 00000000b | PLL fractional portion D-multiplier value LSB byte. Above D-multiplier value MSB bits (PLL_DMUL_MSB) along with this LSB byte (PLL_DMUL_LSB) is concatenated to determine final D-multiplier value. (Don't care when auto detection is enabled) 0d = PLL DMUL value is 0 1d = PLL DMUL value is 1 2d = PLL DMUL value is 2 3d to 9998d = PLL JMUL value is as per configuration 9999d = PLL JMUL value is 9999 10000d to 16383d = Reserved; Don't use |


## 8.1.3.30 CLK_CFG18 Register (Address = 0x38) \[Reset = 0x08\]

CLK_CFG18 is shown in [Table 8-197](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG18_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 18.

**Table 8-197 CLK_CFG18 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | PLL_JMUL_LSB[7:0] | R/W | 00001000b | PLL integer portion J-multiplier value LSB byte. Above J-multiplier value MSB bit (PLL_JMUL_MSB) along with this LSB byte (PLL_JMUL_LSB) is concatenated to determine final J-multiplier value. (Don't care when auto detection is enabled) 0d = Reserved; Don't use 1d = PLL JMUL value is 1 2d = PLL JMUL value is 2 3d to 510d = PLL JMUL value is as per configuration 511d = PLL JMUL value is 511 |


## 8.1.3.31 CLK_CFG19 Register (Address = 0x39) \[Reset = 0x20\]

CLK_CFG19 is shown in [Table 8-198](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG19_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 19.

**Table 8-198 CLK_CFG19 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-5 | NDIV[2:0] | R/W | 001b | NDIV divider value. (Don't care when auto detection is enabled) 0d = NDIV value is 8 1d = NDIV value is 1 2d = NDIV value is 2 3d to 6d = NDIV value is as per configuration 7d = NDIV value is 7 |
| 4-2 | PDM_DIV[2:0] | R/W | 000b | PDM divider value. (Don't care when auto detection is enabled) 0d = PDM_DIV value is 1 1d = PDM_DIV value is 2 2d = PDM_DIV value is 4 3d = PDM_DIV value is 8 4d = PDM_DIV value is 16 5d-7d Reserved |
| 1-0 | RESERVED | R | 0b | Reserved bits; Write only reset values |


## 8.1.3.32 CLK_CFG20 Register (Address = 0x3A) \[Reset = 0x04\]

CLK_CFG20 is shown in [Table 8-199](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG20_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 20.

**Table 8-199 CLK_CFG20 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-2 | MDIV[5:0] | R/W | 000001b | MDIV divider value. (Don't care when auto detection is enabled) 0d = MDIV value is 64 1d = MDIV value is 1 2d = MDIV value is 2 3d to 62d = MDIV value is as per configuration 63d = MDIV value is 63 |
| 1-0 | DIG_ADC_MODCLK_DIV[1:0] | R/W | 00b | ADC modulator clock divider value. (Don't care when auto detection is enabled) 0d = DIG_ADC_MODCLK_DIV value is 1 1d = DIG_ADC_MODCLK_DIV value is 2 2d = DIG_ADC_MODCLK_DIV value is 4 3d = Reserved |


## 8.1.3.33 CLK_CFG21 Register (Address = 0x3B) \[Reset = 0x00\]

CLK_CFG21 is shown in [Table 8-200](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG21_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 21.

**Table 8-200 CLK_CFG21 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset values |
| 5-4 | DIG_DAC_MODCLK_DIV[1:0] | R/W | 00b | DAC modulator clock divider value. (Don't care when auto detection is enabled) 0d = DIG_DAC_MODCLK_DIV value is 1 1d = DIG_DAC_MODCLK_DIV value is 2 2d = DIG_DAC_MODCLK_DIV value is 4 3d = Reserved |
| 3 | DAC_MODCLKx2_DIS | R/W | 0b | DAC modulator clock select configuration. 0d = DAC MOD clock 2x enabled 1d = DAC MOD clock 2x disabled |
| 2 | PASI_BDIV_MSB | R/W | 0b | Primary ASI BCLK divider value MSB bit. (Don't care when auto detection is enabled) |
| 1 | SASI_BDIV_MSB | R/W | 0b | Secondary ASI BCLK divider value MSB bit. (Don't care when auto detection is enabled) |
| 0 | RESERVED | R | 0b | Reserved bit; Write only reset value |


## 8.1.3.34 CLK_CFG22 Register (Address = 0x3C) \[Reset = 0x01\]

CLK_CFG22 is shown in [Table 8-201](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG22_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 22.

**Table 8-201 CLK_CFG22 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | PASI_BDIV_LSB[7:0] | R/W | 00000001b | Secondary ASI BCLK divider value. (Don't care when auto detection is enabled) 0d = SASI BCLK divider value is 512 1d = SASI BCLK divider value is 1 2d = SASI BCLK divider value is 2 3d to 62d = SASI BCLK divider value is as per configuration 63d = SASI BCLK divider value is 511 |


## 8.1.3.35 CLK_CFG23 Register (Address = 0x3D) \[Reset = 0x01\]

CLK_CFG23 is shown in [Table 8-202](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG23_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 23.

**Table 8-202 CLK_CFG23 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-0 | SASI_BDIV_LSB[7:0] | R/W | 00000001b | Secondary ASI BCLK divider value. (Don't care when auto detection is enabled) 0d = SASI BCLK divider value is 512 1d = SASI BCLK divider value is 1 2d = SASI BCLK divider value is 2 3d to 62d = SASI BCLK divider value is as per configuration 63d = SASI BCLK divider value is 511 |


## 8.1.3.36 CLK_CFG24 Register (Address = 0x3E) \[Reset = 0x01\]

CLK_CFG24 is shown in [Table 8-203](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG24_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 24.

**Table 8-203 CLK_CFG24 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 5-0 | ANA_NM_DIV[5:0] | R/W | 000001b | Analog N-M DIV divider value. (Don't care when auto detection is enabled) 0d = ANA_NM_DIV value is 64 1d = ANA_NM_DIV value is 1 2d = ANA_NM_DIV value is 2 3d to 62d = ANA_NM_DIV value is as per configuration 63d = NDIV value is 63 |


## 8.1.3.37 CLK_CFG30 Register (Address = 0x44) \[Reset = 0x00\]

CLK_CFG30 is shown in [Table 8-204](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG30_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 30.

**Table 8-204 CLK_CFG30 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-3 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 2 | NDIV_EN | R/W | 0b | NDIV divider enable 0d = divider disabled 1d = divider enabled |
| 1 | MDIV_EN | R/W | 0b | MDIV divider enable 0d = divider disabled 1d = divider enabled |
| 0 | PDM_DIV_EN | R/W | 0b | PDM divider enable 0d = divider disabled 1d = divider enabled |


## 8.1.3.38 CLK_CFG31 Register (Address = 0x45) \[Reset = 0x00\]

CLK_CFG31 is shown in [Table 8-205](#BOOK0_PAGE3_B0_P3_B0_P3_CLK_CFG31_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the clock configuration register 31.

**Table 8-205 CLK_CFG31 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 6 | DIG_ADC_MODCLK_DIV_EN | R/W | 0b | ADC MODCLK divider enable 0d = divider disabled 1d = divider enabled |
| 5 | RESERVED | R | 0b | Reserved bit; Write only reset value |
| 4 | DIG_DAC_MODCLK_DIV_EN | R/W | 0b | DAC MODCLK divider enable 0d = divider disabled 1d = divider enabled |
| 3 | PASI_BDIV_EN | R/W | 0b | PASI BDIV divider enable 0d = divider disabled 1d = divider enabled |
| 2 | SASI_BDIV_EN | R/W | 0b | SASI BDIV divider enable 0d = divider disabled 1d = divider enabled |
| 1 | PASI_FSYNC_DIV_EN | R/W | 0b | PASI FSYNC DIV divider enable 0d = divider disabled 1d = divider enabled |
| 0 | SASI_FSYNC_DIV_EN | R/W | 0b | SASI FSYNC DIV divider enable 0d = divider disabled 1d = divider enabled |


## 8.1.3.39 CLKOUT_CFG1 Register (Address = 0x46) \[Reset = 0x00\]

CLKOUT_CFG1 is shown in [Table 8-206](#BOOK0_PAGE3_B0_P3_B0_P3_CLKOUT_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the CLKOUT configuration register 1.

**Table 8-206 CLKOUT_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-3 | RESERVED | R | 0b | Reserved bits; Write only reset value |
| 2-0 | CLKOUT_CLK_SEL[2:0] | R/W | 000b | General Purpose CLKOUT divider clock source selection. 0d = Source clock is PLL output 1d = Source clock is primary ASI BCLK 2d = Source clock is secondary ASI BCLK 3d = Source clock is CCLK 4d = Source clock is internal oscillator clock 5d = Source clock is DSP clock 6d to 7d = Reserved |


## 8.1.3.40 CLKOUT_CFG2 Register (Address = 0x47) \[Reset = 0x01\]

CLKOUT_CFG2 is shown in [Table 8-207](#BOOK0_PAGE3_B0_P3_B0_P3_CLKOUT_CFG2_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the CLKOUT configuration register 2.

**Table 8-207 CLKOUT_CFG2 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | CLKOUT_DIV_EN | R/W | 0b | CLKOUT divider enable. 0d = CLKOUT divider disabled 1d = CLKOUT divider enabled |
| 6-0 | CLKOUT_DIV[6:0] | R/W | 0000001b | CLKOUT DIV divider value. 0d = CLKOUT_DIV value is 128 1d = CLKOUT_DIV value is 1 2d = CLKOUT_DIV value is 2 3d to 126d = CLKOUT_DIV value is as per configuration 127d = CLKOUT_DIV value is 127 |


## 8.1.3.41 SARCLK_CFG1 Register (Address = 0x49) \[Reset = 0x00\]

SARCLK_CFG1 is shown in [Table 8-208](#BOOK0_PAGE3_B0_P3_B0_P3_SARCLK_CFG1_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This register is the SAR clock configuration register 1

**Table 8-208 SARCLK_CFG1 Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7-6 | SAR_CLK_FREQ_SEL[1:0] | R/W | 00b | SAR clock frequency mode 0d = SAR clock frequency is ~6MHz 1d = SAR clock frequency is ~3MHz 2d = SAR clock frequency is ~1.5MHz 3d = SAR clock frequency is ~12MHz (valid only when SAR clock is generated directly using internal oscillator clock in custom clock configuration) |
| 5 | SAR_CLK_SRC_AUTO_DIS | R/W | 0b | SAR divider source clock auto selection disable 0d = SAR divider source clock auto-selection based on clock detection scheme 1d = Reserved |
| 4 | SAR_CLK_SRC_MANUAL_SEL | R/W | 0b | SAR clock source manual selection (don't care in auto mode) 0d = SAR clock generated based on Audio clock available for ADC/DAC 1d = SAR clock generated based on internal oscillator clock (only supported in custom clock configuration) |
| 3 | SAR_CLK_EN_AUTO_DIS | R/W | 0b | SAR divider source clock auto selection disable 0d = SAR divider auto-enabled 1d = Reserved |
| 2 | SAR_CLK_MANUAL_EN | R/W | 0b | SAR divider manual enable (don't care in auto mode) 0d = SAR divider disabled 1d = SAR divider enabled |
| 1-0 | SAR_CLK_MANUAL_DIV[1:0] | R/W | 00b | SAR divider value (don't care in auto mode) 0d = SAR divider value is 1 1d = SAR divider value is 2 2d = SAR divider value is 4 3d = SAR divider value is 8 |


## 8.1.3.42 ADC_OVRLD_FLAG Register (Address = 0x5B) \[Reset = 0x00\]

ADC_OVRLD_FLAG is shown in [Table 8-209](#BOOK0_PAGE3_B0_P3_B0_P3_ADC_OVRLD_FLAG_TABLE_TABLE).

Return to the [Summary Table](#BOOK0_PAGE3_B0_P3_TABLE_1_TABLE).

This is the ADC overload flag status register.

**Table 8-209 ADC_OVRLD_FLAG Register Field Descriptions**


| Bit | Field | Type | Reset | Description |
| --- | --- | --- | --- | --- |
| 7 | ADC_CH1_OVRLD_LTCH | R | 0b | ADC CH1 OVRLD fault (self clearing bit). 0b = No ADC CH1 OVRLD fault 1b = ADC CH1 OVRLD fault |
| 6 | ADC_CH2_OVRLD_LTCH | R | 0b | ADC CH2 OVRLD fault (self clearing bit). 0b = No ADC CH2 OVRLD fault 1b = ADC CH2 OVRLD fault |
| 5 | ADC_CH1_OVRLD_LIVE | R | 0b | ADC CH1 OVRLD fault (self clearing bit). 0b = No ADC CH1 OVRLD fault 1b = ADC CH1 OVRLD fault |
| 4 | ADC_CH2_OVRLD_LIVE | R | 0b | ADC CH2 OVRLD fault (self clearing bit). 0b = No ADC CH2 OVRLD fault 1b = ADC CH2 OVRLD fault |
| 3-0 | RESERVED | R | 0b | Reserved bits; Write only reset value |


## 8.2  Programmable Coefficient Registers

The register pages in this section consists of the programmable coefficients of the device. TI recommends using the PPC3 GUI for configuring the programmable coefficients settings; for more details see the [_TAC5212EVM-PDK Evaluation module_ user's guide](https://www.ti.com/lit/pdf/SBAU359) and the [PurePath™ console graphical development suite](http://www.ti.com/tool/PUREPATHCONSOLE). To optimize the coefficients register transaction time for the register pages in this section, the device also supports (by default) auto-incremented pages for the I<sup>2</sup>C and SPI burst writes and reads. After a transaction of register address 0x7F, the device auto increments to the next page at register 0x08 to transact the next coefficient value. These programmable coefficients are 32-bit, two’s complement numbers. For a successful coefficient register transaction, the host device must write and read all four bytes starting with the most significant byte (BYT1) for a target coefficient register transaction. When using SPI for a coefficient register read transaction, the device transmits the first byte as a dummy read byte; therefore, the host must read five bytes, including the first dummy read byte and the last four bytes corresponding to the coefficient register value starting with the most significant byte (BYT1).


### 8.2.1  Programmable Coefficient Registers: Page 8

This register page shown in [Table 8-222](#TABLE_FNW_L32_PDC) consists of the programmable coefficients for the ADC biquad 1 to biquad 6 filters.

**Table 8-210 Page 8 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x08 | ADC_BQ1_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 1, N0 coefficient byte[31:24] |
| 0x09 | ADC_BQ1_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 1, N0 coefficient byte[23:16] |
| 0x0A | ADC_BQ1_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 1, N0 coefficient byte[15:8] |
| 0x0B | ADC_BQ1_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 1, N0 coefficient byte[7:0] |
| 0x0C | ADC_BQ1_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 1, N1 coefficient byte[31:24] |
| 0x0D | ADC_BQ1_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 1, N1 coefficient byte[23:16] |
| 0x0E | ADC_BQ1_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 1, N1 coefficient byte[15:8] |
| 0x0F | ADC_BQ1_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 1, N1 coefficient byte[7:0] |
| 0x10 | ADC_BQ1_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 1, N2 coefficient byte[31:24] |
| 0x11 | ADC_BQ1_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 1, N2 coefficient byte[23:16] |
| 0x12 | ADC_BQ1_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 1, N2 coefficient byte[15:8] |
| 0x13 | ADC_BQ1_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 1, N2 coefficient byte[7:0] |
| 0x14 | ADC_BQ1_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 1, D1 coefficient byte[31:24] |
| 0x15 | ADC_BQ1_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 1, D1 coefficient byte[23:16] |
| 0x16 | ADC_BQ1_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 1, D1 coefficient byte[15:8] |
| 0x17 | ADC_BQ1_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 1, D1 coefficient byte[7:0] |
| 0x18 | ADC_BQ1_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 1, D2 coefficient byte[31:24] |
| 0x19 | ADC_BQ1_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 1, D2 coefficient byte[23:16] |
| 0x1A | ADC_BQ1_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 1, D2 coefficient byte[15:8] |
| 0x1B | ADC_BQ1_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 1, D2 coefficient byte[7:0] |
| 0x1C | ADC_BQ2_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 2, N0 coefficient byte[31:24] |
| 0x1D | ADC_BQ2_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 2, N0 coefficient byte[23:16] |
| 0x1E | ADC_BQ2_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 2, N0 coefficient byte[15:8] |
| 0x1F | ADC_BQ2_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 2, N0 coefficient byte[7:0] |
| 0x20 | ADC_BQ2_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 2, N1 coefficient byte[31:24] |
| 0x21 | ADC_BQ2_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 2, N1 coefficient byte[23:16] |
| 0x22 | ADC_BQ2_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 2, N1 coefficient byte[15:8] |
| 0x23 | ADC_BQ2_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 2, N1 coefficient byte[7:0] |
| 0x24 | ADC_BQ2_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 2, N2 coefficient byte[31:24] |
| 0x25 | ADC_BQ2_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 2, N2 coefficient byte[23:16] |
| 0x26 | ADC_BQ2_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 2, N2 coefficient byte[15:8] |
| 0x27 | ADC_BQ2_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 2, N2 coefficient byte[7:0] |
| 0x28 | ADC_BQ2_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 2, D1 coefficient byte[31:24] |
| 0x29 | ADC_BQ2_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 2, D1 coefficient byte[23:16] |
| 0x2A | ADC_BQ2_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 2, D1 coefficient byte[15:8] |
| 0x2B | ADC_BQ2_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 2, D1 coefficient byte[7:0] |
| 0x2C | ADC_BQ2_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 2, D2 coefficient byte[31:24] |
| 0x2D | ADC_BQ2_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 2, D2 coefficient byte[23:16] |
| 0x2E | ADC_BQ2_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 2, D2 coefficient byte[15:8] |
| 0x2F | ADC_BQ2_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 2, D2 coefficient byte[7:0] |
| 0x30 | ADC_BQ3_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 3, N0 coefficient byte[31:24] |
| 0x31 | ADC_BQ3_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 3, N0 coefficient byte[23:16] |
| 0x32 | ADC_BQ3_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 3, N0 coefficient byte[15:8] |
| 0x33 | ADC_BQ3_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 3, N0 coefficient byte[7:0] |
| 0x34 | ADC_BQ3_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 3, N1 coefficient byte[31:24] |
| 0x35 | ADC_BQ3_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 3, N1 coefficient byte[23:16] |
| 0x36 | ADC_BQ3_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 3, N1 coefficient byte[15:8] |
| 0x37 | ADC_BQ3_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 3, N1 coefficient byte[7:0] |
| 0x38 | ADC_BQ3_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 3, N2 coefficient byte[31:24] |
| 0x39 | ADC_BQ3_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 3, N2 coefficient byte[23:16] |
| 0x3A | ADC_BQ3_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 3, N2 coefficient byte[15:8] |
| 0x3B | ADC_BQ3_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 3, N2 coefficient byte[7:0] |
| 0x3C | ADC_BQ3_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 3, D1 coefficient byte[31:24] |
| 0x3D | ADC_BQ3_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 3, D1 coefficient byte[23:16] |
| 0x3E | ADC_BQ3_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 3, D1 coefficient byte[15:8] |
| 0x3F | ADC_BQ3_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 3, D1 coefficient byte[7:0] |
| 0x40 | ADC_BQ3_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 3, D2 coefficient byte[31:24] |
| 0x41 | ADC_BQ3_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 3, D2 coefficient byte[23:16] |
| 0x42 | ADC_BQ3_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 3, D2 coefficient byte[15:8] |
| 0x43 | ADC_BQ3_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 3, D2 coefficient byte[7:0] |
| 0x44 | ADC_BQ4_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 4, N0 coefficient byte[31:24] |
| 0x45 | ADC_BQ4_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 4, N0 coefficient byte[23:16] |
| 0x46 | ADC_BQ4_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 4, N0 coefficient byte[15:8] |
| 0x47 | ADC_BQ4_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 4, N0 coefficient byte[7:0] |
| 0x48 | ADC_BQ4_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 4, N1 coefficient byte[31:24] |
| 0x49 | ADC_BQ4_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 4, N1 coefficient byte[23:16] |
| 0x4A | ADC_BQ4_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 4, N1 coefficient byte[15:8] |
| 0x4B | ADC_BQ4_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 4, N1 coefficient byte[7:0] |
| 0x4C | ADC_BQ4_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 4, N2 coefficient byte[31:24] |
| 0x4D | ADC_BQ4_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 4, N2 coefficient byte[23:16] |
| 0x4E | ADC_BQ4_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 4, N2 coefficient byte[15:8] |
| 0x4F | ADC_BQ4_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 4, N2 coefficient byte[7:0] |
| 0x50 | ADC_BQ4_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 4, D1 coefficient byte[31:24] |
| 0x51 | ADC_BQ4_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 4, D1 coefficient byte[23:16] |
| 0x52 | ADC_BQ4_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 4, D1 coefficient byte[15:8] |
| 0x53 | ADC_BQ4_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 4, D1 coefficient byte[7:0] |
| 0x54 | ADC_BQ4_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 4, D2 coefficient byte[31:24] |
| 0x55 | ADC_BQ4_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 4, D2 coefficient byte[23:16] |
| 0x56 | ADC_BQ4_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 4, D2 coefficient byte[15:8] |
| 0x57 | ADC_BQ4_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 4, D2 coefficient byte[7:0] |
| 0x58 | ADC_BQ5_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 5, N0 coefficient byte[31:24] |
| 0x59 | ADC_BQ5_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 5, N0 coefficient byte[23:16] |
| 0x5A | ADC_BQ5_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 5, N0 coefficient byte[15:8] |
| 0x5B | ADC_BQ5_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 5, N0 coefficient byte[7:0] |
| 0x5C | ADC_BQ5_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 5, N1 coefficient byte[31:24] |
| 0x5D | ADC_BQ5_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 5, N1 coefficient byte[23:16] |
| 0x5E | ADC_BQ5_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 5, N1 coefficient byte[15:8] |
| 0x5F | ADC_BQ5_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 5, N1 coefficient byte[7:0] |
| 0x60 | ADC_BQ5_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 5, N2 coefficient byte[31:24] |
| 0x61 | ADC_BQ5_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 5, N2 coefficient byte[23:16] |
| 0x62 | ADC_BQ5_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 5, N2 coefficient byte[15:8] |
| 0x63 | ADC_BQ5_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 5, N2 coefficient byte[7:0] |
| 0x64 | ADC_BQ5_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 5, D1 coefficient byte[31:24] |
| 0x65 | ADC_BQ5_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 5, D1 coefficient byte[23:16] |
| 0x66 | ADC_BQ5_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 5, D1 coefficient byte[15:8] |
| 0x67 | ADC_BQ5_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 5, D1 coefficient byte[7:0] |
| 0x68 | ADC_BQ5_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 5, D2 coefficient byte[31:24] |
| 0x69 | ADC_BQ5_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 5, D2 coefficient byte[23:16] |
| 0x6A | ADC_BQ5_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 5, D2 coefficient byte[15:8] |
| 0x6B | ADC_BQ5_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 5, D2 coefficient byte[7:0] |
| 0x6C | ADC_BQ6_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 6, N0 coefficient byte[31:24] |
| 0x6D | ADC_BQ6_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 6, N0 coefficient byte[23:16] |
| 0x6E | ADC_BQ6_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 6, N0 coefficient byte[15:8] |
| 0x6F | ADC_BQ6_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 6, N0 coefficient byte[7:0] |
| 0x70 | ADC_BQ6_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 6, N1 coefficient byte[31:24] |
| 0x71 | ADC_BQ6_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 6, N1 coefficient byte[23:16] |
| 0x72 | ADC_BQ6_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 6, N1 coefficient byte[15:8] |
| 0x73 | ADC_BQ6_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 6, N1 coefficient byte[7:0] |
| 0x74 | ADC_BQ6_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 6, N2 coefficient byte[31:24] |
| 0x75 | ADC_BQ6_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 6, N2 coefficient byte[23:16] |
| 0x76 | ADC_BQ6_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 6, N2 coefficient byte[15:8] |
| 0x77 | ADC_BQ6_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 6, N2 coefficient byte[7:0] |
| 0x78 | ADC_BQ6_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 6, D1 coefficient byte[31:24] |
| 0x79 | ADC_BQ6_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 6, D1 coefficient byte[23:16] |
| 0x7A | ADC_BQ6_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 6, D1 coefficient byte[15:8] |
| 0x7B | ADC_BQ6_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 6, D1 coefficient byte[7:0] |
| 0x7C | ADC_BQ6_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 6, D2 coefficient byte[31:24] |
| 0x7D | ADC_BQ6_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 6, D2 coefficient byte[23:16] |
| 0x7E | ADC_BQ6_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 6, D2 coefficient byte[15:8] |
| 0x7F | ADC_BQ6_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 6, D2 coefficient byte[7:0] |


### 8.2.2  Programmable Coefficient Registers: Page 9

This register page shown in [Table 8-222](#TABLE_FNW_L32_PDC) consists of the programmable coefficients for the ADC biquad 7 to biquad 12 filters.

**Table 8-211 Page 9 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x08 | ADC_BQ7_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 7, N0 coefficient byte[31:24] |
| 0x09 | ADC_BQ7_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 7, N0 coefficient byte[23:16] |
| 0x0A | ADC_BQ7_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 7, N0 coefficient byte[15:8] |
| 0x0B | ADC_BQ7_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 7, N0 coefficient byte[7:0] |
| 0x0C | ADC_BQ7_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 7, N1 coefficient byte[31:24] |
| 0x0D | ADC_BQ7_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 7, N1 coefficient byte[23:16] |
| 0x0E | ADC_BQ7_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 7, N1 coefficient byte[15:8] |
| 0x0F | ADC_BQ7_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 7, N1 coefficient byte[7:0] |
| 0x10 | ADC_BQ7_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 7, N2 coefficient byte[31:24] |
| 0x11 | ADC_BQ7_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 7, N2 coefficient byte[23:16] |
| 0x12 | ADC_BQ7_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 7, N2 coefficient byte[15:8] |
| 0x13 | ADC_BQ7_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 7, N2 coefficient byte[7:0] |
| 0x14 | ADC_BQ7_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 7, D1 coefficient byte[31:24] |
| 0x15 | ADC_BQ7_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 7, D1 coefficient byte[23:16] |
| 0x16 | ADC_BQ7_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 7, D1 coefficient byte[15:8] |
| 0x17 | ADC_BQ7_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 7, D1 coefficient byte[7:0] |
| 0x18 | ADC_BQ7_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 7, D2 coefficient byte[31:24] |
| 0x19 | ADC_BQ7_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 7, D2 coefficient byte[23:16] |
| 0x1A | ADC_BQ7_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 7, D2 coefficient byte[15:8] |
| 0x1B | ADC_BQ7_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 7, D2 coefficient byte[7:0] |
| 0x1C | ADC_BQ8_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 8, N0 coefficient byte[31:24] |
| 0x1D | ADC_BQ8_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 8, N0 coefficient byte[23:16] |
| 0x1E | ADC_BQ8_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 8, N0 coefficient byte[15:8] |
| 0x1F | ADC_BQ8_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 8, N0 coefficient byte[7:0] |
| 0x20 | ADC_BQ8_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 8, N1 coefficient byte[31:24] |
| 0x21 | ADC_BQ8_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 8, N1 coefficient byte[23:16] |
| 0x22 | ADC_BQ8_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 8, N1 coefficient byte[15:8] |
| 0x23 | ADC_BQ8_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 8, N1 coefficient byte[7:0] |
| 0x24 | ADC_BQ8_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 8, N2 coefficient byte[31:24] |
| 0x25 | ADC_BQ8_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 8, N2 coefficient byte[23:16] |
| 0x26 | ADC_BQ8_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 8, N2 coefficient byte[15:8] |
| 0x27 | ADC_BQ8_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 8, N2 coefficient byte[7:0] |
| 0x28 | ADC_BQ8_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 8, D1 coefficient byte[31:24] |
| 0x29 | ADC_BQ8_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 8, D1 coefficient byte[23:16] |
| 0x2A | ADC_BQ8_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 8, D1 coefficient byte[15:8] |
| 0x2B | ADC_BQ8_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 8, D1 coefficient byte[7:0] |
| 0x2C | ADC_BQ8_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 8, D2 coefficient byte[31:24] |
| 0x2D | ADC_BQ8_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 8, D2 coefficient byte[23:16] |
| 0x2E | ADC_BQ8_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 8, D2 coefficient byte[15:8] |
| 0x2F | ADC_BQ8_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 8, D2 coefficient byte[7:0] |
| 0x30 | ADC_BQ9_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 9, N0 coefficient byte[31:24] |
| 0x31 | ADC_BQ9_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 9, N0 coefficient byte[23:16] |
| 0x32 | ADC_BQ9_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 9, N0 coefficient byte[15:8] |
| 0x33 | ADC_BQ9_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 9, N0 coefficient byte[7:0] |
| 0x34 | ADC_BQ9_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 9, N1 coefficient byte[31:24] |
| 0x35 | ADC_BQ9_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 9, N1 coefficient byte[23:16] |
| 0x36 | ADC_BQ9_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 9, N1 coefficient byte[15:8] |
| 0x37 | ADC_BQ9_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 9, N1 coefficient byte[7:0] |
| 0x38 | ADC_BQ9_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 9, N2 coefficient byte[31:24] |
| 0x39 | ADC_BQ9_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 9, N2 coefficient byte[23:16] |
| 0x3A | ADC_BQ9_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 9, N2 coefficient byte[15:8] |
| 0x3B | ADC_BQ9_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 9, N2 coefficient byte[7:0] |
| 0x3C | ADC_BQ9_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 9, D1 coefficient byte[31:24] |
| 0x3D | ADC_BQ9_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 9, D1 coefficient byte[23:16] |
| 0x3E | ADC_BQ9_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 9, D1 coefficient byte[15:8] |
| 0x3F | ADC_BQ9_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 9, D1 coefficient byte[7:0] |
| 0x40 | ADC_BQ9_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 9, D2 coefficient byte[31:24] |
| 0x41 | ADC_BQ9_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 9, D2 coefficient byte[23:16] |
| 0x42 | ADC_BQ9_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 9, D2 coefficient byte[15:8] |
| 0x43 | ADC_BQ9_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 9, D2 coefficient byte[7:0] |
| 0x44 | ADC_BQ10_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 10, N0 coefficient byte[31:24] |
| 0x45 | ADC_BQ10_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 10, N0 coefficient byte[23:16] |
| 0x46 | ADC_BQ10_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 10, N0 coefficient byte[15:8] |
| 0x47 | ADC_BQ10_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 10, N0 coefficient byte[7:0] |
| 0x48 | ADC_BQ10_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 10, N1 coefficient byte[31:24] |
| 0x49 | ADC_BQ10_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 10, N1 coefficient byte[23:16] |
| 0x4A | ADC_BQ10_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 10, N1 coefficient byte[15:8] |
| 0x4B | ADC_BQ10_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 10, N1 coefficient byte[7:0] |
| 0x4C | ADC_BQ10_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 10, N2 coefficient byte[31:24] |
| 0x4D | ADC_BQ10_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 10, N2 coefficient byte[23:16] |
| 0x4E | ADC_BQ10_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 10, N2 coefficient byte[15:8] |
| 0x4F | ADC_BQ10_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 10, N2 coefficient byte[7:0] |
| 0x50 | ADC_BQ10_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 10, D1 coefficient byte[31:24] |
| 0x51 | ADC_BQ10_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 10, D1 coefficient byte[23:16] |
| 0x52 | ADC_BQ10_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 10, D1 coefficient byte[15:8] |
| 0x53 | ADC_BQ10_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 10, D1 coefficient byte[7:0] |
| 0x54 | ADC_BQ10_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 10, D2 coefficient byte[31:24] |
| 0x55 | ADC_BQ10_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 10, D2 coefficient byte[23:16] |
| 0x56 | ADC_BQ10_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 10, D2 coefficient byte[15:8] |
| 0x57 | ADC_BQ10_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 10, D2 coefficient byte[7:0] |
| 0x58 | ADC_BQ11_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 11, N0 coefficient byte[31:24] |
| 0x59 | ADC_BQ11_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 11, N0 coefficient byte[23:16] |
| 0x5A | ADC_BQ11_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 11, N0 coefficient byte[15:8] |
| 0x5B | ADC_BQ11_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 11, N0 coefficient byte[7:0] |
| 0x5C | ADC_BQ11_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 11, N1 coefficient byte[31:24] |
| 0x5D | ADC_BQ11_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 11, N1 coefficient byte[23:16] |
| 0x5E | ADC_BQ11_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 11, N1 coefficient byte[15:8] |
| 0x5F | ADC_BQ11_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 11, N1 coefficient byte[7:0] |
| 0x60 | ADC_BQ11_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 11, N2 coefficient byte[31:24] |
| 0x61 | ADC_BQ11_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 11, N2 coefficient byte[23:16] |
| 0x62 | ADC_BQ11_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 11, N2 coefficient byte[15:8] |
| 0x63 | ADC_BQ11_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 11, N2 coefficient byte[7:0] |
| 0x64 | ADC_BQ11_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 11, D1 coefficient byte[31:24] |
| 0x65 | ADC_BQ11_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 11, D1 coefficient byte[23:16] |
| 0x66 | ADC_BQ11_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 11, D1 coefficient byte[15:8] |
| 0x67 | ADC_BQ11_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 11, D1 coefficient byte[7:0] |
| 0x68 | ADC_BQ11_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 11, D2 coefficient byte[31:24] |
| 0x69 | ADC_BQ11_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 11, D2 coefficient byte[23:16] |
| 0x6A | ADC_BQ11_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 11, D2 coefficient byte[15:8] |
| 0x6B | ADC_BQ11_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 11, D2 coefficient byte[7:0] |
| 0x6C | ADC_BQ12_N0_BYT1[7:0] | 0x7F | Programmable ADC biquad 12, N0 coefficient byte[31:24] |
| 0x6D | ADC_BQ12_N0_BYT2[7:0] | 0xFF | Programmable ADC biquad 12, N0 coefficient byte[23:16] |
| 0x6E | ADC_BQ12_N0_BYT3[7:0] | 0xFF | Programmable ADC biquad 12, N0 coefficient byte[15:8] |
| 0x6F | ADC_BQ12_N0_BYT4[7:0] | 0xFF | Programmable ADC biquad 12, N0 coefficient byte[7:0] |
| 0x70 | ADC_BQ12_N1_BYT1[7:0] | 0x00 | Programmable ADC biquad 12, N1 coefficient byte[31:24] |
| 0x71 | ADC_BQ12_N1_BYT2[7:0] | 0x00 | Programmable ADC biquad 12, N1 coefficient byte[23:16] |
| 0x72 | ADC_BQ12_N1_BYT3[7:0] | 0x00 | Programmable ADC biquad 12, N1 coefficient byte[15:8] |
| 0x73 | ADC_BQ12_N1_BYT4[7:0] | 0x00 | Programmable ADC biquad 12, N1 coefficient byte[7:0] |
| 0x74 | ADC_BQ12_N2_BYT1[7:0] | 0x00 | Programmable ADC biquad 12, N2 coefficient byte[31:24] |
| 0x75 | ADC_BQ12_N2_BYT2[7:0] | 0x00 | Programmable ADC biquad 12, N2 coefficient byte[23:16] |
| 0x76 | ADC_BQ12_N2_BYT3[7:0] | 0x00 | Programmable ADC biquad 12, N2 coefficient byte[15:8] |
| 0x77 | ADC_BQ12_N2_BYT4[7:0] | 0x00 | Programmable ADC biquad 12, N2 coefficient byte[7:0] |
| 0x78 | ADC_BQ12_D1_BYT1[7:0] | 0x00 | Programmable ADC biquad 12, D1 coefficient byte[31:24] |
| 0x79 | ADC_BQ12_D1_BYT2[7:0] | 0x00 | Programmable ADC biquad 12, D1 coefficient byte[23:16] |
| 0x7A | ADC_BQ12_D1_BYT3[7:0] | 0x00 | Programmable ADC biquad 12, D1 coefficient byte[15:8] |
| 0x7B | ADC_BQ12_D1_BYT4[7:0] | 0x00 | Programmable ADC biquad 12, D1 coefficient byte[7:0] |
| 0x7C | ADC_BQ12_D2_BYT1[7:0] | 0x00 | Programmable ADC biquad 12, D2 coefficient byte[31:24] |
| 0x7D | ADC_BQ12_D2_BYT2[7:0] | 0x00 | Programmable ADC biquad 12, D2 coefficient byte[23:16] |
| 0x7E | ADC_BQ12_D2_BYT3[7:0] | 0x00 | Programmable ADC biquad 12, D2 coefficient byte[15:8] |
| 0x7F | ADC_BQ12_D2_BYT4[7:0] | 0x00 | Programmable ADC biquad 12, D2 coefficient byte[7:0] |


### 8.2.3  Programmable Coefficient Registers: Page 10

This register page shown in [Table 8-212](#TABLE_SWV_HKS_QDC) consists of the prorammable coefficients for the ADC mixer 1 to 4, ADC to DAC loopback mixer and the ADC first-order IIR filter. All channel mixer coefficients are 32-bit, two’s complement numbers using a 1.31 number format. The value of 0x7FFFFFFF is equivalent to +1 (0-dB gain), the value 0x00000000 is equivalent to mute (zero data) and all values in between set the mixer attenuation computed accordingly (_hex2dec(value)/2<sup>31</sup>_). If the MSB is set to '1' then the attenuation remains the same but the signal phase is inverted.

**Table 8-212 Page 10 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x08 | ADC_MIX1_CH1_BYT1[7:0] | 0x7F | Digital mixer 1, ADC channel 1 coefficient byte[31:24] |
| 0x09 | ADC_MIX1_CH1_BYT2[7:0] | 0xFF | Digital mixer 1, ADC channel 1 coefficient byte[23:16] |
| 0x0A | ADC_MIX1_CH1_BYT3[7:0] | 0xFF | Digital mixer 1, ADC channel 1 coefficient byte[15:8] |
| 0x0B | ADC_MIX1_CH1_BYT4[7:0] | 0xFF | Digital mixer 1, ADC channel 1 coefficient byte[7:0] |
| 0x0C | ADC_MIX1_CH2_BYT1[7:0] | 0x00 | Digital mixer 1, ADC channel 2 coefficient byte[31:24] |
| 0x0D | ADC_MIX1_CH2_BYT2[7:0] | 0x00 | Digital mixer 1, ADC channel 2 coefficient byte[23:16] |
| 0x0E | ADC_MIX1_CH2_BYT3[7:0] | 0x00 | Digital mixer 1, ADC channel 2 coefficient byte[15:8] |
| 0x0F | ADC_MIX1_CH2_BYT4[7:0] | 0x00 | Digital mixer 1, ADC channel 2 coefficient byte[7:0] |
| 0x10 | ADC_MIX1_CH3_BYT1[7:0] | 0x00 | Digital mixer 1, ADC channel 3 coefficient byte[31:24] |
| 0x11 | ADC_MIX1_CH3_BYT2[7:0] | 0x00 | Digital mixer 1, ADC channel 3 coefficient byte[23:16] |
| 0x12 | ADC_MIX1_CH3_BYT3[7:0] | 0x00 | Digital mixer 1, ADC channel 3 coefficient byte[15:8] |
| 0x13 | ADC_MIX1_CH3_BYT4[7:0] | 0x00 | Digital mixer 1, ADC channel 3 coefficient byte[7:0] |
| 0x14 | ADC_MIX1_CH4_BYT1[7:0] | 0x00 | Digital mixer 1, ADC channel 4 coefficient byte[31:24] |
| 0x15 | ADC_MIX1_CH4_BYT2[7:0] | 0x00 | Digital mixer 1, ADC channel 4 coefficient byte[23:16] |
| 0x16 | ADC_MIX1_CH4_BYT3[7:0] | 0x00 | Digital mixer 1, ADC channel 4 coefficient byte[15:8] |
| 0x17 | ADC_MIX1_CH4_BYT4[7:0] | 0x00 | Digital mixer 1, ADC channel 4 coefficient byte[7:0] |
| 0x18 | ADC_MIX2_CH1_BYT1[7:0] | 0x00 | Digital mixer 2, ADC channel 1 coefficient byte[31:24] |
| 0x19 | ADC_MIX2_CH1_BYT2[7:0] | 0x00 | Digital mixer 2, ADC channel 1 coefficient byte[23:16] |
| 0x1A | ADC_MIX2_CH1_BYT3[7:0] | 0x00 | Digital mixer 2, ADC channel 1 coefficient byte[15:8] |
| 0x1B | ADC_MIX2_CH1_BYT4[7:0] | 0x00 | Digital mixer 2, ADC channel 1 coefficient byte[7:0] |
| 0x1C | ADC_MIX2_CH2_BYT1[7:0] | 0x7F | Digital mixer 2, ADC channel 2 coefficient byte[31:24] |
| 0x1D | ADC_MIX2_CH2_BYT2[7:0] | 0xFF | Digital mixer 2, ADC channel 2 coefficient byte[23:16] |
| 0x1E | ADC_MIX2_CH2_BYT3[7:0] | 0xFF | Digital mixer 2, ADC channel 2 coefficient byte[15:8] |
| 0x1F | ADC_MIX2_CH2_BYT4[7:0] | 0xFF | Digital mixer 2, ADC channel 2 coefficient byte[7:0] |
| 0x20 | ADC_MIX2_CH3_BYT1[7:0] | 0x00 | Digital mixer 2, ADC channel 3 coefficient byte[31:24] |
| 0x21 | ADC_MIX2_CH3_BYT2[7:0] | 0x00 | Digital mixer 2, ADC channel 3 coefficient byte[23:16] |
| 0x22 | ADC_MIX2_CH3_BYT3[7:0] | 0x00 | Digital mixer 2, ADC channel 3 coefficient byte[15:8] |
| 0x23 | ADC_MIX2_CH3_BYT4[7:0] | 0x00 | Digital mixer 2, ADC channel 3 coefficient byte[7:0] |
| 0x24 | ADC_MIX2_CH4_BYT1[7:0] | 0x00 | Digital mixer 2, ADC channel 4 coefficient byte[31:24] |
| 0x25 | ADC_MIX2_CH4_BYT2[7:0] | 0x00 | Digital mixer 2, ADC channel 4 coefficient byte[23:16] |
| 0x26 | ADC_MIX2_CH4_BYT3[7:0] | 0x00 | Digital mixer 2, ADC channel 4 coefficient byte[15:8] |
| 0x27 | ADC_MIX2_CH4_BYT4[7:0] | 0x00 | Digital mixer 2, ADC channel 4 coefficient byte[7:0] |
| 0x28 | ADC_MIX3_CH1_BYT1[7:0] | 0x00 | Digital mixer 3, ADC channel 1 coefficient byte[31:24] |
| 0x29 | ADC_MIX3_CH1_BYT2[7:0] | 0x00 | Digital mixer 3, ADC channel 1 coefficient byte[23:16] |
| 0x2A | ADC_MIX3_CH1_BYT3[7:0] | 0x00 | Digital mixer 3, ADC channel 1 coefficient byte[15:8] |
| 0x2B | ADC_MIX3_CH1_BYT4[7:0] | 0x00 | Digital mixer 3, ADC channel 1 coefficient byte[7:0] |
| 0x2C | ADC_MIX3_CH2_BYT1[7:0] | 0x00 | Digital mixer 3, ADC channel 2 coefficient byte[31:24] |
| 0x2D | ADC_MIX3_CH2_BYT2[7:0] | 0x00 | Digital mixer 3, ADC channel 2 coefficient byte[23:16] |
| 0x2E | ADC_MIX3_CH2_BYT3[7:0] | 0x00 | Digital mixer 3, ADC channel 2 coefficient byte[15:8] |
| 0x2F | ADC_MIX3_CH2_BYT4[7:0] | 0x00 | Digital mixer 3, ADC channel 2 coefficient byte[7:0] |
| 0x30 | ADC_MIX3_CH3_BYT1[7:0] | 0x7F | Digital mixer 3, ADC channel 3 coefficient byte[31:24] |
| 0x31 | ADC_MIX3_CH3_BYT2[7:0] | 0xFF | Digital mixer 3, ADC channel 3 coefficient byte[23:16] |
| 0x32 | ADC_MIX3_CH3_BYT3[7:0] | 0xFF | Digital mixer 3, ADC channel 3 coefficient byte[15:8] |
| 0x33 | ADC_MIX3_CH3_BYT4[7:0] | 0xFF | Digital mixer 3, ADC channel 3 coefficient byte[7:0] |
| 0x34 | ADC_MIX3_CH4_BYT1[7:0] | 0x00 | Digital mixer 3, ADC channel 4 coefficient byte[31:24] |
| 0x35 | ADC_MIX3_CH4_BYT2[7:0] | 0x00 | Digital mixer 3, ADC channel 4 coefficient byte[23:16] |
| 0x36 | ADC_MIX3_CH4_BYT3[7:0] | 0x00 | Digital mixer 3, ADC channel 4 coefficient byte[15:8] |
| 0x37 | ADC_MIX3_CH4_BYT4[7:0] | 0x00 | Digital mixer 3, ADC channel 4 coefficient byte[7:0] |
| 0x38 | ADC_MIX4_CH1_BYT1[7:0] | 0x00 | Digital mixer 4, ADC channel 1 coefficient byte[31:24] |
| 0x39 | ADC_MIX4_CH1_BYT2[7:0] | 0x00 | Digital mixer 4, ADC channel 1 coefficient byte[23:16] |
| 0x3A | ADC_MIX4_CH1_BYT3[7:0] | 0x00 | Digital mixer 4, ADC channel 1 coefficient byte[15:8] |
| 0x3B | ADC_MIX4_CH1_BYT4[7:0] | 0x00 | Digital mixer 4, ADC channel 1 coefficient byte[7:0] |
| 0x3C | ADC_MIX4_CH2_BYT1[7:0] | 0x00 | Digital mixer 4, ADC channel 2 coefficient byte[31:24] |
| 0x3D | ADC_MIX4_CH2_BYT2[7:0] | 0x00 | Digital mixer 4, ADC channel 2 coefficient byte[23:16] |
| 0x3E | ADC_MIX4_CH2_BYT3[7:0] | 0x00 | Digital mixer 4, ADC channel 2 coefficient byte[15:8] |
| 0x3F | ADC_MIX4_CH2_BYT4[7:0] | 0x00 | Digital mixer 4, ADC channel 2 coefficient byte[7:0] |
| 0x40 | ADC_MIX4_CH3_BYT1[7:0] | 0x00 | Digital mixer 4, ADC channel 3 coefficient byte[31:24] |
| 0x41 | ADC_MIX4_CH3_BYT2[7:0] | 0x00 | Digital mixer 4, ADC channel 3 coefficient byte[23:16] |
| 0x42 | ADC_MIX4_CH3_BYT3[7:0] | 0x00 | Digital mixer 4, ADC channel 3 coefficient byte[15:8] |
| 0x43 | ADC_MIX4_CH3_BYT4[7:0] | 0x00 | Digital mixer 4, ADC channel 3 coefficient byte[7:0] |
| 0x44 | ADC_MIX4_CH4_BYT1[7:0] | 0x7F | Digital mixer 4, ADC channel 4 coefficient byte[31:24] |
| 0x45 | ADC_MIX4_CH4_BYT2[7:0] | 0xFF | Digital mixer 4, ADC channel 4 coefficient byte[23:16] |
| 0x46 | ADC_MIX4_CH4_BYT3[7:0] | 0xFF | Digital mixer 4, ADC channel 4 coefficient byte[15:8] |
| 0x47 | ADC_MIX4_CH4_BYT4[7:0] | 0xFF | Digital mixer 4, ADC channel 4 coefficient byte[7:0] |
| 0x48 | ADC_LB_MIX1_CH1_BYT1[7:0] | 0x7F | Digital loopback (ADC to DAC) mixer 1, ADC channel 1 coefficient byte[31:24] |
| 0x49 | ADC_LB_MIX1_CH1_BYT2[7:0] | 0xFF | Digital loopback (ADC to DAC) mixer 1, ADC channel 1 coefficient byte[23:16] |
| 0x4A | ADC_LB_MIX1_CH1_BYT3[7:0] | 0xFF | Digital loopback (ADC to DAC) mixer 1, ADC channel 1 coefficient byte[15:8] |
| 0x4B | ADC_LB_MIX1_CH1_BYT4[7:0] | 0xFF | Digital loopback (ADC to DAC) mixer 1, ADC channel 1 coefficient byte[7:0] |
| 0x4C | ADC_LB_MIX1_CH2_BYT1[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 2 coefficient byte[31:24] |
| 0x4D | ADC_LB_MIX1_CH2_BYT2[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 2 coefficient byte[23:16] |
| 0x4E | ADC_LB_MIX1_CH2_BYT3[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 2 coefficient byte[15:8] |
| 0x4F | ADC_LB_MIX1_CH2_BYT4[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 2 coefficient byte[7:0] |
| 0x50 | ADC_LB_MIX1_CH3_BYT1[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 3 coefficient byte[31:24] |
| 0x51 | ADC_LB_MIX1_CH3_BYT2[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 3 coefficient byte[23:16] |
| 0x52 | ADC_LB_MIX1_CH3_BYT3[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 3 coefficient byte[15:8] |
| 0x53 | ADC_LB_MIX1_CH3_BYT4[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 3 coefficient byte[7:0] |
| 0x54 | ADC_LB_MIX1_CH4_BYT1[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 4 coefficient byte[31:24] |
| 0x55 | ADC_LB_MIX1_CH4_BYT2[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 4 coefficient byte[23:16] |
| 0x56 | ADC_LB_MIX1_CH4_BYT3[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 4 coefficient byte[15:8] |
| 0x57 | ADC_LB_MIX1_CH4_BYT4[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 1, ADC channel 4 coefficient byte[7:0] |
| 0x58 | ADC_LB_MIX2_CH1_BYT1[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 1 coefficient byte[31:24] |
| 0x59 | ADC_LB_MIX2_CH1_BYT2[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 1 coefficient byte[23:16] |
| 0x5A | ADC_LB_MIX2_CH1_BYT3[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 1 coefficient byte[15:8] |
| 0x5B | ADC_LB_MIX2_CH1_BYT4[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 1 coefficient byte[7:0] |
| 0x5C | ADC_LB_MIX2_CH2_BYT1[7:0] | 0x7F | Digital loopback (ADC to DAC) mixer 2, ADC channel 2 coefficient byte[31:24] |
| 0x5D | ADC_LB_MIX2_CH2_BYT2[7:0] | 0xFF | Digital loopback (ADC to DAC) mixer 2, ADC channel 2 coefficient byte[23:16] |
| 0x5E | ADC_LB_MIX2_CH2_BYT3[7:0] | 0xFF | Digital loopback (ADC to DAC) mixer 2, ADC channel 2 coefficient byte[15:8] |
| 0x5F | ADC_LB_MIX2_CH2_BYT4[7:0] | 0xFF | Digital loopback (ADC to DAC) mixer 2, ADC channel 2 coefficient byte[7:0] |
| 0x60 | ADC_LB_MIX2_CH3_BYT1[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 3 coefficient byte[31:24] |
| 0x61 | ADC_LB_MIX2_CH3_BYT2[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 3 coefficient byte[23:16] |
| 0x62 | ADC_LB_MIX2_CH3_BYT3[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 3 coefficient byte[15:8] |
| 0x63 | ADC_LB_MIX2_CH3_BYT4[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 3 coefficient byte[7:0] |
| 0x64 | ADC_LB_MIX2_CH4_BYT1[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 4 coefficient byte[31:24] |
| 0x65 | ADC_LB_MIX2_CH4_BYT2[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 4 coefficient byte[23:16] |
| 0x66 | ADC_LB_MIX2_CH4_BYT3[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 4 coefficient byte[15:8] |
| 0x67 | ADC_LB_MIX2_CH4_BYT4[7:0] | 0x00 | Digital loopback (ADC to DAC) mixer 2, ADC channel 4 coefficient byte[7:0] |
| 0x78 | ADC_IIR_N0_BYT1[7:0] | 0x7F | Programmable ADC first-order IIR, N0 coefficient byte[31:24] |
| 0x79 | ADC_IIR_N0_BYT2[7:0] | 0xFF | Programmable ADC first-order IIR, N0 coefficient byte[23:16] |
| 0x7A | ADC_IIR_N0_BYT3[7:0] | 0xFF | Programmable ADC first-order IIR, N0 coefficient byte[15:8] |
| 0x7B | ADC_IIR_N0_BYT4[7:0] | 0xFF | Programmable ADC first-order IIR, N0 coefficient byte[7:0] |
| 0x7C | ADC_IIR_N1_BYT1[7:0] | 0x00 | Programmable ADC first-order IIR, N1 coefficient byte[31:24] |
| 0x7D | ADC_IIR_N1_BYT2[7:0] | 0x00 | Programmable ADC first-order IIR, N1 coefficient byte[23:16] |
| 0x7E | ADC_IIR_N1_BYT3[7:0] | 0x00 | Programmable ADC first-order IIR, N1 coefficient byte[15:8] |
| 0x7F | ADC_IIR_N1_BYT4[7:0] | 0x00 | Programmable ADC first-order IIR, N1 coefficient byte[7:0] |


### 8.2.4  Programmable Coefficient Registers: Page 11

This register page shown in [Table 8-222](#TABLE_FNW_L32_PDC) consists of the programmable coefficients for the ADC first-order IIR filter, ADC digital volume control and fine gain control for channels 1 to 4, ADC Auxilary mixer and UAD filters.

**Table 8-213 Page 11 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x08 | ADC_IIR_D1_BYT1[7:0] | 0x00 | Programmable ADC first-order IIR, D1 coefficient byte[31:24] |
| 0x09 | ADC_IIR_D1_BYT2[7:0] | 0x00 | Programmable ADC first-order IIR, D1 coefficient byte[23:16] |
| 0x0A | ADC_IIR_D1_BYT3[7:0] | 0x00 | Programmable ADC first-order IIR, D1 coefficient byte[15:8] |
| 0x0B | ADC_IIR_D1_BYT4[7:0] | 0x00 | Programmable ADC first-order IIR, D1 coefficient byte[7:0] |
| 0x0C | DEV_BQ_BUFSWAP_FLAG_BYT1[7:0] | 0x00 | Device Biquad Buffer Swap Flag coefficient byte[31:24] |
| 0x0D | DEV_BQ_BUFSWAP_FLAG_BYT2[7:0] | 0x00 | Device Biquad Buffer Swap Flag coefficient byte[23:16] |
| 0x0E | DEV_BQ_BUFSWAP_FLAG_BYT3[7:0] | 0x00 | Device Biquad Buffer Swap Flag coefficient byte[15:8] |
| 0x0F | DEV_BQ_BUFSWAP_FLAG_BYT4[7:0] | 0x00 | Device Biquad Buffer Swap Flag coefficient byte[7:0] |
| 0x0C | ADC_VOL_CH1_BYT1[7:0] | 0x00 | Digital volume control, ADC channel 1 coefficient byte[31:24] |
| 0x0D | ADC_VOL_CH1_BYT2[7:0] | 0x80 | Digital volume control, ADC channel 1 coefficient byte[23:16] |
| 0x0E | ADC_VOL_CH1_BYT3[7:0] | 0x00 | Digital volume control, ADC channel 1 coefficient byte[15:8] |
| 0x0F | ADC_VOL_CH1_BYT4[7:0] | 0x00 | Digital volume control, ADC channel 1 coefficient byte[7:0] |
| 0x10 | ADC_VOL_CH2_BYT1[7:0] | 0x00 | Digital volume control, ADC channel 2 coefficient byte[31:24] |
| 0x11 | ADC_VOL_CH2_BYT2[7:0] | 0x80 | Digital volume control, ADC channel 2 coefficient byte[23:16] |
| 0x12 | ADC_VOL_CH2_BYT3[7:0] | 0x00 | Digital volume control, ADC channel 2 coefficient byte[15:8] |
| 0x13 | ADC_VOL_CH2_BYT4[7:0] | 0x00 | Digital volume control, ADC channel 2 coefficient byte[7:0] |
| 0x14 | ADC_VOL_CH3_BYT1[7:0] | 0x00 | Digital volume control, ADC channel 3 coefficient byte[31:24] |
| 0x15 | ADC_VOL_CH3_BYT2[7:0] | 0x80 | Digital volume control, ADC channel 3 coefficient byte[23:16] |
| 0x16 | ADC_VOL_CH3_BYT3[7:0] | 0x00 | Digital volume control, ADC channel 3 coefficient byte[15:8] |
| 0x17 | ADC_VOL_CH3_BYT4[7:0] | 0x00 | Digital volume control, ADC channel 3 coefficient byte[7:0] |
| 0x18 | ADC_VOL_CH4_BYT1[7:0] | 0x00 | Digital volume control, ADC channel 4 coefficient byte[31:24] |
| 0x19 | ADC_VOL_CH4_BYT2[7:0] | 0x80 | Digital volume control, ADC channel 4 coefficient byte[23:16] |
| 0x1A | ADC_VOL_CH4_BYT3[7:0] | 0x00 | Digital volume control, ADC channel 4 coefficient byte[15:8] |
| 0x1F | ADC_VOL_CH4_BYT4[7:0] | 0x00 | Digital volume control, ADC channel 4 coefficient byte[7:0] |
| 0x20 | ADC_SF2_CH1_BYT1[7:0] | 0x40 | Digital SF2 (fine gain) control, ADC channel 1 coefficient byte[31:24] |
| 0x21 | ADC_SF2_CH1_BYT2[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 1 coefficient byte[23:16] |
| 0x22 | ADC_SF2_CH1_BYT3[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 1 coefficient byte[15:8] |
| 0x23 | ADC_SF2_CH1_BYT4[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 1 coefficient byte[7:0] |
| 0x24 | ADC_SF2_CH2_BYT1[7:0] | 0x40 | Digital SF2 (fine gain) control, ADC channel 2 coefficient byte[31:24] |
| 0x25 | ADC_SF2_CH2_BYT2[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 2 coefficient byte[23:16] |
| 0x26 | ADC_SF2_CH2_BYT3[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 2 coefficient byte[15:8] |
| 0x27 | ADC_SF2_CH2_BYT4[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 2 coefficient byte[7:0] |
| 0x28 | ADC_SF2_CH3_BYT1[7:0] | 0x40 | Digital SF2 (fine gain) control, ADC channel 3 coefficient byte[31:24] |
| 0x29 | ADC_SF2_CH3_BYT2[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 3 coefficient byte[23:16] |
| 0x2A | ADC_SF2_CH3_BYT3[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 3 coefficient byte[15:8] |
| 0x2B | ADC_SF2_CH3_BYT4[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 3 coefficient byte[7:0] |
| 0x2C | ADC_SF2_CH4_BYT1[7:0] | 0x40 | Digital SF2 (fine gain) control, ADC channel 4 coefficient byte[31:24] |
| 0x2D | ADC_SF2_CH4_BYT2[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 4 coefficient byte[23:16] |
| 0x2E | ADC_SF2_CH4_BYT3[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 4 coefficient byte[15:8] |
| 0x2F | ADC_SF2_CH4_BYT4[7:0] | 0x00 | Digital SF2 (fine gain) control, ADC channel 4 coefficient byte[7:0] |
| 0x30 | ADC_AUX_MIX_CH1_BYT1[7:0] | 0x00 | ADC Auxiliary Mixer CH1 coefficient byte[31:24] |
| 0x31 | ADC_AUX_MIX_CH1_BYT2[7:0] | 0x00 | ADC Auxiliary Mixer CH1 coefficient byte[23:16] |
| 0x32 | ADC_AUX_MIX_CH1_BYT3[7:0] | 0x00 | ADC Auxiliary Mixer CH1 coefficient byte[15:8] |
| 0x33 | ADC_AUX_MIX_CH1_BYT4[7:0] | 0x00 | ADC Auxiliary Mixer CH1 coefficient byte[7:0] |
| 0x34 | ADC_AUX_MIX_CH2_BYT1[7:0] | 0x00 | ADC Auxiliary Mixer CH2 coefficient byte[31:24] |
| 0x35 | ADC_AUX_MIX_CH2_BYT2[7:0] | 0x00 | ADC Auxiliary Mixer CH2 coefficient byte[23:16] |
| 0x36 | ADC_AUX_MIX_CH2_BYT3[7:0] | 0x00 | ADC Auxiliary Mixer CH2 coefficient byte[15:8] |
| 0x37 | ADC_AUX_MIX_CH2_BYT4[7:0] | 0x00 | ADC Auxiliary Mixer CH2 coefficient byte[7:0] |
| 0x68 | ADC_UAD_BPF_B0_BYT1[7:0] | 0x07 | UAD BQ B0 Coefficient [31:24] |
| 0x69 | ADC_UAD_BPF_B0_BYT2[7:0] | 0xDF | UAD BQ B0 Coefficient [23:16] |
| 0x6A | ADC_UAD_BPF_B0_BYT3[7:0] | 0x9E | UAD BQ B0 Coefficient[15:8] |
| 0x6B | ADC_UAD_BPF_B0_BYT4[7:0] | 0x1D | UAD BQ B0 Coefficient[7:0] |
| 0x6C | ADC_UAD_BPF_B1_BYT1[7:0] | 0x00 | UAD BQ B1 Coefficient [31:24] |
| 0x6D | ADC_UAD_BPF_B1_BYT2[7:0] | 0x00 | UAD BQ B1 Coefficient [23:16] |
| 0x6E | ADC_UAD_BPF_B1_BYT3[7:0] | 0x00 | UAD BQ B1 Coefficient[15:8] |
| 0x6F | ADC_UAD_BPF_B1_BYT4[7:0] | 0x00 | UAD BQ B1 Coefficient [7:0] |
| 0x70 | ADC_UAD_BPF_B2_BYT1[7:0] | 0xF8 | UAD BQ B2 Coefficient [31:24] |
| 0x71 | ADC_UAD_BPF_B2_BYT2[7:0] | 0x20 | UAD BQ B2 Coefficient [23:16] |
| 0x72 | ADC_UAD_BPF_B2_BYT3[7:0] | 0x61 | UAD BQ B2 Coefficient[15:8] |
| 0x73 | ADC_UAD_BPF_B2_BYT4[7:0] | 0xE2 | UAD BQ B2 Coefficient[7:0] |
| 0x74 | ADC_UAD_BPF_A1_BYT1[7:0] | 0x3C | UAD BQ A1 Coefficient [31:24] |
| 0x75 | ADC_UAD_BPF_A1_BYT2[7:0] | 0x31 | UAD BQ A1 Coefficient [23:16] |
| 0x76 | ADC_UAD_BPF_A1_BYT3[7:0] | 0x2E | UAD BQ A1 Coefficient[15:8] |
| 0x77 | ADC_UAD_BPF_A1_BYT4[7:0] | 0xF5 | UAD BQ A1 Coefficient[7:0] |
| 0x78 | ADC_UAD_BPF_A2_BYT1[7:0] | 0x70 | UAD BQ A2 Coefficient [31:24] |
| 0x79 | ADC_UAD_BPF_A2_BYT2[7:0] | 0x40 | UAD BQ A2 Coefficient [23:16] |
| 0x7A | ADC_UAD_BPF_A2_BYT3[7:0] | 0xC3 | UAD BQ A2 Coefficient[15:8] |
| 0x7B | ADC_UAD_BPF_A2_BYT4[7:0] | 0xC5 | UAD BQ A2 Coefficient[7:0] |


### 8.2.5  Programmable Coefficient Registers: Page 15

This register page shown in [Table 8-222](#TABLE_FNW_L32_PDC) consists of the programmable coefficients for the DAC biquad 1 to biquad 6 filters.

**Table 8-214 Page 15 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x08 | DAC_BQ1_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 1, N0 coefficient byte[31:24] |
| 0x09 | DAC_BQ1_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 1, N0 coefficient byte[23:16] |
| 0x0A | DAC_BQ1_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 1, N0 coefficient byte[15:8] |
| 0x0B | DAC_BQ1_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 1, N0 coefficient byte[7:0] |
| 0x0C | DAC_BQ1_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 1, N1 coefficient byte[31:24] |
| 0x0D | DAC_BQ1_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 1, N1 coefficient byte[23:16] |
| 0x0E | DAC_BQ1_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 1, N1 coefficient byte[15:8] |
| 0x0F | DAC_BQ1_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 1, N1 coefficient byte[7:0] |
| 0x10 | DAC_BQ1_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 1, N2 coefficient byte[31:24] |
| 0x11 | DAC_BQ1_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 1, N2 coefficient byte[23:16] |
| 0x12 | DAC_BQ1_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 1, N2 coefficient byte[15:8] |
| 0x13 | DAC_BQ1_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 1, N2 coefficient byte[7:0] |
| 0x14 | DAC_BQ1_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 1, D1 coefficient byte[31:24] |
| 0x15 | DAC_BQ1_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 1, D1 coefficient byte[23:16] |
| 0x16 | DAC_BQ1_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 1, D1 coefficient byte[15:8] |
| 0x17 | DAC_BQ1_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 1, D1 coefficient byte[7:0] |
| 0x18 | DAC_BQ1_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 1, D2 coefficient byte[31:24] |
| 0x19 | DAC_BQ1_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 1, D2 coefficient byte[23:16] |
| 0x1A | DAC_BQ1_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 1, D2 coefficient byte[15:8] |
| 0x1B | DAC_BQ1_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 1, D2 coefficient byte[7:0] |
| 0x1C | DAC_BQ2_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 2, N0 coefficient byte[31:24] |
| 0x1D | DAC_BQ2_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 2, N0 coefficient byte[23:16] |
| 0x1E | DAC_BQ2_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 2, N0 coefficient byte[15:8] |
| 0x1F | DAC_BQ2_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 2, N0 coefficient byte[7:0] |
| 0x20 | DAC_BQ2_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 2, N1 coefficient byte[31:24] |
| 0x21 | DAC_BQ2_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 2, N1 coefficient byte[23:16] |
| 0x22 | DAC_BQ2_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 2, N1 coefficient byte[15:8] |
| 0x23 | DAC_BQ2_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 2, N1 coefficient byte[7:0] |
| 0x24 | DAC_BQ2_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 2, N2 coefficient byte[31:24] |
| 0x25 | DAC_BQ2_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 2, N2 coefficient byte[23:16] |
| 0x26 | DAC_BQ2_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 2, N2 coefficient byte[15:8] |
| 0x27 | DAC_BQ2_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 2, N2 coefficient byte[7:0] |
| 0x28 | DAC_BQ2_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 2, D1 coefficient byte[31:24] |
| 0x29 | DAC_BQ2_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 2, D1 coefficient byte[23:16] |
| 0x2A | DAC_BQ2_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 2, D1 coefficient byte[15:8] |
| 0x2B | DAC_BQ2_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 2, D1 coefficient byte[7:0] |
| 0x2C | DAC_BQ2_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 2, D2 coefficient byte[31:24] |
| 0x2D | DAC_BQ2_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 2, D2 coefficient byte[23:16] |
| 0x2E | DAC_BQ2_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 2, D2 coefficient byte[15:8] |
| 0x2F | DAC_BQ2_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 2, D2 coefficient byte[7:0] |
| 0x30 | DAC_BQ3_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 3, N0 coefficient byte[31:24] |
| 0x31 | DAC_BQ3_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 3, N0 coefficient byte[23:16] |
| 0x32 | DAC_BQ3_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 3, N0 coefficient byte[15:8] |
| 0x33 | DAC_BQ3_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 3, N0 coefficient byte[7:0] |
| 0x34 | DAC_BQ3_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 3, N1 coefficient byte[31:24] |
| 0x35 | DAC_BQ3_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 3, N1 coefficient byte[23:16] |
| 0x36 | DAC_BQ3_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 3, N1 coefficient byte[15:8] |
| 0x37 | DAC_BQ3_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 3, N1 coefficient byte[7:0] |
| 0x38 | DAC_BQ3_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 3, N2 coefficient byte[31:24] |
| 0x39 | DAC_BQ3_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 3, N2 coefficient byte[23:16] |
| 0x3A | DAC_BQ3_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 3, N2 coefficient byte[15:8] |
| 0x3B | DAC_BQ3_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 3, N2 coefficient byte[7:0] |
| 0x3C | DAC_BQ3_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 3, D1 coefficient byte[31:24] |
| 0x3D | DAC_BQ3_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 3, D1 coefficient byte[23:16] |
| 0x3E | DAC_BQ3_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 3, D1 coefficient byte[15:8] |
| 0x3F | DAC_BQ3_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 3, D1 coefficient byte[7:0] |
| 0x40 | DAC_BQ3_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 3, D2 coefficient byte[31:24] |
| 0x41 | DAC_BQ3_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 3, D2 coefficient byte[23:16] |
| 0x42 | DAC_BQ3_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 3, D2 coefficient byte[15:8] |
| 0x43 | DAC_BQ3_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 3, D2 coefficient byte[7:0] |
| 0x44 | DAC_BQ4_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 4, N0 coefficient byte[31:24] |
| 0x45 | DAC_BQ4_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 4, N0 coefficient byte[23:16] |
| 0x46 | DAC_BQ4_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 4, N0 coefficient byte[15:8] |
| 0x47 | DAC_BQ4_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 4, N0 coefficient byte[7:0] |
| 0x48 | DAC_BQ4_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 4, N1 coefficient byte[31:24] |
| 0x49 | DAC_BQ4_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 4, N1 coefficient byte[23:16] |
| 0x4A | DAC_BQ4_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 4, N1 coefficient byte[15:8] |
| 0x4B | DAC_BQ4_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 4, N1 coefficient byte[7:0] |
| 0x4C | DAC_BQ4_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 4, N2 coefficient byte[31:24] |
| 0x4D | DAC_BQ4_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 4, N2 coefficient byte[23:16] |
| 0x4E | DAC_BQ4_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 4, N2 coefficient byte[15:8] |
| 0x4F | DAC_BQ4_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 4, N2 coefficient byte[7:0] |
| 0x50 | DAC_BQ4_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 4, D1 coefficient byte[31:24] |
| 0x51 | DAC_BQ4_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 4, D1 coefficient byte[23:16] |
| 0x52 | DAC_BQ4_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 4, D1 coefficient byte[15:8] |
| 0x53 | DAC_BQ4_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 4, D1 coefficient byte[7:0] |
| 0x54 | DAC_BQ4_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 4, D2 coefficient byte[31:24] |
| 0x55 | DAC_BQ4_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 4, D2 coefficient byte[23:16] |
| 0x56 | DAC_BQ4_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 4, D2 coefficient byte[15:8] |
| 0x57 | DAC_BQ4_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 4, D2 coefficient byte[7:0] |
| 0x58 | DAC_BQ5_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 5, N0 coefficient byte[31:24] |
| 0x59 | DAC_BQ5_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 5, N0 coefficient byte[23:16] |
| 0x5A | DAC_BQ5_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 5, N0 coefficient byte[15:8] |
| 0x5B | DAC_BQ5_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 5, N0 coefficient byte[7:0] |
| 0x5C | DAC_BQ5_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 5, N1 coefficient byte[31:24] |
| 0x5D | DAC_BQ5_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 5, N1 coefficient byte[23:16] |
| 0x5E | DAC_BQ5_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 5, N1 coefficient byte[15:8] |
| 0x5F | DAC_BQ5_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 5, N1 coefficient byte[7:0] |
| 0x60 | DAC_BQ5_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 5, N2 coefficient byte[31:24] |
| 0x61 | DAC_BQ5_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 5, N2 coefficient byte[23:16] |
| 0x62 | DAC_BQ5_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 5, N2 coefficient byte[15:8] |
| 0x63 | DAC_BQ5_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 5, N2 coefficient byte[7:0] |
| 0x64 | DAC_BQ5_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 5, D1 coefficient byte[31:24] |
| 0x65 | DAC_BQ5_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 5, D1 coefficient byte[23:16] |
| 0x66 | DAC_BQ5_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 5, D1 coefficient byte[15:8] |
| 0x67 | DAC_BQ5_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 5, D1 coefficient byte[7:0] |
| 0x68 | DAC_BQ5_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 5, D2 coefficient byte[31:24] |
| 0x69 | DAC_BQ5_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 5, D2 coefficient byte[23:16] |
| 0x6A | DAC_BQ5_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 5, D2 coefficient byte[15:8] |
| 0x6B | DAC_BQ5_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 5, D2 coefficient byte[7:0] |
| 0x6C | DAC_BQ6_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 6, N0 coefficient byte[31:24] |
| 0x6D | DAC_BQ6_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 6, N0 coefficient byte[23:16] |
| 0x6E | DAC_BQ6_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 6, N0 coefficient byte[15:8] |
| 0x6F | DAC_BQ6_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 6, N0 coefficient byte[7:0] |
| 0x70 | DAC_BQ6_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 6, N1 coefficient byte[31:24] |
| 0x71 | DAC_BQ6_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 6, N1 coefficient byte[23:16] |
| 0x72 | DAC_BQ6_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 6, N1 coefficient byte[15:8] |
| 0x73 | DAC_BQ6_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 6, N1 coefficient byte[7:0] |
| 0x74 | DAC_BQ6_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 6, N2 coefficient byte[31:24] |
| 0x75 | DAC_BQ6_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 6, N2 coefficient byte[23:16] |
| 0x76 | DAC_BQ6_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 6, N2 coefficient byte[15:8] |
| 0x77 | DAC_BQ6_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 6, N2 coefficient byte[7:0] |
| 0x78 | DAC_BQ6_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 6, D1 coefficient byte[31:24] |
| 0x79 | DAC_BQ6_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 6, D1 coefficient byte[23:16] |
| 0x7A | DAC_BQ6_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 6, D1 coefficient byte[15:8] |
| 0x7B | DAC_BQ6_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 6, D1 coefficient byte[7:0] |
| 0x7C | DAC_BQ6_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 6, D2 coefficient byte[31:24] |
| 0x7D | DAC_BQ6_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 6, D2 coefficient byte[23:16] |
| 0x7E | DAC_BQ6_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 6, D2 coefficient byte[15:8] |
| 0x7F | DAC_BQ6_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 6, D2 coefficient byte[7:0] |


### 8.2.6  Programmable Coefficient Registers: Page 16

This register page shown in [Table 8-222](#TABLE_FNW_L32_PDC) consists of the programmable coefficients for the DAC biquad 7 to biquad 12 filters.

**Table 8-215 Page 16 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x08 | DAC_BQ7_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 7, N0 coefficient byte[31:24] |
| 0x09 | DAC_BQ7_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 7, N0 coefficient byte[23:16] |
| 0x0A | DAC_BQ7_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 7, N0 coefficient byte[15:8] |
| 0x0B | DAC_BQ7_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 7, N0 coefficient byte[7:0] |
| 0x0C | DAC_BQ7_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 7, N1 coefficient byte[31:24] |
| 0x0D | DAC_BQ7_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 7, N1 coefficient byte[23:16] |
| 0x0E | DAC_BQ7_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 7, N1 coefficient byte[15:8] |
| 0x0F | DAC_BQ7_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 7, N1 coefficient byte[7:0] |
| 0x10 | DAC_BQ7_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 7, N2 coefficient byte[31:24] |
| 0x11 | DAC_BQ7_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 7, N2 coefficient byte[23:16] |
| 0x12 | DAC_BQ7_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 7, N2 coefficient byte[15:8] |
| 0x13 | DAC_BQ7_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 7, N2 coefficient byte[7:0] |
| 0x14 | DAC_BQ7_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 7, D1 coefficient byte[31:24] |
| 0x15 | DAC_BQ7_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 7, D1 coefficient byte[23:16] |
| 0x16 | DAC_BQ7_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 7, D1 coefficient byte[15:8] |
| 0x17 | DAC_BQ7_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 7, D1 coefficient byte[7:0] |
| 0x18 | DAC_BQ7_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 7, D2 coefficient byte[31:24] |
| 0x19 | DAC_BQ7_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 7, D2 coefficient byte[23:16] |
| 0x1A | DAC_BQ7_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 7, D2 coefficient byte[15:8] |
| 0x1B | DAC_BQ7_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 7, D2 coefficient byte[7:0] |
| 0x1C | DAC_BQ8_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 8, N0 coefficient byte[31:24] |
| 0x1D | DAC_BQ8_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 8, N0 coefficient byte[23:16] |
| 0x1E | DAC_BQ8_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 8, N0 coefficient byte[15:8] |
| 0x1F | DAC_BQ8_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 8, N0 coefficient byte[7:0] |
| 0x20 | DAC_BQ8_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 8, N1 coefficient byte[31:24] |
| 0x21 | DAC_BQ8_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 8, N1 coefficient byte[23:16] |
| 0x22 | DAC_BQ8_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 8, N1 coefficient byte[15:8] |
| 0x23 | DAC_BQ8_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 8, N1 coefficient byte[7:0] |
| 0x24 | DAC_BQ8_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 8, N2 coefficient byte[31:24] |
| 0x25 | DAC_BQ8_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 8, N2 coefficient byte[23:16] |
| 0x26 | DAC_BQ8_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 8, N2 coefficient byte[15:8] |
| 0x27 | DAC_BQ8_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 8, N2 coefficient byte[7:0] |
| 0x28 | DAC_BQ8_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 8, D1 coefficient byte[31:24] |
| 0x29 | DAC_BQ8_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 8, D1 coefficient byte[23:16] |
| 0x2A | DAC_BQ8_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 8, D1 coefficient byte[15:8] |
| 0x2B | DAC_BQ8_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 8, D1 coefficient byte[7:0] |
| 0x2C | DAC_BQ8_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 8, D2 coefficient byte[31:24] |
| 0x2D | DAC_BQ8_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 8, D2 coefficient byte[23:16] |
| 0x2E | DAC_BQ8_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 8, D2 coefficient byte[15:8] |
| 0x2F | DAC_BQ8_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 8, D2 coefficient byte[7:0] |
| 0x30 | DAC_BQ9_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 9, N0 coefficient byte[31:24] |
| 0x31 | DAC_BQ9_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 9, N0 coefficient byte[23:16] |
| 0x32 | DAC_BQ9_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 9, N0 coefficient byte[15:8] |
| 0x33 | DAC_BQ9_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 9, N0 coefficient byte[7:0] |
| 0x34 | DAC_BQ9_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 9, N1 coefficient byte[31:24] |
| 0x35 | DAC_BQ9_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 9, N1 coefficient byte[23:16] |
| 0x36 | DAC_BQ9_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 9, N1 coefficient byte[15:8] |
| 0x37 | DAC_BQ9_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 9, N1 coefficient byte[7:0] |
| 0x38 | DAC_BQ9_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 9, N2 coefficient byte[31:24] |
| 0x39 | DAC_BQ9_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 9, N2 coefficient byte[23:16] |
| 0x3A | DAC_BQ9_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 9, N2 coefficient byte[15:8] |
| 0x3B | DAC_BQ9_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 9, N2 coefficient byte[7:0] |
| 0x3C | DAC_BQ9_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 9, D1 coefficient byte[31:24] |
| 0x3D | DAC_BQ9_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 9, D1 coefficient byte[23:16] |
| 0x3E | DAC_BQ9_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 9, D1 coefficient byte[15:8] |
| 0x3F | DAC_BQ9_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 9, D1 coefficient byte[7:0] |
| 0x40 | DAC_BQ9_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 9, D2 coefficient byte[31:24] |
| 0x41 | DAC_BQ9_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 9, D2 coefficient byte[23:16] |
| 0x42 | DAC_BQ9_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 9, D2 coefficient byte[15:8] |
| 0x43 | DAC_BQ9_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 9, D2 coefficient byte[7:0] |
| 0x44 | DAC_BQ10_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 10, N0 coefficient byte[31:24] |
| 0x45 | DAC_BQ10_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 10, N0 coefficient byte[23:16] |
| 0x46 | DAC_BQ10_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 10, N0 coefficient byte[15:8] |
| 0x47 | DAC_BQ10_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 10, N0 coefficient byte[7:0] |
| 0x48 | DAC_BQ10_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 10, N1 coefficient byte[31:24] |
| 0x49 | DAC_BQ10_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 10, N1 coefficient byte[23:16] |
| 0x4A | DAC_BQ10_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 10, N1 coefficient byte[15:8] |
| 0x4B | DAC_BQ10_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 10, N1 coefficient byte[7:0] |
| 0x4C | DAC_BQ10_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 10, N2 coefficient byte[31:24] |
| 0x4D | DAC_BQ10_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 10, N2 coefficient byte[23:16] |
| 0x4E | DAC_BQ10_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 10, N2 coefficient byte[15:8] |
| 0x4F | DAC_BQ10_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 10, N2 coefficient byte[7:0] |
| 0x50 | DAC_BQ10_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 10, D1 coefficient byte[31:24] |
| 0x51 | DAC_BQ10_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 10, D1 coefficient byte[23:16] |
| 0x52 | DAC_BQ10_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 10, D1 coefficient byte[15:8] |
| 0x53 | DAC_BQ10_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 10, D1 coefficient byte[7:0] |
| 0x54 | DAC_BQ10_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 10, D2 coefficient byte[31:24] |
| 0x55 | DAC_BQ10_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 10, D2 coefficient byte[23:16] |
| 0x56 | DAC_BQ10_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 10, D2 coefficient byte[15:8] |
| 0x57 | DAC_BQ10_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 10, D2 coefficient byte[7:0] |
| 0x58 | DAC_BQ11_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 11, N0 coefficient byte[31:24] |
| 0x59 | DAC_BQ11_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 11, N0 coefficient byte[23:16] |
| 0x5A | DAC_BQ11_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 11, N0 coefficient byte[15:8] |
| 0x5B | DAC_BQ11_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 11, N0 coefficient byte[7:0] |
| 0x5C | DAC_BQ11_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 11, N1 coefficient byte[31:24] |
| 0x5D | DAC_BQ11_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 11, N1 coefficient byte[23:16] |
| 0x5E | DAC_BQ11_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 11, N1 coefficient byte[15:8] |
| 0x5F | DAC_BQ11_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 11, N1 coefficient byte[7:0] |
| 0x60 | DAC_BQ11_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 11, N2 coefficient byte[31:24] |
| 0x61 | DAC_BQ11_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 11, N2 coefficient byte[23:16] |
| 0x62 | DAC_BQ11_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 11, N2 coefficient byte[15:8] |
| 0x63 | DAC_BQ11_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 11, N2 coefficient byte[7:0] |
| 0x64 | DAC_BQ11_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 11, D1 coefficient byte[31:24] |
| 0x65 | DAC_BQ11_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 11, D1 coefficient byte[23:16] |
| 0x66 | DAC_BQ11_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 11, D1 coefficient byte[15:8] |
| 0x67 | DAC_BQ11_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 11, D1 coefficient byte[7:0] |
| 0x68 | DAC_BQ11_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 11, D2 coefficient byte[31:24] |
| 0x69 | DAC_BQ11_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 11, D2 coefficient byte[23:16] |
| 0x6A | DAC_BQ11_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 11, D2 coefficient byte[15:8] |
| 0x6B | DAC_BQ11_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 11, D2 coefficient byte[7:0] |
| 0x6C | DAC_BQ12_N0_BYT1[7:0] | 0x7F | Programmable DAC biquad 12, N0 coefficient byte[31:24] |
| 0x6D | DAC_BQ12_N0_BYT2[7:0] | 0xFF | Programmable DAC biquad 12, N0 coefficient byte[23:16] |
| 0x6E | DAC_BQ12_N0_BYT3[7:0] | 0xFF | Programmable DAC biquad 12, N0 coefficient byte[15:8] |
| 0x6F | DAC_BQ12_N0_BYT4[7:0] | 0xFF | Programmable DAC biquad 12, N0 coefficient byte[7:0] |
| 0x70 | DAC_BQ12_N1_BYT1[7:0] | 0x00 | Programmable DAC biquad 12, N1 coefficient byte[31:24] |
| 0x71 | DAC_BQ12_N1_BYT2[7:0] | 0x00 | Programmable DAC biquad 12, N1 coefficient byte[23:16] |
| 0x72 | DAC_BQ12_N1_BYT3[7:0] | 0x00 | Programmable DAC biquad 12, N1 coefficient byte[15:8] |
| 0x73 | DAC_BQ12_N1_BYT4[7:0] | 0x00 | Programmable DAC biquad 12, N1 coefficient byte[7:0] |
| 0x74 | DAC_BQ12_N2_BYT1[7:0] | 0x00 | Programmable DAC biquad 12, N2 coefficient byte[31:24] |
| 0x75 | DAC_BQ12_N2_BYT2[7:0] | 0x00 | Programmable DAC biquad 12, N2 coefficient byte[23:16] |
| 0x76 | DAC_BQ12_N2_BYT3[7:0] | 0x00 | Programmable DAC biquad 12, N2 coefficient byte[15:8] |
| 0x77 | DAC_BQ12_N2_BYT4[7:0] | 0x00 | Programmable DAC biquad 12, N2 coefficient byte[7:0] |
| 0x78 | DAC_BQ12_D1_BYT1[7:0] | 0x00 | Programmable DAC biquad 12, D1 coefficient byte[31:24] |
| 0x79 | DAC_BQ12_D1_BYT2[7:0] | 0x00 | Programmable DAC biquad 12, D1 coefficient byte[23:16] |
| 0x7A | DAC_BQ12_D1_BYT3[7:0] | 0x00 | Programmable DAC biquad 12, D1 coefficient byte[15:8] |
| 0x7B | DAC_BQ12_D1_BYT4[7:0] | 0x00 | Programmable DAC biquad 12, D1 coefficient byte[7:0] |
| 0x7C | DAC_BQ12_D2_BYT1[7:0] | 0x00 | Programmable DAC biquad 12, D2 coefficient byte[31:24] |
| 0x7D | DAC_BQ12_D2_BYT2[7:0] | 0x00 | Programmable DAC biquad 12, D2 coefficient byte[23:16] |
| 0x7E | DAC_BQ12_D2_BYT3[7:0] | 0x00 | Programmable DAC biquad 12, D2 coefficient byte[15:8] |
| 0x7F | DAC_BQ12_D2_BYT4[7:0] | 0x00 | Programmable DAC biquad 12, D2 coefficient byte[7:0] |


### 8.2.7  Programmable Coefficient Registers: Page 17

This register page shown in [Table 8-222](#TABLE_FNW_L32_PDC) consists of the programmable coefficients for the ASI DIN mixer for DAC channels 1 to 4, DAC Aux mixer, Loopback mixer, Signal-generator mixer and the DAC first-order IIR filter.

**Table 8-216 Page 17 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x08 | ASI_DIN_MIX_ASI_CH1_RDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH1 to RDAC coefficient byte[15:8] |
| 0x09 | ASI_DIN_MIX_ASI_CH1_RDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH1 to RDAC coefficient byte[7:0] |
| 0x0A | ASI_DIN_MIX_ASI_CH1_LDAC_MIX_BYT1[7:0] | 0x40 | ASI DIN MIXER, ASI CH1 to LDAC coefficient byte[15:8] |
| 0x0B | ASI_DIN_MIX_ASI_CH1_LDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH1 to LDAC coefficient byte[7:0] |
| 0x0C | ASI_DIN_MIX_ASI_CH1_RDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH1 to RDAC2 coefficient byte[15:8] |
| 0x0D | ASI_DIN_MIX_ASI_CH1_RDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH1 to RDAC2 coefficient byte[7:0] |
| 0x0E | ASI_DIN_MIX_ASI_CH1_LDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH1 to LDAC2 coefficient byte[15:8] |
| 0x0F | ASI_DIN_MIX_ASI_CH1_LDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH1 to LDAC2 coefficient byte[7:0] |
| 0x10 | ASI_DIN_MIX_ASI_CH2_RDAC_MIX_BYT1[7:0] | 0x40 | ASI DIN MIXER, ASI CH2 to RDAC coefficient byte[15:8] |
| 0x11 | ASI_DIN_MIX_ASI_CH2_RDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH2 to RDAC coefficient byte[7:0] |
| 0x12 | ASI_DIN_MIX_ASI_CH2_LDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH2 to LDAC coefficient byte[15:8] |
| 0x13 | ASI_DIN_MIX_ASI_CH2_LDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH2 to LDAC coefficient byte[7:0] |
| 0x14 | ASI_DIN_MIX_ASI_CH2_RDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH2 to RDAC2 coefficient byte[15:8] |
| 0x15 | ASI_DIN_MIX_ASI_CH2_RDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH2 to RDAC2 coefficient byte[7:0] |
| 0x16 | ASI_DIN_MIX_ASI_CH2_LDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH2 to LDAC2 coefficient byte[15:8] |
| 0x17 | ASI_DIN_MIX_ASI_CH2_LDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH2 to LDAC2 coefficient byte[7:0] |
| 0x18 | ASI_DIN_MIX_ASI_CH3_RDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH3 to RDAC coefficient byte[15:8] |
| 0x19 | ASI_DIN_MIX_ASI_CH3_RDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH3 to RDAC coefficient byte[7:0] |
| 0x1A | ASI_DIN_MIX_ASI_CH3_LDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH3 to LDAC coefficient byte[15:8] |
| 0x1B | ASI_DIN_MIX_ASI_CH3_LDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH3 to LDAC coefficient byte[7:0] |
| 0x1C | ASI_DIN_MIX_ASI_CH3_RDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH3 to RDAC2 coefficient byte[15:8] |
| 0x1D | ASI_DIN_MIX_ASI_CH3_RDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH3 to RDAC2 coefficient byte[7:0] |
| 0x1E | ASI_DIN_MIX_ASI_CH3_LDAC2_MIX_BYT1[7:0] | 0x40 | ASI DIN MIXER, ASI CH3 to LDAC2 coefficient byte[15:8] |
| 0x1F | ASI_DIN_MIX_ASI_CH3_LDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH3 to LDAC2 coefficient byte[7:0] |
| 0x20 | ASI_DIN_MIX_ASI_CH4_RDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH4 to RDAC coefficient byte[15:8] |
| 0x21 | ASI_DIN_MIX_ASI_CH4_RDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH4 to RDAC coefficient byte[7:0] |
| 0x22 | ASI_DIN_MIX_ASI_CH4_LDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH4 to LDAC coefficient byte[15:8] |
| 0x23 | ASI_DIN_MIX_ASI_CH4_LDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH4 to LDAC coefficient byte[7:0] |
| 0x24 | ASI_DIN_MIX_ASI_CH4_RDAC2_MIX_BYT1[7:0] | 0x40 | ASI DIN MIXER, ASI CH4 to RDAC2 coefficient byte[15:8] |
| 0x25 | ASI_DIN_MIX_ASI_CH4_RDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH4 to RDAC2 coefficient byte[7:0] |
| 0x26 | ASI_DIN_MIX_ASI_CH4_LDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH4 to LDAC2 coefficient byte[15:8] |
| 0x27 | ASI_DIN_MIX_ASI_CH4_LDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH4 to LDAC2 coefficient byte[7:0] |
| 0x28 | ASI_DIN_MIX_ASI_CH5_RDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH5 to RDAC coefficient byte[15:8] |
| 0x29 | ASI_DIN_MIX_ASI_CH5_RDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH5 to RDAC coefficient byte[7:0] |
| 0x2A | ASI_DIN_MIX_ASI_CH5_LDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH5 to LDAC coefficient byte[15:8] |
| 0x2B | ASI_DIN_MIX_ASI_CH5_LDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH5 to LDAC coefficient byte[7:0] |
| 0x2C | ASI_DIN_MIX_ASI_CH5_RDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH5 to RDAC2 coefficient byte[15:8] |
| 0x2D | ASI_DIN_MIX_ASI_CH5_RDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH5 to RDAC2 coefficient byte[7:0] |
| 0x2E | ASI_DIN_MIX_ASI_CH5_LDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH5 to LDAC2 coefficient byte[15:8] |
| 0x2F | ASI_DIN_MIX_ASI_CH5_LDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH5 to LDAC2 coefficient byte[7:0] |
| 0x30 | ASI_DIN_MIX_ASI_CH6_RDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH6 to RDAC coefficient byte[15:8] |
| 0x31 | ASI_DIN_MIX_ASI_CH6_RDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH6 to RDAC coefficient byte[7:0] |
| 0x32 | ASI_DIN_MIX_ASI_CH6_LDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH6 to LDAC coefficient byte[15:8] |
| 0x33 | ASI_DIN_MIX_ASI_CH6_LDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH6 to LDAC coefficient byte[7:0] |
| 0x34 | ASI_DIN_MIX_ASI_CH6_RDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH6 to RDAC2 coefficient byte[15:8] |
| 0x35 | ASI_DIN_MIX_ASI_CH6_RDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH6 to RDAC2 coefficient byte[7:0] |
| 0x36 | ASI_DIN_MIX_ASI_CH6_LDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH6 to LDAC2 coefficient byte[15:8] |
| 0x37 | ASI_DIN_MIX_ASI_CH6_LDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH6 to LDAC2 coefficient byte[7:0] |
| 0x38 | ASI_DIN_MIX_ASI_CH7_RDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH7 to RDAC coefficient byte[15:8] |
| 0x39 | ASI_DIN_MIX_ASI_CH7_RDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH7 to RDAC coefficient byte[7:0] |
| 0x3A | ASI_DIN_MIX_ASI_CH7_LDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH7 to LDAC coefficient byte[15:8] |
| 0x3B | ASI_DIN_MIX_ASI_CH7_LDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH7 to LDAC coefficient byte[7:0] |
| 0x3C | ASI_DIN_MIX_ASI_CH7_RDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH7 to RDAC2 coefficient byte[15:8] |
| 0x3D | ASI_DIN_MIX_ASI_CH7_RDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH7 to RDAC2 coefficient byte[7:0] |
| 0x3E | ASI_DIN_MIX_ASI_CH7_LDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH7 to LDAC2 coefficient byte[15:8] |
| 0x3F | ASI_DIN_MIX_ASI_CH7_LDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH7 to LDAC2 coefficient byte[7:0] |
| 0x40 | ASI_DIN_MIX_ASI_CH8_RDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH8 to RDAC coefficient byte[15:8] |
| 0x41 | ASI_DIN_MIX_ASI_CH8_RDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH8 to RDAC coefficient byte[7:0] |
| 0x42 | ASI_DIN_MIX_ASI_CH8_LDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH8 to LDAC coefficient byte[15:8] |
| 0x43 | ASI_DIN_MIX_ASI_CH8_LDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH8 to LDAC coefficient byte[7:0] |
| 0x44 | ASI_DIN_MIX_ASI_CH8_RDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH8 to RDAC2 coefficient byte[15:8] |
| 0x45 | ASI_DIN_MIX_ASI_CH8_RDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH8 to RDAC2 coefficient byte[7:0] |
| 0x46 | ASI_DIN_MIX_ASI_CH8_LDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI CH8 to LDAC2 coefficient byte[15:8] |
| 0x47 | ASI_DIN_MIX_ASI_CH8_LDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI CH8 to LDAC2 coefficient byte[7:0] |
| 0x48 | ASI_DIN_MIX_ASI_AUX_CH1_RDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH1 to RDAC coefficient byte[15:8] |
| 0x49 | ASI_DIN_MIX_ASI_AUX_CH1_RDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH1 to RDAC coefficient byte[7:0] |
| 0x4A | ASI_DIN_MIX_ASI_AUX_CH1_LDAC_MIX_BYT1[7:0] | 0x40 | ASI DIN MIXER, ASI AUX_CH1 to LDAC coefficient byte[15:8] |
| 0x4B | ASI_DIN_MIX_ASI_AUX_CH1_LDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH1 to LDAC coefficient byte[7:0] |
| 0x4C | ASI_DIN_MIX_ASI_AUX_CH1_RDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH1 to RDAC2 coefficient byte[15:8] |
| 0x4D | ASI_DIN_MIX_ASI_AUX_CH1_RDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH1 to RDAC2 coefficient byte[7:0] |
| 0x4E | ASI_DIN_MIX_ASI_AUX_CH1_LDAC2_MIX_BYT1[7:0] | 0x40 | ASI DIN MIXER, ASI AUX_CH1 to LDAC2 coefficient byte[15:8] |
| 0x4F | ASI_DIN_MIX_ASI_AUX_CH1_LDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH1 to LDAC2 coefficient byte[7:0] |
| 0x50 | ASI_DIN_MIX_ASI_AUX_CH2_RDAC_MIX_BYT1[7:0] | 0x40 | ASI DIN MIXER, ASI AUX_CH2 to RDAC coefficient byte[15:8] |
| 0x51 | ASI_DIN_MIX_ASI_AUX_CH2_RDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH2 to RDAC coefficient byte[7:0] |
| 0x52 | ASI_DIN_MIX_ASI_AUX_CH2_LDAC_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH2 to LDAC coefficient byte[15:8] |
| 0x53 | ASI_DIN_MIX_ASI_AUX_CH2_LDAC_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH2 to LDAC coefficient byte[7:0] |
| 0x54 | ASI_DIN_MIX_ASI_AUX_CH2_RDAC2_MIX_BYT1[7:0] | 0x40 | ASI DIN MIXER, ASI AUX_CH2 to RDAC2 coefficient byte[15:8] |
| 0x55 | ASI_DIN_MIX_ASI_AUX_CH2_RDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH2 to RDAC2 coefficient byte[7:0] |
| 0x56 | ASI_DIN_MIX_ASI_AUX_CH2_LDAC2_MIX_BYT1[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH2 to LDAC2 coefficient byte[15:8] |
| 0x57 | ASI_DIN_MIX_ASI_AUX_CH2_LDAC2_MIX_BYT2[7:0] | 0x00 | ASI DIN MIXER, ASI AUX_CH2 to LDAC2 coefficient byte[7:0] |
| 0x58 | SC_DAC_MIX_ADCLB_CH1_RDAC_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH1 to RDAC coefficient byte[15:8] |
| 0x59 | SC_DAC_MIX_ADCLB_CH1_RDAC_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH1 to RDAC coefficient byte[7:0] |
| 0x5A | SC_DAC_MIX_ADCLB_CH1_LDAC_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH1 to LDAC coefficient byte[15:8] |
| 0x5B | SC_DAC_MIX_ADCLB_CH1_LDAC_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH1 to LDAC coefficient byte[7:0] |
| 0x5C | SC_DAC_MIX_ADCLB_CH1_RDAC2_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH1 to RDAC2 coefficient byte[15:8] |
| 0x5D | SC_DAC_MIX_ADCLB_CH1_RDAC2_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH1 to RDAC2 coefficient byte[7:0] |
| 0x5E | SC_DAC_MIX_ADCLB_CH1_LDAC2_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH1 to LDAC2 coefficient byte[15:8] |
| 0x5F | SC_DAC_MIX_ADCLB_CH1_LDAC2_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH1 to LDAC2 coefficient byte[7:0] |
| 0x60 | SC_DAC_MIX_ADCLB_CH2_RDAC_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH2 to RDAC coefficient byte[15:8] |
| 0x61 | SC_DAC_MIX_ADCLB_CH2_RDAC_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH2 to RDAC coefficient byte[7:0] |
| 0x62 | SC_DAC_MIX_ADCLB_CH2_LDAC_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH2 to LDAC coefficient byte[15:8] |
| 0x63 | SC_DAC_MIX_ADCLB_CH2_LDAC_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH2 to LDAC coefficient byte[7:0] |
| 0x64 | SC_DAC_MIX_ADCLB_CH2_RDAC2_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH2 to RDAC2 coefficient byte[15:8] |
| 0x65 | SC_DAC_MIX_ADCLB_CH2_RDAC2_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH2 to RDAC2 coefficient byte[7:0] |
| 0x66 | SC_DAC_MIX_ADCLB_CH2_LDAC2_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH2 to LDAC2 coefficient byte[15:8] |
| 0x67 | SC_DAC_MIX_ADCLB_CH2_LDAC2_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, ADC Loopback CH2 to LDAC2 coefficient byte[7:0] |
| 0x68 | SC_DAC_MIX_SIGGEN_CH1_RDAC_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH1 to RDAC coefficient byte[15:8] |
| 0x69 | SC_DAC_MIX_SIGGEN_CH1_RDAC_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH1 to RDAC coefficient byte[7:0] |
| 0x6A | SC_DAC_MIX_SIGGEN_CH1_LDAC_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH1 to LDAC coefficient byte[15:8] |
| 0x6B | SC_DAC_MIX_SIGGEN_CH1_LDAC_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH1 to LDAC coefficient byte[7:0] |
| 0x6C | SC_DAC_MIX_SIGGEN_CH1_RDAC2_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH1 to RDAC2 coefficient byte[15:8] |
| 0x6D | SC_DAC_MIX_SIGGEN_CH1_RDAC2_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH1 to RDAC2 coefficient byte[7:0] |
| 0x6E | SC_DAC_MIX_SIGGEN_CH1_LDAC2_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH1 to LDAC2 coefficient byte[15:8] |
| 0x6F | SC_DAC_MIX_SIGGEN_CH1_LDAC2_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH1 to LDAC2 coefficient byte[7:0] |
| 0x70 | SC_DAC_MIX_SIGGEN_CH2_RDAC_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH2 to RDAC coefficient byte[15:8] |
| 0x71 | SC_DAC_MIX_SIGGEN_CH2_RDAC_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH2 to RDAC coefficient byte[7:0] |
| 0x72 | SC_DAC_MIX_SIGGEN_CH2_LDAC_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH2 to LDAC coefficient byte[15:8] |
| 0x73 | SC_DAC_MIX_SIGGEN_CH2_LDAC_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH2 to LDAC coefficient byte[7:0] |
| 0x74 | SC_DAC_MIX_SIGGEN_CH2_RDAC2_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH2 to RDAC2 coefficient byte[15:8] |
| 0x75 | SC_DAC_MIX_SIGGEN_CH2_RDAC2_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH2 to RDAC2 coefficient byte[7:0] |
| 0x76 | SC_DAC_MIX_SIGGEN_CH2_LDAC2_MIX_BYT1[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH2 to LDAC2 coefficient byte[15:8] |
| 0x77 | SC_DAC_MIX_SIGGEN_CH2_LDAC2_MIX_BYT2[7:0] | 0x00 | SC DAC MIXER, Signal Generator CH2 to LDAC2 coefficient byte[7:0] |
| 0x78 | DAC_IIR_N0_BYT1[7:0] | 0x7F | Programmable DAC first-order IIR, N0 coefficient byte[31:24] |
| 0x79 | DAC_IIR_N0_BYT2[7:0] | 0xFF | Programmable DAC first-order IIR, N0 coefficient byte[23:16] |
| 0x7A | DAC_IIR_N0_BYT3[7:0] | 0xFF | Programmable DAC first-order IIR, N0 coefficient byte[15:8] |
| 0x7B | DAC_IIR_N0_BYT4[7:0] | 0xFF | Programmable DAC first-order IIR, N0 coefficient byte[7:0] |
| 0x7C | DAC_IIR_N1_BYT1[7:0] | 0x00 | Programmable DAC first-order IIR, N1 coefficient byte[31:24] |
| 0x7D | DAC_IIR_N1_BYT2[7:0] | 0x00 | Programmable DAC first-order IIR, N1 coefficient byte[23:16] |
| 0x7E | DAC_IIR_N1_BYT3[7:0] | 0x00 | Programmable DAC first-order IIR, N1 coefficient byte[15:8] |
| 0x7F | DAC_IIR_N1_BYT4[7:0] | 0x00 | Programmable DAC first-order IIR, N1 coefficient byte[7:0] |


### 8.2.8  Programmable Coefficient Registers: Page 18

This register page shown in [Table 8-222](#TABLE_FNW_L32_PDC) consists of the programmable coefficients for the DAC first-order IIR filter, DAC digital volume control for channels 1 to 4 and DAC Beep generator.

**Table 8-217 Page 18 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x08 | DAC_IIR_D1_BYT1[7:0] | 0x00 | Programmable DAC first-order IIR, D1 coefficient byte[31:24] |
| 0x09 | DAC_IIR_D1_BYT2[7:0] | 0x00 | Programmable DAC first-order IIR, D1 coefficient byte[23:16] |
| 0x0A | DAC_IIR_D1_BYT3[7:0] | 0x00 | Programmable DAC first-order IIR, D1 coefficient byte[15:8] |
| 0x0B | DAC_IIR_D1_BYT4[7:0] | 0x00 | Programmable DAC first-order IIR, D1 coefficient byte[7:0] |
| 0x0C | DAC_VOL_CH1_BYT1[7:0] | 0x00 | Digital volume control, DAC channel 1 coefficient byte[31:24] |
| 0x0D | DAC_VOL_CH1_BYT2[7:0] | 0x80 | Digital volume control, DAC channel 1 coefficient byte[23:16] |
| 0x0E | DAC_VOL_CH1_BYT3[7:0] | 0x00 | Digital volume control, DAC channel 1 coefficient byte[15:8] |
| 0x0F | DAC_VOL_CH1_BYT4[7:0] | 0x00 | Digital volume control, DAC channel 1 coefficient byte[7:0] |
| 0x10 | DAC_VOL_CH2_BYT1[7:0] | 0x00 | Digital volume control, DAC channel 2 coefficient byte[31:24] |
| 0x11 | DAC_VOL_CH2_BYT2[7:0] | 0x80 | Digital volume control, DAC channel 2 coefficient byte[23:16] |
| 0x12 | DAC_VOL_CH2_BYT3[7:0] | 0x00 | Digital volume control, DAC channel 2 coefficient byte[15:8] |
| 0x13 | DAC_VOL_CH2_BYT4[7:0] | 0x00 | Digital volume control, DAC channel 2 coefficient byte[7:0] |
| 0x14 | DAC_VOL_CH3_BYT1[7:0] | 0x00 | Digital volume control, DAC channel 3 coefficient byte[31:24] |
| 0x15 | DAC_VOL_CH3_BYT2[7:0] | 0x80 | Digital volume control, DAC channel 3 coefficient byte[23:16] |
| 0x16 | DAC_VOL_CH3_BYT3[7:0] | 0x00 | Digital volume control, DAC channel 3 coefficient byte[15:8] |
| 0x17 | DAC_VOL_CH3_BYT4[7:0] | 0x00 | Digital volume control, DAC channel 3 coefficient byte[7:0] |
| 0x18 | DAC_VOL_CH4_BYT1[7:0] | 0x00 | Digital volume control, DAC channel 4 coefficient byte[31:24] |
| 0x19 | DAC_VOL_CH4_BYT2[7:0] | 0x80 | Digital volume control, DAC channel 4 coefficient byte[23:16] |
| 0x1A | DAC_VOL_CH4_BYT3[7:0] | 0x00 | Digital volume control, DAC channel 4 coefficient byte[15:8] |
| 0x1B | DAC_VOL_CH4_BYT4[7:0] | 0x00 | Digital volume control, DAC channel 4 coefficient byte[7:0] |
| 0x20 | DAC_BEEP GEN_SINX_BYT1[7:0] | 0x45 | Programmable DAC BEEP GEN sin(x) coefficient byte[31:24] |
| 0x21 | DAC_BEEP GEN_SINX_BYT2[7:0] | 0xF4 | Programmable DAC BEEP GEN sin(x) coefficient byte[23:16] |
| 0x22 | DAC_BEEP GEN_SINX_BYT3[7:0] | 0x61 | Programmable DAC BEEP GEN sin(x) coefficient byte[15:8] |
| 0x23 | DAC_BEEP GEN_SINX_BYT4[7:0] | 0xD0 | Programmable DAC BEEP GEN sin(x) coefficient byte[7:0] |
| 0x24 | DAC_BEEP GEN_COSX_BYT1[7:0] | 0x7F | Programmable DAC BEEP GEN cos(x) coefficient byte[31:24] |
| 0x25 | DAC_BEEP GEN_COSX_BYT2[7:0] | 0xFE | Programmable DAC BEEP GEN cos(x) coefficient byte[23:16] |
| 0x26 | DAC_BEEP GEN_COSX_BYT3[7:0] | 0xFD | Programmable DAC BEEP GEN cos(x) coefficient byte[15:8] |
| 0x27 | DAC_BEEP GEN_COSX_BYT4[7:0] | 0x46 | Programmable DAC BEEP GEN cos(x) coefficient byte[7:0] |
| 0x28 | DAC_BEEP GEN2_SINX_BYT1[7:0] | 0x5D | Programmable DAC BEEP GEN2 sin(x) coefficient byte[31:24] |
| 0x29 | DAC_BEEP GEN2_SINX_BYT2[7:0] | 0xA2 | Programmable DAC BEEP GEN2 sin(x) coefficient byte[23:16] |
| 0x2A | DAC_BEEP GEN2_SINX_BYT3[7:0] | 0x74 | Programmable DAC BEEP GEN2 sin(x) coefficient byte[15:8] |
| 0x2B | DAC_BEEP GEN2_SINX_BYT4[7:0] | 0xB4 | Programmable DAC BEEP GEN2 sin(x) coefficient byte[7:0] |
| 0x2C | DAC_BEEP GEN2_COSX_BYT1[7:0] | 0x01 | Programmable DAC BEEP GEN2 cos(x) coefficient byte[31:24] |
| 0x2D | DAC_BEEP GEN2_COSX_BYT2[7:0] | 0x01 | Programmable DAC BEEP GEN2 cos(x) coefficient byte[23:16] |
| 0x2E | DAC_BEEP GEN2_COSX_BYT3[7:0] | 0x5B | Programmable DAC BEEP GEN2 cos(x) coefficient byte[15:8] |
| 0x2F | DAC_BEEP GEN2_COSX_BYT4[7:0] | 0x4B | Programmable DAC BEEP GEN2 cos(x) coefficient byte[7:0] |


### 8.2.9  Programmable Coefficient Registers: Page 19

This register page shown in [Table 8-222](#TABLE_FNW_L32_PDC) consists of the programmable coefficients for the ADC and DAC MSA for channels 1 to 4.

**Table 8-218 Page 19 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x58 | ADC_CH1_SF1_BYT1[7:0] | 0x04 | ADC CH1 MSA coefficient byte[31:24] |
| 0x59 | ADC_CH1_SF1_BYT2[7:0] | 0x00 | ADC CH1 MSA coefficient byte[23:16] |
| 0x5A | ADC_CH1_SF1_BYT3[7:0] | 0x00 | ADC CH1 MSA coefficient byte[15:8] |
| 0x5B | ADC_CH1_SF1_BYT4[7:0] | 0x00 | ADC CH1 MSA coefficient byte[7:0] |
| 0x5C | ADC_CH2_SF1_BYT1[7:0] | 0x04 | ADC CH2 MSA coefficient byte[31:24] |
| 0x5D | ADC_CH2_SF1_BYT2[7:0] | 0x00 | ADC CH2 MSA coefficient byte[23:16] |
| 0x5E | ADC_CH2_SF1_BYT3[7:0] | 0x00 | ADC CH2 MSA coefficient byte[15:8] |
| 0x5F | ADC_CH2_SF1_BYT4[7:0] | 0x00 | ADC CH2 MSA coefficient byte[7:0] |
| 0x60 | ADC_CH3_SF1_BYT1[7:0] | 0x04 | ADC CH3 MSA coefficient byte[31:24] |
| 0x61 | ADC_CH3_SF1_BYT2[7:0] | 0x00 | ADC CH3 MSA coefficient byte[23:16] |
| 0x62 | ADC_CH3_SF1_BYT3[7:0] | 0x00 | ADC CH3 MSA coefficient byte[15:8] |
| 0x63 | ADC_CH3_SF1_BYT4[7:0] | 0x00 | ADC CH3 MSA coefficient byte[7:0] |
| 0x64 | ADC_CH4_SF1_BYT1[7:0] | 0x04 | ADC CH4 MSA coefficient byte[31:24] |
| 0x65 | ADC_CH4_SF1_BYT2[7:0] | 0x00 | ADC CH4 MSA coefficient byte[23:16] |
| 0x66 | ADC_CH4_SF1_BYT3[7:0] | 0x00 | ADC CH4 MSA coefficient byte[15:8] |
| 0x67 | ADC_CH4_SF1_BYT4[7:0] | 0x00 | ADC CH4 MSA coefficient byte[7:0] |
| 0x68 | LDAC_SF1_BYT1[7:0] | 0x04 | LDAC MSA coefficient byte[31:24] |
| 0x69 | LDAC_SF1_BYT2[7:0] | 0x00 | LDAC MSA coefficient byte[23:16] |
| 0x6A | LDAC_SF1_BYT3[7:0] | 0x00 | LDAC MSA coefficient byte[15:8] |
| 0x6B | LDAC_SF1_BYT4[7:0] | 0x00 | LDAC MSA coefficient byte[7:0] |
| 0x6C | RDAC_SF1_BYT1[7:0] | 0x04 | RDAC MSA coefficient byte[31:24] |
| 0x6D | RDAC_SF1_BYT2[7:0] | 0x00 | RDAC MSA coefficient byte[23:16] |
| 0x6E | RDAC_SF1_BYT3[7:0] | 0x00 | RDAC MSA coefficient byte[15:8] |
| 0x6F | RDAC_SF1_BYT4[7:0] | 0x00 | RDAC MSA coefficient byte[7:0] |
| 0x70 | LDAC2_SF1_BYT1[7:0] | 0x04 | LDAC2 MSA coefficient byte[31:24] |
| 0x71 | LDAC2_SF1_BYT2[7:0] | 0x00 | LDAC2 MSA coefficient byte[23:16] |
| 0x72 | LDAC2_SF1_BYT3[7:0] | 0x00 | LDAC2 MSA coefficient byte[15:8] |
| 0x73 | LDAC2_SF1_BYT4[7:0] | 0x00 | LDAC2 MSA coefficient byte[7:0] |
| 0x74 | RDAC2_SF1_BYT1[7:0] | 0x04 | RDAC2 MSA coefficient byte[31:24] |
| 0x75 | RDAC2_SF1_BYT2[7:0] | 0x00 | RDAC2 MSA coefficient byte[23:16] |
| 0x76 | RDAC2_SF1_BYT3[7:0] | 0x00 | RDAC2 MSA coefficient byte[15:8] |
| 0x77 | RDAC2_SF1_BYT4[7:0] | 0x00 | RDAC2 MSA coefficient byte[7:0] |


### 8.2.10  Programmable Coefficient Registers: Page 25

This register page shown in [Table 8-222](#TABLE_FNW_L32_PDC) consists of the programmable coefficients for the DAC Limiter.

**Table 8-219 Page 25 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x60 | LIMITER_ATTACK_COEFF_BYT1[7:0] | 0x78 | Distortion limiter Attack coefficient byte[31:24] |
| 0x61 | LIMITER_ATTACK_COEFF_BYT2[7:0] | 0xD6 | Distortion limiter Attack coefficient byte[23:16] |
| 0x62 | LIMITER_ATTACK_COEFF_BYTT3[7:0] | 0xFC | Distortion limiter Attack coefficient byte[15:8] |
| 0x63 | LIMITER_ATTACK_COEFF_BYTT4[7:0] | 0x9F | Distortion limiter Attack coefficient byte[7:0] |
| 0x64 | LIMITER_RELEASE_COEFF_BYT1[7:0] | 0x40 | Distortion limiter Release coefficient byte[31:24] |
| 0x65 | LIMITER_RELEASE_COEFF_BYT2[7:0] | 0xBD | Distortion limiter Release coefficient byte[23:16] |
| 0x66 | LIMITER_RELEASE_COEFF_BYTT3[7:0] | 0xB7 | Distortion limiter Release coefficient byte[15:8] |
| 0x67 | LIMITER_RELEASE_COEFF_BYTT4[7:0] | 0xC0 | Distortion limiter Release coefficient byte[7:0] |
| 0x68 | LIMITER_ENV_DECAY_COEFF_BYT1[7:0] | 0x7F | Distortion limiter envelope decay coefficient byte[31:24] |
| 0x69 | LIMITER_ENV_DECAY_COEFF_BYT2[7:0] | 0xFC | Distortion limiter envelope decay coefficient byte[23:16] |
| 0x6A | LIMITER_ENV_DECAY_COEFF_BYTT3[7:0] | 0x3A | Distortion limiter envelope decay coefficient byte[15:8] |
| 0x6B | LIMITER_ENV_DECAY_COEFF_BYTT4[7:0] | 0x48 | Distortion limiter envelope decay coefficient byte[7:0] |
| 0x6C | LIMITER_THRESHOLD_MAX_BYT1[7:0] | 0x01 | Distortion limiter Threshold Max coefficient byte[31:24] |
| 0x6D | LIMITER_THRESHOLD_MAX_BYT2[7:0] | 0x69 | Distortion limiter Threshold Max coefficient byte[23:16] |
| 0x6E | LIMITER_THRESHOLD_MAX_BYTT3[7:0] | 0x9C | Distortion limiter Threshold Max coefficient byte[15:8] |
| 0x6F | LIMITER_THRESHOLD_MAX_BYTT4[7:0] | 0x10 | Distortion limiter Threshold Max coefficient byte[7:0] |
| 0x70 | LIMITER_THRESHOLD_MIN_BYT1[7:0] | 0x00 | Distortion limiter Threshold Min coefficient byte[31:24] |
| 0x71 | LIMITER_THRESHOLD_MIN_BYT2[7:0] | 0x72 | Distortion limiter Threshold Min coefficient byte[23:16] |
| 0x72 | LIMITER_THRESHOLD_MIN_BYTT3[7:0] | 0x59 | Distortion limiter Threshold Min coefficient byte[15:8] |
| 0x73 | LIMITER_THRESHOLD_MIN_BYTT4[7:0] | 0xDB | Distortion limiter Threshold Min coefficient byte[7:0] |
| 0x74 | LIMITER_INFLECTION_POINT_BYT1[7:0] | 0x00 | Distortion limiter Inflection Point coefficient byte[31:24] |
| 0x75 | LIMITER_INFLECTION_POINT_BYT2[7:0] | 0x00 | Distortion limiter Inflection Point coefficient byte[23:16] |
| 0x76 | LIMITER_INFLECTION_POINT_BYTT3[7:0] | 0x19 | Distortion limiter Inflection Point coefficient byte[15:8] |
| 0x77 | LIMITER_INFLECTION_POINT_BYTT4[7:0] | 0x9A | Distortion limiter Inflection Point coefficient byte[7:0] |
| 0x78 | LIMITER_SLOPE_BYT1[7:0] | 0x10 | Distortion limiter Slope coefficient byte[31:24] |
| 0x79 | LIMITER_SLOPE_BYT2[7:0] | 0x00 | Distortion limiter Slope coefficient byte[23:16] |
| 0x7A | LIMITER_SLOPE_BYTT3[7:0] | 0x00 | Distortion limiter Slope coefficient byte[15:8] |
| 0x7B | LIMITER_SLOPE_BYTT4[7:0] | 0x00 | Distortion limiter Slope coefficient byte[7:0] |
| 0x7C | LIMITER_RESET_COUNTER_BYT1[7:0] | 0x00 | Distortion limiter Hold Count coefficient byte[31:24] |
| 0x7D | LIMITER_RESET_COUNTER_BYT2[7:0] | 0x00 | Distortion limiter Hold Count coefficient byte[23:16] |
| 0x7E | LIMITER_RESET_COUNTER_BYTT3[7:0] | 0x09 | Distortion limiter Hold Count coefficient byte[15:8] |
| 0x7F | LIMITER_RESET_COUNTER_BYTT4[7:0] | 0x60 | Distortion limiter Hold Count coefficient byte[7:0] |


### 8.2.11  Programmable Coefficient Registers: Page 26

This register page shown in [Section 8.2.11](#GUID-14FEE58E-B38B-4F1E-A5EC-F8E00B706719) consists of the programmable coefficients for the DAC brownout protection (BOP), thermal foldback (THF) protection and Limiter.

**Table 8-220 Page 26 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x14 | BOP_ATTACK_COEFF_BYT1[7:0] | 0x78 | BOP Attack coefficient byte[31:24] |
| 0x15 | BOP_ATTACK_COEFF_BYT2[7:0] | 0xD6 | BOP Attack coefficient byte[23:16] |
| 0x16 | BOP_ATTACK_COEFF_BYTT3[7:0] | 0xFC | BOP Attack coefficient byte[15:8] |
| 0x17 | BOP_ATTACK_COEFF_BYTT4[7:0] | 0x9F | BOP Attack coefficient byte[7:0] |
| 0x18 | BOP_RELEASE_COEFF_BYT1[7:0] | 0x40 | BOP Release coefficient byte[31:24] |
| 0x19 | BOP_RELEASE_COEFF_BYT2[7:0] | 0xBD | BOP Release coefficient byte[23:16] |
| 0x1A | BOP_RELEASE_COEFF_BYTT3[7:0] | 0xB7 | BOP Release coefficient byte[15:8] |
| 0x1B | BOP_RELEASE_COEFF_BYTT4[7:0] | 0xC0 | BOP Release coefficient byte[7:0] |
| 0x1C | BOP_RESET_COUNTER_BYT1[7:0] | 0x00 | BOP Hold Count coefficient byte[31:24] |
| 0x1D | BOP_RESET_COUNTER_BYT2[7:0] | 0x00 | BOP Hold Count coefficient byte[23:16] |
| 0x1E | BOP_RESET_COUNTER_BYTT3[7:0] | 0x09 | BOP Hold Count coefficient byte[15:8] |
| 0x1F | BOP_RESET_COUNTER_BYTT4[7:0] | 0x60 | BOP Hold Count coefficient byte[7:0] |
| 0x20 | BOP_VSUP_TH1_BYT1[7:0] | 0x00 | BOP Supply Threshold1 coefficient byte[31:24] |
| 0x21 | BOP_VSUP_TH1_BYT2[7:0] | 0x00 | BOP Supply Threshold1 coefficient byte[23:16] |
| 0x22 | BOP_VSUP_TH1_BYTT3[7:0] | 0x19 | BOP Supply Threshold1 coefficient byte[15:8] |
| 0x23 | BOP_VSUP_TH1_BYTT4[7:0] | 0x9A | BOP Supply Threshold1 coefficient byte[7:0] |
| 0x24 | BOP_THRESHOLD1_BYT1[7:0] | 0x2D | BOP Threshold1 Gain coefficient byte[31:24] |
| 0x25 | BOP_THRESHOLD1_BYT2[7:0] | 0x4E | BOP Threshold1 Gain coefficient byte[23:16] |
| 0x26 | BOP_THRESHOLD1_BYTT3[7:0] | 0xFB | BOP Threshold1 Gain coefficient byte[15:8] |
| 0x27 | BOP_THRESHOLD1_BYTT4[7:0] | 0xD6 | BOP Threshold1 Gain coefficient byte[7:0] |
| 0x28 | BOP_VSUP_TH2_BYT1[7:0] | 0x00 | BOP Supply Threshold2 coefficient byte[31:24] |
| 0x29 | BOP_VSUP_TH2_BYT2[7:0] | 0x00 | BOP Supply Threshold2 coefficient byte[23:16] |
| 0x2A | BOP_VSUP_TH2_BYTT3[7:0] | 0x16 | BOP Supply Threshold2 coefficient byte[15:8] |
| 0x2B | BOP_VSUP_TH2_BYTT4[7:0] | 0x66 | BOP Supply Threshold2 coefficient byte[7:0] |
| 0x2C | BOP_THRESHOLD2_BYT1[7:0] | 0x14 | BOP Threshold2 Gain coefficient byte[31:24] |
| 0x2D | BOP_THRESHOLD2_BYT2[7:0] | 0x3D | BOP Threshold2 Gain coefficient byte[23:16] |
| 0x2E | BOP_THRESHOLD2_BYTT3[7:0] | 0x13 | BOP Threshold2 Gain coefficient byte[15:8] |
| 0x2F | BOP_THRESHOLD2_BYTT4[7:0] | 0x62 | BOP Threshold2 Gain coefficient byte[7:0] |
| 0x30 | THF_ATTACK_COEFF_BYT1[7:0] | 0x78 | THF Attack coefficient byte[31:24] |
| 0x31 | THF_ATTACK_COEFF_BYT2[7:0] | 0xD6 | THF Attack coefficient byte[23:16] |
| 0x32 | THF_ATTACK_COEFF_BYTT3[7:0] | 0xFC | THF Attack coefficient byte[15:8] |
| 0x33 | THF_ATTACK_COEFF_BYTT4[7:0] | 0x9F | THF Attack coefficient byte[7:0] |
| 0x34 | THF_RELEASE_COEFF_BYT1[7:0] | 0x40 | THF Release coefficient byte[31:24] |
| 0x35 | THF_RELEASE_COEFF_BYT2[7:0] | 0xBD | THF Release coefficient byte[23:16] |
| 0x36 | THF_RELEASE_COEFF_BYTT3[7:0] | 0xB7 | THF Release coefficient byte[15:8] |
| 0x37 | THF_RELEASE_COEFF_BYTT4[7:0] | 0xC0 | THF Release coefficient byte[7:0] |
| 0x38 | THF_RESET_COUNTER_BYT1[7:0] | 0x00 | THF Hold Count coefficient byte[31:24] |
| 0x39 | THF_RESET_COUNTER_BYT2[7:0] | 0x00 | THF Hold Count coefficient byte[23:16] |
| 0x3A | THF_RESET_COUNTER_BYTT3[7:0] | 0x09 | THF Hold Count coefficient byte[15:8] |
| 0x3B | THF_RESET_COUNTER_BYTT4[7:0] | 0x60 | THF Hold Count coefficient byte[7:0] |
| 0x3C | THF_TEMP_THRESHOLD_BYT1[7:0] | 0x00 | THF Temperature Threshold coefficient byte[31:24] |
| 0x3D | THF_TEMP_THRESHOLD_BYT2[7:0] | 0x00 | THF Temperature Threshold coefficient byte[23:16] |
| 0x3E | THF_TEMP_THRESHOLD_BYTT3[7:0] | 0x23 | THF Temperature Threshold coefficient byte[15:8] |
| 0x3F | THF_TEMP_THRESHOLD_BYTT4[7:0] | 0x80 | THF Temperature Threshold coefficient byte[7:0] |
| 0x40 | THF_MAX_ATTN_BYT1[7:0] | 0x2D | THF Max Attenuation coefficient byte[31:24] |
| 0x41 | THF_MAX_ATTN_BYT2[7:0] | 0x6A | THF Max Attenuation coefficient byte[23:16] |
| 0x42 | THF_MAX_ATTN_BYTT3[7:0] | 0x86 | THF Max Attenuation coefficient byte[15:8] |
| 0x43 | THF_MAX_ATTN_BYTT4[7:0] | 0x6F | THF Max Attenuation coefficient byte[7:0] |
| 0x44 | THF_SLOPE_BYT1[7:0] | 0xFE | THF Slope coefficient byte[31:24] |
| 0x45 | THF_SLOPE_BYT2[7:0] | 0x66 | THF Slope coefficient byte[23:16] |
| 0x46 | THF_SLOPE_BYTT3[7:0] | 0x66 | THF Slope coefficient byte[15:8] |
| 0x47 | THF_SLOPE_BYTT4[7:0] | 0x66 | THF Slope coefficient byte[7:0] |
| 0x48 | LIMITER_ATTACK_HYS_LEVEL_BYT1[7:0] | 0x08 | Distortion Limiter Attack Level Hysteresis coefficient byte[31:24] |
| 0x49 | LIMITER_ATTACK_HYS_LEVEL_BYT2[7:0] | 0xF9 | Distortion Limiter Attack Level Hysteresis coefficient byte[23:16] |
| 0x4A | LIMITER_ATTACK_HYS_LEVEL_BYTT3[7:0] | 0xE4 | Distortion Limiter Attack Level Hysteresis coefficient byte[15:8] |
| 0x4B | LIMITER_ATTACK_HYS_LEVEL_BYTT4[7:0] | 0xD0 | Distortion Limiter Attack Level Hysteresis coefficient byte[7:0] |
| 0x4C | LIMITER_RELEASE_HYS_LEVEL_BYT1[7:0] | 0x07 | Distortion Limiter Release Level Hysteresis coefficient byte[31:24] |
| 0x4D | LIMITER_RELEASE_HYS_LEVEL_BYT2[7:0] | 0x21 | Distortion Limiter Release Level Hysteresis coefficient byte[23:16] |
| 0x4E | LIMITER_RELEASE_HYS_LEVEL_BYTT3[7:0] | 0x48 | Distortion Limiter Release Level Hysteresis coefficient byte[15:8] |
| 0x4F | LIMITER_RELEASE_HYS_LEVEL_BYTT4[7:0] | 0x2C | Distortion Limiter Release Level Hysteresis coefficient byte[7:0] |
| 0x50 | BOP_LEVEL_HYS_SUP_BYT1[7:0] | 0x00 | BOP Level Hysteresis coefficient byte[31:24] |
| 0x51 | BOP_LEVEL_HYS_SUP_BYT2[7:0] | 0x00 | BOP Level Hysteresis coefficient byte[23:16] |
| 0x52 | BOP_LEVEL_HYS_SUP_BYTT3[7:0] | 0x00 | BOP Level Hysteresis coefficient byte[15:8] |
| 0x53 | BOP_LEVEL_HYS_SUP_BYTT4[7:0] | 0x14 | BOP Level Hysteresis coefficient byte[7:0] |
| 0x54 | BOP_LEVEL_HYS_GAIN_BYT1[7:0] | 0x03 | BOP gain Hysteresis coefficient byte[31:24] |
| 0x55 | BOP_LEVEL_HYS_GAIN_BYT2[7:0] | 0xD7 | BOP gain Hysteresis coefficient byte[23:16] |
| 0x56 | BOP_LEVEL_HYS_GAIN_BYTT3[7:0] | 0x0A | BOP gain Hysteresis coefficient byte[15:8] |
| 0x57 | BOP_LEVEL_HYS_GAIN_BYTT4[7:0] | 0x3E | BOP gain Hysteresis coefficient byte[7:0] |
| 0x58 | THF_GAIN_HYS_BYT1[7:0] | 0x03 | THF gain Hysteresis coefficient byte[31:24] |
| 0x59 | THF_GAIN_HYS_BYT2[7:0] | 0xD7 | THF gain Hysteresis coefficient byte[23:16] |
| 0x5A | THF_GAIN_HYS_BYTT3[7:0] | 0x0A | THF gain Hysteresis coefficient byte[15:8] |
| 0x5B | THF_GAIN_HYS_BYTT4[7:0] | 0x3D | THF gain Hysteresis coefficient byte[7:0] |


### 8.2.12  Programmable Coefficient Registers: Page 27

This register page shown in [Table 8-222](#TABLE_FNW_L32_PDC) consists of the programmable coefficients for the ADC AGC.

**Table 8-221 Page 27 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x5C | AGC_NOISE_FLOOR_BYT1[7:0] | 0xFF | AGC Noise Floor coefficient byte[31:24] |
| 0x5D | AGC_NOISE_FLOOR_BYT2[7:0] | 0xFE | AGC Noise Floor coefficient byte[23:16] |
| 0x5E | AGC_NOISE_FLOOR_BYTT3[7:0] | 0xB0 | AGC Noise Floor coefficient byte[15:8] |
| 0x5F | AGC_NOISE_FLOOR_BYTT4[7:0] | 0x00 | AGC Noise Floor coefficient byte[7:0] |
| 0x60 | AGC_TARGET_LEVEL_BYT1[7:0] | 0xFF | AGC Target Level coefficient byte[31:24] |
| 0x61 | AGC_TARGET_LEVEL_BYT2[7:0] | 0xFF | AGC Target Level coefficient byte[23:16] |
| 0x62 | AGC_TARGET_LEVEL_BYTT3[7:0] | 0x78 | AGC Target Level coefficient byte[15:8] |
| 0x63 | AGC_TARGET_LEVEL_BYTT4[7:0] | 0x00 | AGC Target Level coefficient byte[7:0] |
| 0x64 | AGC_NOISE_COUNT_MAX_BYT1[7:0] | 0x00 | AGC Noise Floor Hold Count coefficient byte[31:24] |
| 0x65 | AGC_NOISE_COUNT_MAX_BYT2[7:0] | 0x00 | AGC Noise Floor Hold Count coefficient byte[23:16] |
| 0x66 | AGC_NOISE_COUNT_MAX_BYTT3[7:0] | 0x04 | AGC Noise Floor Hold Count coefficient byte[15:8] |
| 0x67 | AGC_NOISE_COUNT_MAX_BYTT4[7:0] | 0xB0 | AGC Noise Floor Hold Count coefficient byte[7:0] |
| 0x68 | AGC_MAX_GAIN_BYT1[7:0] | 0x00 | AGC Maximum Gain coefficient byte[31:24] |
| 0x69 | AGC_MAX_GAIN_BYT2[7:0] | 0x00 | AGC Maximum Gain coefficient byte[23:16] |
| 0x6A | AGC_MAX_GAIN_BYTT3[7:0] | 0x60 | AGC Maximum Gain coefficient byte[15:8] |
| 0x6B | AGC_MAX_GAIN_BYTT4[7:0] | 0x00 | AGC Maximum Gain coefficient byte[7:0] |
| 0x6C | AGC_MIN_GAIN_BYT1[7:0] | 0xFF | AGC Minimum Gain coefficient byte[31:24] |
| 0x6D | AGC_MIN_GAIN_BYT2[7:0] | 0xFF | AGC Minimum Gain coefficient byte[23:16] |
| 0x6E | AGC_MIN_GAIN_BYTT3[7:0] | 0x88 | AGC Minimum Gain coefficient byte[15:8] |
| 0x6F | AGC_MIN_GAIN_BYTT4[7:0] | 0x00 | AGC Minimum Gain coefficient byte[7:0] |
| 0x70 | AGC_NOISE_HYS_BYT1[7:0] | 0x00 | AGC Noise Gate Hysteresis coefficient byte[31:24] |
| 0x71 | AGC_NOISE_HYS_BYT2[7:0] | 0x00 | AGC Noise Gate Hysteresis coefficient byte[23:16] |
| 0x72 | AGC_NOISE_HYS_BYTT3[7:0] | 0x18 | AGC Noise Gate Hysteresis coefficient byte[15:8] |
| 0x73 | AGC_NOISE_HYS_BYTT4[7:0] | 0x00 | AGC Noise Gate Hysteresis coefficient byte[7:0] |
| 0x74 | AGC_ATTACK_HOLD_COUNT_BYT1[7:0] | 0x00 | AGC Attack Hold Count coefficient byte[31:24] |
| 0x75 | AGC_ATTACK_HOLD_COUNT_BYT2[7:0] | 0x00 | AGC Attack Hold Count coefficient byte[23:16] |
| 0x76 | AGC_ATTACK_HOLD_COUNT_BYTT3[7:0] | 0x00 | AGC Attack Hold Count coefficient byte[15:8] |
| 0x77 | AGC_ATTACK_HOLD_COUNT_BYTT4[7:0] | 0x01 | AGC Attack Hold Count coefficient byte[7:0] |
| 0x78 | AGC_RELEASE_HOLD_COUNT_BYT1[7:0] | 0x00 | AGC Release Hold Count coefficient byte[31:24] |
| 0x79 | AGC_RELEASE_HOLD_COUNT_BYT2[7:0] | 0x00 | AGC Release Hold Count coefficient byte[23:16] |
| 0x7A | AGC_RELEASE_HOLD_COUNT_BYTT3[7:0] | 0x04 | AGC Release Hold Count coefficient byte[15:8] |
| 0x7B | AGC_RELEASE_HOLD_COUNT_BYTT4[7:0] | 0xB0 | AGC Release Hold Count coefficient byte[7:0] |
| 0x7C | AGC_RELEASE_HYST_BYT1[7:0] | 0x00 | AGC Release Hysteresis coefficient byte[31:24] |
| 0x7D | AGC_RELEASE_HYST_BYT2[7:0] | 0x00 | AGC Release Hysteresis coefficient byte[23:16] |
| 0x7E | AGC_RELEASE_HYST_BYTT3[7:0] | 0x08 | AGC Release Hysteresis coefficient byte[15:8] |
| 0x7F | AGC_RELEASE_HYST_BYTT4[7:0] | 0x00 | AGC Release Hysteresis coefficient byte[7:0] |


### 8.2.13  Programmable Coefficient Registers: Page 28

This register page shown in [Section 8.2.13](#GUID-8F92EB72-85B7-454C-BDE5-E256D605E534) consists of the programmable coefficients for the ADC AGC and DAC DRC.

**Table 8-222 Page 28 Programmable Coefficient Registers**


| ADDRESS | REGISTER | RESET | DESCRIPTION |
| --- | --- | --- | --- |
| 0x00 | PAGE[7:0] | 0x00 | Device Page Register |
| 0x08 | AGC_ATTACK_RATE_BYT1[7:0] | 0x50 | AGC Attack Rate coefficient byte[31:24] |
| 0x09 | AGC_ATTACK_RATE_BYT2[7:0] | 0xFC | AGC Attack Rate coefficient byte[23:16] |
| 0x0A | AGC_ATTACK_RATE_BYTT3[7:0] | 0x64 | AGC Attack Rate coefficient byte[15:8] |
| 0x0B | AGC_ATTACK_RATE_BYTT4[7:0] | 0x5C | AGC Attack Rate coefficient byte[7:0] |
| 0x0C | AGC_RELEASE_RATE_BYT1[7:0] | 0x7F | AGC Release Rate coefficient byte[31:24] |
| 0x0D | AGC_RELEASE_RATE_BYT2[7:0] | 0xC4 | AGC Release Rate coefficient byte[23:16] |
| 0x0E | AGC_RELEASE_RATE_BYTT3[7:0] | 0x0E | AGC Release Rate coefficient byte[15:8] |
| 0x0F | AGC_RELEASE_RATE_BYTT4[7:0] | 0x57 | AGC Release Rate coefficient byte[7:0] |
| 0x1C | DRC_MAX_GAIN_BYT1[7:0] | 0x00 | DRC Maximum Gain (dB) coefficient byte[31:24] |
| 0x1D | DRC_MAX_GAIN_BYT2[7:0] | 0x00 | DRC Maximum Gain (dB) coefficient byte[23:16] |
| 0x1E | DRC_MAX_GAIN_BYTT3[7:0] | 0x60 | DRC Maximum Gain (dB) coefficient byte[15:8] |
| 0x1F | DRC_MAX_GAIN_BYTT4[7:0] | 0x00 | DRC Maximum Gain (dB) coefficient byte[7:0] |
| 0x20 | DRC_MIN_GAIN_BYT1[7:0] | 0xFF | DRC Minimum Gain (dB) coefficient byte[31:24] |
| 0x21 | DRC_MIN_GAIN_BYT2[7:0] | 0xFF | DRC Minimum Gain (dB) coefficient byte[23:16] |
| 0x22 | DRC_MIN_GAIN_BYTT3[7:0] | 0x82 | DRC Minimum Gain (dB) coefficient byte[15:8] |
| 0x23 | DRC_MIN_GAIN_BYTT4[7:0] | 0x00 | DRC Minimum Gain (dB) coefficient byte[7:0] |
| 0x24 | DRC_ATTACK_TC_BYT1[7:0] | 0x67 | DRC Attack Time Constant coefficient byte[31:24] |
| 0x25 | DRC_ATTACK_TC_BYT2[7:0] | 0xED | DRC Attack Time Constant coefficient byte[23:16] |
| 0x26 | DRC_ATTACK_TC_BYTT3[7:0] | 0x87 | DRC Attack Time Constant coefficient byte[15:8] |
| 0x27 | DRC_ATTACK_TC_BYTT4[7:0] | 0xBB | DRC Attack Time Constant coefficient byte[7:0] |
| 0x28 | DRC_RELEASE_TC_BYT1[7:0] | 0x7E | DRC Release Time Constant coefficient byte[31:24] |
| 0x29 | DRC_RELEASE_TC_BYT2[7:0] | 0xAC | DRC Release Time Constant coefficient byte[23:16] |
| 0x2A | DRC_RELEASE_TC_BYTT3[7:0] | 0x70 | DRC Release Time Constant coefficient byte[15:8] |
| 0x2B | DRC_RELEASE_TC_BYTT4[7:0] | 0x34 | DRC Release Time Constant coefficient byte[7:0] |
| 0x2C | DRC_RELEASE_HOLD_COUNT_BYT1[7:0] | 0x00 | DRC Release Hold Count coefficient byte[31:24] |
| 0x2D | DRC_RELEASE_HOLD_COUNT_BYT2[7:0] | 0x00 | DRC Release Hold Count coefficient byte[23:16] |
| 0x2E | DRC_RELEASE_HOLD_COUNT_BYTT3[7:0] | 0x04 | DRC Release Hold Count coefficient byte[15:8] |
| 0x2F | DRC_RELEASE_HOLD_COUNT_BYTT4[7:0] | 0xB0 | DRC Release Hold Count coefficient byte[7:0] |
| 0x30 | DRC_RELEASE_HYST_BYT1[7:0] | 0x00 | DRC Release Hysteresis coefficient byte[31:24] |
| 0x31 | DRC_RELEASE_HYST_BYT2[7:0] | 0x00 | DRC Release Hysteresis coefficient byte[23:16] |
| 0x32 | DRC_RELEASE_HYST_BYTT3[7:0] | 0x0C | DRC Release Hysteresis coefficient byte[15:8] |
| 0x33 | DRC_RELEASE_HYST_BYTT4[7:0] | 0x00 | DRC Release Hysteresis coefficient byte[7:0] |
| 0x34 | DRC_INV_RATIO_BYT1[7:0] | 0xF8 | DRC Ratio coefficient byte[31:24] |
| 0x35 | DRC_INV_RATIO_BYT2[7:0] | 0x00 | DRC Ratio coefficient byte[23:16] |
| 0x36 | DRC_INV_RATIO_BYTT3[7:0] | 0x00 | DRC Ratio coefficient byte[15:8] |
| 0x37 | DRC_INV_RATIO_BYTT4[7:0] | 0x00 | DRC Ratio coefficient byte[7:0] |
| 0x38 | DRC_INFLECTION_PT_BYT1[7:0] | 0xFF | DRC Inflection Point(dB) coefficient byte[31:24] |
| 0x39 | DRC_INFLECTION_PT_BYT2[7:0] | 0xFF | DRC Inflection Point(dB) coefficient byte[23:16] |
| 0x3A | DRC_INFLECTION_PT_BYTT3[7:0] | 0xA0 | DRC Inflection Point(dB) coefficient byte[15:8] |
| 0x3B | DRC_INFLECTION_PT_BYTT4[7:0] | 0x00 | DRC Inflection Point(dB) coefficient byte[7:0] |
| 0x40 | DAC_ADSR_NOTE_BYT1[7:0] | 0x00 | ADSR Enable/Disable coefficient byte[31:24] |
| 0x41 | DAC_ADSR_NOTE_BYT2[7:0] | 0x00 | ADSR Enable/Disable coefficient byte[23:16] |
| 0x42 | DAC_ADSR_NOTE_BYT3[7:0] | 0x00 | ADSR Enable/Disable coefficient byte[15:8] |
| 0x43 | DAC_ADSR_NOTE_BYT4[7:0] | 0x00 | ADSR Enable/Disable coefficient byte[7:0] |
| 0x50 | DAC_ADSR_RESTART_TIMER_BYT1[7:0] | 0x00 | ADSR Restart Count coefficient byte[31:24] |
| 0x51 | DAC_ADSR_RESTART_TIMER_BYT2[7:0] | 0x00 | ADSR Restart Count coefficient byte[23:16] |
| 0x52 | DAC_ADSR_RESTART_TIMER_BYT3[7:0] | 0x25 | ADSR Restart Count coefficient byte[15:8] |
| 0x53 | DAC_ADSR_RESTART_TIMER_BYT4[7:0] | 0x80 | ADSR Restart Count coefficient byte[7:0] |
| 0x54 | DAC_ADSR_SUSTAIN_TIMER_BYT1[7:0] | 0x00 | ADSR Sustain Count coefficient byte[31:24] |
| 0x55 | DAC_ADSR_SUSTAIN_TIMER_BYT2[7:0] | 0x00 | ADSR Sustain Count coefficient byte[23:16] |
| 0x56 | DAC_ADSR_SUSTAIN_TIMER_BYT3[7:0] | 0x03 | ADSR Sustain Count coefficient byte[15:8] |
| 0x57 | DAC_ADSR_SUSTAIN_TIMER_BYT4[7:0] | 0xC0 | ADSR Sustain Count coefficient byte[7:0] |
| 0x58 | DAC_ADSR_DELATTACK_BYT1[7:0] | 0x00 | ADSR Attack Slope coefficient byte[31:24] |
| 0x59 | DAC_ADSR_DELATTACK_BYT2[7:0] | 0x44 | ADSR Attack Slope coefficient byte[23:16] |
| 0x5A | DAC_ADSR_DELATTACK_BYT3[7:0] | 0x52 | ADSR Attack Slope coefficient byte[15:8] |
| 0x5B | DAC_ADSR_DELATTACK_BYT4[7:0] | 0x3F | ADSR Attack Slope coefficient byte[7:0] |
| 0x5C | DAC_ADSR_DELRELEASE_BYT1[7:0] | 0xFF | ADSR Release Slope coefficient byte[31:24] |
| 0x5D | DAC_ADSR_DELRELEASE_BYT2[7:0] | 0xBB | ADSR Release Slope coefficient byte[23:16] |
| 0x5E | DAC_ADSR_DELRELEASE_BYT3[7:0] | 0xAD | ADSR Release Slope coefficient byte[15:8] |
| 0x5F | DAC_ADSR_DELRELEASE_BYT4[7:0] | 0xC1 | ADSR Release Slope coefficient byte[7:0] |
| 0x60 | DAC_ADSR_DELDECAY_BYT1[7:0] | 0x00 | ADSR Decay Slope coefficient byte[31:24] |
| 0x61 | DAC_ADSR_DELDECAY_BYT2[7:0] | 0x00 | ADSR Decay Slope coefficient byte[23:16] |
| 0x62 | DAC_ADSR_DELDECAY_BYT3[7:0] | 0x00 | ADSR Decay Slope coefficient byte[15:8] |
| 0x63 | DAC_ADSR_DELDECAY_BYT4[7:0] | 0x00 | ADSR Decay Slope coefficient byte[7:0] |
| 0x64 | DAC_ADSR_SUSLVL_BYT1[7:0] | 0x40 | ADSR Sustain Level coefficient byte[31:24] |
| 0x65 | DAC_ADSR_SUSLVL_BYT2[7:0] | 0x00 | ADSR Sustain Level coefficient byte[23:16] |
| 0x66 | DAC_ADSR_SUSLVL_BYT3[7:0] | 0x00 | ADSR Sustain Level coefficient byte[15:8] |
| 0x67 | DAC_ADSR_SUSLVL_BYT4[7:0] | 0x00 | ADSR Sustain Level coefficient byte[7:0] |


# 9  Application and Implementation

Note:

Information in the following applications sections is not part of the TI component specification, and TI does not warrant its accuracy or completeness. TI’s customers are responsible for determining suitability of components for their purposes, as well as validating and testing their design implementation to confirm system functionality.


## 9.1  Application Information

The TAC5212 is a stereo, high-performance audio codec that supports sample rates of up to 768kHz. The device supports up to a total of 4 microphones for simultaneous recording which can be selected from up to 2 analog microphones or 4 digital pulse density modulation (PDM) microphones. The device also supports up to 4 channel simultaneous playback which can be configured as a 2\-channel differential or psuedo-differential outputs or up to 4\-channel single-ended outputs with options for headphone and line-out drive capabilities.

Communication to the TAC5212 for configuration of the control registers is supported using an I<sup>2</sup>C or SPI interface. The device supports a highly flexible, audio serial interface (TDM, I<sup>2</sup>S, and LJ) to transmit audio data seamlessly in the system across devices.


## 9.2  Typical Application


### 9.2.1  Application

[Figure 9-1](#FIG_OC5_S34_RZB) shows a typical configuration of the TAC5212 for an application using two analog ECM microphones for simultaneous recording and a two-channel differential line-out for playback with an I<sup>2</sup>C control interface and a time-division multiplexing (TDM) audio data target interface. For low distortion, use input AC-coupling capacitors with a low-voltage coefficient.

![TAC5212 Stereo Microphone with Stereo Lineout Block Diagram](https://www.ti.com/ods/images/SLASF23A/GUID-20231211-SS0I-MHV0-J5XM-GJR7VBH42JZC-low.svg) 

**Figure 9-1 Stereo Microphone with Stereo Lineout Block Diagram**


### 9.2.2  Design Requirements

[Table 9-1](#GUID-9FDE66A3-F0EC-47D0-A07F-7987CB042A5F) lists the design parameters for this application.

**Table 9-1 Design Parameters**


| PARAMETER | VALUE |
| --- | --- |
| AVDD | 1.8V or 3.3V |
| IOVDD | 1.2V or 1.8V or 3.3V |
| AVDD supply current consumption | 28.5 mA, with AVDD = 3.3V (MICBIAS on, PLL on, stereo recording and playback, f<sub>s</sub> = 48kHz) |
| IOVDD supply current consumption | 0.3 mA, with IOVDD = 3.3V |
| Maximum MICBIAS current | 5mA |
| Load on OUT1M, OUT1P, OUT2M, OUT2P | >600Ω |


### 9.2.3  Detailed Design Procedure

This section describes the necessary steps to configure the TAC5212 for this specific application. The following steps provide a sequence of items that must be executed in the time between powering the device up and reading data from the device or transitioning from one mode to another mode of operation.

1.  Apply power to the device:
    1.  Power up the IOVDD and AVDD power supplies
    2.  Wait for at least 2ms to allow the device to initialize the internal registers.
    3.  The device now goes into sleep mode (low-power mode < 10µA)
2.  Transition from sleep mode to active mode whenever required for the operation:
    1.  Wake up the device by writing to P0_R2 to disable sleep mode
    2.  Wait for at least 2ms to allow the device to complete the internal wake-up sequence
    3.  Override the default configuration registers or programmable coefficients value as required (this step is optional)
    4.  Enable all desired input channels by writing to P0_R118
    5.  Enable all desired audio serial interface input/output channels by writing to P0_R40 to P0_R47 for DAC and P0_R30 to P0_R37 for ADC
    6.  Power-up the ADC, DAC and MICBIAS by writing to P0_R120
    7.  Apply FSYNC and BCLK with the desired output sample rates and the BCLK to FSYNC ratio
        
        This specific step can be done at any point in the sequence after step a.
        
        See the _[Section 7.3.2](GUID-41510D68-E4D1-4D50-9DFF-F3A62B0EAF89.html#GUID-41510D68-E4D1-4D50-9DFF-F3A62B0EAF89)_ section for supported sample rates and the BCLK to FSYNC ratio.
        
    8.  The device recording data is now sent to the host processor using the TDM audio serial data bus and playback data from TDM is now played on the lineout
3.  Transition from active mode to sleep mode (again) as required in the system for low-power operation:
    1.  Enter sleep mode by writing to P0_R2 to enable sleep mode
    2.  Wait at least 10ms (when FSYNC = 48kHz) for the volume to ramp down and for all blocks to power down
    3.  Read P0_R122 to check the device shutdown and sleep mode status
    4.  If the device P0_R122_D\[7:5\] status bit is 3'b100 then stop FSYNC and BCLK in the system
    5.  The device now goes into sleep mode (low-power mode < 10µA) and retains all register values
4.  Transition from sleep mode to active mode (again) as required for the recording operation:
    1.  Wake up the device by writing to P0_R2 to disable sleep mode
    2.  Wait at least 2ms to allow the device to complete the internal wake-up sequence
    3.  Apply FSYNC and BCLK with the desired output sample rates and the BCLK to FSYNC ratio
    4.  The device recording data is now sent to the host processor using the TDM audio serial data bus and playback data from TDM is now played on the lineout
5.  Repeat the steps as required for different device configurations and modes of operation


### 9.2.4  Application Performance Plots

At T<sub>A</sub> = 25°C, AVDD = 3.3V, IOVDD = 3.3V, f<sub>IN</sub> = 1kHz sinusoidal signal, f<sub>S</sub> = 48kHz, 32-bit audio data, BCLK = 256×f<sub>S</sub>, TDM target mode, PLL on, channel gain = 0dB, linear phase decimation/interpolation filters, 5kΩ input impedance setting, AC-coupled differential input with ADC_CHx_CM_TOL = 2'b00, 1200Ω line-out load in differential configuration, MICBIAS programmed to VREF and other default configurations; measured filter free with an audio precision with a 20Hz to 20kHz un-weighted banwidth, unless otherwise noted

![TAC5212 ADC FFT with -60dBFS Input](https://www.ti.com/ods/images/SLASF23A/GUID-20241227-SS0I-C53R-KY3J-X69WPM8J4VK7-low.svg)


| AC-coupled differential line input (-60dBFS) |
| --- |


**Figure 9-2 ADC FFT with -60dBFS Input**

![TAC5212 DAC FFT with -60dBFS Input](https://www.ti.com/ods/images/SLASF23A/GUID-20241227-SS0I-7FCI-XGG4-18S8UD4BVWUP-low.svg)


| Differential output (-60dBFS input) |
| --- |


**Figure 9-4 DAC FFT with -60dBFS Input**

![TAC5212 ADC THD+N Level vs Input](https://www.ti.com/ods/images/SLASF23A/GUID-20241227-SS0I-6ZRL-UC9U-9MFAIFPMGEEB-low.svg)


| AC-coupled differential line input |
| --- |


**Figure 9-3 ADC THD+N Level vs Input**

![TAC5212 DAC THD+N Level vs Input](https://www.ti.com/ods/images/SLASF23A/GUID-20241227-SS0I-5EYK-A7EN-4YLA7AV10C6S-low.svg)


| Differential output |
| --- |


**Figure 9-5 DAC THD+N Level vs Input**


### 9.2.5  Example Device Register Configuration Script for EVM Setup

This section provides a typical EVM I<sup>2</sup>C register control script for various applications

## Stereo differential AC-coupled analog recording and line output playback

```
# Key: w a0 XX YY ==> write to I2C address 0xa0, to register 0xXX, data 0xYY
# # ==> comment delimiter
#
# The following list gives an example sequence of items that must be executed in the time
# between powering the device up and reading data from the device. Note that there are
# other valid sequences depending on which features are used.
#
#
# Differential 2-channel ADC: INP1/INM1 - Ch1, INP2/INM2 - Ch2
# Differential 2-channel Line Out DAC: OUT1P/OUT1M - Ch1, OUT2P/OUT2M - Ch2
# FSYNC = 48 kHz (Output Data Sample Rate), BCLK = 12.288 MHz (BCLK/FSYNC = 256)
# AVDD = 3.3 V; IOVDD = 3.3 V
################################################################
#
#
# Page 0 Register Writes
w a0 00 00
w a0 01 01 #SW Reset
d 01
# Page 0 Register Writes
w a0 00 00
w a0 02 09 #Exit Sleep Mode with DREG and VREF Enabled
w a0 1a 30 #TDM protocol with 32-bit word length
w a0 4d 00 #VREF set to 2.75V for 2Vrms differential fullscale input
w a0 50 00 #ADC Channel 1 configured for AC-coupled differential input with 5kOhm input impedance and audio bandwidth
w a0 55 00 #ADC Channel 2 configured for AC-coupled differential input with 5kOhm input impedance and audio bandwidth
w a0 64 20 #DAC Channel 1 configured for differential output with 0.6*Vref as common mode
w a0 65 20 #DAC OUT1P configured for line out driver and audio bandwidth
w a0 66 20 #DAC OUT1M configured for line out driver and audio bandwidth
w a0 6b 20 #DAC Channel 2 configured for differential output with 0.6*Vref as common mode
w a0 6c 20 #DAC OUT2P configured for line out driver and audio bandwidth
w a0 6d 20 #DAC OUT2M configured for line out driver and audio bandwidth
w a0 76 cc #Input Channels 1, 2 enabled; Output Channels 1, 2 enabled
w a0 78 c0 #ADC, DAC Powered Up
# Apply FSYNC = 48 kHz and BCLK = 12.288 MHz and
# Start recording/playback data by host on ASI bus with TDM protocol 32-bits channel wordlength
```

## Four-channel PDM microphone recording

```
# Key: w a0 XX YY ==> write to I2C address 0xa0, to register 0xXX, data 0xYY
# # ==> comment delimiter
#
# The following list gives an example sequence of items that must be executed in the time
# between powering the device up and reading data from the device. Note that there are
# other valid sequences depending on which features are used.
#
# GPIO1 - PDMCLK @ 3.072MHz
# PDM Ch1/2 on GPIO2
# PDM Ch3/4 on GPI1
# FSYNC = 48kHz (Output Data Sample Rate), BCLK = 12.288MHz (BCLK/FSYNC = 256)
# AVDD = 3.3V; IOVDD = 3.3V
################################################################
#
# Page 0 Register Writes
w a0 00 00
w a0 01 01 #SW Reset
d 01
# Page 0 Register Writes
w a0 00 00
w a0 02 09 #Exit Sleep Mode with DREG and VREF Enabled
w a0 0a 41 #Configure GPIO1 as PDMCLK, with active high/active low drive
w a0 35 00 #PDMCLK frequency = 3.072MHz
w a0 0b 10 #Configure GPIO2 as GPI input
w a0 0d 02 #Configre GPI1 as GPI input
w a0 13 cb #Configure Channel1 and Channel2 as PDM; PDM1/2 data in on GPIO2; PDM3/4 data in on GPI1
w a0 1a 30 #TDM protocol with 32-bit word length
w a0 1e 20 #Channel1 data on TDM slot 0
w a0 1f 21 #Channel2 data on TDM slot 1
w a0 20 22 #Channel3 data on TDM slot 2
w a0 21 23 #Channel4 data on TDM slot 3
w a0 76 f0 #Enable input channels 1-4
w a0 78 80 #Power Up ADC path
# Provide BCLK, FSYNC corresponding to 48kSPS, and record with 32-bit TDM bus
```


## 9.3  Power Supply Recommendations

The power-supply sequence between the IOVDD and AVDD rails can be applied in any order. However, only initiate the I<sup>2</sup>C or SPI transactions to initialize the device after all supplies are stable.

For the supply power-up requirement, t<sub>1</sub>, t<sub>2</sub> must be at least 2ms to allow the device to initialize the internal registers. See the _[Section 7.4](GUID-650AF74C-19CE-467E-A008-FFFB8FDF95AF.html#GUID-650AF74C-19CE-467E-A008-FFFB8FDF95AF)_ section for details on how the device operates in various modes after the device power supplies are settled to the recommended operating voltage levels. For the supply power-down requirement, t<sub>4</sub>, t<sub>5</sub> and t<sub>6</sub> must be at least 10ms. This timing (as shown in [Figure 9-6](#T5139633-4)) allows the device to ramp down the volume on the record data, power down the analog and digital blocks, and put the device into shutdown mode. The device can also be immediately put into shutdown mode by ramping down power supplies, but doing so causes an abrupt shutdown.

![TAC5212 Power-Supply Sequencing Requirement Timing Diagram](https://www.ti.com/ods/images/SLASF23A/GUID-20241126-SS0I-EL9W-DS8V-UYRWXKNK06KH-low.svg) 

**Figure 9-6 Power-Supply Sequencing Requirement Timing Diagram**

Make sure that the supply ramp rate is slower than 0.1V/µs and that the wait time between a power-down and a power-up event is at least 100ms. For supply ramp rate slower than 0.1V/ms, host device must apply a software reset as first transaction before doing any device configuration. Make sure all digital input pins are at valid input levels and not toggling during supply sequencing.

The TAC5212 supports a single AVDD supply operation by integrating an on-chip digital regulator, DREG, and an integrated analog regulator. Ensure AVDD_MODE (P0_R2_D\[2\]) and IOVDD_IO_MODE (P0_R2_D\[1\]) registers are set correctly for AVDD 1.8V operation and for IOVDD 1.8V and 1.2V operation as described in [Section 9.3.1](GUID-82B672C4-01BB-407D-8404-A89CD6968F6F.html) and [Section 9.3.2](GUID-C5C1E45A-0C74-44F0-AACC-EB4811A97B3A.html) respectively.


### 9.3.1  AVDD_MODE for 1.8V Operation

After the supplies are stable, whenever using AVDD 1.8V operation, always set the AVDD_MODE (P0_R2_D\[2\]) setting to 1'b1 right after power-up to set the correct analog regulator (AREG) voltage. This setting is not needed when using AVDD 3.3V operation.


### 9.3.2  IOVDD_IO_MODE for 1.8V and 1.2V Operation

After the supplies are stable, the default register configuration of the device has a speed limitation on the maximum clock speed that can be supported for IOVDD = 1.8V or 1.2V at first power up of device with default configurations except for the first write operation. Whenever using IOVDD 1.8V and 1.2V operation, the first operation by user should always be to write the IOVDD_IO_MODE (P0_R2_D\[1\]) setting to 1'b1 after power-up or reset, and then there are no speed limitations in subsequent operation of device. This setting is not needed or applicable when using IOVDD 3.3V operation.


## 9.4  Layout


### 9.4.1  Layout Guidelines

Each system design and printed circuit board (PCB) layout is unique. The layout must be carefully reviewed in the context of a specific PCB design. However, the following guidelines can optimize the device performance:

-   Connect the thermal pad to ground. Use a via pattern to connect the device thermal pad, which is the area directly under the device, to the ground planes. This connection helps dissipate heat from the device.
-   Star connect all ground pins to the board ground plane. Use the same ground between VSS pins to avoid any potential voltage difference between them.
-   The decoupling capacitors for the power supplies must be placed close to the device pins.
-   Route the analog differential audio signals differentially on the PCB for better noise immunity. Avoid crossing digital and analog signals to prevent undesirable crosstalk.
-   Avoid running high-frequency clock and control signals near INxx and OUTxx pins where possible.
-   The device internal voltage references must be filtered using external capacitors. Place the filter capacitors near the VREF pin for good performance.
-   Directly tap the MICBIAS pin to avoid common impedance when routing the biasing or supply traces for multiple microphones to avoid coupling across microphones.
-   Provide a direct connection from the VREF and MICBIAS external capacitor ground terminal to VSS.
-   Place the MICBIAS capacitor (with low equivalent series resistance) close to the device with minimal trace impedance.
-   Use ground planes to provide the lowest impedance for power and signal current between the device and the decoupling capacitors. Treat the area directly under the device as a central ground area for the device, and all device grounds must be connected directly to that area.


### 9.4.2  Layout Example

![TAC5212 Example Layout](https://www.ti.com/ods/images/SLASF23A/GUID-20250101-SS0I-0Q0T-NX1Y-I0K6ILPLQH7Z-low.svg) 

**Figure 9-7 Example Layout**


# 10  Device and Documentation Support

TI offers an extensive line of development tools. Tools and software to evaluate the performance of the device, generate code, and develop solutions are listed below.


## 10.1  Documentation Support


### 10.1.1  Related Documentation

For related documentation see the following:

-   Texas Instruments, [_TAx5x12EVM-K Evaluation Module_ User's Guide](https://www.ti.com/lit/pdf/slau902a)
-   Texas Instruments, [_TAX5X1X Synchronous Sample Rate Conversion_ application report](https://www.ti.com/lit/pdf/SLAAEH2)
-   Texas Instruments, [_Clocking Configuration of Device and Flexible Clocking For TAx5x1x Family_ application report](https://www.ti.com/lit/pdf/slaaeg6)
-   Texas Instruments, [_Clock Error Configuration, Detection, and Modes Supported in TAx5x1x Family_ application report](https://www.ti.com/lit/pdf/slaaeg9)
-   Texas Instruments, [_Analog Input Configurations, Mixing and Muxing of TAx5x1x Devices_ application report](https://www.ti.com/lit/pdf/slaaed3)
-   Texas Instruments, [_TAC5x1x and TAC5x1x-Q1 Programmable Biquad Filters - Configuration and Applications_ application report](https://www.ti.com/lit/pdf/slaaeh6)
-   Texas Instruments, [_How to use the Voice Activity Detection in the TAx511x and TAx521x_ application report](https://www.ti.com/lit/pdf/sbaa600)
-   Texas Instruments, [_Tone Generation and Application Modes of TAx5x1x Devices_ application report](https://www.ti.com/lit/pdf/slaaed8)
-   Texas Instruments, [_TAC5x1x Power Consumption Matrix Across Various Usage Scenarios_ application report](https://www.ti.com/lit/pdf/sbaa611)
-   Texas Instruments, [_Output Swings and Common-mode Settings in ACcoupled and DC-coupled DAC_ application report](https://www.ti.com/lit/pdf/slaaee0)
-   Texas Instruments, [_Microphone Interface with TAX5XXX Devices_ application report](https://www.ti.com/lit/pdf/slla641)
-   Texas Instruments, [_Headset Detection for TAx52xx Family_ application report](https://www.ti.com/lit/pdf/slaaeg7)
-   Texas Instruments, [_Audio ADC, DAC, and CODEC for Professional Audio and Music Applications_ application report](https://www.ti.com/lit/pdf/sbaa580)


## 10.2  Receiving Notification of Documentation Updates

To receive notification of documentation updates, navigate to the device product folder on [ti.com](https://www.ti.com). Click on _Notifications_ to register and receive a weekly digest of any product information that has changed. For change details, review the revision history included in any revised document.


## 10.3  Support Resources

[TI E2E™ support forums](https://e2e.ti.com) are an engineer's go-to source for fast, verified answers and design help — straight from the experts. Search existing answers or ask your own question to get the quick design help you need.

Linked content is provided "AS IS" by the respective contributors. They do not constitute TI specifications and do not necessarily reflect TI's views; see TI's [Terms of Use](https://www.ti.com/corp/docs/legal/termsofuse.shtml).


## 10.4  Trademarks

TI E2E™ is a trademark of Texas Instruments.

All trademarks are the property of their respective owners.


## 10.5  Electrostatic Discharge Caution


|  | This integrated circuit can be damaged by ESD. Texas Instruments recommends that all integrated circuits be handled with appropriate precautions. Failure to observe proper handling and installation procedures can cause damage. |
| --- | --- |
| ESD damage can range from subtle performance degradation to complete device failure. Precision integrated circuits may be more susceptible to damage because very small parametric changes could cause the device not to meet its published specifications. |  |


## 10.6  Glossary

[TI Glossary](https://www.ti.com/lit/pdf/SLYZ022) This glossary lists and explains terms, acronyms, and definitions.


# 11  Revision History

**Changes from Revision * (January 2024) to Revision A (January 2025)**

-   Updated device status to production data.[Go](GUID-E9BCC09B-0416-454D-BB10-5AECE5F5B48C.html)


# 12  Mechanical, Packaging, and Orderable Information

The following pages include mechanical, packaging, and orderable information. This information is the most current data available for the designated devices. This data is subject to change without notice and revision of this document. For browser-based versions of this data sheet, refer to the left-hand navigation.

