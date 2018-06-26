/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Navbar } from './navbar'
export { default as UserHome } from './user-home'
export { default as DataInput } from './data-input'
export { default as ChildComponent } from './children'
export { default as ChildNotes } from './children-notes'
export { default as ChildRisk } from './data-child-risk'
export { default as EnvRisk } from './data-env-risk'
export { default as ChildProtect } from './data-child-protect'
export { default as EnvProtect } from './data-env-protect'
export { default as ChildScoring } from './scoring'
export { default as Rankings } from './rankings'
export { default as ScoringNeed } from './scoring-need'
export { default as ScoringScope } from './scoring-scope'
export { default as ScoringStrengths } from './scoring-strengths'
export { default as ScoringFriend } from './scoring-friend'
export { default as ScoringTeacher } from './scoring-teacher'
export { default as ScoringRisks } from './scoring-risks'
export { default as ScoringHeader } from './scoring-header'


export { Login, Signup } from './auth-form'
