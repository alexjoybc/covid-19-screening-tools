import React, { useState, useContext } from "react"
import { components } from "react-select"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"
import Button from "../components/button"
import AutocompleteDropdown from "../components/autocomplete-dropdown"
import { GlobalDispatchContext, GlobalStateContext } from "../context/global-context-provider"
import schools from "../data/schools.json"
import schools_fr from "../data/schools_fr.json"

import { questions } from "../shared"
import { general, schoolLanding, formatDate, schoolDataFields } from "../localized_content"

const CenteredDiv = styled.div`
  display: block;
  margin: 0 auto;
  button {
    display: block;
    margin: 1rem auto 1.75rem;
  }
`

const screenerType = "school"

const SchoolOptions = props => (
  <components.Option {...props}>
    <span>
      <strong>{props.label}</strong>
    </span>
    <br />
    <span>{props.value["Street"]}</span>
  </components.Option>
)

const SchoolLandingPageTemplate = ({ lang }) => {
  const {
    currentBuildDate: { currentDate },
  } = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  const localizedSchools = lang === "en" ? schools : schools_fr
  const localizedSchoolBoardFieldName = lang === "en" ? "Board Name" : schoolDataFields["Board Name"]
  const localizedNameFieldName = lang === "en" ? "School Name" : schoolDataFields["School Name"]
  const localizedSchoolBoards = Array.from(
    new Set(localizedSchools.map(school => school[localizedSchoolBoardFieldName]))
  ).map(item => ({ label: item, value: item }))

  const [schoolBoard, setSchoolBoard] = useState("")

  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const [screeningInfoStart, screeningInfoEnd] = schoolLanding[lang].screeningInfo.split(
    `[${schoolLanding[lang].linkText}]`
  )

  const handleClick = () => {
    dispatch({ type: "CS_START" })
    navigate(`${general[lang][screenerType].basePath}${questions.q8[lang]}`)
  }

  return (
    <Layout lang={lang} screenerType={screenerType}>
      <nav role="navigation">
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <ul className="ontario-breadcrumbs">
              {general[lang].breadcrumbs &&
                general[lang].breadcrumbs.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>{item.text}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
      <SkipNavContent>
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <p className="ontario-margin-bottom-12-!">
              <strong>{`${general[lang].lastUpdated} ${formatDate(new Date(Date.parse(currentDate)), lang)}`}</strong>
            </p>
            <h1>{general[lang][screenerType].title}</h1>
            <p className="ontario-lead-statement">{schoolLanding[lang].lead}</p>
            <p className="ontario-margin-top-32-!">{schoolLanding[lang].infoText}</p>
            <p className="ontario-margin-top-32-!">{schoolLanding[lang].additionalInfoText}</p>
            <p className="ontario-margin-top-32-!">
              {screeningInfoStart}
              <a href={schoolLanding[lang].link}>{schoolLanding[lang].linkText}</a>
              {screeningInfoEnd}
            </p>
            <AutocompleteDropdown
              selectOptions={localizedSchoolBoards}
              selectValue={schoolBoard}
              selectId="boards"
              selectTitle="Select a school board"
              onSelectChange={option => setSchoolBoard(option)}
            />
            {schoolBoard && (
              <AutocompleteDropdown
                selectOptions={localizedSchools
                  .filter(school => school[localizedSchoolBoardFieldName] === schoolBoard.value)
                  .map(school => ({ label: `${school[localizedNameFieldName]} - ${school["City"]}`, value: school }))}
                selectValue={state.school}
                selectId="schools"
                selectTitle="Select a school"
                selectOptionComponent={SchoolOptions}
                onSelectChange={option =>
                  dispatch({
                    type: "SCHOOL_SELECTED",
                    school: option,
                  })
                }
              />
            )}
            <CenteredDiv>
              <Button text={schoolLanding[lang].button} clickHandler={handleClick} />
            </CenteredDiv>
          </div>
        </div>
      </SkipNavContent>
    </Layout>
  )
}

export default SchoolLandingPageTemplate
