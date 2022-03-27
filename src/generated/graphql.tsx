import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: string;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  readonly __typename?: 'Asset';
  readonly contentType?: Maybe<Scalars['String']>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description?: Maybe<Scalars['String']>;
  readonly fileName?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly linkedFrom?: Maybe<AssetLinkingCollections>;
  readonly size?: Maybe<Scalars['Int']>;
  readonly sys: Sys;
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  readonly __typename?: 'AssetCollection';
  readonly items: ReadonlyArray<Maybe<Asset>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type AssetFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<AssetFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<AssetFilter>>>;
  readonly contentType?: InputMaybe<Scalars['String']>;
  readonly contentType_contains?: InputMaybe<Scalars['String']>;
  readonly contentType_exists?: InputMaybe<Scalars['Boolean']>;
  readonly contentType_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly contentType_not?: InputMaybe<Scalars['String']>;
  readonly contentType_not_contains?: InputMaybe<Scalars['String']>;
  readonly contentType_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly description_contains?: InputMaybe<Scalars['String']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']>;
  readonly description_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly description_not?: InputMaybe<Scalars['String']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  readonly description_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly fileName?: InputMaybe<Scalars['String']>;
  readonly fileName_contains?: InputMaybe<Scalars['String']>;
  readonly fileName_exists?: InputMaybe<Scalars['Boolean']>;
  readonly fileName_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly fileName_not?: InputMaybe<Scalars['String']>;
  readonly fileName_not_contains?: InputMaybe<Scalars['String']>;
  readonly fileName_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly height?: InputMaybe<Scalars['Int']>;
  readonly height_exists?: InputMaybe<Scalars['Boolean']>;
  readonly height_gt?: InputMaybe<Scalars['Int']>;
  readonly height_gte?: InputMaybe<Scalars['Int']>;
  readonly height_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly height_lt?: InputMaybe<Scalars['Int']>;
  readonly height_lte?: InputMaybe<Scalars['Int']>;
  readonly height_not?: InputMaybe<Scalars['Int']>;
  readonly height_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['Int']>>
  >;
  readonly size?: InputMaybe<Scalars['Int']>;
  readonly size_exists?: InputMaybe<Scalars['Boolean']>;
  readonly size_gt?: InputMaybe<Scalars['Int']>;
  readonly size_gte?: InputMaybe<Scalars['Int']>;
  readonly size_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly size_lt?: InputMaybe<Scalars['Int']>;
  readonly size_lte?: InputMaybe<Scalars['Int']>;
  readonly size_not?: InputMaybe<Scalars['Int']>;
  readonly size_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly sys?: InputMaybe<SysFilter>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly title_contains?: InputMaybe<Scalars['String']>;
  readonly title_exists?: InputMaybe<Scalars['Boolean']>;
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not?: InputMaybe<Scalars['String']>;
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  readonly title_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly url?: InputMaybe<Scalars['String']>;
  readonly url_contains?: InputMaybe<Scalars['String']>;
  readonly url_exists?: InputMaybe<Scalars['Boolean']>;
  readonly url_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly url_not?: InputMaybe<Scalars['String']>;
  readonly url_not_contains?: InputMaybe<Scalars['String']>;
  readonly url_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly width?: InputMaybe<Scalars['Int']>;
  readonly width_exists?: InputMaybe<Scalars['Boolean']>;
  readonly width_gt?: InputMaybe<Scalars['Int']>;
  readonly width_gte?: InputMaybe<Scalars['Int']>;
  readonly width_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly width_lt?: InputMaybe<Scalars['Int']>;
  readonly width_lte?: InputMaybe<Scalars['Int']>;
  readonly width_not?: InputMaybe<Scalars['Int']>;
  readonly width_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  readonly __typename?: 'AssetLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

export type ContentfulMetadata = {
  readonly __typename?: 'ContentfulMetadata';
  readonly tags: ReadonlyArray<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  readonly tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  readonly tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  readonly id_contains_all?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly id_contains_none?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly id_contains_some?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  readonly __typename?: 'ContentfulTag';
  readonly id?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/course) */
export type Course = Entry & {
  readonly __typename?: 'Course';
  readonly contentfulMetadata: ContentfulMetadata;
  readonly linkedFrom?: Maybe<CourseLinkingCollections>;
  readonly sectionsCollection?: Maybe<CourseSectionsCollection>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly sys: Sys;
  readonly title?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/course) */
