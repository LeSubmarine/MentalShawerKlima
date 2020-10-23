﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ModelLib.Models
{
    public class SensorDataModel
    {
        public SensorDataModel()
        {
        }

        public SensorDataModel(int sensorID, string roomID, float temperature, int humidity, int co2, int pressure)
        {
            SensorID = sensorID;
            RoomID = roomID;
            Temperature = temperature;
            Humidity = humidity;
            CO2 = co2;
            Pressure = pressure;
            TimeStamp = DateTime.Now;
        }

        /// <summary>
        /// Key så SensorDataModel kan bruges i inMemoryDB
        /// </summary>
        [Key]
        public int MeasurmentId { get; set; }
        public int SensorID { get; set; }


        public string RoomID { get; set; }
        public double Temperature { get; set; }
        public int Humidity { get; set; }
        public int CO2 { get; set; }
        public int Pressure { get; set; }
        public DateTime TimeStamp { get; set; }

        public override string ToString()
        {
            return $"SensorID: {SensorID} - RoomID: {RoomID} - Temperature: {Temperature} °C - Humidity: {Humidity}% - CO2: {CO2} ppm - Pressure: {Pressure} bar";
        }
    }
}
