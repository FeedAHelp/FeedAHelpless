import { getFileAsset } from '@sanity/asset-utils'
import { config } from './sanity'

export function videoAssetFor(source: string) {
  return getFileAsset(source, config)
}