export type CourseLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/course) */
export type CourseSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/course) */
export type CourseSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/course) */
export type CourseTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CourseCollection = {
  readonly __typename?: 'CourseCollection';
  readonly items: ReadonlyArray<Maybe<Course>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type CourseFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CourseFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CourseFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly sectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly slug_contains?: InputMaybe<Scalars['String']>;
  readonly slug_exists?: InputMaybe<Scalars['Boolean']>;
  readonly slug_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly slug_not?: InputMaybe<Scalars['String']>;
  readonly slug_not_contains?: InputMaybe<Scalars['String']>;
  readonly slug_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly sys?: InputMaybe<SysFilter>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly title_contains?: InputMaybe<Scalars['String']>;
  readonly title_exists?: InputMaybe<Scalars['Boolean']>;
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not?: InputMaybe<Scalars['String']>;
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  readonly title_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
};

export type CourseLinkingCollections = {
  readonly __typename?: 'CourseLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
};

export type CourseLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CourseOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type CourseSectionsCollection = {
  readonly __typename?: 'CourseSectionsCollection';
  readonly items: ReadonlyArray<Maybe<Section>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type Entry = {
  readonly contentfulMetadata: ContentfulMetadata;
  readonly sys: Sys;
};

export type EntryCollection = {
  readonly __typename?: 'EntryCollection';
  readonly items: ReadonlyArray<Maybe<Entry>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type EntryFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<EntryFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<EntryFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  readonly backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  readonly cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  readonly format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  readonly height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  readonly quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  readonly resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  readonly resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  readonly width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/lesson) */
export type Lesson = Entry & {
  readonly __typename?: 'Lesson';
  readonly content?: Maybe<Scalars['String']>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly linkedFrom?: Maybe<LessonLinkingCollections>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly sys: Sys;
  readonly title?: Maybe<Scalars['String']>;
  readonly youtubeVideoUrl?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/lesson) */
export type LessonContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/lesson) */
export type LessonLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/lesson) */
export type LessonSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/lesson) */
export type LessonTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/lesson) */
export type LessonYoutubeVideoUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LessonCollection = {
  readonly __typename?: 'LessonCollection';
  readonly items: ReadonlyArray<Maybe<Lesson>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type LessonFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<LessonFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<LessonFilter>>>;
  readonly content?: InputMaybe<Scalars['String']>;
  readonly content_contains?: InputMaybe<Scalars['String']>;
  readonly content_exists?: InputMaybe<Scalars['Boolean']>;
  readonly content_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly content_not?: InputMaybe<Scalars['String']>;
  readonly content_not_contains?: InputMaybe<Scalars['String']>;
  readonly content_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly slug_contains?: InputMaybe<Scalars['String']>;
  readonly slug_exists?: InputMaybe<Scalars['Boolean']>;
  readonly slug_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly slug_not?: InputMaybe<Scalars['String']>;
  readonly slug_not_contains?: InputMaybe<Scalars['String']>;
  readonly slug_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly sys?: InputMaybe<SysFilter>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly title_contains?: InputMaybe<Scalars['String']>;
  readonly title_exists?: InputMaybe<Scalars['Boolean']>;
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not?: InputMaybe<Scalars['String']>;
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  readonly title_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly youtubeVideoUrl?: InputMaybe<Scalars['String']>;
  readonly youtubeVideoUrl_contains?: InputMaybe<Scalars['String']>;
  readonly youtubeVideoUrl_exists?: InputMaybe<Scalars['Boolean']>;
  readonly youtubeVideoUrl_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly youtubeVideoUrl_not?: InputMaybe<Scalars['String']>;
  readonly youtubeVideoUrl_not_contains?: InputMaybe<Scalars['String']>;
  readonly youtubeVideoUrl_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
};

export type LessonLinkingCollections = {
  readonly __typename?: 'LessonLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly sectionCollection?: Maybe<SectionCollection>;
};

export type LessonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LessonLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LessonOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  YoutubeVideoUrlAsc = 'youtubeVideoUrl_ASC',
  YoutubeVideoUrlDesc = 'youtubeVideoUrl_DESC',
}

