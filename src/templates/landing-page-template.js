import React, { useState, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"
import styled from "styled-components"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"
import fr from "date-fns/locale/fr-CA"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { GlobalDispatchContext } from "../context/global-context-provider"
import courthouses from "../data/courthouses.json"

import { questions } from "../shared"
import { general, landing } from "../localized_content"

const CenteredDiv = styled.div`
  display: block;
  margin: 0 auto;

  button {
    display: block;
    margin: 1rem auto 1.75rem;
  }
`

const ErrorDiv = styled.div`
  background-color: #ffecee;
  border-left: 4px solid #cd0000;
  color: #cd0000;
  padding: 1rem;
  position: relative;
  margin-bottom: 1.5rem;
`

const CourtHouseSelect = styled.span`
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.1875rem;
  font-weight: 700;
  letter-spacing: 0.025rem;
  line-height: 1.56;
`

const CourtHouseDropDown = styled.div`
  .ontario-input {
    margin-bottom: 1rem;
  }
  .dropdownError {
    border: 3px solid #cd0000;
  }
`

const LandingPageTemplate = ({ lang }) => {
  const {
    currentBuildDate: { currentDate },
  } = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  const [courthouseSelectError, setCourthouseSelectError] = useState(false)
  const [courthouseName, setCourthouseName] = useState("")
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    if (!courthouseName) {
      setCourthouseSelectError(true);
      return
    }

    dispatch({ type: "CS_START" })
    navigate(`${general[lang].basePath}${questions.q1[lang]}`)
  }

  return (
    <Layout lang={lang}>
      <SEO lang={lang} />
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
              <strong>{`${general[lang].lastUpdated} ${format(new Date(Date.parse(currentDate)), "MMMM dd, yyyy", {
                locale: lang === "fr" ? fr : en,
              })}`}</strong>
            </p>
            <h1>{general[lang].title}</h1>
            <p className="ontario-lead-statement">{landing[lang].lead}</p>
            <p className="ontario-margin-top-32-!">{landing[lang].infoText}</p>
            <p className="ontario-margin-top-32-!">
              {landing[lang].screeningInfo} <a href={landing[lang].link}>{landing[lang].linkText}</a>.
            </p>
            <div className="ontario-row ontario-margin-top-32-! ontario-margin-bottom-0-!">
              <div className="ontario-small-12 ontario-medium-6 ontario-large-6 ontario-columns ontario-small-centered">
                <label className="ontario-label" htmlFor="courthouseSelect">
                  <CourtHouseSelect>{landing[lang].courthouseSelect}</CourtHouseSelect>
                </label>
                <CourtHouseDropDown>
                <select className={`ontario-input ontario-dropdown ${courthouseSelectError ? "dropdownError" : ""}`}
                  id="courthouseSelect"
                  onChange={e => {
                    let nameDisplayField = `court_name_display${lang === "fr" ? "_fr" : ""}`
                    setCourthouseName(e.target.value)
                    setCourthouseSelectError(false)
                    dispatch({
                      type: "COURTHOUSE_SELECTED",
                      courthouse: { ...courthouses.find(ch => ch[nameDisplayField] === e.target.value) },
                    })
                  }}
                  value={courthouseName}
                >
                  <option disabled value=""></option>
                  {courthouses &&
                    courthouses.map((ch, i) => (
                      <option
                        key={`${ch.court_name}-${i}`}
                        value={lang === "fr" ? ch.court_name_display_fr : ch.court_name_display}
                      >
                        {lang === "fr" ? ch.court_name_display_fr : ch.court_name_display}
                      </option>
                    ))}
                </select>
                </CourtHouseDropDown>
                {courthouseSelectError && <ErrorDiv>{landing[lang].courthouseSelectError}</ErrorDiv>}
              </div>
            </div>
            <CenteredDiv>
              <Button text={landing[lang].button} clickHandler={handleClick} />
            </CenteredDiv>
          </div>
        </div>
      </SkipNavContent>
    </Layout>
  )
}

export default LandingPageTemplate
