<?php
declare(strict_types=1);

// @link https://schemas.extratv.com/json-schema/extra/notify/node/alexa-notification/1-0-0.json#
namespace Extra\Schemas\Notify\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Pbj\WellKnown\UuidIdentifier;
use Gdbots\Schemas\Ncr\Enum\NodeStatus;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Triniti\Schemas\Notify\Enum\NotificationSendStatus;
use Triniti\Schemas\Notify\Mixin\AlexaNotification\AlexaNotificationV1Mixin as TrinitiNotifyAlexaNotificationV1Mixin;

final class AlexaNotificationV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:extra:notify:node:alexa-notification:1-0-0';
    const SCHEMA_CURIE = 'extra:notify:node:alexa-notification';
    const SCHEMA_CURIE_MAJOR = 'extra:notify:node:alexa-notification:v1';
    const MIXINS = [
      'gdbots:ncr:mixin:node:v1',
      'gdbots:ncr:mixin:node',
      'triniti:notify:mixin:notification:v1',
      'triniti:notify:mixin:notification',
      'triniti:notify:mixin:alexa-notification:v1',
      'triniti:notify:mixin:alexa-notification',
    ];

    use GdbotsNcrNodeV1Mixin;

    use TrinitiNotifyAlexaNotificationV1Mixin;

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
                 * A reference to the app this notification is being sent to.
                 */
                Fb::create('app_ref', T\NodeRefType::create())
                    ->build(),
                /*
                 * A reference to the content this notification will include.
                 */
                Fb::create('content_ref', T\NodeRefType::create())
                    ->build(),
                Fb::create('send_status', T\StringEnumType::create())
                    ->withDefault("draft")
                    ->className(NotificationSendStatus::class)
                    ->build(),
                Fb::create('send_on_publish', T\BooleanType::create())
                    ->build(),
                Fb::create('send_at', T\DateTimeType::create())
                    ->build(),
                Fb::create('sent_at', T\DateTimeType::create())
                    ->build(),
                /*
                 * The body of the notification to use (format depends on app/platform). If present
                 * this value should take precedence over the body derived from content_ref.
                 */
                Fb::create('body', T\TextType::create())
                    ->maxLength(2000)
                    ->build(),
                Fb::create('notifier_result', T\MessageType::create())
                    ->anyOfCuries([
                        'triniti:notify::notifier-result',
                    ])
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
