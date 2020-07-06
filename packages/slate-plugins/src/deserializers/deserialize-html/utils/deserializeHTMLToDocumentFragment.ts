import { SlatePlugin } from '@udecode/slate-plugins-core';
import { Descendant } from 'slate';
import { SlateDocumentFragment } from '../../../common';
import { normalizeDescendantsToDocumentFragment } from '../../../common/utils';
import { deserializeHTMLElement } from './deserializeHTMLElement';

/**
 * Deserialize HTML element to a valid document fragment.
 */
export const deserializeHTMLToDocumentFragment = (plugins: SlatePlugin[]) => (
  element: HTMLElement
): SlateDocumentFragment => {
  const fragment = deserializeHTMLElement(plugins)(element) as Descendant[];

  return normalizeDescendantsToDocumentFragment(fragment);
};