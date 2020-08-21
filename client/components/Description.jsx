import React, { useState } from 'react';
import styled from 'styled-components';
import FullDescription from './FullDescription.jsx';
import placeholder from './img/snapshot.png';

const EditorialContainer = styled.div`
    bottom-margin: 16px;
  `;

const EditorialTitle = styled.h4`
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -.2px;
  font-weight: 400;
  color: #31363f;
  display: block;
  text-decoration: none solid rgb(49, 54, 63);
`;

const EditorialBodyText = styled.div`
  font-size: 14px;
  line-height: 20.02px;
  letter-spacing: .1px;
  font-weight: 400;
  color: #31363f;
  display: block;
  text-decoration: none solid rgb(49, 54, 63);
  white-space: pre-line;
  word-spacing: 1px;
`;

const PropertyInfo = styled.div`
  display: flex;
  display: wrap;
`;

const Flex20 = styled.div`
  flex: 20%;
  margin-top: 39px;
  margin-left: 20px;
`;

const Flex80 = styled.div`
  flex: 80%;
`;

const DescriptionContainer = styled.div`
  bottom-margin: 16px;
`;

const DescriptionTitle = styled.h4`
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -.2px;
  font-weight: 400;
  color: #31363f;
  display: block;
  text-decoration: none solid rgb(49, 54, 63);
`;

const DescriptionBodyText = styled.div`
  font-size: 14px;
  line-height: 20.02px;
  letter-spacing: .1px;
  font-weight: 400;
  color: #31363f;
  display: block;
  text-decoration: none solid rgb(49, 54, 63);
  white-space: pre-line;
  word-spacing: 1px;
`;

const DescriptionButton = styled.button`
  border-style: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const DescriptionButtonText = styled.span`
  color: #f25621;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .1px;
  line-height: 20.02px;
  text-decoration: none solid rgb(242, 86, 33);
  height: 28px;
  padding: 8px 0 0 0;
  text-align: left;
  display: inline-block;
`;

const Description = (props) => {
  const [expanded, setExpanded] = useState({ shown: true });
  const hostel = props;
  const text = hostel.descriptionTwo;
  const truncated = text.slice(0, 500);

  return (
    <PropertyInfo>
      <Flex20>
        <img src={placeholder} alt="review's snapshot img placeholder" />
      </Flex20>
      <Flex80>
        <EditorialContainer>
          <EditorialTitle>HostileWorld says</EditorialTitle>
          <EditorialBodyText>
            <p>{hostel.editorialOne}</p>
            <p>{hostel.editorialTwo}</p>
          </EditorialBodyText>
        </EditorialContainer>
        <DescriptionContainer>
          <DescriptionTitle>Property Description</DescriptionTitle>
          <DescriptionBodyText>
            {expanded.shown ? truncated
              : (
                <FullDescription
                  descriptionOne={hostel.descriptionOne}
                  descriptionTwo={hostel.descriptionTwo}
                  descriptionThree={hostel.descriptionThree}
                />
              )}
          </DescriptionBodyText>
          <DescriptionButton type="button" className="btn-show-more" onClick={() => setExpanded({ shown: !expanded.shown })}>
            {expanded.shown ? (<DescriptionButtonText>show more</DescriptionButtonText>)
              : (<DescriptionButtonText>show less</DescriptionButtonText>)}
          </DescriptionButton>
        </DescriptionContainer>
      </Flex80>
    </PropertyInfo>
  );
};

export default Description;
