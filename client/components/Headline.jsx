import React from 'react';
import {
  FaWifi,
  FaCoffee,
  FaThumbsUp,
  FaTrophy,
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #31363f;
  margin-top: 1rem;
`;

const TitleContainer = styled.div`
  font-size: 2.125rem;
  letter-spacing: -.3px;
  line-height: 1.18;
  margin: 0;
  display: block;
  margin-top: 1rem;
  letter-spacing: -.3px;
  font-size: 34px;
  text-decoration: none solid rgb(49, 54, 63);
  font-weight: 700;
`;

const AddressContainer = styled.div`
  font-size: 12px;
  letter-spacing: .2px;
  line-height: 15.96px;
  margin-top: 8px;
  height: 15px
  color: #31363F;
  display: block;
`;

const BadgeListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BadgeIcon = styled.span`
  color: #fff;
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: .5rem;
  cursor: pointer;
`;

const CoffeeBadge = styled(BadgeIcon)`
  background: #2767e7;
  font-size: 28px;
`;

const ThumbBadge = styled(BadgeIcon)`
  background: #26a159;
  font-size: 28px;
  transform: scale(-1,1);
`;

const WifiBadge = styled(BadgeIcon)`
  background: #2767e7;
  font-size: 28px;
`;

const TrophyBadge = styled(BadgeIcon)`
  background: #a68e17;
  font-size: 28px;
`;

const HoverPopperText = styled.span`
  visibility: hidden;
`;
const TooltipCard = styled.div`
  & ${BadgeIcon}:hover + ${HoverPopperText} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 8px 8px;
    border-radius: 4px;
  }
`;

const Headline = ({
  name, street, city, country,
}) => (
  <HeadlineContainer>
    <div>
      <TitleContainer>
        { name }
        {' '}
        Hostel
      </TitleContainer>
      <AddressContainer>
        <MdLocationOn />
        {' '}
        {street}
        ,
        {' '}
        {city}
        ,
        {' '}
        {country}
      </AddressContainer>
    </div>
    <BadgeListContainer>
      <TooltipCard>
        <CoffeeBadge>
          <FaCoffee />
        </CoffeeBadge>
        <HoverPopperText>
          {/* <p>Free breakfast</p> */}
        </HoverPopperText>
      </TooltipCard>

      <TooltipCard>
        <ThumbBadge>
          <div>
            <FaThumbsUp />
          </div>
        </ThumbBadge>
        <HoverPopperText>
          {/* <p>We love this hostel! It gets our thumbs up for consistently high customer ratings and excellent quality scores</p> */}
        </HoverPopperText>
      </TooltipCard>

      <TooltipCard>
        <TrophyBadge>
          <div>
            <FaTrophy />
          </div>
        </TrophyBadge>
        <HoverPopperText>
          {/* <label>2020 Hoscars Winner!</label> */}
        </HoverPopperText>
      </TooltipCard>

      <TooltipCard>
        <WifiBadge>
          <div>
            <FaWifi />
          </div>
        </WifiBadge>
        <HoverPopperText>
          {/* <p>Free WiFi</label> */}
        </HoverPopperText>
      </TooltipCard>
    </BadgeListContainer>
  </HeadlineContainer>
);

Headline.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Headline;
