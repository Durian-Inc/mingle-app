export interface IUser {
  username: string;
  password: string;
  uid?: string;
}

export interface IQueryRequest {
  username: string;
  number: number;
  not: string[];
}

export interface IQueryResponse {
  query: string;
  topic: string;
}

export interface ISwipeData {
  username: string;
  id: number;
  title: string;
  body: string;
  swipe: number;
  sentiment: number;
}

interface Summary {
  sentences: string[];
}

interface Location {
  country: string;
  state: string;
  city: string;
}

interface Scope {
  country: string;
  state: string;
  city: string;
  level: string;
}

interface Alexa {
  rank: number;
  fetched_at: Date;
  country: string;
}

interface Rankings {
  alexa: Alexa[];
}

interface Source {
  id: number;
  name: string;
  title: string;
  description: string;
  links_in_count: number;
  home_page_url: string;
  domain: string;
  locations: Location[];
  scopes: Scope[];
  rankings: Rankings;
}

interface Author {
  id: number;
  name: string;
}

interface Links {
  dbpedia: string;
}

interface Body {
  text: string;
  score: number;
  types: string[];
  links: Links;
  indices: number[][];
}

interface Entities {
  title: any[];
  body: Body[];
}

interface Links2 {
  self: string;
  parent: string;
}

interface Category {
  id: string;
  taxonomy: string;
  level: number;
  score: number;
  confident: boolean;
  links: Links2;
}

interface SocialSharesCount {
  facebook: any[];
  google_plus: any[];
  linkedin: any[];
  reddit: any[];
}

interface Medium {
  type: string;
  url: string;
  format: string;
  content_length: number;
  width: number;
  height: number;
}

interface Title {
  polarity: string;
  score: number;
}

interface Body2 {
  polarity: string;
  score: number;
}

interface Sentiment {
  title: Title;
  body: Body2;
}

interface Links3 {
  permalink: string;
  related_stories: string;
  coverages: string;
}

export interface AylienResponse {
  id: number;
  title: string;
  body: string;
  summary: Summary;
  source: Source;
  author: Author;
  entities: Entities;
  keywords: string[];
  hashtags: string[];
  characters_count: number;
  words_count: number;
  sentences_count: number;
  paragraphs_count: number;
  categories: Category[];
  social_shares_count: SocialSharesCount;
  media: Medium[];
  sentiment: Sentiment;
  language: string;
  published_at: Date;
  links: Links3;
}
