import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis } from 'recharts';


export const ForecastChart = ({data}) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
        <h3 style={{ 
            color: 'aliceblue', 
            fontSize: '16px', 
            marginBottom: '20px', 
            marginLeft: '10px' 
        }}>
            5-Day Forecast
        </h3>
        
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
        >
          {/* Poziome linie siatki - kolor dopasowany do Twojego tła */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#283039" />
          
          {/* Oś X (Dni tygodnia) */}
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#9AA8B7', fontSize: 12 }} 
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          
          {/* Ukrywamy Oś Y, ale jest potrzebna do skali */}
          <YAxis domain={['dataMin - 5', 'dataMax + 5']} hide={true} />
          
          
          <Tooltip 
            contentStyle={{ backgroundColor: '#1C252E', border: '1px solid #283039', borderRadius: '10px' }}
            itemStyle={{ color: '#0088FF' }}
            cursor={{ stroke: '#283039', strokeWidth: 2 }}
          />
          
         
          <Line 
            type="monotone" // To robi te ładne łuki zamiast kanciastych linii
            dataKey="temp" 
            stroke="#0088FF" 
            strokeWidth={3}
            dot={{ r: 5, fill: '#1C252E', stroke: '#0088FF', strokeWidth: 2 }} // Kropki z obwódką
            activeDot={{ r: 7, fill: '#0088FF' }} // Kropka po najechaniu
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};