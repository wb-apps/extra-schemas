<?php
// @link https://schemas.extratv.com/json-schema/extra/news/command/collect-article-stats/1-0-0.json#
namespace Extra\Schemas\News\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;
use Triniti\Schemas\News\Mixin\CollectArticleStats\CollectArticleStatsV1 as TrinitiNewsCollectArticleStatsV1;
use Triniti\Schemas\News\Mixin\CollectArticleStats\CollectArticleStatsV1Mixin as TrinitiNewsCollectArticleStatsV1Mixin;

final class CollectArticleStatsV1 extends AbstractMessage implements
    CollectArticleStats,
    GdbotsPbjxCommandV1,
    TrinitiNewsCollectArticleStatsV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:extra:news:command:collect-article-stats:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                TrinitiNewsCollectArticleStatsV1Mixin::create(),
            ]
        );
    }
}
