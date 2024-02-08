import { getNormalizedUrl } from '../getNormalizedUrl'
test('getNormalizedUrl protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = getNormalizedUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
  })
  
  test('getNormalizedUrl slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = getNormalizedUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
  })
  
  test('getNormalizedUrl capitals', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = getNormalizedUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
  })
  
  test('getNormalizedUrl http', () => {
    const input = 'http://BLOG.boot.dev/path'
    const actual = getNormalizedUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
  })