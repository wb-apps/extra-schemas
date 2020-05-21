/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link https://schemas.extra.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@extra/schemas/extra/apollo/PollAnswerV1';
import '@extra/schemas/extra/apollo/command/CastVoteV1';
import '@extra/schemas/extra/apollo/command/CreatePollV1';
import '@extra/schemas/extra/apollo/command/DeletePollV1';
import '@extra/schemas/extra/apollo/command/ExpirePollV1';
import '@extra/schemas/extra/apollo/command/MarkPollAsDraftV1';
import '@extra/schemas/extra/apollo/command/MarkPollAsPendingV1';
import '@extra/schemas/extra/apollo/command/PublishPollV1';
import '@extra/schemas/extra/apollo/command/UnpublishPollV1';
import '@extra/schemas/extra/apollo/command/UpdatePollV1';
import '@extra/schemas/extra/apollo/event/PollCreatedV1';
import '@extra/schemas/extra/apollo/event/PollDeletedV1';
import '@extra/schemas/extra/apollo/event/PollExpiredV1';
import '@extra/schemas/extra/apollo/event/PollMarkedAsDraftV1';
import '@extra/schemas/extra/apollo/event/PollMarkedAsPendingV1';
import '@extra/schemas/extra/apollo/event/PollPublishedV1';
import '@extra/schemas/extra/apollo/event/PollScheduledV1';
import '@extra/schemas/extra/apollo/event/PollUnpublishedV1';
import '@extra/schemas/extra/apollo/event/PollUpdatedV1';
import '@extra/schemas/extra/apollo/event/VoteCastedV1';
import '@extra/schemas/extra/apollo/node/PollV1';
import '@extra/schemas/extra/apollo/node/PollStatsV1';
import '@extra/schemas/extra/apollo/request/GetPollHistoryRequestV1';
import '@extra/schemas/extra/apollo/request/GetPollHistoryResponseV1';
import '@extra/schemas/extra/apollo/request/GetPollRequestV1';
import '@extra/schemas/extra/apollo/request/GetPollResponseV1';
import '@extra/schemas/extra/apollo/request/SearchPollsRequestV1';
import '@extra/schemas/extra/apollo/request/SearchPollsResponseV1';
import '@extra/schemas/extra/boost/command/CreateSponsorV1';
import '@extra/schemas/extra/boost/command/DeleteSponsorV1';
import '@extra/schemas/extra/boost/command/ExpireSponsorV1';
import '@extra/schemas/extra/boost/command/MarkSponsorAsDraftV1';
import '@extra/schemas/extra/boost/command/MarkSponsorAsPendingV1';
import '@extra/schemas/extra/boost/command/PublishSponsorV1';
import '@extra/schemas/extra/boost/command/RenameSponsorV1';
import '@extra/schemas/extra/boost/command/UnpublishSponsorV1';
import '@extra/schemas/extra/boost/command/UpdateSponsorV1';
import '@extra/schemas/extra/boost/event/SponsorCreatedV1';
import '@extra/schemas/extra/boost/event/SponsorDeletedV1';
import '@extra/schemas/extra/boost/event/SponsorExpiredV1';
import '@extra/schemas/extra/boost/event/SponsorMarkedAsDraftV1';
import '@extra/schemas/extra/boost/event/SponsorMarkedAsPendingV1';
import '@extra/schemas/extra/boost/event/SponsorPublishedV1';
import '@extra/schemas/extra/boost/event/SponsorRenamedV1';
import '@extra/schemas/extra/boost/event/SponsorScheduledV1';
import '@extra/schemas/extra/boost/event/SponsorUnpublishedV1';
import '@extra/schemas/extra/boost/event/SponsorUpdatedV1';
import '@extra/schemas/extra/boost/node/SponsorV1';
import '@extra/schemas/extra/boost/request/GetSponsorHistoryRequestV1';
import '@extra/schemas/extra/boost/request/GetSponsorHistoryResponseV1';
import '@extra/schemas/extra/boost/request/GetSponsorRequestV1';
import '@extra/schemas/extra/boost/request/GetSponsorResponseV1';
import '@extra/schemas/extra/boost/request/SearchSponsorsRequestV1';
import '@extra/schemas/extra/boost/request/SearchSponsorsResponseV1';
import '@extra/schemas/extra/canvas/block/ArticleBlockV1';
import '@extra/schemas/extra/canvas/block/AudioBlockV1';
import '@extra/schemas/extra/canvas/block/CodeBlockV1';
import '@extra/schemas/extra/canvas/block/DividerBlockV1';
import '@extra/schemas/extra/canvas/block/DocumentBlockV1';
import '@extra/schemas/extra/canvas/block/FacebookPostBlockV1';
import '@extra/schemas/extra/canvas/block/FacebookVideoBlockV1';
import '@extra/schemas/extra/canvas/block/GalleryBlockV1';
import '@extra/schemas/extra/canvas/block/GoogleMapBlockV1';
import '@extra/schemas/extra/canvas/block/HeadingBlockV1';
import '@extra/schemas/extra/canvas/block/IframeBlockV1';
import '@extra/schemas/extra/canvas/block/ImageBlockV1';
import '@extra/schemas/extra/canvas/block/ImgurPostBlockV1';
import '@extra/schemas/extra/canvas/block/InstagramMediaBlockV1';
import '@extra/schemas/extra/canvas/block/PageBreakBlockV1';
import '@extra/schemas/extra/canvas/block/PinterestPinBlockV1';
import '@extra/schemas/extra/canvas/block/PollBlockV1';
import '@extra/schemas/extra/canvas/block/PollGridBlockV1';
import '@extra/schemas/extra/canvas/block/QuoteBlockV1';
import '@extra/schemas/extra/canvas/block/SoundcloudAudioBlockV1';
import '@extra/schemas/extra/canvas/block/SpotifyEmbedBlockV1';
import '@extra/schemas/extra/canvas/block/SpotifyTrackBlockV1';
import '@extra/schemas/extra/canvas/block/TextBlockV1';
import '@extra/schemas/extra/canvas/block/TiktokEmbedBlockV1';
import '@extra/schemas/extra/canvas/block/TumblrPostBlockV1';
import '@extra/schemas/extra/canvas/block/TwitterTweetBlockV1';
import '@extra/schemas/extra/canvas/block/VideoBlockV1';
import '@extra/schemas/extra/canvas/block/VimeoVideoBlockV1';
import '@extra/schemas/extra/canvas/block/YoutubePlaylistBlockV1';
import '@extra/schemas/extra/canvas/block/YoutubeVideoBlockV1';
import '@extra/schemas/extra/canvas/command/CreatePageV1';
import '@extra/schemas/extra/canvas/command/DeletePageV1';
import '@extra/schemas/extra/canvas/command/ExpirePageV1';
import '@extra/schemas/extra/canvas/command/MarkPageAsDraftV1';
import '@extra/schemas/extra/canvas/command/MarkPageAsPendingV1';
import '@extra/schemas/extra/canvas/command/PublishPageV1';
import '@extra/schemas/extra/canvas/command/RenamePageV1';
import '@extra/schemas/extra/canvas/command/UnpublishPageV1';
import '@extra/schemas/extra/canvas/command/UpdatePageV1';
import '@extra/schemas/extra/canvas/event/PageCreatedV1';
import '@extra/schemas/extra/canvas/event/PageDeletedV1';
import '@extra/schemas/extra/canvas/event/PageExpiredV1';
import '@extra/schemas/extra/canvas/event/PageMarkedAsDraftV1';
import '@extra/schemas/extra/canvas/event/PageMarkedAsPendingV1';
import '@extra/schemas/extra/canvas/event/PagePublishedV1';
import '@extra/schemas/extra/canvas/event/PageRenamedV1';
import '@extra/schemas/extra/canvas/event/PageScheduledV1';
import '@extra/schemas/extra/canvas/event/PageUnpublishedV1';
import '@extra/schemas/extra/canvas/event/PageUpdatedV1';
import '@extra/schemas/extra/canvas/node/PageV1';
import '@extra/schemas/extra/canvas/request/GetPageHistoryRequestV1';
import '@extra/schemas/extra/canvas/request/GetPageHistoryResponseV1';
import '@extra/schemas/extra/canvas/request/GetPageRequestV1';
import '@extra/schemas/extra/canvas/request/GetPageResponseV1';
import '@extra/schemas/extra/canvas/request/SearchPagesRequestV1';
import '@extra/schemas/extra/canvas/request/SearchPagesResponseV1';
import '@extra/schemas/extra/curator/command/CreateGalleryV1';
import '@extra/schemas/extra/curator/command/CreatePromotionV1';
import '@extra/schemas/extra/curator/command/CreateTeaserV1';
import '@extra/schemas/extra/curator/command/CreateTimelineV1';
import '@extra/schemas/extra/curator/command/CreateWidgetV1';
import '@extra/schemas/extra/curator/command/DeleteGalleryV1';
import '@extra/schemas/extra/curator/command/DeletePromotionV1';
import '@extra/schemas/extra/curator/command/DeleteTeaserV1';
import '@extra/schemas/extra/curator/command/DeleteTimelineV1';
import '@extra/schemas/extra/curator/command/DeleteWidgetV1';
import '@extra/schemas/extra/curator/command/ExpireGalleryV1';
import '@extra/schemas/extra/curator/command/ExpirePromotionV1';
import '@extra/schemas/extra/curator/command/ExpireTeaserV1';
import '@extra/schemas/extra/curator/command/ExpireTimelineV1';
import '@extra/schemas/extra/curator/command/MarkGalleryAsDraftV1';
import '@extra/schemas/extra/curator/command/MarkGalleryAsPendingV1';
import '@extra/schemas/extra/curator/command/MarkPromotionAsDraftV1';
import '@extra/schemas/extra/curator/command/MarkPromotionAsPendingV1';
import '@extra/schemas/extra/curator/command/MarkTeaserAsDraftV1';
import '@extra/schemas/extra/curator/command/MarkTeaserAsPendingV1';
import '@extra/schemas/extra/curator/command/MarkTimelineAsDraftV1';
import '@extra/schemas/extra/curator/command/MarkTimelineAsPendingV1';
import '@extra/schemas/extra/curator/command/PublishGalleryV1';
import '@extra/schemas/extra/curator/command/PublishPromotionV1';
import '@extra/schemas/extra/curator/command/PublishTeaserV1';
import '@extra/schemas/extra/curator/command/PublishTimelineV1';
import '@extra/schemas/extra/curator/command/RemoveTeaserSlottingV1';
import '@extra/schemas/extra/curator/command/RenameGalleryV1';
import '@extra/schemas/extra/curator/command/RenameTimelineV1';
import '@extra/schemas/extra/curator/command/SyncTeaserV1';
import '@extra/schemas/extra/curator/command/UnpublishGalleryV1';
import '@extra/schemas/extra/curator/command/UnpublishPromotionV1';
import '@extra/schemas/extra/curator/command/UnpublishTeaserV1';
import '@extra/schemas/extra/curator/command/UnpublishTimelineV1';
import '@extra/schemas/extra/curator/command/UpdateGalleryV1';
import '@extra/schemas/extra/curator/command/UpdateGalleryImageCountV1';
import '@extra/schemas/extra/curator/command/UpdatePromotionV1';
import '@extra/schemas/extra/curator/command/UpdateTeaserV1';
import '@extra/schemas/extra/curator/command/UpdateTimelineV1';
import '@extra/schemas/extra/curator/command/UpdateWidgetV1';
import '@extra/schemas/extra/curator/event/GalleryCreatedV1';
import '@extra/schemas/extra/curator/event/GalleryDeletedV1';
import '@extra/schemas/extra/curator/event/GalleryExpiredV1';
import '@extra/schemas/extra/curator/event/GalleryImageCountUpdatedV1';
import '@extra/schemas/extra/curator/event/GalleryMarkedAsDraftV1';
import '@extra/schemas/extra/curator/event/GalleryMarkedAsPendingV1';
import '@extra/schemas/extra/curator/event/GalleryPublishedV1';
import '@extra/schemas/extra/curator/event/GalleryRenamedV1';
import '@extra/schemas/extra/curator/event/GalleryScheduledV1';
import '@extra/schemas/extra/curator/event/GalleryUnpublishedV1';
import '@extra/schemas/extra/curator/event/GalleryUpdatedV1';
import '@extra/schemas/extra/curator/event/PromotionCreatedV1';
import '@extra/schemas/extra/curator/event/PromotionDeletedV1';
import '@extra/schemas/extra/curator/event/PromotionExpiredV1';
import '@extra/schemas/extra/curator/event/PromotionMarkedAsDraftV1';
import '@extra/schemas/extra/curator/event/PromotionMarkedAsPendingV1';
import '@extra/schemas/extra/curator/event/PromotionPublishedV1';
import '@extra/schemas/extra/curator/event/PromotionScheduledV1';
import '@extra/schemas/extra/curator/event/PromotionUnpublishedV1';
import '@extra/schemas/extra/curator/event/PromotionUpdatedV1';
import '@extra/schemas/extra/curator/event/TeaserCreatedV1';
import '@extra/schemas/extra/curator/event/TeaserDeletedV1';
import '@extra/schemas/extra/curator/event/TeaserExpiredV1';
import '@extra/schemas/extra/curator/event/TeaserMarkedAsDraftV1';
import '@extra/schemas/extra/curator/event/TeaserMarkedAsPendingV1';
import '@extra/schemas/extra/curator/event/TeaserPublishedV1';
import '@extra/schemas/extra/curator/event/TeaserScheduledV1';
import '@extra/schemas/extra/curator/event/TeaserSlottingRemovedV1';
import '@extra/schemas/extra/curator/event/TeaserUnpublishedV1';
import '@extra/schemas/extra/curator/event/TeaserUpdatedV1';
import '@extra/schemas/extra/curator/event/TimelineCreatedV1';
import '@extra/schemas/extra/curator/event/TimelineDeletedV1';
import '@extra/schemas/extra/curator/event/TimelineExpiredV1';
import '@extra/schemas/extra/curator/event/TimelineMarkedAsDraftV1';
import '@extra/schemas/extra/curator/event/TimelineMarkedAsPendingV1';
import '@extra/schemas/extra/curator/event/TimelinePublishedV1';
import '@extra/schemas/extra/curator/event/TimelineRenamedV1';
import '@extra/schemas/extra/curator/event/TimelineScheduledV1';
import '@extra/schemas/extra/curator/event/TimelineUnpublishedV1';
import '@extra/schemas/extra/curator/event/TimelineUpdatedV1';
import '@extra/schemas/extra/curator/event/WidgetCreatedV1';
import '@extra/schemas/extra/curator/event/WidgetDeletedV1';
import '@extra/schemas/extra/curator/event/WidgetUpdatedV1';
import '@extra/schemas/extra/curator/node/AdWidgetV1';
import '@extra/schemas/extra/curator/node/AlertWidgetV1';
import '@extra/schemas/extra/curator/node/ArticleTeaserV1';
import '@extra/schemas/extra/curator/node/AssetTeaserV1';
import '@extra/schemas/extra/curator/node/BlogrollWidgetV1';
import '@extra/schemas/extra/curator/node/CarouselWidgetV1';
import '@extra/schemas/extra/curator/node/CategoryTeaserV1';
import '@extra/schemas/extra/curator/node/ChannelTeaserV1';
import '@extra/schemas/extra/curator/node/CodeWidgetV1';
import '@extra/schemas/extra/curator/node/GalleryV1';
import '@extra/schemas/extra/curator/node/GalleryTeaserV1';
import '@extra/schemas/extra/curator/node/GalleryWidgetV1';
import '@extra/schemas/extra/curator/node/GridlerWidgetV1';
import '@extra/schemas/extra/curator/node/HeroBarWidgetV1';
import '@extra/schemas/extra/curator/node/LinkTeaserV1';
import '@extra/schemas/extra/curator/node/MediaListWidgetV1';
import '@extra/schemas/extra/curator/node/PageTeaserV1';
import '@extra/schemas/extra/curator/node/PersonTeaserV1';
import '@extra/schemas/extra/curator/node/PlaylistWidgetV1';
import '@extra/schemas/extra/curator/node/PollTeaserV1';
import '@extra/schemas/extra/curator/node/PromotionV1';
import '@extra/schemas/extra/curator/node/ShowtimesWidgetV1';
import '@extra/schemas/extra/curator/node/SliderWidgetV1';
import '@extra/schemas/extra/curator/node/SpotlightWidgetV1';
import '@extra/schemas/extra/curator/node/TagCloudWidgetV1';
import '@extra/schemas/extra/curator/node/TetrisWidgetV1';
import '@extra/schemas/extra/curator/node/TimelineV1';
import '@extra/schemas/extra/curator/node/TimelineTeaserV1';
import '@extra/schemas/extra/curator/node/VideoTeaserV1';
import '@extra/schemas/extra/curator/node/YoutubeVideoTeaserV1';
import '@extra/schemas/extra/curator/request/GetGalleryHistoryRequestV1';
import '@extra/schemas/extra/curator/request/GetGalleryHistoryResponseV1';
import '@extra/schemas/extra/curator/request/GetGalleryRequestV1';
import '@extra/schemas/extra/curator/request/GetGalleryResponseV1';
import '@extra/schemas/extra/curator/request/GetPromotionHistoryRequestV1';
import '@extra/schemas/extra/curator/request/GetPromotionHistoryResponseV1';
import '@extra/schemas/extra/curator/request/GetPromotionRequestV1';
import '@extra/schemas/extra/curator/request/GetPromotionResponseV1';
import '@extra/schemas/extra/curator/request/GetTeaserHistoryRequestV1';
import '@extra/schemas/extra/curator/request/GetTeaserHistoryResponseV1';
import '@extra/schemas/extra/curator/request/GetTeaserRequestV1';
import '@extra/schemas/extra/curator/request/GetTeaserResponseV1';
import '@extra/schemas/extra/curator/request/GetTimelineHistoryRequestV1';
import '@extra/schemas/extra/curator/request/GetTimelineHistoryResponseV1';
import '@extra/schemas/extra/curator/request/GetTimelineRequestV1';
import '@extra/schemas/extra/curator/request/GetTimelineResponseV1';
import '@extra/schemas/extra/curator/request/GetWidgetHistoryRequestV1';
import '@extra/schemas/extra/curator/request/GetWidgetHistoryResponseV1';
import '@extra/schemas/extra/curator/request/GetWidgetRequestV1';
import '@extra/schemas/extra/curator/request/GetWidgetResponseV1';
import '@extra/schemas/extra/curator/request/RenderPromotionRequestV1';
import '@extra/schemas/extra/curator/request/RenderPromotionResponseV1';
import '@extra/schemas/extra/curator/request/RenderWidgetRequestV1';
import '@extra/schemas/extra/curator/request/RenderWidgetResponseV1';
import '@extra/schemas/extra/curator/request/SearchGalleriesRequestV1';
import '@extra/schemas/extra/curator/request/SearchGalleriesResponseV1';
import '@extra/schemas/extra/curator/request/SearchPromotionsRequestV1';
import '@extra/schemas/extra/curator/request/SearchPromotionsResponseV1';
import '@extra/schemas/extra/curator/request/SearchTeasersRequestV1';
import '@extra/schemas/extra/curator/request/SearchTeasersResponseV1';
import '@extra/schemas/extra/curator/request/SearchTimelinesRequestV1';
import '@extra/schemas/extra/curator/request/SearchTimelinesResponseV1';
import '@extra/schemas/extra/curator/request/SearchWidgetsRequestV1';
import '@extra/schemas/extra/curator/request/SearchWidgetsResponseV1';
import '@extra/schemas/extra/dam/command/CreateAssetV1';
import '@extra/schemas/extra/dam/command/DeleteAssetV1';
import '@extra/schemas/extra/dam/command/ExpireAssetV1';
import '@extra/schemas/extra/dam/command/LinkAssetsV1';
import '@extra/schemas/extra/dam/command/PatchAssetsV1';
import '@extra/schemas/extra/dam/command/ReorderGalleryAssetsV1';
import '@extra/schemas/extra/dam/command/UnlinkAssetsV1';
import '@extra/schemas/extra/dam/command/UpdateAssetV1';
import '@extra/schemas/extra/dam/event/AssetCreatedV1';
import '@extra/schemas/extra/dam/event/AssetDeletedV1';
import '@extra/schemas/extra/dam/event/AssetExpiredV1';
import '@extra/schemas/extra/dam/event/AssetLinkedV1';
import '@extra/schemas/extra/dam/event/AssetPatchedV1';
import '@extra/schemas/extra/dam/event/AssetUnlinkedV1';
import '@extra/schemas/extra/dam/event/AssetUpdatedV1';
import '@extra/schemas/extra/dam/event/GalleryAssetReorderedV1';
import '@extra/schemas/extra/dam/node/ArchiveAssetV1';
import '@extra/schemas/extra/dam/node/AudioAssetV1';
import '@extra/schemas/extra/dam/node/CodeAssetV1';
import '@extra/schemas/extra/dam/node/DocumentAssetV1';
import '@extra/schemas/extra/dam/node/ImageAssetV1';
import '@extra/schemas/extra/dam/node/UnknownAssetV1';
import '@extra/schemas/extra/dam/node/VideoAssetV1';
import '@extra/schemas/extra/dam/request/GetAssetHistoryRequestV1';
import '@extra/schemas/extra/dam/request/GetAssetHistoryResponseV1';
import '@extra/schemas/extra/dam/request/GetAssetRequestV1';
import '@extra/schemas/extra/dam/request/GetAssetResponseV1';
import '@extra/schemas/extra/dam/request/GetUploadUrlsRequestV1';
import '@extra/schemas/extra/dam/request/GetUploadUrlsResponseV1';
import '@extra/schemas/extra/dam/request/SearchAssetsRequestV1';
import '@extra/schemas/extra/dam/request/SearchAssetsResponseV1';
import '@extra/schemas/extra/iam/command/CreateAppV1';
import '@extra/schemas/extra/iam/command/CreateRoleV1';
import '@extra/schemas/extra/iam/command/CreateUserV1';
import '@extra/schemas/extra/iam/command/DeleteAppV1';
import '@extra/schemas/extra/iam/command/DeleteRoleV1';
import '@extra/schemas/extra/iam/command/DeleteUserV1';
import '@extra/schemas/extra/iam/command/GrantRolesToAppV1';
import '@extra/schemas/extra/iam/command/GrantRolesToUserV1';
import '@extra/schemas/extra/iam/command/RevokeRolesFromAppV1';
import '@extra/schemas/extra/iam/command/RevokeRolesFromUserV1';
import '@extra/schemas/extra/iam/command/UpdateAppV1';
import '@extra/schemas/extra/iam/command/UpdateRoleV1';
import '@extra/schemas/extra/iam/command/UpdateUserV1';
import '@extra/schemas/extra/iam/event/AppCreatedV1';
import '@extra/schemas/extra/iam/event/AppDeletedV1';
import '@extra/schemas/extra/iam/event/AppRolesGrantedV1';
import '@extra/schemas/extra/iam/event/AppRolesRevokedV1';
import '@extra/schemas/extra/iam/event/AppUpdatedV1';
import '@extra/schemas/extra/iam/event/RoleCreatedV1';
import '@extra/schemas/extra/iam/event/RoleDeletedV1';
import '@extra/schemas/extra/iam/event/RoleUpdatedV1';
import '@extra/schemas/extra/iam/event/UserCreatedV1';
import '@extra/schemas/extra/iam/event/UserDeletedV1';
import '@extra/schemas/extra/iam/event/UserRolesGrantedV1';
import '@extra/schemas/extra/iam/event/UserRolesRevokedV1';
import '@extra/schemas/extra/iam/event/UserUpdatedV1';
import '@extra/schemas/extra/iam/node/AlexaAppV1';
import '@extra/schemas/extra/iam/node/AndroidAppV1';
import '@extra/schemas/extra/iam/node/AppleNewsAppV1';
import '@extra/schemas/extra/iam/node/BrowserAppV1';
import '@extra/schemas/extra/iam/node/EmailAppV1';
import '@extra/schemas/extra/iam/node/IosAppV1';
import '@extra/schemas/extra/iam/node/RoleV1';
import '@extra/schemas/extra/iam/node/SlackAppV1';
import '@extra/schemas/extra/iam/node/SmsAppV1';
import '@extra/schemas/extra/iam/node/UserV1';
import '@extra/schemas/extra/iam/request/GetAllAppsRequestV1';
import '@extra/schemas/extra/iam/request/GetAllAppsResponseV1';
import '@extra/schemas/extra/iam/request/GetAppHistoryRequestV1';
import '@extra/schemas/extra/iam/request/GetAppHistoryResponseV1';
import '@extra/schemas/extra/iam/request/GetAppRequestV1';
import '@extra/schemas/extra/iam/request/GetAppResponseV1';
import '@extra/schemas/extra/iam/request/GetRoleHistoryRequestV1';
import '@extra/schemas/extra/iam/request/GetRoleHistoryResponseV1';
import '@extra/schemas/extra/iam/request/GetRoleRequestV1';
import '@extra/schemas/extra/iam/request/GetRoleResponseV1';
import '@extra/schemas/extra/iam/request/GetUserHistoryRequestV1';
import '@extra/schemas/extra/iam/request/GetUserHistoryResponseV1';
import '@extra/schemas/extra/iam/request/GetUserRequestV1';
import '@extra/schemas/extra/iam/request/GetUserResponseV1';
import '@extra/schemas/extra/iam/request/ListAllRolesRequestV1';
import '@extra/schemas/extra/iam/request/ListAllRolesResponseV1';
import '@extra/schemas/extra/iam/request/SearchUsersRequestV1';
import '@extra/schemas/extra/iam/request/SearchUsersResponseV1';
import '@extra/schemas/extra/news/command/CollectArticleStatsV1';
import '@extra/schemas/extra/news/command/CreateArticleV1';
import '@extra/schemas/extra/news/command/DeleteArticleV1';
import '@extra/schemas/extra/news/command/ExpireArticleV1';
import '@extra/schemas/extra/news/command/LockArticleV1';
import '@extra/schemas/extra/news/command/MarkArticleAsDraftV1';
import '@extra/schemas/extra/news/command/MarkArticleAsPendingV1';
import '@extra/schemas/extra/news/command/PublishArticleV1';
import '@extra/schemas/extra/news/command/RemoveArticleSlottingV1';
import '@extra/schemas/extra/news/command/RenameArticleV1';
import '@extra/schemas/extra/news/command/UnlockArticleV1';
import '@extra/schemas/extra/news/command/UnpublishArticleV1';
import '@extra/schemas/extra/news/command/UpdateArticleV1';
import '@extra/schemas/extra/news/event/AppleNewsArticleSyncedV1';
import '@extra/schemas/extra/news/event/ArticleCreatedV1';
import '@extra/schemas/extra/news/event/ArticleDeletedV1';
import '@extra/schemas/extra/news/event/ArticleExpiredV1';
import '@extra/schemas/extra/news/event/ArticleLockedV1';
import '@extra/schemas/extra/news/event/ArticleMarkedAsDraftV1';
import '@extra/schemas/extra/news/event/ArticleMarkedAsPendingV1';
import '@extra/schemas/extra/news/event/ArticlePublishedV1';
import '@extra/schemas/extra/news/event/ArticleRenamedV1';
import '@extra/schemas/extra/news/event/ArticleScheduledV1';
import '@extra/schemas/extra/news/event/ArticleSlottingRemovedV1';
import '@extra/schemas/extra/news/event/ArticleStatsCollectedV1';
import '@extra/schemas/extra/news/event/ArticleUnlockedV1';
import '@extra/schemas/extra/news/event/ArticleUnpublishedV1';
import '@extra/schemas/extra/news/event/ArticleUpdatedV1';
import '@extra/schemas/extra/news/node/ArticleV1';
import '@extra/schemas/extra/news/node/ArticleStatsV1';
import '@extra/schemas/extra/news/request/GetArticleHistoryRequestV1';
import '@extra/schemas/extra/news/request/GetArticleHistoryResponseV1';
import '@extra/schemas/extra/news/request/GetArticleRequestV1';
import '@extra/schemas/extra/news/request/GetArticleResponseV1';
import '@extra/schemas/extra/news/request/SearchArticlesRequestV1';
import '@extra/schemas/extra/news/request/SearchArticlesResponseV1';
import '@extra/schemas/extra/notify/command/CreateNotificationV1';
import '@extra/schemas/extra/notify/command/DeleteNotificationV1';
import '@extra/schemas/extra/notify/command/SendNotificationV1';
import '@extra/schemas/extra/notify/command/UpdateNotificationV1';
import '@extra/schemas/extra/notify/event/NotificationCreatedV1';
import '@extra/schemas/extra/notify/event/NotificationDeletedV1';
import '@extra/schemas/extra/notify/event/NotificationFailedV1';
import '@extra/schemas/extra/notify/event/NotificationSentV1';
import '@extra/schemas/extra/notify/event/NotificationUpdatedV1';
import '@extra/schemas/extra/notify/node/AlexaNotificationV1';
import '@extra/schemas/extra/notify/node/AndroidNotificationV1';
import '@extra/schemas/extra/notify/node/AppleNewsNotificationV1';
import '@extra/schemas/extra/notify/node/BrowserNotificationV1';
import '@extra/schemas/extra/notify/node/EmailNotificationV1';
import '@extra/schemas/extra/notify/node/IosNotificationV1';
import '@extra/schemas/extra/notify/node/SlackNotificationV1';
import '@extra/schemas/extra/notify/node/SmsNotificationV1';
import '@extra/schemas/extra/notify/request/GetNotificationHistoryRequestV1';
import '@extra/schemas/extra/notify/request/GetNotificationHistoryResponseV1';
import '@extra/schemas/extra/notify/request/GetNotificationRequestV1';
import '@extra/schemas/extra/notify/request/GetNotificationResponseV1';
import '@extra/schemas/extra/notify/request/SearchNotificationsRequestV1';
import '@extra/schemas/extra/notify/request/SearchNotificationsResponseV1';
import '@extra/schemas/extra/ovp/command/CreateVideoV1';
import '@extra/schemas/extra/ovp/command/DeleteVideoV1';
import '@extra/schemas/extra/ovp/command/ExpireVideoV1';
import '@extra/schemas/extra/ovp/command/MarkVideoAsDraftV1';
import '@extra/schemas/extra/ovp/command/MarkVideoAsPendingV1';
import '@extra/schemas/extra/ovp/command/PublishVideoV1';
import '@extra/schemas/extra/ovp/command/RenameVideoV1';
import '@extra/schemas/extra/ovp/command/UnpublishVideoV1';
import '@extra/schemas/extra/ovp/command/UpdateVideoV1';
import '@extra/schemas/extra/ovp/event/VideoCreatedV1';
import '@extra/schemas/extra/ovp/event/VideoDeletedV1';
import '@extra/schemas/extra/ovp/event/VideoExpiredV1';
import '@extra/schemas/extra/ovp/event/VideoMarkedAsDraftV1';
import '@extra/schemas/extra/ovp/event/VideoMarkedAsPendingV1';
import '@extra/schemas/extra/ovp/event/VideoPublishedV1';
import '@extra/schemas/extra/ovp/event/VideoRenamedV1';
import '@extra/schemas/extra/ovp/event/VideoScheduledV1';
import '@extra/schemas/extra/ovp/event/VideoUnpublishedV1';
import '@extra/schemas/extra/ovp/event/VideoUpdatedV1';
import '@extra/schemas/extra/ovp/node/VideoV1';
import '@extra/schemas/extra/ovp/request/GetVideoHistoryRequestV1';
import '@extra/schemas/extra/ovp/request/GetVideoHistoryResponseV1';
import '@extra/schemas/extra/ovp/request/GetVideoRequestV1';
import '@extra/schemas/extra/ovp/request/GetVideoResponseV1';
import '@extra/schemas/extra/ovp/request/SearchVideosRequestV1';
import '@extra/schemas/extra/ovp/request/SearchVideosResponseV1';
import '@extra/schemas/extra/people/command/CreatePersonV1';
import '@extra/schemas/extra/people/command/DeletePersonV1';
import '@extra/schemas/extra/people/command/RenamePersonV1';
import '@extra/schemas/extra/people/command/UpdatePersonV1';
import '@extra/schemas/extra/people/event/PersonCreatedV1';
import '@extra/schemas/extra/people/event/PersonDeletedV1';
import '@extra/schemas/extra/people/event/PersonRenamedV1';
import '@extra/schemas/extra/people/event/PersonUpdatedV1';
import '@extra/schemas/extra/people/node/PersonV1';
import '@extra/schemas/extra/people/request/GetPersonHistoryRequestV1';
import '@extra/schemas/extra/people/request/GetPersonHistoryResponseV1';
import '@extra/schemas/extra/people/request/GetPersonRequestV1';
import '@extra/schemas/extra/people/request/GetPersonResponseV1';
import '@extra/schemas/extra/people/request/SearchPeopleRequestV1';
import '@extra/schemas/extra/people/request/SearchPeopleResponseV1';
import '@extra/schemas/extra/sys/command/CreateFlagsetV1';
import '@extra/schemas/extra/sys/command/CreatePicklistV1';
import '@extra/schemas/extra/sys/command/CreateRedirectV1';
import '@extra/schemas/extra/sys/command/DeleteFlagsetV1';
import '@extra/schemas/extra/sys/command/DeletePicklistV1';
import '@extra/schemas/extra/sys/command/DeleteRedirectV1';
import '@extra/schemas/extra/sys/command/UpdateFlagsetV1';
import '@extra/schemas/extra/sys/command/UpdatePicklistV1';
import '@extra/schemas/extra/sys/command/UpdateRedirectV1';
import '@extra/schemas/extra/sys/event/FlagsetCreatedV1';
import '@extra/schemas/extra/sys/event/FlagsetDeletedV1';
import '@extra/schemas/extra/sys/event/FlagsetUpdatedV1';
import '@extra/schemas/extra/sys/event/PicklistCreatedV1';
import '@extra/schemas/extra/sys/event/PicklistDeletedV1';
import '@extra/schemas/extra/sys/event/PicklistUpdatedV1';
import '@extra/schemas/extra/sys/event/RedirectCreatedV1';
import '@extra/schemas/extra/sys/event/RedirectDeletedV1';
import '@extra/schemas/extra/sys/event/RedirectUpdatedV1';
import '@extra/schemas/extra/sys/node/FlagsetV1';
import '@extra/schemas/extra/sys/node/PicklistV1';
import '@extra/schemas/extra/sys/node/RedirectV1';
import '@extra/schemas/extra/sys/request/GetFlagsetHistoryRequestV1';
import '@extra/schemas/extra/sys/request/GetFlagsetHistoryResponseV1';
import '@extra/schemas/extra/sys/request/GetFlagsetRequestV1';
import '@extra/schemas/extra/sys/request/GetFlagsetResponseV1';
import '@extra/schemas/extra/sys/request/GetPicklistHistoryRequestV1';
import '@extra/schemas/extra/sys/request/GetPicklistHistoryResponseV1';
import '@extra/schemas/extra/sys/request/GetPicklistRequestV1';
import '@extra/schemas/extra/sys/request/GetPicklistResponseV1';
import '@extra/schemas/extra/sys/request/GetRedirectHistoryRequestV1';
import '@extra/schemas/extra/sys/request/GetRedirectHistoryResponseV1';
import '@extra/schemas/extra/sys/request/GetRedirectRequestV1';
import '@extra/schemas/extra/sys/request/GetRedirectResponseV1';
import '@extra/schemas/extra/sys/request/ListAllFlagsetsRequestV1';
import '@extra/schemas/extra/sys/request/ListAllFlagsetsResponseV1';
import '@extra/schemas/extra/sys/request/ListAllPicklistsRequestV1';
import '@extra/schemas/extra/sys/request/ListAllPicklistsResponseV1';
import '@extra/schemas/extra/sys/request/SearchRedirectsRequestV1';
import '@extra/schemas/extra/sys/request/SearchRedirectsResponseV1';
import '@extra/schemas/extra/taxonomy/command/CreateCategoryV1';
import '@extra/schemas/extra/taxonomy/command/CreateChannelV1';
import '@extra/schemas/extra/taxonomy/command/DeleteCategoryV1';
import '@extra/schemas/extra/taxonomy/command/DeleteChannelV1';
import '@extra/schemas/extra/taxonomy/command/RenameCategoryV1';
import '@extra/schemas/extra/taxonomy/command/RenameChannelV1';
import '@extra/schemas/extra/taxonomy/command/UpdateCategoryV1';
import '@extra/schemas/extra/taxonomy/command/UpdateChannelV1';
import '@extra/schemas/extra/taxonomy/event/CategoryCreatedV1';
import '@extra/schemas/extra/taxonomy/event/CategoryDeletedV1';
import '@extra/schemas/extra/taxonomy/event/CategoryRenamedV1';
import '@extra/schemas/extra/taxonomy/event/CategoryUpdatedV1';
import '@extra/schemas/extra/taxonomy/event/ChannelCreatedV1';
import '@extra/schemas/extra/taxonomy/event/ChannelDeletedV1';
import '@extra/schemas/extra/taxonomy/event/ChannelRenamedV1';
import '@extra/schemas/extra/taxonomy/event/ChannelUpdatedV1';
import '@extra/schemas/extra/taxonomy/node/CategoryV1';
import '@extra/schemas/extra/taxonomy/node/ChannelV1';
import '@extra/schemas/extra/taxonomy/request/GetAllChannelsRequestV1';
import '@extra/schemas/extra/taxonomy/request/GetAllChannelsResponseV1';
import '@extra/schemas/extra/taxonomy/request/GetCategoryHistoryRequestV1';
import '@extra/schemas/extra/taxonomy/request/GetCategoryHistoryResponseV1';
import '@extra/schemas/extra/taxonomy/request/GetCategoryRequestV1';
import '@extra/schemas/extra/taxonomy/request/GetCategoryResponseV1';
import '@extra/schemas/extra/taxonomy/request/GetChannelHistoryRequestV1';
import '@extra/schemas/extra/taxonomy/request/GetChannelHistoryResponseV1';
import '@extra/schemas/extra/taxonomy/request/GetChannelRequestV1';
import '@extra/schemas/extra/taxonomy/request/GetChannelResponseV1';
import '@extra/schemas/extra/taxonomy/request/SearchCategoriesRequestV1';
import '@extra/schemas/extra/taxonomy/request/SearchCategoriesResponseV1';
import '@extra/schemas/extra/taxonomy/request/SuggestHashtagsRequestV1';
import '@extra/schemas/extra/taxonomy/request/SuggestHashtagsResponseV1';
import '@gdbots/schemas/gdbots/analytics/tracker/KeenV1';
import '@gdbots/schemas/gdbots/contexts/AppV1';
import '@gdbots/schemas/gdbots/contexts/CloudV1';
import '@gdbots/schemas/gdbots/contexts/UserAgentV1';
import '@gdbots/schemas/gdbots/forms/field/AddressFieldV1';
import '@gdbots/schemas/gdbots/forms/field/AgeFieldV1';
import '@gdbots/schemas/gdbots/forms/field/CountryFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DateFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DobFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DocumentFieldV1';
import '@gdbots/schemas/gdbots/forms/field/EmailFieldV1';
import '@gdbots/schemas/gdbots/forms/field/FacebookUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/GenderFieldV1';
import '@gdbots/schemas/gdbots/forms/field/HeightFieldV1';
import '@gdbots/schemas/gdbots/forms/field/InstagramUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/LegalFieldV1';
import '@gdbots/schemas/gdbots/forms/field/LongTextFieldV1';
import '@gdbots/schemas/gdbots/forms/field/NumberFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PhoneFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PhotoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PinterestUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SelectFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SexualOrientationFieldV1';
import '@gdbots/schemas/gdbots/forms/field/ShortTextFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SignatureFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SkypeUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SnapchatUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/StatementFieldV1';
import '@gdbots/schemas/gdbots/forms/field/TwitterUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/VideoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/WebsiteFieldV1';
import '@gdbots/schemas/gdbots/forms/field/WeightFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YesNoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YoutubeUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YoutubeVideoFieldV1';
import '@gdbots/schemas/gdbots/geo/AddressV1';
import '@gdbots/schemas/gdbots/ncr/command/CreateEdgeV1';
import '@gdbots/schemas/gdbots/ncr/command/DeleteEdgeV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeCreatedV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeDeletedV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchRequestV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchResponseV1';
import '@gdbots/schemas/gdbots/pbjx/EnvelopeV1';
import '@gdbots/schemas/gdbots/pbjx/command/CheckHealthV1';
import '@gdbots/schemas/gdbots/pbjx/event/EventExecutionFailedV1';
import '@gdbots/schemas/gdbots/pbjx/event/HealthCheckedV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoRequestV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoResponseV1';
import '@gdbots/schemas/gdbots/pbjx/request/RequestFailedResponseV1';
import '@triniti/schemas/triniti/common/RenderContextV1';
import '@triniti/schemas/triniti/curator/SlotV1';
import '@triniti/schemas/triniti/migrator/command/SyncCfNodesV1';
import '@triniti/schemas/triniti/news/command/SyncFacebookInstantArticleV1';
import '@triniti/schemas/triniti/news/event/FacebookInstantArticleSyncedV1';
import '@triniti/schemas/triniti/notify/NotifierResultV1';
import '@triniti/schemas/triniti/ovp.jwplayer/command/SyncMediaV1';
import '@triniti/schemas/triniti/ovp.jwplayer/event/MediaSyncedV1';
import '@triniti/schemas/triniti/ovp.kaltura/CaptionV1';
import '@triniti/schemas/triniti/ovp.kaltura/EntryV1';
import '@triniti/schemas/triniti/ovp.kaltura/FlavorV1';
import '@triniti/schemas/triniti/ovp.kaltura/command/SyncEntryV1';
import '@triniti/schemas/triniti/ovp.medialive/command/StartChannelV1';
import '@triniti/schemas/triniti/ovp.medialive/command/StopChannelV1';
import '@triniti/schemas/triniti/ovp.medialive/event/ChannelStartedV1';
import '@triniti/schemas/triniti/ovp.medialive/event/ChannelStoppedV1';
import '@triniti/schemas/triniti/sys/command/PurgeCacheV1';

export default MessageResolver;
