import React from 'react';
import * as styledComponents from 'styles/Skills/parts/BarChart';

const BarChart = (props) => {

  const {
    Chart,
    Title,
    Bar,
    BarLabel,
    BarBackground,
    BarForeground
  } = styledComponents;

  const { title, data } = props;

  return (
    <Chart>
      <Title>{title}</Title>
      <div>
        {data.map((skill, index) => (
          <Bar key={index}>
            <BarLabel>{skill.label}</BarLabel>
            <BarBackground>
              <BarForeground amount={skill.amount} />
            </BarBackground>
          </Bar>
        ))}
      </div>
    </Chart>
  );
};

export default BarChart;
