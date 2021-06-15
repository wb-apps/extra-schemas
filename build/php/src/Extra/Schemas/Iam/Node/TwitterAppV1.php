<?php
declare(strict_types=1);

// @link https://schemas.extratv.com/json-schema/extra/iam/node/twitter-app/1-0-0.json#
namespace Extra\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Pbj\WellKnown\UuidIdentifier;
use Gdbots\Schemas\Iam\Mixin\TwitterApp\TwitterAppV1Mixin as GdbotsIamTwitterAppV1Mixin;
use Gdbots\Schemas\Ncr\Enum\NodeStatus;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;

final class TwitterAppV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:extra:iam:node:twitter-app:1-0-0';
    const SCHEMA_CURIE = 'extra:iam:node:twitter-app';
    const SCHEMA_CURIE_MAJOR = 'extra:iam:node:twitter-app:v1';
    const MIXINS = [
      'gdbots:ncr:mixin:node:v1',
      'gdbots:ncr:mixin:node',
      'gdbots:iam:mixin:app:v1',
      'gdbots:iam:mixin:app',
      'gdbots:iam:mixin:twitter-app:v1',
      'gdbots:iam:mixin:twitter-app',
    ];

    use GdbotsNcrNodeV1Mixin;

    use GdbotsIamTwitterAppV1Mixin;

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
                 * The roles determine what permissions this app will have when using the system.
                 * The role itself is a node which has a set of "allow" and "deny" rules.
                 */
                Fb::create('roles', T\NodeRefType::create())
                    ->asASet()
                    ->build(),
                /*
                 * Equivalent to username of your Twitter developer app when making API requests.
                 * @link https://developer.twitter.com/en/docs/authentication/oauth-1-0a
                 */
                Fb::create('oauth_consumer_key', T\StringType::create())
                    ->pattern('^[\w-]+$')
                    ->build(),
                /*
                 * Equivalent to password of your Twitter developer app when making API requests.
                 * The "oauth_consumer_secret" should be encrypted and never stored in plain text.
                 * @link https://developer.twitter.com/en/docs/authentication/oauth-1-0a
                 */
                Fb::create('oauth_consumer_secret', T\TextType::create())
                    ->build(),
                /*
                 * An oauth token is a user-specific credentials used to authenticate OAuth 1.0a API requests.
                 * It specifies the Twitter account the request is made on behalf of.
                 * @link https://developer.twitter.com/en/docs/authentication/oauth-1-0a
                 */
                Fb::create('oauth_token', T\StringType::create())
                    ->pattern('^[\w-]+$')
                    ->build(),
                /*
                 * An oauth token secret is a user-specific credentials used to authenticate OAuth 1.0a API requests.
                 * It specifies the Twitter account the request is made on behalf of.
                 * The "oauth_token_secret" should be encrypted and never stored in plain text.
                 * @link https://developer.twitter.com/en/docs/authentication/oauth-1-0a
                 */
                Fb::create('oauth_token_secret', T\TextType::create())
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
