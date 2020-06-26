import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"
import ButtonFindCentre from "../../components/button-find-centre"
import SaveToPDFButton from "../../components/save-to-pdf-button"

const lang = "en"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content ontario-margin-bottom-0-!">
        <h2>
          Based on your answers, we recommend that you <strong>go to a COVID-19 assessment centre to get tested</strong>{" "}
          because you were in close physical contact with someone who has COVID-19 symptoms or recently travelled.
        </h2>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <div className="ontario-row ontario-margin-top-16-!">
          <div className="ontario-small-12 ontario-medium-6 ontario-large-5 ontario-columns">
            <ButtonFindCentre lang={lang} />
          </div>
          <div className="ontario-small-12 ontario-medium-6 ontario-large-7 ontario-columns">
            <SaveToPDFButton ref={ref} lang={lang} />
          </div>
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <p>On this page:</p>
        <ol>
          <li>
            <AnchorLink to="/self-assessment/r6#stay-at-home">
              Stay home for 14 days except to go to an assessment centre{" "}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r6#monitor-your-health">Monitor your health</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r6#sign-up-follow-up">
              Sign up for an optional follow-up call
            </AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">1.</span> Stay home for 14 days except to go to an assessment
          centre
        </h3>
        <p className="ontario-first-line">
          This is called <strong>self-isolation</strong>. The 14 days start from the date you made close physical contact with that person.
        </p>

        <p>
          You could be carrying the virus without knowing it.{" "}
          <strong>Do not go into public spaces unless it is for a critical reason</strong> (like going to an assessment
          centre or for a medical emergency).
        </p>

        <p>Stay home so people in your community don’t get sick.</p>

        <h4>Face coverings and masks </h4>
        <ul>
          <li>use one when you are on the way to get a test or visit a hospital</li>
          <li>cover both your mouth and nose</li>
          <li>
            <strong>do not</strong> touch it without washing or sanitizing your hands first
          </li>
          <li>
            <a href="https://www.ontario.ca/page/face-coverings-and-face-masks" target="_blank" rel="noopener">
              learn how to wear and use face coverings and masks{" "}
              <span className="ontario-show-for-sr">This link will open in a new window.</span>
            </a>
          </li>
        </ul>

        <h4>Groceries, medications, and essential items</h4>
        <ul>
          <li>get someone who does not live with you to deliver these items</li>
          <li>place orders over the phone or online</li>
          <li>
            <strong>do not</strong> go into stores or supermarkets in person
          </li>
        </ul>

        <h4>Work and workspaces</h4>
        <ul>
          <li>work from home (if possible)</li>
          <li>if you cannot work from home, call your manager and occupational health and safety representative</li>
          <li>let them know if you are experiencing symptoms or have been instructed to self-isolate</li>
          <li>
            discuss your next steps with them to make sure you and your company are taking the right safety precautions
          </li>
        </ul>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>stay in a room away from them (if possible)</li>
          <li>use a different bathroom (if possible)</li>
          <li>keep a distance of at least 6 feet (2 metres) in shared spaces like kitchens or living rooms</li>
          <li>wear a face covering or mask when you are around them </li>
        </ul>

        <h4>People you do not live with</h4>
        <ul>
          <li>only contact them over the phone or online</li>
          <li>
            <strong>do not</strong> invite them over or socialize in person
          </li>
        </ul>

        <p className="ontario-margin-top-32-!">
          <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-3" rel="noopener" target="_blank">
            Get more tips on how to safely self-isolate.
            <span className="ontario-show-for-sr"> This link will open in a new window.</span>
          </a>{" "}
        </p>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor-your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">2.</span> Monitor your health
        </h3>
        <p className="ontario-first-line">Pay attention to your health and note if anything changes.</p>

        <p>Get re-tested at an assessment centre if you:</p>
        <ul>
          <li>start feeling sick </li>
          <li>come into close physical contact again with someone who has symptoms or has been diagnosed with COVID-19</li>
          <li>feel like you need a test, even if you do not have symptoms</li>
        </ul>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>they should note any changes to their health</li>
          <li>young children might have less specific symptoms like sluggishness or lack of appetite </li>
        </ul>
      </div>
    </div>
  </>
))

const R6 = () => {
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} showContactForm={true} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R6
