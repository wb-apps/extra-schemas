<?php
declare(strict_types=1);

// @link https://schemas.extratv.com/json-schema/extra/apollo/node/poll/1-0-0.json#
namespace Extra\Schemas\Apollo\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Enum\Format;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Pbj\WellKnown\UuidIdentifier;
use Gdbots\Schemas\Ncr\Enum\NodeStatus;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Triniti\Schemas\Apollo\Mixin\Poll\PollV1Mixin as TrinitiApolloPollV1Mixin;

final class PollV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:extra:apollo:node:poll:1-0-0';
    const SCHEMA_CURIE = 'extra:apollo:node:poll';
    const SCHEMA_CURIE_MAJOR = 'extra:apollo:node:poll:v1';
    const MIXINS = [
      'gdbots:ncr:mixin:node:v1',
      'gdbots:ncr:mixin:node',
      'triniti:apollo:mixin:poll:v1',
      'triniti:apollo:mixin:poll',
      'gdbots:common:mixin:taggable:v1',
      'gdbots:common:mixin:taggable',
      'gdbots:ncr:mixin:expirable:v1',
      'gdbots:ncr:mixin:expirable',
      'gdbots:ncr:mixin:indexed:v1',
      'gdbots:ncr:mixin:indexed',
      'gdbots:ncr:mixin:publishable:v1',
      'gdbots:ncr:mixin:publishable',
      'triniti:boost:mixin:sponsorable:v1',
      'triniti:boost:mixin:sponsorable',
      'triniti:curator:mixin:teaserable:v1',
      'triniti:curator:mixin:teaserable',
      'triniti:people:mixin:has-people:v1',
      'triniti:people:mixin:has-people',
      'triniti:taxonomy:mixin:categorizable:v1',
      'triniti:taxonomy:mixin:categorizable',
      'triniti:taxonomy:mixin:has-channel:v1',
      'triniti:taxonomy:mixin:has-channel',
      'triniti:taxonomy:mixin:hashtaggable:v1',
      'triniti:taxonomy:mixin:hashtaggable',
    ];

    use GdbotsNcrNodeV1Mixin;

    use TrinitiApolloPollV1Mixin;

    protected static function defineSchema(): Schema
    {
        return new Schema(self::SCHEMA_ID, __CLASS__,
            [
                /*
                 * The "_id" value:
                 * - MUST NOT change for the life of the node.
                 * - SHOULD be globally unique
                 * - SHOULD be generated by the app (ideally in default value closure... e.g. UuidIdentifier::generate())
                 */
                Fb::create('_id', T\IdentifierType::create())
                    ->required()
                    ->withDefault(function() { return UuidIdentifier::generate(); })
                    ->className(UuidIdentifier::class)
                    ->overridable(true)
                    ->build(),
                Fb::create('status', T\StringEnumType::create())
                    ->withDefault("draft")
                    ->className(NodeStatus::class)
                    ->build(),
                Fb::create('etag', T\StringType::create())
                    ->maxLength(100)
                    ->pattern('^[\w\.:-]+$')
                    ->build(),
                Fb::create('created_at', T\MicrotimeType::create())
                    ->build(),
                /*
                 * A fully qualified reference to what created this node. This is intentionally a message-ref
                 * and not a user id because it is often a program that creates nodes, not a user.
                 */
                Fb::create('creator_ref', T\MessageRefType::create())
                    ->build(),
                Fb::create('updated_at', T\MicrotimeType::create())
                    ->useTypeDefault(false)
                    ->build(),
                /*
                 * A fully qualified reference to what updated this node. This is intentionally a message-ref
                 * and not a user id because it is often a program that updates nodes, not a user.
                 * E.g. "acme:iam:node:app:cli-scheduler" or "acme:iam:node:user:60c71df0-fda8-11e5-bfb9-30342d363854"
                 */
                Fb::create('updater_ref', T\MessageRefType::create())
                    ->build(),
                /*
                 * A reference to the last event that changed the state of this node.
                 * E.g. "acme:blog:event:article-published:60c71df0-fda8-11e5-bfb9-30342d363854"
                 */
                Fb::create('last_event_ref', T\MessageRefType::create())
                    ->build(),
                Fb::create('title', T\StringType::create())
                    ->build(),
                /*
                 * A reference to the image asset to use for widgets, sharing, seo.
                 */
                Fb::create('image_ref', T\NodeRefType::create())
                    ->build(),
                Fb::create('question', T\StringType::create())
                    ->build(),
                Fb::create('question_url', T\TextType::create())
                    ->format(Format::URL())
                    ->build(),
                Fb::create('allow_multiple_responses', T\BooleanType::create())
                    ->build(),
                Fb::create('answers', T\MessageType::create())
                    ->asAList()
                    ->anyOfCuries([
                        'triniti:apollo:mixin:poll-answer',
                    ])
                    ->build(),
                /*
                 * Tags is a map that categorizes data or tracks references in
                 * external systems. The tags names should be consistent and descriptive,
                 * e.g. fb_user_id:123, salesforce_customer_id:456.
                 */
                Fb::create('tags', T\StringType::create())
                    ->asAMap()
                    ->pattern('^[\w\/\.:-]+$')
                    ->build(),
                Fb::create('expires_at', T\DateTimeType::create())
                    ->build(),
                Fb::create('published_at', T\DateTimeType::create())
                    ->build(),
                Fb::create('sponsor_ref', T\NodeRefType::create())
                    ->build(),
                /*
                 * Determines the sequence that this teaserable node will be rendered
                 * in lists, search results, etc. It DOES NOT control visibility or
                 * publishing. A date was used over an integer (e.g. seq_no) for
                 * blog-like, reverse chronological, clarity in sorting.
                 */
                Fb::create('order_date', T\DateTimeType::create())
                    ->build(),
                Fb::create('primary_person_refs', T\NodeRefType::create())
                    ->asASet()
                    ->build(),
                Fb::create('person_refs', T\NodeRefType::create())
                    ->asASet()
                    ->build(),
                Fb::create('category_refs', T\NodeRefType::create())
                    ->asASet()
                    ->build(),
                Fb::create('channel_ref', T\NodeRefType::create())
                    ->build(),
                Fb::create('hashtags', T\StringType::create())
                    ->asASet()
                    ->format(Format::HASHTAG())
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