export type Query = {
  readonly __typename?: 'Query';
  readonly asset?: Maybe<Asset>;
  readonly assetCollection?: Maybe<AssetCollection>;
  readonly course?: Maybe<Course>;
  readonly courseCollection?: Maybe<CourseCollection>;
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly lesson?: Maybe<Lesson>;
  readonly lessonCollection?: Maybe<LessonCollection>;
  readonly section?: Maybe<Section>;
  readonly sectionCollection?: Maybe<SectionCollection>;
};

export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryCourseArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryCourseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<CourseOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryLessonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryLessonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<LessonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonFilter>;
};

export type QuerySectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QuerySectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<SectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/section) */
export type Section = Entry & {
  readonly __typename?: 'Section';
  readonly contentfulMetadata: ContentfulMetadata;
  readonly lessonsCollection?: Maybe<SectionLessonsCollection>;
  readonly linkedFrom?: Maybe<SectionLinkingCollections>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly sys: Sys;
  readonly title?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/section) */
export type SectionLessonsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/section) */
export type SectionSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6wpy0gki866a/content_types/section) */
export type SectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SectionCollection = {
  readonly __typename?: 'SectionCollection';
  readonly items: ReadonlyArray<Maybe<Section>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type SectionFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<SectionFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<SectionFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly lessonsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly slug_contains?: InputMaybe<Scalars['String']>;
  readonly slug_exists?: InputMaybe<Scalars['Boolean']>;
  readonly slug_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly slug_not?: InputMaybe<Scalars['String']>;
  readonly slug_not_contains?: InputMaybe<Scalars['String']>;
  readonly slug_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
  readonly sys?: InputMaybe<SysFilter>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly title_contains?: InputMaybe<Scalars['String']>;
  readonly title_exists?: InputMaybe<Scalars['Boolean']>;
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not?: InputMaybe<Scalars['String']>;
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  readonly title_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']>>
  >;
};

export type SectionLessonsCollection = {
  readonly __typename?: 'SectionLessonsCollection';
  readonly items: ReadonlyArray<Maybe<Lesson>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type SectionLinkingCollections = {
  readonly __typename?: 'SectionLinkingCollections';
  readonly courseCollection?: Maybe<CourseCollection>;
  readonly entryCollection?: Maybe<EntryCollection>;
};

export type SectionLinkingCollectionsCourseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type Sys = {
  readonly __typename?: 'Sys';
  readonly environmentId: Scalars['String'];
  readonly firstPublishedAt?: Maybe<Scalars['DateTime']>;
  readonly id: Scalars['String'];
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  readonly publishedVersion?: Maybe<Scalars['Int']>;
  readonly spaceId: Scalars['String'];
};

export type SysFilter = {
  readonly firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  readonly firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['DateTime']>>
  >;
  readonly firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['DateTime']>>
  >;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly id_contains?: InputMaybe<Scalars['String']>;
  readonly id_exists?: InputMaybe<Scalars['Boolean']>;
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly id_not?: InputMaybe<Scalars['String']>;
  readonly id_not_contains?: InputMaybe<Scalars['String']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['DateTime']>>
  >;
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['DateTime']>>
  >;
  readonly publishedVersion?: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  readonly publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['Float']>>
  >;
  readonly publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_not?: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_not_in?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['Float']>>
  >;
};

export type GetAllCoursesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCoursesQuery = {
  readonly __typename?: 'Query';
  readonly courseCollection?: {
    readonly __typename?: 'CourseCollection';
    readonly items: ReadonlyArray<{
      readonly __typename?: 'Course';
      readonly slug?: string | null;
      readonly title?: string | null;
    } | null>;
  } | null;
};

export const GetAllCoursesDocument = gql`
  query GetAllCourses {
    courseCollection {
      items {
        slug
        title
      }
    }
  }
`;

/**
 * __useGetAllCoursesQuery__
 *
 * To run a query within a React component, call `useGetAllCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCoursesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllCoursesQuery,
    GetAllCoursesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(
    GetAllCoursesDocument,
    options,
  );
}
export function useGetAllCoursesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllCoursesQuery,
    GetAllCoursesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(
    GetAllCoursesDocument,
    options,
  );
}
export type GetAllCoursesQueryHookResult = ReturnType<
  typeof useGetAllCoursesQuery
>;
export type GetAllCoursesLazyQueryHookResult = ReturnType<
  typeof useGetAllCoursesLazyQuery
>;
export type GetAllCoursesQueryResult = Apollo.QueryResult<
  GetAllCoursesQuery,
  GetAllCoursesQueryVariables
>;
